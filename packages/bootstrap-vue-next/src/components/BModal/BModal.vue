<template>
  <Teleport :to="props.teleportTo" :disabled="props.teleportDisabled">
    <Transition
      v-bind="{...fadeTransitionProps, ...props.transProps, enterToClass: 'show'}"
      :appear="modelValue"
      @before-enter="onBeforeEnter"
      @after-enter="onAfterEnter"
      @leave="onLeave"
      @after-leave="onAfterLeave"
    >
      <div
        v-show="modelValue"
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
        <slot v-if="!props.hideBackdrop" name="backdrop">
          <div class="modal-backdrop fade show" @click="hideFn('backdrop')" />
        </slot>
        <div
          v-if="needsFallback"
          ref="fallbackFocusElement"
          :class="fallbackClassSelector"
          tabindex="0"
          style="width: 0; height: 0; overflow: hidden"
        />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import {onKeyStroke, useEventListener, useFocus} from '@vueuse/core'
import {useActivatedFocusTrap} from '../../composables/useActivatedFocusTrap'
import {computed, type CSSProperties, ref, toRef, watch} from 'vue'
import {
  useColorVariantClasses,
  useDefaults,
  useFadeTransition,
  useId,
  useModalManager,
  useSafeScrollLock,
} from '../../composables'
import type {BModalProps} from '../../types'
import {BvTriggerableEvent, isEmptySlot} from '../../utils'
import BButton from '../BButton/BButton.vue'
import BCloseButton from '../BButton/BCloseButton.vue'

defineOptions({
  inheritAttrs: false,
})

// aria
// autofocus
// close on escape when autofocus

// Note, attempt to return focus to item that openned the modal after close
// Implement auto focus props like autoFocusButton

const _props = withDefaults(defineProps<BModalProps>(), {
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
  titleSrOnly: false,
  titleTag: 'h5',
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
  'hide-prevented': []
  'ok': [value: BvTriggerableEvent]
  'show': [value: BvTriggerableEvent]
  'show-prevented': []
  'shown': [value: BvTriggerableEvent]
}>()

type SharedSlotsData = {
  cancel: () => void
  close: () => void
  hide: (trigger?: string) => void
  ok: () => void
  visible: boolean
}

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'backdrop'?: (props: Record<string, never>) => any
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
const modelValue = defineModel<boolean>({default: false})

const element = ref<HTMLElement | null>(null)
const fallbackFocusElement = ref<HTMLElement | null>(null)
const okButton = ref<HTMLElement | null>(null)
const cancelButton = ref<HTMLElement | null>(null)
const closeButton = ref<HTMLElement | null>(null)
const isActive = ref(false)
const lazyLoadCompleted = ref(false)

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

const fadeTransitionProps = useFadeTransition(true)

onKeyStroke(
  'Escape',
  () => {
    hideFn('esc')
  },
  {target: element}
)
useSafeScrollLock(modelValue, () => props.bodyScrolling)
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
    show: isActive.value,
  },
])

const lazyShowing = toRef(
  () =>
    props.lazy === false ||
    (props.lazy === true && lazyLoadCompleted.value === true) ||
    (props.lazy === true && modelValue.value === true)
)

const hasHeaderCloseSlot = toRef(() => !isEmptySlot(slots['header-close']))

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

const resolvedBodyBgClasses = useColorVariantClasses(() => ({
  bgVariant: props.bodyBgVariant,
  textVariant: props.bodyTextVariant,
  variant: props.bodyVariant,
}))

const bodyClasses = computed(() => [props.bodyClass, resolvedBodyBgClasses.value])

const resolvedHeaderBgClasses = useColorVariantClasses(() => ({
  bgVariant: props.headerBgVariant,
  textVariant: props.headerTextVariant,
  variant: props.headerVariant,
}))

const headerClasses = computed(() => [
  props.headerClass,
  resolvedHeaderBgClasses.value,
  {
    [`border-${props.headerBorderVariant}`]: props.headerBorderVariant !== null,
  },
])

const headerCloseAttrs = computed(() => ({
  variant: hasHeaderCloseSlot.value ? props.headerCloseVariant : undefined,
  class: props.headerCloseClass,
}))

const resolvedFooterBgClasses = useColorVariantClasses(() => ({
  bgVariant: props.footerBgVariant,
  textVariant: props.footerTextVariant,
  variant: props.footerVariant,
}))

const footerClasses = computed(() => [
  props.footerClass,
  resolvedFooterBgClasses.value,
  {
    [`border-${props.footerBorderVariant}`]: props.footerBorderVariant !== null,
  },
])

const titleClasses = computed(() => [
  props.titleClass,
  {
    ['visually-hidden']: props.titleSrOnly,
  },
])
const disableCancel = toRef(() => props.cancelDisabled || props.busy)
const disableOk = toRef(() => props.okDisabled || props.busy)

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

watch(modelValue, (newValue, oldValue) => {
  if (newValue === oldValue) return
  if (newValue === true) {
    showFn()
  } else {
    hideFn()
  }
})

const hideFn = (trigger = '') => {
  if (
    (trigger === 'backdrop' && props.noCloseOnBackdrop) ||
    (trigger === 'esc' && props.noCloseOnEsc)
  ) {
    emit('hide-prevented')
    return
  }

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
    emit('hide-prevented')
    if (!modelValue.value) modelValue.value = true
    return
  }
  if (modelValue.value) modelValue.value = false
}

// TODO: If a show is prevented, it will briefly show the animation. This is a bug
// I'm not sure how to wait for the event to be determined. Before showing
const showFn = () => {
  if (isActive.value) return

  const event = buildTriggerableEvent('show', {cancelable: true})
  emit('show', event)
  if (event.defaultPrevented) {
    if (modelValue.value) modelValue.value = false
    emit('show-prevented')
    return
  }
  if (!modelValue.value) modelValue.value = true
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

const onBeforeEnter = () => {
  showFn()
}
const onAfterEnter = () => {
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
const onAfterLeave = () => {
  emit('hidden', buildTriggerableEvent('hidden'))
  if (props.lazy === true) lazyLoadCompleted.value = false
  isLeaving.value = false
}

const {activePosition, activeModalCount, stackWithoutSelf} = useModalManager(
  isActive,
  modelValue.value
)

watch(stackWithoutSelf, (newValue, oldValue) => {
  if (newValue.length > oldValue.length && isActive.value === true && props.noStacking === true)
    hideFn()
})

const defaultModalDialogZIndex = 1056
const computedZIndex = computed<CSSProperties>(() => ({
  // Make sure that newly opened modals have a higher z-index than currently active ones.
  // All active modals have a z-index of ('defaultZIndex' - 'stackSize' - 'positionInStack').
  //
  // This means inactive modals will already be higher than active ones when opened.
  'z-index':
    isActive.value || isLeaving.value
      ? // Just for reference there is a single frame in which the modal is not active but still has a higher z-index than the active ones due to _when_ it calculates its position. It's a small visual effect
        defaultModalDialogZIndex - ((activeModalCount?.value ?? 0) - (activePosition?.value ?? 0))
      : defaultModalDialogZIndex,
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
  visible: modelValue.value,
}))

defineExpose({
  hide: hideFn,
  id: computedId,
  show: showFn,
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
