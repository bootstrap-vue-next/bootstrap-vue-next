<template>
  <Teleport :to="teleportTo" :disabled="teleportDisabledBoolean">
    <BTransition
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
        :aria-labelledby="!hideHeaderBoolean ? `${computedId}-label` : undefined"
        :aria-describedby="`${computedId}-body`"
        tabindex="-1"
        v-bind="$attrs"
        :style="computedZIndex"
      >
        <div class="modal-dialog" :class="modalDialogClasses">
          <div v-if="lazyShowing" class="modal-content" :class="contentClass">
            <div v-if="!hideHeaderBoolean" class="modal-header" :class="headerClasses">
              <slot name="header" v-bind="sharedSlots">
                <component
                  :is="titleTag"
                  :id="`${computedId}-label`"
                  class="modal-title"
                  :class="titleClasses"
                >
                  <slot name="title" v-bind="sharedSlots">
                    {{ title }}
                  </slot>
                </component>
                <template v-if="!hideHeaderCloseBoolean">
                  <BButton
                    v-if="hasHeaderCloseSlot"
                    v-bind="headerCloseAttrs"
                    @click="hide('close')"
                  >
                    <slot name="header-close" />
                  </BButton>
                  <BCloseButton
                    v-else
                    :aria-label="headerCloseLabel"
                    v-bind="headerCloseAttrs"
                    @click="hide('close')"
                  />
                </template>
              </slot>
            </div>
            <div :id="`${computedId}-body`" class="modal-body" :class="bodyClasses">
              <slot v-bind="sharedSlots" />
            </div>
            <div v-if="!hideFooterBoolean" class="modal-footer" :class="footerClasses">
              <slot name="footer" v-bind="sharedSlots">
                <slot name="cancel" v-bind="sharedSlots">
                  <BButton
                    v-if="!okOnlyBoolean"
                    ref="cancelButton"
                    :disabled="disableCancel"
                    :size="buttonSize"
                    :variant="cancelVariant"
                    @click="hide('cancel')"
                  >
                    {{ cancelTitle }}
                  </BButton>
                </slot>
                <slot name="ok" v-bind="sharedSlots">
                  <BButton
                    ref="okButton"
                    :disabled="disableOk"
                    :size="buttonSize"
                    :variant="okVariant"
                    @click="hide('ok')"
                  >
                    {{ okTitle }}
                  </BButton>
                </slot>
              </slot>
            </div>
          </div>
        </div>
        <slot name="backdrop">
          <BOverlay
            :variant="computedBackdropVariant"
            :show="modelValueBoolean"
            no-spinner
            fixed
            no-wrap
            :blur="null"
            @click="hide('backdrop')"
          />
        </slot>
      </div>
    </BTransition>
  </Teleport>
</template>

<script setup lang="ts">
import {
  computed,
  type CSSProperties,
  reactive,
  ref,
  type RendererElement,
  toRef,
  useSlots,
  watch,
} from 'vue'
import {
  useBooleanish,
  useColorVariantClasses,
  useId,
  useModalManager,
  useSafeScrollLock,
} from '../composables'
import {onKeyStroke, useEventListener, useFocus, useVModel} from '@vueuse/core'
import type {
  Booleanish,
  ButtonVariant,
  ClassValue,
  ColorVariant,
  Size,
  TextColorVariant,
} from '../types'
import {BvTriggerableEvent, isEmptySlot} from '../utils'
import BButton from './BButton/BButton.vue'
import BCloseButton from './BButton/BCloseButton.vue'
import BTransition from './BTransition/BTransition.vue'
import BOverlay from './BOverlay/BOverlay.vue'

defineOptions({
  inheritAttrs: false,
})

// aria
// autofocus
// close on escape when autofocus

// Note, attempt to return focus to item that openned the modal after close
// Implement auto focus props like autoFocusButton

const props = withDefaults(
  defineProps<{
    bodyVariant?: ColorVariant | null
    bodyBgVariant?: ColorVariant | null
    bodyClass?: ClassValue
    bodyTextVariant?: TextColorVariant | null
    busy?: Booleanish
    lazy?: Booleanish
    buttonSize?: Size
    cancelDisabled?: Booleanish
    cancelTitle?: string
    cancelVariant?: ButtonVariant | null
    centered?: Booleanish
    contentClass?: ClassValue
    dialogClass?: ClassValue
    footerVariant?: ColorVariant | null
    footerBgVariant?: ColorVariant | null
    footerBorderVariant?: ColorVariant | null
    footerClass?: ClassValue
    footerTextVariant?: TextColorVariant | null
    fullscreen?: boolean | string
    headerBgVariant?: ColorVariant | null
    headerBorderVariant?: ColorVariant | null
    headerClass?: ClassValue
    headerCloseClass?: ClassValue
    headerCloseLabel?: string
    headerCloseVariant?: ButtonVariant | null
    headerVariant?: ColorVariant | null
    headerTextVariant?: TextColorVariant | null
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
    autoFocus?: Booleanish
    okDisabled?: Booleanish
    okOnly?: Booleanish
    okTitle?: string
    okVariant?: ButtonVariant | null
    scrollable?: Booleanish
    size?: Size | 'xl'
    title?: string
    titleClass?: ClassValue
    titleSrOnly?: Booleanish
    titleTag?: string
    autoFocusButton?: 'ok' | 'cancel' | 'close'
    teleportDisabled?: Booleanish
    teleportTo?: string | RendererElement | null | undefined
    bodyScrolling?: Booleanish
    backdropVariant?: ColorVariant | null
  }>(),
  {
    bodyBgVariant: null,
    bodyClass: undefined,
    bodyVariant: null,
    bodyTextVariant: null,
    contentClass: undefined,
    headerVariant: null,
    headerTextVariant: null,
    dialogClass: undefined,
    headerBgVariant: null,
    headerBorderVariant: null,
    headerClass: undefined,
    headerCloseClass: undefined,
    headerCloseLabel: 'Close',
    headerCloseVariant: 'secondary',
    footerBgVariant: null,
    footerBorderVariant: null,
    footerClass: undefined,
    footerVariant: null,
    footerTextVariant: null,
    autoFocusButton: undefined,
    titleClass: undefined,
    title: undefined,
    size: 'md',
    modalClass: undefined,
    id: undefined,
    busy: false,
    lazy: false,
    buttonSize: 'md',
    cancelDisabled: false,
    cancelTitle: 'Cancel',
    cancelVariant: 'secondary',
    centered: false,
    fullscreen: false,
    hideBackdrop: false,
    hideFooter: false,
    hideHeader: false,
    hideHeaderClose: false,
    modelValue: false,
    noCloseOnBackdrop: false,
    noCloseOnEsc: false,
    noFade: false,
    autoFocus: true,
    okDisabled: false,
    okOnly: false,
    okTitle: 'Ok',
    okVariant: 'primary',
    scrollable: false,
    titleSrOnly: false,
    titleTag: 'h5',
    teleportDisabled: false,
    teleportTo: 'body',
    bodyScrolling: false,
    backdropVariant: undefined,
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'show': [value: BvTriggerableEvent]
  'shown': [value: BvTriggerableEvent]
  'hide': [value: BvTriggerableEvent]
  'hidden': [value: BvTriggerableEvent]
  'hide-prevented': []
  'show-prevented': []
  'ok': [value: BvTriggerableEvent]
  'cancel': [value: BvTriggerableEvent]
  'close': [value: BvTriggerableEvent]
}>()

type SharedSlotsData = {
  cancel: () => void
  close: () => void
  hide: (trigger?: string) => void
  ok: () => void
  visible: boolean
}

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'header'?: (props: SharedSlotsData) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'title'?: (props: SharedSlotsData) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'header-close'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'default'?: (props: SharedSlotsData) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'footer'?: (props: SharedSlotsData) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'cancel'?: (props: SharedSlotsData) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'ok'?: (props: SharedSlotsData) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'backdrop'?: (props: Record<string, never>) => any
}>()

const slots = useSlots()

const computedId = useId(() => props.id, 'modal')

const modelValue = useVModel(props, 'modelValue', emit, {passive: true})

const busyBoolean = useBooleanish(() => props.busy)
const lazyBoolean = useBooleanish(() => props.lazy)
const cancelDisabledBoolean = useBooleanish(() => props.cancelDisabled)
const centeredBoolean = useBooleanish(() => props.centered)
const hideBackdropBoolean = useBooleanish(() => props.hideBackdrop)
const hideFooterBoolean = useBooleanish(() => props.hideFooter)
const hideHeaderBoolean = useBooleanish(() => props.hideHeader)
const hideHeaderCloseBoolean = useBooleanish(() => props.hideHeaderClose)
const modelValueBoolean = useBooleanish(modelValue)
const noCloseOnBackdropBoolean = useBooleanish(() => props.noCloseOnBackdrop)
const noCloseOnEscBoolean = useBooleanish(() => props.noCloseOnEsc)
const noFadeBoolean = useBooleanish(() => props.noFade)
const autoFocusBoolean = useBooleanish(() => props.autoFocus)
const okDisabledBoolean = useBooleanish(() => props.okDisabled)
const okOnlyBoolean = useBooleanish(() => props.okOnly)
const scrollableBoolean = useBooleanish(() => props.scrollable)
const titleSrOnlyBoolean = useBooleanish(() => props.titleSrOnly)
const teleportDisabledBoolean = useBooleanish(() => props.teleportDisabled)
const bodyScrollingBoolean = useBooleanish(() => props.bodyScrolling)

const element = ref<HTMLElement | null>(null)
const okButton = ref<HTMLElement | null>(null)
const cancelButton = ref<HTMLElement | null>(null)
const closeButton = ref<HTMLElement | null>(null)
const isActive = ref(modelValueBoolean.value)
const lazyLoadCompleted = ref(false)

onKeyStroke(
  'Escape',
  () => {
    hide('esc')
  },
  {target: element}
)
useSafeScrollLock(modelValueBoolean, bodyScrollingBoolean)
const {focused: modalFocus} = useFocus(element, {
  initialValue: modelValueBoolean.value && props.autoFocusButton === undefined,
})
const {focused: okButtonFocus} = useFocus(okButton, {
  initialValue: modelValueBoolean.value && props.autoFocusButton === 'ok',
})
const {focused: cancelButtonFocus} = useFocus(cancelButton, {
  initialValue: modelValueBoolean.value && props.autoFocusButton === 'cancel',
})
const {focused: closeButtonFocus} = useFocus(closeButton, {
  initialValue: modelValueBoolean.value && props.autoFocusButton === 'close',
})

const modalClasses = computed(() => [
  props.modalClass,
  {
    fade: !noFadeBoolean.value,
    show: isActive.value,
  },
])

const lazyShowing = toRef(
  () =>
    lazyBoolean.value === false ||
    (lazyBoolean.value === true && lazyLoadCompleted.value === true) ||
    (lazyBoolean.value === true && modelValueBoolean.value === true)
)

const computedBackdropVariant = toRef(() =>
  props.backdropVariant !== undefined
    ? props.backdropVariant
    : hideBackdropBoolean.value
    ? 'transparent'
    : 'dark'
)

const hasHeaderCloseSlot = toRef(() => !isEmptySlot(slots['header-close']))

const modalDialogClasses = computed(() => [
  props.dialogClass,
  {
    'modal-fullscreen': props.fullscreen === true,
    [`modal-fullscreen-${props.fullscreen}-down`]: typeof props.fullscreen === 'string',
    [`modal-${props.size}`]: props.size !== 'md',
    'modal-dialog-centered': centeredBoolean.value,
    'modal-dialog-scrollable': scrollableBoolean.value,
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

const headerCloseClasses = toRef(() => props.headerCloseClass)

const headerCloseAttrs = computed(() => ({
  variant: hasHeaderCloseSlot.value ? props.headerCloseVariant : undefined,
  class: headerCloseClasses.value,
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
    ['visually-hidden']: titleSrOnlyBoolean.value,
  },
])
const disableCancel = toRef(() => cancelDisabledBoolean.value || busyBoolean.value)
const disableOk = toRef(() => okDisabledBoolean.value || busyBoolean.value)

const buildTriggerableEvent = (
  type: string,
  opts: Partial<BvTriggerableEvent> = {}
): BvTriggerableEvent =>
  new BvTriggerableEvent(type, {
    cancelable: false,
    target: element.value || null,
    relatedTarget: null,
    trigger: null,
    ...opts,
    componentId: computedId.value,
  })

watch(modelValueBoolean, (newValue, oldValue) => {
  if (newValue === oldValue) return
  if (newValue === true) {
    showFn()
  } else {
    hide()
  }
})

const hide = (trigger = '') => {
  if (
    (trigger === 'backdrop' && noCloseOnBackdropBoolean.value) ||
    (trigger === 'esc' && noCloseOnEscBoolean.value)
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
  if (autoFocusBoolean.value === false) return
  props.autoFocusButton === 'ok'
    ? (okButtonFocus.value = true)
    : props.autoFocusButton === 'close'
    ? (closeButtonFocus.value = true)
    : props.autoFocusButton === 'cancel'
    ? (cancelButtonFocus.value = true)
    : (modalFocus.value = true)
}

const onBeforeEnter = () => showFn()
const onAfterEnter = () => {
  isActive.value = true
  pickFocusItem()
  emit('shown', buildTriggerableEvent('shown'))
  if (lazyBoolean.value === true) lazyLoadCompleted.value = true
}
const onLeave = () => {
  isActive.value = false
}
const onAfterLeave = () => {
  emit('hidden', buildTriggerableEvent('hidden'))
  if (lazyBoolean.value === true) lazyLoadCompleted.value = false
}

const {activePosition, activeModalCount} = useModalManager(isActive, computedId)
const defaultModalDialogZIndex = 1056
const computedZIndex = computed<CSSProperties>(() => ({
  // Make sure that newly opened modals have a higher z-index than currently active ones.
  // All active modals have a z-index of ('defaultZIndex' - 'stackSize' - 'positionInStack').
  //
  // This means inactive modals will already be higher than active ones when opened.
  'z-index': isActive.value
    ? defaultModalDialogZIndex - (activeModalCount.value - activePosition.value)
    : defaultModalDialogZIndex,
}))

useEventListener(element, 'bv-toggle', () => {
  modelValueBoolean.value ? hide() : showFn()
})

const sharedSlots: SharedSlotsData = reactive({
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
  visible: modelValueBoolean,
})

defineExpose({
  hide,
  show: showFn,
  id: computedId,
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
