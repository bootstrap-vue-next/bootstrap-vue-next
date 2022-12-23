<template>
  <teleport to="body" :disabled="staticBoolean">
    <b-transition
      :no-fade="true"
      :trans-props="{enterToClass: 'show'}"
      @before-enter="onBeforeEnter"
      @after-enter="onAfterEnter"
      @leave="onLeave"
      @after-leave="onAfterLeave"
    >
      <div
        v-show="modelValueBoolean"
        :id="computedId"
        ref="element"
        class="modal"
        :class="modalClasses"
        role="dialog"
        :aria-labelledby="`${computedId}-label`"
        :aria-describedby="`${computedId}-body`"
        tabindex="-1"
        v-bind="$attrs"
        @keyup.esc="hide('esc')"
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
            <div v-if="!hideHeaderBoolean" class="modal-header" :class="headerClasses">
              <slot name="header">
                <component
                  :is="titleTag"
                  :id="`${computedId}-label`"
                  class="modal-title"
                  :class="titleClasses"
                >
                  <slot name="title">
                    {{ title }}
                  </slot>
                </component>
                <template v-if="!hideHeaderCloseBoolean">
                  <button v-if="hasHeaderCloseSlot" type="button" @click="hide('close')">
                    <slot name="header-close" />
                  </button>
                  <b-close-button
                    v-else
                    :aria-label="headerCloseLabel"
                    :white="headerCloseWhite"
                    @click="hide('close')"
                  />
                </template>
              </slot>
            </div>
            <div :id="`${computedId}-body`" class="modal-body" :class="bodyClasses">
              <slot />
            </div>
            <div v-if="!hideFooterBoolean" class="modal-footer" :class="footerClasses">
              <slot name="footer">
                <slot name="cancel">
                  <b-button
                    v-if="!okOnlyBoolean"
                    type="button"
                    class="btn"
                    :disabled="disableCancel"
                    :size="buttonSize"
                    :variant="cancelVariant"
                    @click="hide('cancel')"
                  >
                    {{ cancelTitle }}
                  </b-button>
                </slot>
                <slot name="ok">
                  <b-button
                    type="button"
                    class="btn"
                    :disabled="disableOk"
                    :size="buttonSize"
                    :variant="okVariant"
                    @click="hide('ok')"
                  >
                    {{ okTitle }}
                  </b-button>
                </slot>
              </slot>
            </div>
          </div>
        </div>
        <slot v-if="!hideBackdropBoolean" name="backdrop">
          <div class="modal-backdrop fade show" @click="hide('backdrop')" />
        </slot>
      </div>
    </b-transition>
  </teleport>
</template>

<script setup lang="ts">
// import type {BModalEmits, BModalProps} from '../types/components'
import {computed, nextTick, ref, toRef, useSlots, watch} from 'vue'
import {useBooleanish, useId} from '../composables'
import type {Booleanish, ClassValue, ColorVariant, InputSize} from '../types'
import {BvModalEvent, isEmptySlot} from '../utils'
import BButton from './BButton/BButton.vue'
import BCloseButton from './BButton/BCloseButton.vue'
import BTransition from './BTransition/BTransition.vue'

// aria
// autofocus
// close on escape when autofocus

// Note, attempt to return focus to item that openned the modal after close
// Implement auto focus props like autoFocusButton

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
  static?: Booleanish
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
  static: false,
  okVariant: 'primary',
  scrollable: false,
  show: false,
  titleSrOnly: false,
  titleTag: 'h5',
})

interface BModalEmits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'show', value: BvModalEvent): void
  (e: 'shown', value: BvModalEvent): void
  (e: 'hide', value: BvModalEvent): void
  (e: 'hidden', value: BvModalEvent): void
  (e: 'hide-prevented'): void
  (e: 'show-prevented'): void
  (e: 'ok', value: BvModalEvent): void
  (e: 'cancel', value: BvModalEvent): void
  (e: 'close', value: BvModalEvent): void
}

const emit = defineEmits<BModalEmits>()

const slots = useSlots()

const computedId = useId(toRef(props, 'id'), 'modal')

const busyBoolean = useBooleanish(toRef(props, 'busy'))
const lazyBoolean = useBooleanish(toRef(props, 'lazy'))
const cancelDisabledBoolean = useBooleanish(toRef(props, 'cancelDisabled'))
const centeredBoolean = useBooleanish(toRef(props, 'centered'))
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
const titleSrOnlyBoolean = useBooleanish(toRef(props, 'titleSrOnly'))
const staticBoolean = useBooleanish(toRef(props, 'static'))

const isActive = ref(false)
const element = ref<HTMLElement | null>(null)
const lazyLoadCompleted = ref(false)

const modalClasses = computed(() => [
  props.modalClass,
  {
    fade: !noFadeBoolean.value,
    show: isActive.value,
  },
])

const hasHeaderCloseSlot = computed(() => !isEmptySlot(slots['header-close']))

const modalDialogClasses = computed(() => [
  props.dialogClass,
  {
    'modal-fullscreen': props.fullscreen === true,
    [`modal-fullscreen-${props.fullscreen}-down`]: typeof props.fullscreen === 'string',
    [`modal-${props.size}`]: props.size !== undefined,
    'modal-dialog-centered': centeredBoolean.value,
    'modal-dialog-scrollable': scrollableBoolean.value,
  },
])

const bodyClasses = computed(() => [
  props.bodyClass,
  {
    [`bg-${props.bodyBgVariant}`]: props.bodyBgVariant !== undefined,
    [`text-${props.bodyTextVariant}`]: props.bodyTextVariant !== undefined,
  },
])

const headerClasses = computed(() => [
  props.headerClass,
  {
    [`bg-${props.headerBgVariant}`]: props.headerBgVariant !== undefined,
    [`border-${props.headerBorderVariant}`]: props.headerBorderVariant !== undefined,
    [`text-${props.headerTextVariant}`]: props.headerTextVariant !== undefined,
  },
])

const footerClasses = computed(() => [
  props.footerClass,
  {
    [`bg-${props.footerBgVariant}`]: props.footerBgVariant !== undefined,
    [`border-${props.footerBorderVariant}`]: props.footerBorderVariant !== undefined,
    [`text-${props.footerTextVariant}`]: props.footerTextVariant !== undefined,
  },
])

const titleClasses = computed(() => [
  props.titleClass,
  {
    ['visually-hidden']: titleSrOnlyBoolean.value,
  },
])
const disableCancel = computed<boolean>(() => cancelDisabledBoolean.value || busyBoolean.value)
const disableOk = computed<boolean>(() => okDisabledBoolean.value || busyBoolean.value)

const buildModalEvent = (type: string, opts: Partial<BvModalEvent> = {}): BvModalEvent =>
  new BvModalEvent(type, {
    cancelable: false,
    target: element.value || null,
    relatedTarget: null,
    trigger: null,
    ...opts,
    componentId: computedId.value,
  })

const hide = (trigger = '') => {
  const event = buildModalEvent('hide', {cancelable: trigger !== '', trigger})

  if (trigger === 'ok') {
    emit(trigger, event)
  }
  if (trigger === 'cancel') {
    emit(trigger, event)
  }
  if (trigger === 'close') {
    emit(trigger, event)
  }
  emit('hide', event)

  if (
    event.defaultPrevented ||
    (trigger === 'backdrop' && noCloseOnBackdropBoolean.value) ||
    (trigger === 'esc' && noCloseOnEscBoolean.value)
  ) {
    emit('update:modelValue', true)
    emit('hide-prevented')
    return
  }
  emit('update:modelValue', false)
}

// TODO: If a show is prevented, it will briefly show the animation. This is a bug
// I'm not sure how to wait for the event to be determined. Before showing
const show = () => {
  const event = buildModalEvent('show', {cancelable: true})
  emit('show', event)
  if (event.defaultPrevented) {
    emit('update:modelValue', false)
    emit('show-prevented')
    return
  }
  emit('update:modelValue', true)
}

const onBeforeEnter = () => show()
const onAfterEnter = () => {
  isActive.value = true
  emit('shown', buildModalEvent('shown'))
  if (lazyBoolean.value === true) lazyLoadCompleted.value = true
}
const onLeave = () => {
  isActive.value = false
}
const onAfterLeave = () => {
  emit('hidden', buildModalEvent('hidden'))
  if (lazyBoolean.value === true) lazyLoadCompleted.value = false
}

watch(
  () => modelValueBoolean.value,
  (newValue) => {
    if (newValue === true && !noFocusBoolean.value) {
      nextTick(() => {
        if (element.value !== null) element.value.focus()
      })
    }
  }
)
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<style lang="scss" scoped>
.modal {
  display: block;
}
.modal-dialog {
  z-index: 1051;
}
</style>
