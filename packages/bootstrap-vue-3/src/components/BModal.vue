<template>
  <teleport to="body">
    <div :id="id" ref="element" class="modal" :class="modalClasses" tabindex="-1" v-bind="$attrs">
      <div class="modal-dialog" :class="modalDialogClasses">
        <div class="modal-content" :class="contentClass">
          <div v-if="!hideHeader" class="modal-header" :class="computedHeaderClasses">
            <component :is="titleTag" class="modal-title" :class="computedTitleClasses">
              <slot name="title">
                {{ title }}
              </slot>
            </component>
            <button
              v-if="!hideHeaderClose"
              type="button"
              class="btn-close"
              :class="computedCloseButtonClasses"
              data-bs-dismiss="modal"
              :aria-label="headerCloseLabel"
            >
              <slot name="header-close"></slot>
            </button>
          </div>
          <div class="modal-body" :class="computedBodyClasses">
            <slot />
          </div>
          <div v-if="!hideFooter" class="modal-footer" :class="computedFooterClasses">
            <slot name="footer">
              <b-button
                v-if="!okOnly"
                type="button"
                class="btn"
                data-bs-dismiss="modal"
                :disabled="disableCancel"
                :size="buttonSize"
                :variant="cancelVariant"
                @click="$emit('cancel')"
              >
                {{ cancelTitle }}
              </b-button>
              <b-button
                type="button"
                class="btn"
                data-bs-dismiss="modal"
                :disabled="disableOk"
                :size="buttonSize"
                :variant="okVariant"
                @click="$emit('ok')"
              >
                {{ okTitle }}
              </b-button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
// import type {BModalEmits, BModalProps} from '../types/components'
import Modal from 'bootstrap/js/dist/modal'
import BButton from './BButton/BButton.vue'
import useEventListener from '../composables/useEventListener'
import type {ColorVariant, InputSize} from '../types'

interface BModalProps {
  bodyBgVariant?: ColorVariant
  bodyClass?: string
  bodyTextVariant?: ColorVariant
  busy?: boolean
  buttonSize?: InputSize
  cancelDisabled?: boolean
  cancelTitle?: string
  cancelVariant?: ColorVariant
  centered?: boolean
  contentClass?: string
  dialogClass?: string
  footerBgVariant?: ColorVariant
  footerBorderVariant?: ColorVariant
  footerClass?: string
  footerTextVariant?: ColorVariant
  fullscreen?: boolean | string
  headerBgVariant?: ColorVariant
  headerBorderVariant?: ColorVariant
  headerClass?: string
  headerCloseLabel?: string
  headerCloseWhite?: boolean
  headerTextVariant?: ColorVariant
  hideBackdrop?: boolean
  hideFooter?: boolean
  hideHeader?: boolean
  hideHeaderClose?: boolean
  id?: string
  modalClass?: string
  modelValue?: boolean
  noCloseOnBackdrop?: boolean
  noCloseOnEsc?: boolean
  noFade?: boolean
  noFocus?: boolean
  okDisabled?: boolean
  okOnly?: boolean
  okTitle?: string
  okVariant?: ColorVariant
  scrollable?: boolean
  show?: boolean
  size?: string
  title?: string
  titleClass?: string
  titleSrOnly?: boolean
  titleTag?: string
}

const props = withDefaults(defineProps<BModalProps>(), {
  busy: false,
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

const slots = useSlots()

const element = ref<HTMLElement>()
const instance = ref<Modal>()
const modalClasses = computed(() => [
  {
    fade: !props.noFade,
    show: props.show,
  },
  props.modalClass,
])
const modalDialogClasses = computed(() => [
  {
    'modal-fullscreen': typeof props.fullscreen === 'boolean' ? props.fullscreen : false,
    [`modal-fullscreen-${props.fullscreen}-down`]:
      typeof props.fullscreen === 'string' ? props.fullscreen : false,
    [`modal-${props.size}`]: props.size,
    'modal-dialog-centered': props.centered,
    'modal-dialog-scrollable': props.scrollable,
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
    ['visually-hidden']: props.titleSrOnly,
  },
  props.titleClass,
])

const hasHeaderCloseSlot = computed<boolean>(() => !!slots['header-close'])
const computedCloseButtonClasses = computed(() => [
  {
    [`btn-close-content`]: hasHeaderCloseSlot.value,
    [`d-flex`]: hasHeaderCloseSlot.value,
    [`btn-close-white`]: !hasHeaderCloseSlot.value && props.headerCloseWhite,
  },
])

const disableCancel = computed<boolean>(() => props.cancelDisabled || props.busy)
const disableOk = computed<boolean>(() => props.okDisabled || props.busy)

useEventListener(element, 'shown.bs.modal', (e) => emit('shown', e))
useEventListener(element, 'hidden.bs.modal', (e) => emit('hidden', e))
useEventListener(element, 'hidePrevented.bs.modal', (e) => emit('hide-prevented', e))

useEventListener(element, 'show.bs.modal', (e) => {
  emit('show', e)
  if (!e.defaultPrevented) {
    emit('update:modelValue', true)
  }
})

useEventListener(element, 'hide.bs.modal', (e) => {
  emit('hide', e)
  if (!e.defaultPrevented) {
    emit('update:modelValue', false)
  }
})

onMounted(() => {
  instance.value = new Modal(element.value as HTMLElement, {
    backdrop: props.hideBackdrop ? false : props.noCloseOnBackdrop ? 'static' : !props.hideBackdrop,
    keyboard: !props.noCloseOnEsc,
    focus: !props.noFocus,
  })

  if (props.modelValue) {
    instance.value?.show()
  }
})

watch(
  () => props.modelValue,
  (value) => {
    if (value) {
      instance.value?.show()
    } else {
      instance.value?.hide()
    }
  }
)
</script>

<script lang="ts">
import {computed, defineComponent, onMounted, ref, useSlots, watch} from 'vue'
export default defineComponent({
  inheritAttrs: false,
})
</script>
