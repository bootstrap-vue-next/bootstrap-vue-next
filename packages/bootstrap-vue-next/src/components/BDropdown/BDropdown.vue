<template>
  <RenderComponentOrSkip
    ref="wrapper"
    :skip="inInputGroup || props.skipWrapper"
    :class="computedClasses"
  >
    <BButton
      :id="computedId"
      ref="splitButton"
      :variant="props.splitVariant || props.variant"
      :size="props.size"
      :class="buttonClasses"
      :disabled="props.splitDisabled || props.disabled"
      :type="props.splitButtonType"
      :aria-label="props.ariaLabel"
      :aria-expanded="props.split ? undefined : modelValue"
      :aria-haspopup="props.split ? undefined : 'menu'"
      :href="props.split ? props.splitHref : undefined"
      :to="props.split && props.splitTo ? props.splitTo : undefined"
      @click="onSplitClick"
    >
      <slot name="button-content">
        {{ props.text }}
      </slot>
    </BButton>
    <BButton
      v-if="props.split"
      ref="button"
      :variant="props.variant"
      :size="props.size"
      :disabled="props.disabled"
      :class="[props.toggleClass, {show: modelValue}]"
      class="dropdown-toggle-split dropdown-toggle"
      :aria-expanded="modelValue"
      aria-haspopup="menu"
      @click="onButtonClick"
    >
      <span class="visually-hidden">
        <slot name="toggle-text">
          {{ props.toggleText }}
        </slot>
      </span>
    </BButton>
    <Teleport :to="props.teleportTo" :disabled="!props.teleportTo || props.teleportDisabled">
      <ul
        v-if="!props.lazy || modelValue"
        v-show="props.lazy || modelValue"
        ref="floating"
        :style="[floatingStyles, sizeStyles]"
        class="dropdown-menu overflow-auto"
        :class="[props.menuClass, {show: modelValue}]"
        :aria-labelledby="computedId"
        :role="props.role"
        @click="onClickInside"
      >
        <slot :hide="hide" :show="show" />
      </ul>
    </Teleport>
  </RenderComponentOrSkip>
</template>

<script setup lang="ts">
import {
  autoUpdate,
  type Boundary,
  flip,
  type Middleware,
  offset as offsetMiddleware,
  type RootBoundary,
  shift,
  size as sizeMiddleware,
  useFloating,
} from '@floating-ui/vue'
import {onClickOutside, onKeyStroke, useToNumber} from '@vueuse/core'
import {computed, type CSSProperties, inject, nextTick, provide, ref, toRef, watch} from 'vue'
import {useDefaults, useId} from '../../composables'
import type {BDropdownProps} from '../../types'
import {
  BvTriggerableEvent,
  dropdownInjectionKey,
  inputGroupKey,
  resolveFloatingPlacement,
} from '../../utils'
import BButton from '../BButton/BButton.vue'
import RenderComponentOrSkip from '../RenderComponentOrSkip.vue'

const _props = withDefaults(defineProps<BDropdownProps>(), {
  ariaLabel: undefined,
  autoClose: true,
  boundary: 'clippingAncestors',
  boundaryPadding: undefined,
  center: false,
  teleportTo: undefined,
  teleportDisabled: false,
  disabled: false,
  dropend: false,
  dropstart: false,
  dropup: false,
  end: false,
  floatingMiddleware: undefined,
  id: undefined,
  isNav: false,
  lazy: false,
  menuClass: undefined,
  noCaret: false,
  noFlip: false,
  noShift: false,
  noSize: false,
  offset: 0,
  role: 'menu',
  size: 'md',
  skipWrapper: false,
  split: false,
  splitButtonType: 'button',
  splitClass: undefined,
  splitDisabled: undefined,
  splitHref: undefined,
  splitTo: undefined,
  splitVariant: undefined,
  strategy: 'absolute',
  text: undefined,
  toggleClass: undefined,
  toggleText: 'Toggle dropdown',
  variant: 'secondary',
  wrapperClass: undefined,
})
const props = useDefaults(_props, 'BDropdown')

const emit = defineEmits<{
  'click': [event: MouseEvent]
  'hidden': []
  'hide': [value: BvTriggerableEvent]
  'hide-prevented': []
  'show': [value: BvTriggerableEvent]
  'show-prevented': []
  'shown': []
  'toggle': []
}>()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'button-content'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'default'?: (props: {hide: () => void; show: () => void}) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'toggle-text'?: (props: Record<string, never>) => any
}>()

const computedId = useId(() => props.id, 'dropdown')

const modelValue = defineModel<boolean>({default: false})

const inInputGroup = inject(inputGroupKey, false)

const computedOffset = toRef(() =>
  typeof props.offset === 'string' || typeof props.offset === 'number' ? props.offset : NaN
)
const offsetToNumber = useToNumber(computedOffset)

const floating = ref<HTMLElement | null>(null)
const button = ref<HTMLElement | null>(null)
const splitButton = ref<HTMLElement | null>(null)
const wrapper = ref<HTMLElement | null>(null)

const boundary = computed<Boundary | undefined>(() =>
  props.boundary === 'document' || props.boundary === 'viewport' ? undefined : props.boundary
)
const rootBoundary = computed<RootBoundary | undefined>(() =>
  props.boundary === 'document' || props.boundary === 'viewport' ? props.boundary : undefined
)

const referencePlacement = toRef(() => (!props.split ? splitButton.value : button.value))

onKeyStroke(
  'Escape',
  () => {
    modelValue.value = !modelValue.value
  },
  {target: referencePlacement}
)
onKeyStroke(
  'Escape',
  () => {
    modelValue.value = !modelValue.value
  },
  {target: floating}
)

const keynav = (e: Readonly<Event>, v: number) => {
  if (floating.value?.contains((e.target as HTMLElement)?.closest('form'))) return
  if (/input|select|option|textarea|form/i.test((e.target as HTMLElement)?.tagName)) return
  e.preventDefault()
  if (!modelValue.value) {
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
    top: props.dropup,
    start: props.dropstart,
    end: props.dropend,
    alignCenter: props.center,
    alignEnd: props.end,
  })
)
const sizeStyles = ref<CSSProperties>({})
const floatingMiddleware = computed<Middleware[]>(() => {
  if (props.floatingMiddleware !== undefined) {
    return props.floatingMiddleware
  }
  const localOffset =
    typeof props.offset === 'string' || typeof props.offset === 'number'
      ? offsetToNumber.value
      : props.offset
  const arr: Middleware[] = [offsetMiddleware(localOffset)]
  if (props.noFlip === false) {
    arr.push(
      flip({
        boundary: boundary.value,
        rootBoundary: rootBoundary.value,
        padding: props.boundaryPadding,
      })
    )
  }
  if (props.noShift === false) {
    arr.push(
      shift({
        boundary: boundary.value,
        rootBoundary: rootBoundary.value,
        padding: props.boundaryPadding,
      })
    )
  }
  if (props.noSize === false) {
    arr.push(
      sizeMiddleware({
        boundary: boundary.value,
        rootBoundary: rootBoundary.value,
        padding: props.boundaryPadding,
        apply({availableWidth, availableHeight}) {
          sizeStyles.value = {
            maxHeight: availableHeight && modelValue.value ? `${availableHeight}px` : undefined,
            maxWidth: availableWidth && modelValue.value ? `${availableWidth}px` : undefined,
          }
        },
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

const computedClasses = computed(() => [
  props.wrapperClass,
  {
    'btn-group': !props.wrapperClass && props.split,
    'dropdown': !props.wrapperClass && !props.split,
    'dropup': props.dropup,
    'dropend': props.dropend,
    'dropstart': props.dropstart,
    'position-static': props.boundary !== 'clippingAncestors' && !props.isNav,
  },
])

const buttonClasses = computed(() => [
  props.split ? props.splitClass : props.toggleClass,
  {
    'nav-link': props.isNav,
    'dropdown-toggle': !props.split,
    'dropdown-toggle-no-caret': props.noCaret && !props.split,
    'show': props.split ? undefined : modelValue.value,
  },
])

const onButtonClick = () => {
  toggle()
}

const onSplitClick = (event: Readonly<MouseEvent>) => {
  props.split ? emit('click', event) : onButtonClick()
}

onClickOutside(
  floating,
  () => {
    if (modelValue.value && (props.autoClose === true || props.autoClose === 'outside')) {
      toggle()
    }
  },
  {ignore: [button, splitButton]}
)
const onClickInside = () => {
  if (modelValue.value && (props.autoClose === true || props.autoClose === 'inside')) {
    toggle()
  }
}

const hide = () => {
  modelValue.value && toggle()
}
const show = () => {
  modelValue.value || toggle()
}
const toggle = () => {
  emit('toggle')
  const currentModelValue = modelValue.value
  const e = new BvTriggerableEvent(currentModelValue ? 'hide' : 'show')
  currentModelValue ? emit('hide', e) : emit('show', e)
  if (e.defaultPrevented) {
    currentModelValue ? emit('hide-prevented') : emit('show-prevented')
    return
  }
  modelValue.value = !currentModelValue
  currentModelValue ? emit('hidden') : emit('shown')
  wrapper.value?.dispatchEvent?.(new Event('forceHide'))
}

watch(modelValue, () => {
  update()
})

defineExpose({
  hide,
  show,
  toggle,
})

provide(dropdownInjectionKey, {
  id: computedId,
  show,
  hide,
  toggle,
  visible: toRef(() => modelValue.value),
  isNav: toRef(() => props.isNav),
})
</script>
