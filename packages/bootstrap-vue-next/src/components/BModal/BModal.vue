<template>
  <ConditionalTeleport :to="props.teleportTo" :disabled="props.teleportDisabled">
    <Transition v-bind="fadeTransitionProps" :appear="modelValue" @after-enter="onAfterEnter">
      <div
        v-show="showRef"
        :id="computedId"
        ref="element"
        class="modal"
        :class="modalClasses"
        role="dialog"
        :aria-labelledby="!props.noHeader ? `${computedId}-label` : undefined"
        :aria-describedby="`${computedId}-body`"
        tabindex="-1"
        v-bind="$attrs"
        :style="computedZIndex"
        @click.self="hide('backdrop')"
      >
        <div class="modal-dialog" :class="modalDialogClasses">
          <div v-if="contentShowing" class="modal-content" :class="props.contentClass">
            <div v-if="!props.noHeader" class="modal-header" :class="headerClasses">
              <slot name="header" v-bind="sharedSlots">
                <component
                  :is="props.titleTag"
                  :id="`${computedId}-label`"
                  class="modal-title"
                  :class="titleClasses"
                >
                  <slot name="title" v-bind="sharedSlots">
                    {{ props.title }}
                  </slot>
                </component>
                <template v-if="!props.noHeaderClose">
                  <BButton
                    v-if="hasHeaderCloseSlot"
                    v-bind="headerCloseAttrs"
                    @click="hide('close')"
                  >
                    <slot name="header-close" />
                  </BButton>
                  <BCloseButton
                    v-else
                    :aria-label="props.headerCloseLabel"
                    v-bind="headerCloseAttrs"
                    @click="hide('close')"
                  />
                </template>
              </slot>
            </div>
            <div
              :id="`${computedId}-body`"
              class="modal-body"
              :class="bodyClasses"
              v-bind="props.bodyAttrs"
            >
              <slot v-bind="sharedSlots">
                {{ props.body }}
              </slot>
            </div>
            <div v-if="!props.noFooter" class="modal-footer" :class="footerClasses">
              <slot name="footer" v-bind="sharedSlots">
                <slot name="cancel" v-bind="sharedSlots">
                  <BButton
                    v-if="!props.okOnly"
                    ref="cancelButton"
                    :disabled="disableCancel"
                    :size="props.buttonSize"
                    :variant="props.cancelVariant"
                    @click="hide('cancel')"
                  >
                    {{ props.cancelTitle }}
                  </BButton>
                </slot>
                <slot name="ok" v-bind="sharedSlots">
                  <BButton
                    ref="okButton"
                    :disabled="disableOk"
                    :size="props.buttonSize"
                    :variant="props.okVariant"
                    @click="hide('ok')"
                  >
                    {{ props.okTitle }}
                  </BButton>
                </slot>
              </slot>
            </div>
          </div>
        </div>
        <div
          v-if="needsFallback"
          ref="fallbackFocusElement"
          :class="fallbackClassSelector"
          tabindex="0"
          style="width: 0; height: 0; overflow: hidden"
        />
      </div>
    </Transition>
    <slot v-if="!props.noBackdrop" name="backdrop" v-bind="sharedSlots">
      <Transition :appear="modelValue" v-bind="fadeBaseTransitionProps">
        <div
          v-show="showRef"
          class="modal-backdrop"
          :style="computedZIndexBackdrop"
          :class="{
            fade: !computedNoAnimation,
            show: props.visible,
          }"
          @click="hide('backdrop')"
        />
      </Transition>
    </slot>
  </ConditionalTeleport>
</template>

<script setup lang="ts">
import {onKeyStroke, useFocus} from '@vueuse/core'
import {useActivatedFocusTrap} from '../../composables/useActivatedFocusTrap'
import {computed, type CSSProperties, type EmitFn, ref, useTemplateRef, watch} from 'vue'
import type {BModalProps} from '../../types/ComponentProps'
import {BvTriggerableEvent} from '../../utils'
import BButton from '../BButton/BButton.vue'
import BCloseButton from '../BButton/BCloseButton.vue'
import {useDefaults} from '../../composables/useDefaults'
import {useId} from '../../composables/useId'
import {useSafeScrollLock} from '../../composables/useSafeScrollLock'
import {isEmptySlot} from '../../utils/dom'
import {useColorVariantClasses} from '../../composables/useColorVariantClasses'
import {useModalManager} from '../../composables/useModalManager'
import {fadeBaseTransitionProps, useShowHide} from '../../composables/useShowHide'
import ConditionalTeleport from '../ConditionalTeleport.vue'

defineOptions({
  inheritAttrs: false,
})

// aria
// autofocus
// close on escape when autofocus

// Note, attempt to return focus to item that openned the modal after close
// Implement auto focus props like autoFocusButton

const _props = withDefaults(defineProps<Omit<BModalProps, 'modelValue'>>(), {
  autofocus: true,
  autofocusButton: undefined,
  body: undefined,
  bodyBgVariant: null,
  bodyAttrs: undefined,
  bodyClass: null,
  bodyScrolling: false,
  bodyTextVariant: null,
  bodyVariant: null,
  busy: false,
  buttonSize: 'md',
  cancelDisabled: false,
  cancelTitle: 'Cancel',
  cancelVariant: 'secondary',
  centered: false,
  contentClass: undefined,
  dialogClass: undefined,
  footerBgVariant: null,
  footerBorderVariant: null,
  footerClass: undefined,
  footerTextVariant: null,
  footerVariant: null,
  fullscreen: false,
  headerBgVariant: null,
  headerBorderVariant: null,
  headerClass: undefined,
  headerCloseClass: undefined,
  headerCloseLabel: 'Close',
  headerCloseVariant: 'secondary',
  headerTextVariant: null,
  headerVariant: null,
  noFooter: false,
  noHeader: false,
  noHeaderClose: false,
  id: undefined,
  lazy: false,
  modalClass: undefined,
  noBackdrop: false,
  noCloseOnBackdrop: false,
  noCloseOnEsc: false,
  noFade: false,
  noTrap: false,
  okDisabled: false,
  okOnly: false,
  okTitle: 'OK',
  okVariant: 'primary',
  unmountLazy: false,
  scrollable: false,
  size: 'md',
  teleportDisabled: false,
  teleportTo: 'body',
  title: undefined,
  titleClass: undefined,
  titleVisuallyHidden: false,
  titleTag: 'h5',
  toggle: false,
  transProps: undefined,
  visible: false,
})
const props = useDefaults(_props, 'BModal')

const emit = defineEmits<{
  'backdrop': [value: BvTriggerableEvent]
  'cancel': [value: BvTriggerableEvent]
  'close': [value: BvTriggerableEvent]
  'esc': [value: BvTriggerableEvent]
  'hidden': [value: BvTriggerableEvent]
  'hide': [value: BvTriggerableEvent]
  'hide-prevented': [value: BvTriggerableEvent]
  'ok': [value: BvTriggerableEvent]
  'show': [value: BvTriggerableEvent]
  'show-prevented': [value: BvTriggerableEvent]
  'shown': [value: BvTriggerableEvent]
}>()

type SharedSlotsData = {
  cancel: () => void
  close: () => void
  hide: (trigger?: string) => void
  ok: () => void
  active: boolean
  visible: boolean
}

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'backdrop'?: (props: SharedSlotsData) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'cancel'?: (props: SharedSlotsData) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'default'?: (props: SharedSlotsData) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'footer'?: (props: SharedSlotsData) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'header'?: (props: SharedSlotsData) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'header-close'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'ok'?: (props: SharedSlotsData) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'title'?: (props: SharedSlotsData) => any
}>()

const computedId = useId(() => props.id, 'modal')
// Note: passive: true will sync an internal ref... This is required for useModalManager to exit,
// Since the modelValue that's passed from that composable is not reactive, this internal ref _is_ and thus it will trigger closing the modal
const modelValue = defineModel<Exclude<BModalProps['modelValue'], undefined>>({default: false})

const element = useTemplateRef<HTMLElement>('element')
const fallbackFocusElement = useTemplateRef<HTMLElement>('fallbackFocusElement')
const okButton = useTemplateRef<HTMLElement>('okButton')
const cancelButton = useTemplateRef<HTMLElement>('cancelButton')
const closeButton = useTemplateRef<HTMLElement>('closeButton')

const pickFocusItem = () => {
  if (props.autofocus === false) return
  props.autofocusButton === 'ok'
    ? (okButtonFocus.value = true)
    : props.autofocusButton === 'close'
      ? (closeButtonFocus.value = true)
      : props.autofocusButton === 'cancel'
        ? (cancelButtonFocus.value = true)
        : (modalFocus.value = true)
}

const onAfterEnter = () => {
  pickFocusItem()
}

const {
  showRef,
  hide,
  show,
  toggle,
  computedNoAnimation,
  fadeTransitionProps,
  isLeaving,
  isVisible,
  contentShowing,
} = useShowHide(modelValue, props, emit as EmitFn, element, computedId, {
  transitionProps: {
    onAfterEnter,
  },
})

const fallbackClassSelector = 'modal-fallback-focus'
const {needsFallback} = useActivatedFocusTrap({
  element,
  isActive: showRef,
  noTrap: () => props.noTrap,
  fallbackFocus: {
    ref: fallbackFocusElement,
    classSelector: fallbackClassSelector,
  },
})

onKeyStroke(
  'Escape',
  () => {
    hide('esc')
  },
  {target: element}
)
useSafeScrollLock(showRef, () => props.bodyScrolling)
const {focused: modalFocus} = useFocus(element, {
  initialValue: modelValue.value && props.autofocusButton === undefined && props.autofocus === true,
})
const {focused: okButtonFocus} = useFocus(okButton, {
  initialValue: modelValue.value && props.autofocusButton === 'ok' && props.autofocus === true,
})
const {focused: cancelButtonFocus} = useFocus(cancelButton, {
  initialValue: modelValue.value && props.autofocusButton === 'cancel' && props.autofocus === true,
})
const {focused: closeButtonFocus} = useFocus(closeButton, {
  initialValue: modelValue.value && props.autofocusButton === 'close' && props.autofocus === true,
})

const modalClasses = computed(() => [
  props.modalClass,
  {
    fade: !computedNoAnimation.value,
    show: isVisible.value,
  },
])

const hasHeaderCloseSlot = computed(() => !isEmptySlot(slots['header-close']))

const modalDialogClasses = computed(() => [
  props.dialogClass,
  {
    'modal-fullscreen': props.fullscreen === true,
    [`modal-fullscreen-${props.fullscreen}-down`]: typeof props.fullscreen === 'string',
    [`modal-${props.size}`]: props.size !== 'md',
    'modal-dialog-centered': props.centered,
    'modal-dialog-scrollable': props.scrollable,
  },
])

const bodyColorClasses = useColorVariantClasses(() => ({
  bgVariant: props.bodyBgVariant,
  textVariant: props.bodyTextVariant,
  variant: props.bodyVariant,
}))
const bodyClasses = computed(() => [props.bodyClass, bodyColorClasses.value])

const headerColorClasses = useColorVariantClasses(() => ({
  bgVariant: props.headerBgVariant,
  textVariant: props.headerTextVariant,
  variant: props.headerVariant,
  borderVariant: props.headerBorderVariant,
}))
const headerClasses = computed(() => [props.headerClass, headerColorClasses.value])

const headerCloseAttrs = computed(() => ({
  variant: hasHeaderCloseSlot.value ? props.headerCloseVariant : undefined,
  class: props.headerCloseClass,
}))

const footerColorClasses = useColorVariantClasses(() => ({
  bgVariant: props.footerBgVariant,
  textVariant: props.footerTextVariant,
  variant: props.footerVariant,
  borderVariant: props.footerBorderVariant,
}))
const footerClasses = computed(() => [props.footerClass, footerColorClasses.value])

const titleClasses = computed(() => [
  props.titleClass,
  {
    ['visually-hidden']: props.titleVisuallyHidden,
  },
])
const disableCancel = computed(() => props.cancelDisabled || props.busy)
const disableOk = computed(() => props.okDisabled || props.busy)

const {activePosition, activeModalCount, stackWithoutSelf} = useModalManager(
  showRef,
  modelValue.value
)

watch(stackWithoutSelf, (newValue, oldValue) => {
  if (newValue.length > oldValue.length && showRef.value === true && props.noStacking === true)
    hide()
})

const defaultModalDialogZIndex = 1056
const computedZIndexNumber = computed<number>(() =>
  // Make sure that newly opened modals have a higher z-index than currently active ones.
  // All active modals have a z-index of ('defaultZIndex' - 'stackSize' - 'positionInStack').
  //
  // This means inactive modals will already be higher than active ones when opened.

  showRef.value || isLeaving.value
    ? // Just for reference there is a single frame in which the modal is not active but still has a higher z-index than the active ones due to _when_ it calculates its position. It's a small visual effect
      defaultModalDialogZIndex -
      ((activeModalCount?.value ?? 0) * 2 - (activePosition?.value ?? 0) * 2)
    : defaultModalDialogZIndex
)
const computedZIndex = computed<CSSProperties>(() => ({
  'z-index': computedZIndexNumber.value,
}))
const computedZIndexBackdrop = computed<CSSProperties>(() => ({
  'z-index': computedZIndexNumber.value - 1,
}))

const sharedSlots = computed<SharedSlotsData>(() => ({
  cancel: () => {
    hide('cancel')
  },
  close: () => {
    hide('close')
  },
  hide,
  ok: () => {
    hide('ok')
  },
  active: showRef.value,
  visible: showRef.value,
}))

defineExpose({
  hide,
  id: computedId,
  show,
  toggle,
})
</script>

<style lang="scss" scoped>
.modal {
  display: block;
}

.modal-dialog {
  z-index: 1051;
}
</style>
