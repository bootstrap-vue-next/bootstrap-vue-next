<template>
  <ConditionalTeleport
    :to="props.teleportTo"
    :disabled="props.teleportDisabled || isOpenByBreakpoint"
  >
    <Transition
      v-bind="wasClosedByBreakpointChange ? {} : basicTransitionProps"
      :appear="!!modelValue"
    >
      <div
        v-show="showRef || isOpenByBreakpoint"
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
        <template v-if="contentShowing">
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
      <Transition :appear="showBackdrop" v-bind="fadeBaseTransitionProps">
        <div
          v-if="showBackdrop"
          class="offcanvas-backdrop"
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
import {breakpointsBootstrapV5, onKeyStroke, useBreakpoints, useFocus} from '@vueuse/core'
import {useActivatedFocusTrap} from '../../composables/useActivatedFocusTrap'
import {computed, type EmitFn, nextTick, ref, useTemplateRef, watch} from 'vue'
import {useDefaults} from '../../composables/useDefaults'
import {useId} from '../../composables/useId'
import type {BOffcanvasProps} from '../../types/ComponentProps'
import {BvTriggerableEvent} from '../../utils'
import BButton from '../BButton/BButton.vue'
import BCloseButton from '../BButton/BCloseButton.vue'
import ConditionalTeleport from '../ConditionalTeleport.vue'
import {useSafeScrollLock} from '../../composables/useSafeScrollLock'
import {isEmptySlot} from '../../utils/dom'
import {fadeBaseTransitionProps, useShowHide} from '../../composables/useShowHide'
import type {Placement} from '../../types/Alignment'

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

const _props = withDefaults(defineProps<Omit<BOffcanvasProps, 'modelValue'>>(), {
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
  noAnimation: false,
  noBackdrop: false,
  noCloseOnBackdrop: false,
  noCloseOnEsc: false,
  noTrap: false,
  noFocus: false,
  noHeader: false,
  noHeaderClose: false,
  unmountLazy: false,
  placement: 'start',
  shadow: false,
  teleportDisabled: false,
  teleportTo: 'body',
  title: undefined,
  show: false,
  width: undefined,
  visible: false,
})
const props = useDefaults(_props, 'BOffcanvas')

const emit = defineEmits<{
  'close': [value: BvTriggerableEvent]
  'esc': [value: BvTriggerableEvent]
  'backdrop': [value: BvTriggerableEvent]
  'hidden': [value: BvTriggerableEvent]
  'hide': [value: BvTriggerableEvent]
  'hide-prevented': [value: BvTriggerableEvent]
  'show': [value: BvTriggerableEvent]
  'show-prevented': [value: BvTriggerableEvent]
  'shown': [value: BvTriggerableEvent]
}>()

type SharedSlotsData = {
  visible: boolean
  placement: Placement
  hide: (trigger?: string) => void
}

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'backdrop'?: (props: SharedSlotsData) => any
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

const modelValue = defineModel<Exclude<BOffcanvasProps['modelValue'], undefined>>({
  default: false,
})

const computedId = useId(() => props.id, 'offcanvas')

const breakpoints = useBreakpoints(breakpointsBootstrapV5)
const greaterOrEqualToBreakpoint = breakpoints.greaterOrEqual(() => props.responsive ?? 'xs')
const smallerOrEqualToBreakpoint = breakpoints.smallerOrEqual(() => props.responsive ?? 'xs')

const isOpenByBreakpoint = computed(
  () => props.responsive !== undefined && greaterOrEqualToBreakpoint.value
)

const element = useTemplateRef<HTMLElement>('element')
const fallbackFocusElement = useTemplateRef<HTMLElement>('fallbackFocusElement')

const focus = () => {
  nextTick(() => {
    if (props.noFocus === false) {
      focused.value = true
    }
  })
}

const onAfterEnter = () => {
  requestAnimationFrame(() => {
    localShowRef.value = true
  })
  focus()
}
const onLeave = () => {
  wasClosedByBreakpointChange.value = false
  localShowRef.value = false
}

const localShowRef = ref(false)

const {showRef, hide, show, toggle, computedNoAnimation, contentShowing, basicTransitionProps} =
  useShowHide(modelValue, props, emit as EmitFn, element, computedId, {
    addShowClass: false,
    transitionProps: {
      onAfterEnter,
      onLeave,
      enterToClass: 'showing',
      leaveToClass: 'hiding show',
      enterActiveClass: '',
      leaveActiveClass: '',
      enterFromClass: '',
      leaveFromClass: '',
    },
  })

useSafeScrollLock(showRef, () => props.bodyScrolling || isOpenByBreakpoint.value)

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

const fallbackClassSelector = 'offcanvas-fallback-focus'
const {needsFallback} = useActivatedFocusTrap({
  element,
  isActive: localShowRef,
  noTrap: () => props.noTrap || isOpenByBreakpoint.value,
  fallbackFocus: {
    classSelector: fallbackClassSelector,
    ref: fallbackFocusElement,
  },
})

const wasClosedByBreakpointChange = ref(false)

const showBackdrop = computed(
  () =>
    (props.responsive === undefined || !isOpenByBreakpoint.value) &&
    props.noBackdrop === false &&
    showRef.value === true
)

const hasHeaderCloseSlot = computed(() => !isEmptySlot(slots['header-close']))
const headerCloseClasses = computed(() => [
  {'text-reset': !hasHeaderCloseSlot.value},
  props.headerCloseClass,
])
const headerCloseAttrs = computed(() => ({
  variant: hasHeaderCloseSlot.value ? props.headerCloseVariant : undefined,
  class: headerCloseClasses.value,
}))

const hasFooterSlot = computed(() => !isEmptySlot(slots.footer))
const computedClasses = computed(() => [
  props.responsive === undefined ? 'offcanvas' : `offcanvas-${props.responsive}`,
  `offcanvas-${props.placement}`,
  {
    'show': localShowRef.value,
    [`shadow-${props.shadow}`]: !!props.shadow,
    'no-transition': computedNoAnimation.value,
  },
])

const computedStyles = computed(() => ({
  width: props.width,
}))

const sharedSlots = computed<SharedSlotsData>(() => ({
  visible: showRef.value,
  placement: props.placement,
  hide,
}))

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
  toggle,
})
</script>

<style lang="scss" scoped>
.no-transition {
  transition: none !important;
}
</style>
