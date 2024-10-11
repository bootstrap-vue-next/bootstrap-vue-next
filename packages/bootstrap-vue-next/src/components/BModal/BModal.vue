<template>
  <ConditionalTeleport :to="props.teleportTo" :disabled="props.teleportDisabled">
    <Transition
      v-bind="{...props.transProps}"
      :appear="modelValue"
      @before-enter="onBeforeEnter"
      @after-enter="onAfterEnter"
      @leave="onLeave"
      @after-leave="onAfterLeave"
    >
      <div
        v-show="showRef"
        :id="computedId"
        ref="element"
        class="modal"
        :class="modalClasses"
        role="dialog"
        :aria-labelledby="!props.hideHeader ? `${computedId}-label` : undefined"
        :aria-describedby="`${computedId}-body`"
        tabindex="-1"
        v-bind="$attrs"
        :style="computedZIndex"
        @click.self="hideFn('backdrop')"
      >
        <div class="modal-dialog" :class="modalDialogClasses">
          <div v-if="lazyShowing" class="modal-content" :class="props.contentClass">
            <div v-if="!props.hideHeader" class="modal-header" :class="headerClasses">
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
                <template v-if="!props.hideHeaderClose">
                  <BButton
                    v-if="hasHeaderCloseSlot"
                    v-bind="headerCloseAttrs"
                    @click="hideFn('close')"
                  >
                    <slot name="header-close" />
                  </BButton>
                  <BCloseButton
                    v-else
                    :aria-label="props.headerCloseLabel"
                    v-bind="headerCloseAttrs"
                    @click="hideFn('close')"
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
            <div v-if="!props.hideFooter" class="modal-footer" :class="footerClasses">
              <slot name="footer" v-bind="sharedSlots">
                <slot name="cancel" v-bind="sharedSlots">
                  <BButton
                    v-if="!props.okOnly"
                    ref="cancelButton"
                    :disabled="disableCancel"
                    :size="props.buttonSize"
                    :variant="props.cancelVariant"
                    @click="hideFn('cancel')"
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
                    @click="hideFn('ok')"
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
    <slot v-if="!props.hideBackdrop" name="backdrop" v-bind="sharedSlots">
      <Transition :appear="modelValue" @after-enter="fadeIn" @before-leave="fadeOut">
        <div
          v-if="showRef"
          class="modal-backdrop"
          :style="computedZIndexBackdrop"
          :class="{
            fade: !props.noFade,
            show: props.noFade,
          }"
          @click="hideFn('backdrop')"
        />
      </Transition>
    </slot>
  </ConditionalTeleport>
</template>

<script setup lang="ts">
import {onKeyStroke, useEventListener, useFocus} from '@vueuse/core'
import {useActivatedFocusTrap} from '../../composables/useActivatedFocusTrap'
import {computed, type CSSProperties, nextTick, onMounted, ref, useTemplateRef, watch} from 'vue'
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
  hideBackdrop: false,
  hideFooter: false,
  hideHeader: false,
  hideHeaderClose: false,
  id: undefined,
  lazy: false,
  modalClass: undefined,
  noCloseOnBackdrop: false,
  noCloseOnEsc: false,
  noFade: false,
  noTrap: false,
  okDisabled: false,
  okOnly: false,
  okTitle: 'OK',
  okVariant: 'primary',
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

const element = useTemplateRef('element')
const fallbackFocusElement = useTemplateRef('fallbackFocusElement')
const okButton = useTemplateRef<HTMLElement | null>('okButton')
const cancelButton = useTemplateRef<HTMLElement | null>('cancelButton')
const closeButton = useTemplateRef<HTMLElement | null>('closeButton')
const isActive = ref(false)
const lazyLoadCompleted = ref(false)
const showRef = ref(modelValue.value && !props.toggle)

const fallbackClassSelector = 'modal-fallback-focus'
const {needsFallback} = useActivatedFocusTrap({
  element,
  isActive,
  noTrap: () => props.noTrap,
  fallbackFocus: {
    ref: fallbackFocusElement,
    classSelector: fallbackClassSelector,
  },
})

onKeyStroke(
  'Escape',
  () => {
    hideFn('esc')
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
    fade: !props.noFade,
    show: showRef.value,
  },
])

const lazyShowing = computed(
  () =>
    props.lazy === false ||
    (props.lazy === true && lazyLoadCompleted.value === true) ||
    (props.lazy === true && modelValue.value === true)
)

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

const buildTriggerableEvent = (
  type: string,
  opts: Readonly<Partial<BvTriggerableEvent>> = {}
): BvTriggerableEvent =>
  new BvTriggerableEvent(type, {
    cancelable: false,
    target: element.value || null,
    relatedTarget: null,
    trigger: null,
    ...opts,
    componentId: computedId.value,
  })

const fadeIn = (el: Element) => {
  if (el) {
    el.classList.add('show')
  }
}
const fadeOut = (el: Element) => {
  if (el) {
    el.classList.remove('show')
  }
}

onMounted(() => {
  if (props.toggle) {
    showFn()
  }
})
let noAction = false

watch(modelValue, () => {
  if (noAction) {
    noAction = false
    return
  }
  modelValue.value ? showFn() : hideFn()
})

const hideFn = (trigger = '') => {
  if (
    (trigger === 'backdrop' && props.noCloseOnBackdrop) ||
    (trigger === 'esc' && props.noCloseOnEsc)
  ) {
    emit('hide-prevented', buildTriggerableEvent('hide-prevented'))
    return
  }
  // inAction = true
  const event = buildTriggerableEvent('hide', {cancelable: trigger !== '', trigger})

  if (trigger === 'ok') {
    emit(trigger, event)
  }
  if (trigger === 'cancel') {
    emit(trigger, event)
  }
  if (trigger === 'close') {
    emit(trigger, event)
  }
  if (trigger === 'backdrop') {
    emit(trigger, event)
  }
  if (trigger === 'esc') {
    emit(trigger, event)
  }
  emit('hide', event)

  if (event.defaultPrevented) {
    emit('hide-prevented', buildTriggerableEvent('hide-prevented'))
    noAction = true
    nextTick(() => {
      modelValue.value = true
    })
    return
  }
  showRef.value = false
  if (modelValue.value && !props.toggle) {
    noAction = true
    modelValue.value = false
  }
}

const showFn = () => {
  const event = buildTriggerableEvent('show', {cancelable: true})
  emit('show', event)

  if (event.defaultPrevented) {
    if (modelValue.value) modelValue.value = false
    emit('show-prevented', buildTriggerableEvent('show-prevented'))
    noAction = true
    nextTick(() => {
      modelValue.value = false
    })

    return
  }
  // inAction = true
  showRef.value = true
  if (!modelValue.value) {
    noAction = true
    nextTick(() => {
      modelValue.value = true
    })
  }
}

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

const onBeforeEnter = () => {} //showFn()
const onAfterEnter = (el: Element) => {
  fadeIn(el)
  isActive.value = true
  pickFocusItem()
  emit('shown', buildTriggerableEvent('shown'))
  if (props.lazy === true) lazyLoadCompleted.value = true
}
const isLeaving = ref(false)
const onLeave = () => {
  isActive.value = false
  isLeaving.value = true
}
const onAfterLeave = (el: Element) => {
  emit('hidden', buildTriggerableEvent('hidden'))

  if (modelValue.value && props.toggle) {
    noAction = true
    nextTick(() => {
      modelValue.value = false
    })
  }
  // if (props.lazy === true) lazyLoadCompleted.value = false
  isLeaving.value = false
  fadeOut(el)
}

const {activePosition, activeModalCount, stackWithoutSelf} = useModalManager(
  showRef,
  modelValue.value
)

watch(stackWithoutSelf, (newValue, oldValue) => {
  if (newValue.length > oldValue.length && showRef.value === true && props.noStacking === true)
    hideFn()
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

useEventListener(element, 'bv-toggle', () => {
  modelValue.value ? hideFn() : showFn()
})

const sharedSlots = computed<SharedSlotsData>(() => ({
  cancel: () => {
    hideFn('cancel')
  },
  close: () => {
    hideFn('close')
  },
  hide: hideFn,
  ok: () => {
    hideFn('ok')
  },
  active: isActive.value,
  visible: showRef.value,
}))

defineExpose({
  hide: hideFn,
  id: computedId,
  show: showFn,
  toggle: () => {
    modelValue.value ? hideFn() : showFn()
  },
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
