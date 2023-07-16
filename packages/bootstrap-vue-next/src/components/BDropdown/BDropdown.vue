<template>
  <div :class="computedClasses" class="btn-group" v-bind="$attrs">
    <BButton
      :id="computedId"
      ref="splitButton"
      :variant="splitVariant || variant"
      :size="size"
      :class="buttonClasses"
      :disabled="splitDisabledBoolean || disabled"
      :type="splitButtonType"
      v-bind="buttonAttr"
      @click="onSplitClick"
      @keydown.esc="modelValue = !modelValueBoolean"
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
  </div>
  <ul
    v-if="!lazyBoolean || modelValueBoolean"
    v-show="lazyBoolean || modelValueBoolean"
    ref="floating"
    :style="{
      position: strategy === 'absolute' ? undefined : 'fixed',
      top: `${y}px`,
      left: `${x}px`,
      width: 'max-content',
    }"
    class="dropdown-menu show"
    :class="dropdownMenuClasses"
    :aria-labelledby="computedId"
    :role="role"
    @click="onClickInside"
  >
    <slot />
  </ul>
</template>

<script setup lang="ts">
import {
  autoUpdate,
  flip,
  offset as floatingOffset,
  type Middleware,
  shift,
  type Strategy,
  useFloating,
} from '@floating-ui/vue'
import {onClickOutside, useToNumber, useVModel} from '@vueuse/core'
import {computed, provide, ref, watch} from 'vue'
import {useBooleanish, useId} from '../../composables'
import type {Booleanish, ButtonType, ButtonVariant, ClassValue, Size} from '../../types'
import {BvEvent, dropdownInjectionKey, resolveFloatingPlacement} from '../../utils'
import BButton from '../BButton/BButton.vue'
import type {RouteLocationRaw} from 'vue-router'

defineOptions({
  inheritAttrs: false,
})

// TODO add navigation through keyboard events
// TODO standardize keydown vs keyup events globally

const props = withDefaults(
  defineProps<{
    ariaLabel?: string
    id?: string
    menuClass?: ClassValue
    size?: Size
    splitClass?: ClassValue
    splitVariant?: ButtonVariant | null
    text?: string
    toggleClass?: ClassValue
    autoClose?: boolean | 'inside' | 'outside'
    block?: Booleanish
    dark?: Booleanish
    disabled?: Booleanish
    isNav?: Booleanish
    dropup?: Booleanish
    dropend?: Booleanish
    dropstart?: Booleanish
    center?: Booleanish
    end?: Booleanish
    noFlip?: Booleanish
    noShift?: Booleanish
    offset?:
      | number
      | string
      | {mainAxis?: number; crossAxis?: number; alignmentAxis?: number | null}
    role?: string
    split?: Booleanish
    splitButtonType?: ButtonType
    splitHref?: string
    splitDisabled?: Booleanish
    noCaret?: Booleanish
    toggleText?: string
    variant?: ButtonVariant | null
    modelValue?: Booleanish
    lazy?: Booleanish
    strategy?: Strategy
    floatingMiddleware?: Middleware[]
    splitTo?: RouteLocationRaw
  }>(),
  {
    ariaLabel: undefined,
    id: undefined,
    menuClass: undefined,
    size: 'md',
    splitClass: undefined,
    splitVariant: undefined,
    text: undefined,
    toggleClass: undefined,
    splitTo: undefined,
    floatingMiddleware: undefined,
    splitDisabled: undefined,
    autoClose: true,
    block: false,
    dark: false,
    disabled: false,
    dropup: false,
    isNav: false,
    dropend: false,
    dropstart: false,
    end: false,
    center: false,
    lazy: false,
    noFlip: false,
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
  }
)

const emit = defineEmits<{
  'show': [value: BvEvent]
  'shown': []
  'hide': [value: BvEvent]
  'hidden': []
  'hide-prevented': []
  'show-prevented': []
  'click': [event: MouseEvent]
  'toggle': []
  'update:modelValue': [value: boolean]
}>()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'default'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'button-content'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'toggle-text'?: (props: Record<string, never>) => any
}>()

const computedId = useId(() => props.id, 'dropdown')

const modelValue = useVModel(props, 'modelValue', emit, {passive: true})

const modelValueBoolean = useBooleanish(modelValue)
const blockBoolean = useBooleanish(() => props.block)
const darkBoolean = useBooleanish(() => props.dark)
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

const computedOffset = computed(() =>
  typeof props.offset === 'string' || typeof props.offset === 'number' ? props.offset : NaN
)
const offsetToNumber = useToNumber(computedOffset, {method: 'parseInt', nanToZero: true})

const floating = ref<HTMLElement | null>(null)
const button = ref<HTMLElement | null>(null)
const splitButton = ref<HTMLElement | null>(null)

const referencePlacement = computed(() => (!splitBoolean.value ? splitButton.value : button.value))
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
    arr.push(flip())
  }
  if (noShiftBoolean.value === false) {
    arr.push(shift())
  }
  return arr
})
const {x, y, strategy, update} = useFloating(referencePlacement, floating, {
  placement: floatingPlacement,
  middleware: floatingMiddleware,
  strategy: props.strategy,
  whileElementsMounted: autoUpdate,
})

const computedClasses = computed(() => ({
  'd-grid': blockBoolean.value,
  'dropup': dropupBoolean.value,
  'dropend': dropendBoolean.value,
  'dropstart': dropstartBoolean.value,
  'd-flex': blockBoolean.value && splitBoolean.value,
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

const dropdownMenuClasses = computed(() => [
  props.menuClass,
  {
    'dropdown-menu-dark': darkBoolean.value,
  },
])

const buttonAttr = computed(() => ({
  'aria-label': props.ariaLabel,
  'aria-expanded': splitBoolean.value ? undefined : modelValueBoolean.value,
  'aria-haspopup': splitBoolean.value ? undefined : 'menu',
  'href': splitBoolean.value ? props.splitHref : undefined,
  'to': splitBoolean.value && props.splitTo ? props.splitTo : undefined,
}))

const onButtonClick = () => {
  emit('toggle')
  const currentModelValue = modelValueBoolean.value
  const e = new BvEvent(currentModelValue ? 'hide' : 'show')
  currentModelValue ? emit('hide', e) : emit('show', e)
  if (e.defaultPrevented) {
    currentModelValue ? emit('hide-prevented') : emit('show-prevented')
    return
  }
  modelValue.value = !currentModelValue
  currentModelValue ? emit('hidden') : emit('shown')
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
  modelValue.value = false
}
const open = () => {
  modelValue.value = true
}
const toggle = () => {
  modelValue.value = !modelValueBoolean.value
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
