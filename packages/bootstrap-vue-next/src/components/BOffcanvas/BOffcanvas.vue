<template>
  <Teleport :to="props.teleportTo" :disabled="props.teleportDisabled || isOpenByBreakpoint">
    <Transition
      v-bind="transitionProps"
      @before-enter="OnBeforeEnter"
      @after-enter="OnAfterEnter"
      @leave="onLeave"
      @after-leave="OnAfterLeave"
    >
      <div
        v-show="modelValue || isOpenByBreakpoint"
        :id="computedId"
        ref="element"
        aria-modal="true"
        role="dialog"
        :class="computedClasses"
        :style="computedStyles"
        tabindex="-1"
        :aria-labelledby="`${computedId}-offcanvas-label`"
        data-bs-backdrop="false"
        v-bind="$attrs"
      >
        <div
          v-if="needsFallback"
          ref="fallbackFocusElement"
          :class="fallbackClassSelector"
          tabindex="0"
          style="width: 0; height: 0; overflow: hidden"
        />
        <template v-if="lazyShowing">
          <div v-if="!props.noHeader" class="offcanvas-header" :class="props.headerClass">
            <slot name="header" v-bind="sharedSlots">
              <h5 :id="`${computedId}-offcanvas-label`" class="offcanvas-title">
                <slot name="title" v-bind="sharedSlots">
                  {{ props.title }}
                </slot>
              </h5>
              <template v-if="!props.noHeaderClose">
                <BButton v-if="hasHeaderCloseSlot" v-bind="headerCloseAttrs" @click="hide('close')">
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
          <div class="offcanvas-body" :class="props.bodyClass" v-bind="props.bodyAttrs">
            <slot v-bind="sharedSlots" />
          </div>
          <div v-if="hasFooterSlot" :class="props.footerClass">
            <slot name="footer" v-bind="sharedSlots" />
          </div>
        </template>
      </div>
    </Transition>
    <slot v-if="showBackdrop" name="backdrop">
      <div class="offcanvas-backdrop fade show" @click="hide('backdrop')" />
    </slot>
  </Teleport>
</template>

<script setup lang="ts">
import {
  breakpointsBootstrapV5,
  onKeyStroke,
  useBreakpoints,
  useEventListener,
  useFocus,
} from '@vueuse/core'
import {useActivatedFocusTrap} from '../../composables/useActivatedFocusTrap'
import {computed, nextTick, ref, toRef, watch} from 'vue'
import {useDefaults, useId, useSafeScrollLock} from '../../composables'
import type {BOffcanvasProps} from '../../types'
import {BvTriggerableEvent, isEmptySlot} from '../../utils'
import BButton from '../BButton/BButton.vue'
import BCloseButton from '../BButton/BCloseButton.vue'

// TODO once the responsive stuff may be implemented correctly,
// What needs to occur is a fixing of the "body scrolling".
// If the offcanvas is on the screen on a large screen, body scrolling is not disabled
// Even though the modelValue is true
// When it's a small screen and close, it works, as normal,
// But then when it opens up on a small screen, it must disable again
// This is implemented on Layout.vue, but is not officially supported.

defineOptions({
  inheritAttrs: false,
})

const _props = withDefaults(defineProps<BOffcanvasProps>(), {
  hideBackdrop: false,
  bodyAttrs: undefined,
  bodyClass: undefined,
  bodyScrolling: false,
  footerClass: undefined,
  headerClass: undefined,
  headerCloseClass: undefined,
  headerCloseLabel: 'Close',
  headerCloseVariant: 'secondary',
  id: undefined,
  lazy: false,
  noCloseOnBackdrop: false,
  noCloseOnEsc: false,
  noTrap: false,
  noFocus: false,
  noHeader: false,
  noHeaderClose: false,
  placement: 'start',
  shadow: false,
  teleportDisabled: false,
  teleportTo: 'body',
  title: undefined,
  width: undefined,
})
const props = useDefaults(_props, 'BOffcanvas')

const emit = defineEmits<{
  'close': [value: BvTriggerableEvent]
  'esc': [value: BvTriggerableEvent]
  'hidden': [value: BvTriggerableEvent]
  'hide': [value: BvTriggerableEvent]
  'hide-prevented': []
  'show': [value: BvTriggerableEvent]
  'show-prevented': []
  'shown': [value: BvTriggerableEvent]
}>()

type SharedSlotsData = {
  visible: boolean
  placement: 'top' | 'bottom' | 'start' | 'end'
  hide: (trigger?: string) => void
}

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'backdrop'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'default'?: (props: SharedSlotsData) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'footer'?: (props: SharedSlotsData) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'header'?: (props: SharedSlotsData) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'header-close'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'title'?: (props: SharedSlotsData) => any
}>()

const modelValue = defineModel<boolean>({
  default: false,
})

const computedId = useId(() => props.id, 'offcanvas')

const breakpoints = useBreakpoints(breakpointsBootstrapV5)
const greaterOrEqualToBreakpoint = breakpoints.greaterOrEqual(() => props.responsive ?? 'xs')
const smallerOrEqualToBreakpoint = breakpoints.smallerOrEqual(() => props.responsive ?? 'xs')

const isOpenByBreakpoint = computed(
  () => props.responsive !== undefined && greaterOrEqualToBreakpoint.value
)
useSafeScrollLock(modelValue, () => props.bodyScrolling || isOpenByBreakpoint.value)

const element = ref<HTMLElement | null>(null)
const fallbackFocusElement = ref<HTMLElement | null>(null)

onKeyStroke(
  'Escape',
  () => {
    hide('esc')
  },
  {target: element}
)

const {focused} = useFocus(element, {
  initialValue: modelValue.value && props.noFocus === false,
})

const isActive = ref(modelValue.value)

const fallbackClassSelector = 'offcanvas-fallback-focus'
const {needsFallback} = useActivatedFocusTrap({
  element,
  isActive,
  noTrap: () => props.noTrap || isOpenByBreakpoint.value,
  fallbackFocus: {
    classSelector: fallbackClassSelector,
    ref: fallbackFocusElement,
  },
})

const lazyLoadCompleted = ref(false)
const wasClosedByBreakpointChange = ref(false)

const showBackdrop = computed(
  () =>
    (props.responsive === undefined || !isOpenByBreakpoint.value) &&
    props.hideBackdrop === false &&
    modelValue.value === true
)

const lazyShowing = computed(
  () =>
    props.lazy === false ||
    (props.lazy === true && lazyLoadCompleted.value === true) ||
    (props.lazy === true && modelValue.value === true)
)

const hasHeaderCloseSlot = toRef(() => !isEmptySlot(slots['header-close']))
const headerCloseClasses = computed(() => [
  {'text-reset': !hasHeaderCloseSlot.value},
  props.headerCloseClass,
])
const headerCloseAttrs = computed(() => ({
  variant: hasHeaderCloseSlot.value ? props.headerCloseVariant : undefined,
  class: headerCloseClasses.value,
}))
const transitionProps = computed(() =>
  wasClosedByBreakpointChange.value === true
    ? null
    : {
        enterToClass: 'showing',
        enterFromClass: '',
        leaveToClass: 'hiding show',
        leaveFromClass: 'show',
      }
)

const hasFooterSlot = toRef(() => !isEmptySlot(slots.footer))
const computedClasses = computed(() => [
  props.responsive === undefined ? 'offcanvas' : `offcanvas-${props.responsive}`,
  `offcanvas-${props.placement}`,
  {
    show: modelValue.value && isActive.value === true,
    [`shadow-${props.shadow}`]: !!props.shadow,
  },
])

const computedStyles = computed(() => ({
  width: props.width,
}))

const sharedSlots = computed<SharedSlotsData>(() => ({
  visible: modelValue.value,
  placement: props.placement,
  hide,
}))

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

const hide = (trigger = '') => {
  if (
    (trigger === 'backdrop' && props.noCloseOnBackdrop) ||
    (trigger === 'esc' && props.noCloseOnEsc)
  ) {
    emit('hide-prevented')
    return
  }

  const event = buildTriggerableEvent('hide', {cancelable: trigger !== '', trigger})

  if (trigger === 'close') {
    emit(trigger, event)
  }
  if (trigger === 'esc') {
    emit(trigger, event)
  }
  emit('hide', event)

  if (event.defaultPrevented) {
    emit('hide-prevented')
    return
  }

  modelValue.value = false
}

const show = () => {
  const event = buildTriggerableEvent('show', {cancelable: true})
  emit('show', event)
  if (event.defaultPrevented) {
    modelValue.value = false
    emit('show-prevented')
    return
  }
  modelValue.value = true
}

const focus = () => {
  nextTick(() => {
    if (props.noFocus === false) {
      focused.value = true
    }
  })
}

const OnBeforeEnter = () => show()
const OnAfterEnter = () => {
  isActive.value = true
  focus()
  emit('shown', buildTriggerableEvent('shown'))
  if (props.lazy === true) lazyLoadCompleted.value = true
}
const onLeave = () => {
  wasClosedByBreakpointChange.value = false
  isActive.value = false
}
const OnAfterLeave = () => {
  emit('hidden', buildTriggerableEvent('hidden'))
  if (props.lazy === true) lazyLoadCompleted.value = false
}
useEventListener(element, 'bv-toggle', () => {
  modelValue.value ? hide() : show()
})

watch(greaterOrEqualToBreakpoint, (newValue) => {
  if (props.responsive === undefined) return
  modelValue.value = newValue
})
watch(smallerOrEqualToBreakpoint, (newValue) => {
  if (props.responsive === undefined && newValue === true) return
  wasClosedByBreakpointChange.value = true
})

defineExpose({
  hide,
  show,
})
</script>
