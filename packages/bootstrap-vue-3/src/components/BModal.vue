<template>
  <teleport to="body">
    <div
      :id="computedId"
      ref="element"
      class="modal"
      :class="modalClasses"
      tabindex="-1"
      v-bind="$attrs"
    >
      <div class="modal-dialog" :class="modalDialogClasses">
        <div
          v-if="
            !lazyBoolean ||
            (lazyBoolean && lazyLoadCompleted) ||
            (lazyBoolean && modelValueBoolean === true)
          "
          class="modal-content"
          :class="contentClass"
        >
          <div v-if="!hideHeaderBoolean" class="modal-header" :class="computedHeaderClasses">
            <slot name="header">
              <component :is="titleTag" class="modal-title" :class="computedTitleClasses">
                <slot name="title">
                  {{ title }}
                </slot>
              </component>
              <template v-if="!hideHeaderCloseBoolean">
                <button
                  v-if="$slots['header-close']"
                  type="button"
                  data-bs-dismiss="modal"
                  @click="hide()"
                >
                  <slot name="header-close" />
                </button>
                <b-close-button
                  v-else
                  type="button"
                  :aria-label="headerCloseLabel"
                  data-bs-dismiss="modal"
                  :white="headerCloseWhiteBoolean"
                  @click="hide()"
                />
              </template>
            </slot>
          </div>
          <div class="modal-body" :class="computedBodyClasses">
            <slot />
          </div>
          <div v-if="!hideFooterBoolean" class="modal-footer" :class="computedFooterClasses">
            <slot name="footer">
              <b-button
                v-if="!okOnlyBoolean"
                type="button"
                class="btn"
                :disabled="disableCancel"
                :size="buttonSize"
                :variant="cancelVariant"
                @click="hide(), emit('cancel')"
              >
                {{ cancelTitle }}
              </b-button>
              <b-button
                type="button"
                class="btn"
                :disabled="disableOk"
                :size="buttonSize"
                :variant="okVariant"
                @click="hide(), emit('ok')"
              >
                {{ okTitle }}
              </b-button>
            </slot>
          </div>
        </div>
      </div>
      <div
        v-if="hideBackdropBoolean === false"
        class="modal-backdrop fade show"
        @click.prevent="noCloseOnBackdropBoolean === false && hide()"
      />
    </div>
  </teleport>
</template>

<script setup lang="ts">
// import type {BModalEmits, BModalProps} from '../types/components'
import {Modal} from 'bootstrap'
import {computed, nextTick, onBeforeUnmount, onMounted, ref, toRef, watch} from 'vue'
import {useBooleanish, useEventListener, useId} from '../composables'
import type {Booleanish, ClassValue, ColorVariant, InputSize} from '../types'
import BButton from './BButton/BButton.vue'
import BCloseButton from './BButton/BCloseButton.vue'

interface BModalProps {
  bodyBgVariant?: ColorVariant
  bodyClass?: ClassValue
  bodyTextVariant?: ColorVariant
  busy?: Booleanish
  lazy?: Booleanish
  buttonSize?: InputSize
  cancelDisabled?: Booleanish
  cancelTitle?: string
  cancelVariant?: ColorVariant
  centered?: Booleanish
  contentClass?: ClassValue
  dialogClass?: ClassValue
  footerBgVariant?: ColorVariant
  footerBorderVariant?: ColorVariant
  footerClass?: ClassValue
  footerTextVariant?: ColorVariant
  fullscreen?: boolean | string
  headerBgVariant?: ColorVariant
  headerBorderVariant?: ColorVariant
  headerClass?: ClassValue
  headerCloseLabel?: string
  headerCloseWhite?: Booleanish
  headerTextVariant?: ColorVariant
  hideBackdrop?: Booleanish
  hideFooter?: Booleanish
  hideHeader?: Booleanish
  hideHeaderClose?: Booleanish
  id?: string
  modalClass?: ClassValue
  modelValue?: Booleanish
  noCloseOnBackdrop?: Booleanish
  noCloseOnEsc?: Booleanish
  noFade?: Booleanish
  noFocus?: Booleanish
  okDisabled?: Booleanish
  okOnly?: Booleanish
  okTitle?: string
  okVariant?: ColorVariant
  scrollable?: Booleanish
  show?: Booleanish
  size?: 'sm' | 'lg' | 'xl'
  title?: string
  titleClass?: string
  titleSrOnly?: Booleanish
  titleTag?: string
}

const props = withDefaults(defineProps<BModalProps>(), {
  busy: false,
  lazy: false,
  buttonSize: 'md',
  cancelDisabled: false,
  cancelTitle: 'Cancel',
  cancelVariant: 'secondary',
  centered: false,
  fullscreen: false,
  headerCloseLabel: 'Close',
  headerCloseWhite: false,
  hideBackdrop: false,
  hideFooter: false,
  hideHeader: false,
  hideHeaderClose: false,
  modelValue: false,
  noCloseOnBackdrop: false,
  noCloseOnEsc: false,
  noFade: false,
  noFocus: false,
  okDisabled: false,
  okOnly: false,
  okTitle: 'Ok',
  okVariant: 'primary',
  scrollable: false,
  show: false,
  titleSrOnly: false,
  titleTag: 'h5',
})

const busyBoolean = useBooleanish(toRef(props, 'busy'))
const lazyBoolean = useBooleanish(toRef(props, 'lazy'))
const cancelDisabledBoolean = useBooleanish(toRef(props, 'cancelDisabled'))
const centeredBoolean = useBooleanish(toRef(props, 'centered'))
const headerCloseWhiteBoolean = useBooleanish(toRef(props, 'headerCloseWhite'))
const hideBackdropBoolean = useBooleanish(toRef(props, 'hideBackdrop'))
const hideFooterBoolean = useBooleanish(toRef(props, 'hideFooter'))
const hideHeaderBoolean = useBooleanish(toRef(props, 'hideHeader'))
const hideHeaderCloseBoolean = useBooleanish(toRef(props, 'hideHeaderClose'))
const modelValueBoolean = useBooleanish(toRef(props, 'modelValue'))
const noCloseOnBackdropBoolean = useBooleanish(toRef(props, 'noCloseOnBackdrop'))
const noCloseOnEscBoolean = useBooleanish(toRef(props, 'noCloseOnEsc'))
const noFadeBoolean = useBooleanish(toRef(props, 'noFade'))
const noFocusBoolean = useBooleanish(toRef(props, 'noFocus'))
const okDisabledBoolean = useBooleanish(toRef(props, 'okDisabled'))
const okOnlyBoolean = useBooleanish(toRef(props, 'okOnly'))
const scrollableBoolean = useBooleanish(toRef(props, 'scrollable'))
const showBoolean = useBooleanish(toRef(props, 'show'))
const titleSrOnlyBoolean = useBooleanish(toRef(props, 'titleSrOnly'))

const lazyLoadCompleted = ref(false)

const computedId = useId(toRef(props, 'id'), 'modal')

interface BModalEmits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'show', value: Event): void
  (e: 'shown', value: Event): void
  (e: 'hide', value: Event): void
  (e: 'hidden', value: Event): void
  (e: 'hide-prevented', value: Event): void
  (e: 'ok'): void
  (e: 'cancel'): void
}

const emit = defineEmits<BModalEmits>()

const element = ref<HTMLElement>()
const instance = ref<Modal>()
const modalClasses = computed(() => [
  {
    fade: !noFadeBoolean.value,
    show: showBoolean.value,
  },
  props.modalClass,
])
const modalDialogClasses = computed(() => [
  {
    'modal-fullscreen': props.fullscreen === true,
    [`modal-fullscreen-${props.fullscreen}-down`]: typeof props.fullscreen === 'string',
    [`modal-${props.size}`]: props.size !== undefined,
    'modal-dialog-centered': centeredBoolean.value,
    'modal-dialog-scrollable': scrollableBoolean.value,
  },
  props.dialogClass,
])

const computedBodyClasses = computed(() => [
  {
    [`bg-${props.bodyBgVariant}`]: props.bodyBgVariant,
    [`text-${props.bodyTextVariant}`]: props.bodyTextVariant,
  },
  props.bodyClass,
])

const computedHeaderClasses = computed(() => [
  {
    [`bg-${props.headerBgVariant}`]: props.headerBgVariant,
    [`border-${props.headerBorderVariant}`]: props.headerBorderVariant,
    [`text-${props.headerTextVariant}`]: props.headerTextVariant,
  },
  props.headerClass,
])

const computedFooterClasses = computed(() => [
  {
    [`bg-${props.footerBgVariant}`]: props.footerBgVariant,
    [`border-${props.footerBorderVariant}`]: props.footerBorderVariant,
    [`text-${props.footerTextVariant}`]: props.footerTextVariant,
  },
  props.footerClass,
])

const computedTitleClasses = computed(() => [
  {
    ['visually-hidden']: titleSrOnlyBoolean.value,
  },
  props.titleClass,
])

const disableCancel = computed<boolean>(() => cancelDisabledBoolean.value || busyBoolean.value)
const disableOk = computed<boolean>(() => okDisabledBoolean.value || busyBoolean.value)

useEventListener(element, 'shown.bs.modal', (e) => modalShowed(e))
useEventListener(element, 'hidden.bs.modal', (e) => modalHided(e))
useEventListener(element, 'show.bs.modal', (e) => modalShow(e))
useEventListener(element, 'hide.bs.modal', (e) => modalHide(e))

const modalShowed = (e: Event) => {
  emit('shown', e)

  if (lazyBoolean.value === true) lazyLoadCompleted.value = true
  if (modelValueBoolean.value === false) emit('update:modelValue', true)
  ;(e.target as HTMLElement).focus()
}

const modalHided = (e: Event) => {
  emit('hidden', e)

  if (lazyBoolean.value === true) lazyLoadCompleted.value = false
  if (modelValueBoolean.value === true) emit('update:modelValue', false)

  const parentModal = document.querySelector('.modal')
  if (parentModal) {
    ;(parentModal as HTMLElement).focus()
  }
}

const modalShow = (e: Event) => {
  emit('show', e)
}

const modalHide = (e: Event) => {
  emit('hide', e)
}

const show = () => {
  if (modelValueBoolean.value) emit('update:modelValue', true)
  getInstance().show()
}

const hide = () => {
  if (modelValueBoolean.value) emit('update:modelValue', false)
  getInstance().hide()
}

const getInstance = (): Modal => {
  if (instance.value !== undefined) return instance.value
  instance.value = new Modal(element.value as HTMLElement, {
    backdrop: false,
    // backdrop: hideBackdropBoolean.value
    //   ? false
    //   : noCloseOnBackdropBoolean.value
    //     ? 'static'
    //     : !hideBackdropBoolean.value,
    keyboard: !noCloseOnEscBoolean.value,
    focus: !noFocusBoolean.value,
  })
  return instance.value
}

onMounted(() => {
  if (modelValueBoolean.value) {
    getInstance().show()
  }
})

onBeforeUnmount((): void => {
  instance.value?.dispose()
  instance.value = undefined
})

watch(
  () => props.noCloseOnBackdrop,
  (newValue) => {
    ;(getInstance() as unknown as {_config: Modal.Options})._config.backdrop = props.hideBackdrop
      ? false
      : newValue
      ? 'static'
      : !props.hideBackdrop
  }
)

watch(
  () => props.noCloseOnEsc,
  (newValue) => {
    ;(getInstance() as unknown as {_config: Modal.Options})._config.keyboard = !newValue
  }
)

watch(
  () => modelValueBoolean.value,
  (value) => {
    nextTick(() => {
      if (value) {
        show()
      } else {
        hide()
      }
    })
  }
)
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<style lang="scss" scoped>
.modal-dialog {
  z-index: 1051;
}
</style>
