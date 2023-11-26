<template>
  <Teleport :to="teleportTo" :disabled="teleportDisabledBoolean || responsive !== undefined">
    <div
      :id="computedId"
      ref="element"
      aria-modal="true"
      role="dialog"
      :class="computedClasses"
      tabindex="-1"
      :aria-labelledby="`${computedId}-offcanvas-label`"
      v-bind="$attrs"
    >
      <div v-if="!noHeaderBoolean" class="offcanvas-header" :class="headerClass">
        <slot name="header" :visible="isActive" :placement="placement" :hide="hide">
          <h5 :id="`${computedId}-offcanvas-label`" class="offcanvas-title">
            <slot name="title" :visible="isActive" :placement="placement" :hide="hide">
              {{ title }}
            </slot>
          </h5>
          <template v-if="!noHeaderCloseBoolean">
            <BButton v-if="hasHeaderCloseSlot" v-bind="headerCloseAttrs" @click="hide('close')">
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
      <div class="offcanvas-body" :class="bodyClass">
        <slot :visible="isActive" :placement="placement" :hide="hide" />
      </div>
      <div v-if="hasFooterSlot" :class="footerClass">
        <slot name="footer" :visible="isActive" :placement="placement" :hide="hide" />
      </div>
    </div>
    <slot name="backdrop">
      <BOverlay
        :variant="backdropVariant"
        :show="showBackdrop"
        fixed
        no-wrap
        no-spinner
        @click="hide('backdrop')"
      />
    </slot>
  </Teleport>
</template>

<script setup lang="ts">
import {computed, onMounted, ref, type RendererElement, toRef, watch} from 'vue'
import {
  breakpointsBootstrapV5,
  onKeyStroke,
  useBreakpoints,
  useEventListener,
  useFocus,
  useVModel,
} from '@vueuse/core'
import {useBooleanish, useId, useManualTransition, useSafeScrollLock} from '../../composables'
import type {Booleanish, Breakpoint, ButtonVariant, ClassValue, ColorVariant} from '../../types'
import {BvTriggerableEvent, isEmptySlot} from '../../utils'
import BOverlay from '../BOverlay/BOverlay.vue'
import BCloseButton from '../BButton/BCloseButton.vue'
import BButton from '../BButton/BButton.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    backdrop?: Booleanish
    backdropVariant?: ColorVariant | null
    bodyClass?: string
    bodyScrolling?: Booleanish
    footerClass?: string
    headerClass?: string
    headerCloseClass?: ClassValue
    headerCloseLabel?: string
    headerCloseVariant?: ButtonVariant | null
    id?: string
    modelValue?: Booleanish
    noCloseOnBackdrop?: Booleanish
    noCloseOnEsc?: Booleanish
    noFocus?: Booleanish
    noHeader?: Booleanish
    noHeaderClose?: Booleanish
    // TODO standardize this. Create a dedicated type
    // Then in components that use individual props (BImg)
    // Make them just use prop placement
    placement?: 'top' | 'bottom' | 'start' | 'end'
    teleportDisabled?: Booleanish
    teleportTo?: string | RendererElement | null | undefined
    title?: string
    responsive?: Breakpoint
  }>(),
  {
    backdrop: true,
    backdropVariant: 'dark',
    bodyClass: undefined,
    bodyScrolling: false,
    footerClass: undefined,
    headerClass: undefined,
    headerCloseClass: undefined,
    headerCloseLabel: 'Close',
    headerCloseVariant: 'secondary',
    id: undefined,
    modelValue: false,
    noCloseOnBackdrop: false,
    noCloseOnEsc: false,
    noFocus: false,
    noHeader: false,
    noHeaderClose: false,
    placement: 'start',
    teleportDisabled: false,
    teleportTo: 'body',
    title: undefined,
    responsive: undefined,
  }
)

const emit = defineEmits<{
  'close': [value: BvTriggerableEvent]
  'esc': [value: BvTriggerableEvent]
  'hidden': [value: BvTriggerableEvent]
  'hide': [value: BvTriggerableEvent]
  'hide-prevented': []
  'show': [value: BvTriggerableEvent]
  'show-prevented': []
  'shown': [value: BvTriggerableEvent]
  'update:modelValue': [value: boolean]
}>()

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'backdrop'?: (props: Record<string, never>) => any
  'default'?: (props: {
    visible: boolean
    placement: 'top' | 'bottom' | 'start' | 'end'
    hide: (trigger?: string) => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
  'footer'?: (props: {
    visible: boolean
    placement: 'top' | 'bottom' | 'start' | 'end'
    hide: (trigger?: string) => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
  'header'?: (props: {
    visible: boolean
    placement: 'top' | 'bottom' | 'start' | 'end'
    hide: (trigger?: string) => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'header-close'?: (props: Record<string, never>) => any
  'title'?: (props: {
    visible: boolean
    placement: 'top' | 'bottom' | 'start' | 'end'
    hide: (trigger?: string) => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
}>()

const modelValue = useVModel(props, 'modelValue', emit, {passive: true})

const modelValueBoolean = useBooleanish(modelValue)
const bodyScrollingBoolean = useBooleanish(() => props.bodyScrolling)
const backdropBoolean = useBooleanish(() => props.backdrop)
const noHeaderCloseBoolean = useBooleanish(() => props.noHeaderClose)
const noHeaderBoolean = useBooleanish(() => props.noHeader)
const noFocusBoolean = useBooleanish(() => props.noFocus)
const noCloseOnBackdropBoolean = useBooleanish(() => props.noCloseOnBackdrop)
const noCloseOnEscBoolean = useBooleanish(() => props.noCloseOnEsc)
const teleportDisabledBoolean = useBooleanish(() => props.teleportDisabled)

const element = ref<HTMLElement | null>(null)

const computedId = useId(() => props.id, 'offcanvas')
useSafeScrollLock(modelValueBoolean, bodyScrollingBoolean)
const {greaterOrEqual} = useBreakpoints(breakpointsBootstrapV5)

// TODO changing responsive in real time will break it, this is NOT a getter function https://github.com/vueuse/vueuse/issues/3587
// Make sure when you use this function that you check to see if props.responsive is undefined, otherwise things may work incorrectly
const isGreaterThanBreakpoint = greaterOrEqual(props.responsive ?? 'sm')

// We want to manually handle transitions because the actual showing of the element is handled by Bootstrap
// If we were to use the built-in Transition, we'd have to do v-if/v-show, which conflicts with it being responsive
const {endTransition, startTransition} = useManualTransition(element, 'show showing', 'show hiding')

const isActive = ref(modelValueBoolean.value)
const isTransitioning = ref(false)

onMounted(() => {
  watch(isGreaterThanBreakpoint, (newValue) => {
    if (props.responsive === undefined || modelValueBoolean.value === false || newValue === false)
      return
    // We want to force the modelvalue to false to turn off the open offcanvas
    modelValue.value = false
    isActive.value = false
  })
})

onKeyStroke(
  'Escape',
  () => {
    hide('esc')
  },
  {target: element}
)

const {focused} = useFocus(element, {
  initialValue: modelValueBoolean.value && noFocusBoolean.value === false,
})

const focus = () => {
  if (noFocusBoolean.value === false) {
    focused.value = true
  }
}

// TODO if a value is open while breakpoint is true the backdrop still opens -- as the modelValue is true, but the show() isn't triggered
// Somehow the modelValue should be reset back to false during this phase. It would only occur if the downstream dev allows this
// In reality, they should not allow you to open a offcanvas while the breakpoint is over
// However, when trying to reset it back to false if the breakpoint is higher, it kind of breaks
// TODO there also exists an issue when you're changing modelValue to quickly
watch(modelValueBoolean, (newValue) => {
  if (props.responsive !== undefined && isGreaterThanBreakpoint.value === true) return
  !newValue ? hide() : show()
})

const showBackdrop = toRef(() => backdropBoolean.value === true && modelValueBoolean.value === true)

const hasHeaderCloseSlot = toRef(() => !isEmptySlot(slots['header-close']))
const headerCloseClasses = computed(() => [
  {'text-reset': !hasHeaderCloseSlot.value},
  props.headerCloseClass,
])
const headerCloseAttrs = computed(() => ({
  variant: hasHeaderCloseSlot.value ? props.headerCloseVariant : undefined,
  class: headerCloseClasses.value,
}))

const hasFooterSlot = toRef(() => !isEmptySlot(slots.footer))
const computedClasses = computed(() => [
  props.responsive === undefined ? 'offcanvas' : `offcanvas-${props.responsive}`,
  `offcanvas-${props.placement}`,
  {
    show: isActive.value,
  },
])

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
  isTransitioning.value = true
  if (
    (trigger === 'backdrop' && noCloseOnBackdropBoolean.value) ||
    (trigger === 'esc' && noCloseOnEscBoolean.value)
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

  endTransition(() => {
    // TODO When hidden by the v-model (modelValue.value = false, from above) the transition ends rather quickly. Not sure why
    isTransitioning.value = false
    isActive.value = false
    if (modelValueBoolean.value === false) return
    modelValue.value = false
  })
}

const show = () => {
  isTransitioning.value = true
  const event = buildTriggerableEvent('show', {cancelable: true})
  emit('show', event)
  if (event.defaultPrevented) {
    modelValue.value = false
    emit('show-prevented')
    return
  }

  startTransition(() => {
    isTransitioning.value = false
    isActive.value = true
    if (modelValueBoolean.value === true) return
    focus()
    modelValue.value = true
  })
}

useEventListener(element, 'bv-toggle', () => {
  if (modelValueBoolean.value === true) {
    modelValue.value = false
    return
  }
  modelValue.value = true
})

defineExpose({
  // These can't use the pure show/hide functions. Doing so would cause the method to be run twice with the watcher
  // ^ possibly a TODO ? Is there a structural way to fix that?
  hide: () => {
    modelValue.value = false
  },
  show: () => {
    modelValue.value = true
  },
})
</script>
