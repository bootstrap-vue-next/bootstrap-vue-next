<template>
  <div :class="computedClasses" class="btn-group">
    <BButton
      :id="computedId"
      ref="splitButton"
      :variant="splitVariant || variant"
      :size="size"
      :class="buttonClasses"
      :disabled="splitDisabledBoolean || disabled"
      :type="splitButtonType"
      :aria-label="ariaLabel"
      :aria-expanded="splitBoolean ? undefined : modelValueBoolean"
      :aria-haspopup="splitBoolean ? undefined : 'menu'"
      :href="splitBoolean ? splitHref : undefined"
      :to="splitBoolean && splitTo ? splitTo : undefined"
      @click="onSplitClick"
    >
      <slot name="button-content">
        {{ text }}
      </slot>
    </BButton>
    <BButton
      v-if="splitBoolean"
      ref="button"
      :variant="variant"
      :size="size"
      :disabled="disabled"
      :class="[toggleClass, ...[modelValueBoolean ? 'show' : undefined]]"
      class="dropdown-toggle-split dropdown-toggle"
      :aria-expanded="modelValueBoolean"
      aria-haspopup="menu"
      @click="onButtonClick"
    >
      <span class="visually-hidden">
        <slot name="toggle-text">
          {{ toggleText }}
        </slot>
      </span>
    </BButton>
    <RenderComponentOrSkip :tag="'Teleport'" :to="container" :skip="!container">
      <ul
        v-if="!lazyBoolean || modelValueBoolean"
        v-show="lazyBoolean || modelValueBoolean"
        ref="floating"
        :style="floatingStyles"
        class="dropdown-menu show"
        :class="menuClass"
        :aria-labelledby="computedId"
        :role="role"
        @click="onClickInside"
      >
        <slot :hide="close" :show="open" />
      </ul>
    </RenderComponentOrSkip>
  </div>
</template>

<script setup lang="ts">
import {
  autoUpdate,
  type Boundary,
  flip,
  offset as floatingOffset,
  type Middleware,
  type RootBoundary,
  shift,
  useFloating,
} from '@floating-ui/vue'
import {onClickOutside, onKeyStroke, useToNumber, useVModel} from '@vueuse/core'
import {computed, nextTick, provide, ref, toRef, watch} from 'vue'
import {useBooleanish, useId} from '../../composables'
import type {BDropdownProps} from '../../types'
import {BvTriggerableEvent, dropdownInjectionKey, resolveFloatingPlacement} from '../../utils'
import BButton from '../BButton/BButton.vue'
import RenderComponentOrSkip from '../RenderComponentOrSkip.vue'

// TODO add navigation through keyboard events
// TODO standardize keydown vs keyup events globally

const props = withDefaults(defineProps<BDropdownProps>(), {
  ariaLabel: undefined,
  id: undefined,
  menuClass: undefined,
  size: 'md',
  splitClass: undefined,
  splitVariant: undefined,
  text: undefined,
  toggleClass: undefined,
  floatingMiddleware: undefined,
  splitDisabled: undefined,
  autoClose: true,
  block: false,
  disabled: false,
  isNav: false,
  dropup: false,
  dropend: false,
  dropstart: false,
  center: false,
  end: false,
  noFlip: false,
  lazy: false,
  noShift: false,
  offset: 0,
  role: 'menu',
  split: false,
  splitButtonType: 'button',
  splitHref: undefined,
  noCaret: false,
  toggleText: 'Toggle dropdown',
  variant: 'secondary',
  modelValue: false,
  strategy: 'absolute',
  splitTo: undefined,
  boundary: 'clippingAncestors',
  container: undefined,
})

const emit = defineEmits<{
  'show': [value: BvTriggerableEvent]
  'shown': []
  'hide': [value: BvTriggerableEvent]
  'hidden': []
  'hide-prevented': []
  'show-prevented': []
  'click': [event: MouseEvent]
  'toggle': []
  'update:modelValue': [value: boolean]
}>()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'default'?: (props: {hide: () => void; show: () => void}) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'button-content'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'toggle-text'?: (props: Record<string, never>) => any
}>()

const computedId = useId(() => props.id, 'dropdown')

const modelValue = useVModel(props, 'modelValue', emit, {passive: true})

const modelValueBoolean = useBooleanish(modelValue)
const blockBoolean = useBooleanish(() => props.block)
const dropupBoolean = useBooleanish(() => props.dropup)
const dropendBoolean = useBooleanish(() => props.dropend)
const isNavBoolean = useBooleanish(() => props.isNav)
const dropstartBoolean = useBooleanish(() => props.dropstart)
const centerBoolean = useBooleanish(() => props.center)
const endBoolean = useBooleanish(() => props.end)
const splitBoolean = useBooleanish(() => props.split)
const noCaretBoolean = useBooleanish(() => props.noCaret)
const noFlipBoolean = useBooleanish(() => props.noFlip)
const noShiftBoolean = useBooleanish(() => props.noShift)
const lazyBoolean = useBooleanish(() => props.lazy)
const splitDisabledBoolean = useBooleanish(() => props.splitDisabled)

const computedOffset = toRef(() =>
  typeof props.offset === 'string' || typeof props.offset === 'number' ? props.offset : NaN
)
const offsetToNumber = useToNumber(computedOffset)

const floating = ref<HTMLElement | null>(null)
const button = ref<HTMLElement | null>(null)
const splitButton = ref<HTMLElement | null>(null)

const boundary = computed<Boundary | undefined>(() =>
  props.boundary === 'document' || props.boundary === 'viewport' ? undefined : props.boundary
)
const rootBoundary = computed<RootBoundary | undefined>(() =>
  props.boundary === 'document' || props.boundary === 'viewport' ? props.boundary : undefined
)

const referencePlacement = toRef(() => (!splitBoolean.value ? splitButton.value : button.value))

onKeyStroke(
  'Escape',
  () => {
    modelValue.value = !modelValueBoolean
  },
  {target: referencePlacement}
)
onKeyStroke(
  'Escape',
  () => {
    modelValue.value = !modelValueBoolean
  },
  {target: floating}
)

const keynav = (e: Event, v: number) => {
  e.preventDefault()
  if (!modelValueBoolean.value) {
    open()
    nextTick(() => keynav(e, v))
    return
  }
  const list = floating.value?.querySelectorAll('.dropdown-item:not(.disabled):not(:disabled)')
  if (!list) return
  if (floating.value?.contains(document.activeElement)) {
    const active = floating.value.querySelector('.dropdown-item:focus')
    const index = Array.prototype.indexOf.call(list, active) + v
    if (index >= 0 && index < list?.length) (list[index] as HTMLElement)?.focus()
  } else {
    ;(list[v === -1 ? list.length - 1 : 0] as HTMLElement)?.focus()
  }
}

onKeyStroke('ArrowUp', (e) => keynav(e, -1), {target: referencePlacement})
onKeyStroke('ArrowDown', (e) => keynav(e, 1), {target: referencePlacement})
onKeyStroke('ArrowUp', (e) => keynav(e, -1), {target: floating})
onKeyStroke('ArrowDown', (e) => keynav(e, 1), {target: floating})

const floatingPlacement = computed(() =>
  resolveFloatingPlacement({
    top: dropupBoolean.value,
    start: dropstartBoolean.value,
    end: dropendBoolean.value,
    alignCenter: centerBoolean.value,
    alignEnd: endBoolean.value,
  })
)
const floatingMiddleware = computed<Middleware[]>(() => {
  if (props.floatingMiddleware !== undefined) {
    return props.floatingMiddleware
  }
  const localOffset =
    typeof props.offset === 'string' || typeof props.offset === 'number'
      ? offsetToNumber.value
      : props.offset
  const arr: Middleware[] = [floatingOffset(localOffset)]
  if (noFlipBoolean.value === false) {
    arr.push(
      flip({
        boundary: boundary.value,
        rootBoundary: rootBoundary.value,
      })
    )
  }
  if (noShiftBoolean.value === false) {
    arr.push(
      shift({
        boundary: boundary.value,
        rootBoundary: rootBoundary.value,
      })
    )
  }
  return arr
})
const {update, floatingStyles} = useFloating(referencePlacement, floating, {
  placement: floatingPlacement,
  middleware: floatingMiddleware,
  strategy: toRef(() => props.strategy),
  whileElementsMounted: autoUpdate,
})

const computedClasses = computed(() => ({
  'd-grid': blockBoolean.value,
  'dropup': dropupBoolean.value,
  'dropend': dropendBoolean.value,
  'dropstart': dropstartBoolean.value,
  'd-flex': blockBoolean.value && splitBoolean.value,
  'position-static': props.boundary !== 'clippingAncestors' && !isNavBoolean.value,
}))

const buttonClasses = computed(() => [
  splitBoolean.value ? props.splitClass : props.toggleClass,
  {
    'nav-link': isNavBoolean.value,
    'dropdown-toggle': !splitBoolean.value,
    'dropdown-toggle-no-caret': noCaretBoolean.value && !splitBoolean.value,
    'w-100': splitBoolean.value && blockBoolean.value,
    'show': splitBoolean.value ? undefined : modelValueBoolean.value,
  },
])

const onButtonClick = () => {
  toggle()
}

const onSplitClick = (event: MouseEvent) => {
  splitBoolean.value ? emit('click', event) : onButtonClick()
}

onClickOutside(
  floating,
  () => {
    if (modelValueBoolean.value && (props.autoClose === true || props.autoClose === 'outside')) {
      toggle()
    }
  },
  {ignore: [button, splitButton]}
)
const onClickInside = () => {
  if (modelValueBoolean.value && (props.autoClose === true || props.autoClose === 'inside')) {
    toggle()
  }
}

const close = () => {
  modelValue.value && toggle()
}
const open = () => {
  modelValue.value || toggle()
}
const toggle = () => {
  emit('toggle')
  const currentModelValue = modelValueBoolean.value
  const e = new BvTriggerableEvent(currentModelValue ? 'hide' : 'show')
  currentModelValue ? emit('hide', e) : emit('show', e)
  if (e.defaultPrevented) {
    currentModelValue ? emit('hide-prevented') : emit('show-prevented')
    return
  }
  modelValue.value = !currentModelValue
  currentModelValue ? emit('hidden') : emit('shown')
}

watch(modelValueBoolean, update)

defineExpose({
  close,
  open,
  toggle,
})

provide(dropdownInjectionKey, {
  id: computedId,
  open,
  close,
  toggle,
  visible: modelValueBoolean,
  isNav: isNavBoolean,
})
</script>
