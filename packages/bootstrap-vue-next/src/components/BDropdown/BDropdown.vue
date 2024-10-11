<template>
  <ConditionalWrapper
    ref="wrapper"
    :skip="inInputGroup || props.skipWrapper"
    :class="computedClasses"
    :role="inButtonGroupAttributes?.role"
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
      :aria-expanded="props.split ? undefined : showRef"
      :aria-haspopup="props.split ? undefined : 'menu'"
      :href="props.split ? props.splitHref : undefined"
      :to="props.split && props.splitTo ? props.splitTo : undefined"
      @click="onSplitClick"
    >
      <slot name="button-content"> {{ props.text }} </slot>
    </BButton>
    <BButton
      v-if="props.split"
      ref="button"
      :variant="props.variant"
      :size="props.size"
      :disabled="props.disabled"
      :class="[props.toggleClass, {show: showRef}]"
      class="dropdown-toggle-split dropdown-toggle"
      :aria-expanded="showRef"
      aria-haspopup="menu"
      @click="onButtonClick"
    >
      <span class="visually-hidden">
        <slot name="toggle-text">
          {{ props.toggleText }}
        </slot>
      </span>
    </BButton>
    <ConditionalTeleport
      :to="props.teleportTo"
      :disabled="!props.teleportTo || props.teleportDisabled"
    >
      <ul
        v-if="!props.lazy || showRef"
        v-show="props.lazy || showRef"
        ref="floating"
        :style="[floatingStyles, sizeStyles]"
        class="dropdown-menu overflow-auto"
        :class="[props.menuClass, {show: showRef}]"
        :aria-labelledby="computedId"
        :role="props.role"
        @click="onClickInside"
      >
        <slot :hide="hide" :show="show" />
      </ul>
    </ConditionalTeleport>
  </ConditionalWrapper>
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
import {
  computed,
  type CSSProperties,
  inject,
  nextTick,
  provide,
  ref,
  toRef,
  useTemplateRef,
  watch,
} from 'vue'
import {useDefaults} from '../../composables/useDefaults'
import {useId} from '../../composables/useId'
import type {BDropdownProps} from '../../types/ComponentProps'
import {BvTriggerableEvent} from '../../utils'
import BButton from '../BButton/BButton.vue'
import ConditionalWrapper from '../ConditionalWrapper.vue'
import ConditionalTeleport from '../ConditionalTeleport.vue'
import {isBoundary, isRootBoundary} from '../../utils/floatingUi'
import {buttonGroupKey, dropdownInjectionKey, inputGroupKey} from '../../utils/keys'

const _props = withDefaults(defineProps<Omit<BDropdownProps, 'modelValue'>>(), {
  ariaLabel: undefined,
  autoClose: true,
  boundary: 'clippingAncestors',
  boundaryPadding: undefined,
  teleportTo: undefined,
  teleportDisabled: false,
  disabled: false,
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
  placement: 'bottom-start',
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
  'hidden': [value: BvTriggerableEvent]
  'hide': [value: BvTriggerableEvent]
  'hide-prevented': [value: BvTriggerableEvent]
  'show': [value: BvTriggerableEvent]
  'show-prevented': [value: BvTriggerableEvent]
  'shown': [value: BvTriggerableEvent]
  'toggle': [value: BvTriggerableEvent]
  'toggle-prevented': [value: BvTriggerableEvent]
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

const modelValue = defineModel<Exclude<BDropdownProps['modelValue'], undefined>>({default: false})

const showRef = ref(modelValue.value)

const inInputGroup = inject(inputGroupKey, false)
const inButtonGroup = inject(buttonGroupKey, false)

const computedOffset = computed(() =>
  typeof props.offset === 'string' || typeof props.offset === 'number' ? props.offset : NaN
)
const offsetToNumber = useToNumber(computedOffset)

const floating = useTemplateRef<HTMLElement | null>('floating')
const button = useTemplateRef<HTMLElement | null>('button')
const splitButton = useTemplateRef<HTMLElement | null>('splitButton')
const wrapper = useTemplateRef<HTMLElement | null>('wrapper')

const boundary = computed<Boundary | undefined>(() =>
  isBoundary(props.boundary) ? props.boundary : undefined
)
const rootBoundary = computed<RootBoundary | undefined>(() =>
  isRootBoundary(props.boundary) ? props.boundary : undefined
)

const referencePlacement = computed(() => (!props.split ? splitButton.value : button.value))

onKeyStroke(
  'Escape',
  () => {
    hide()
  },
  {target: referencePlacement}
)
onKeyStroke(
  'Escape',
  () => {
    hide()
  },
  {target: floating}
)

const keynav = (e: Readonly<Event>, v: number) => {
  if (floating.value?.contains((e.target as HTMLElement)?.closest('form'))) return
  if (/input|select|option|textarea|form/i.test((e.target as HTMLElement)?.tagName)) return
  e.preventDefault()
  if (!showRef.value) {
    show()
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
            maxHeight: availableHeight && showRef.value ? `${availableHeight}px` : undefined,
            maxWidth: availableWidth && showRef.value ? `${availableWidth}px` : undefined,
          }
        },
      })
    )
  }
  return arr
})
const {update, floatingStyles} = useFloating(referencePlacement, floating, {
  placement: () => props.placement,
  middleware: floatingMiddleware,
  strategy: toRef(() => props.strategy),
  whileElementsMounted: autoUpdate,
})

const inButtonGroupAttributes = inButtonGroup
  ? {
      class: 'btn-group',
      role: 'group',
    }
  : undefined

const computedClasses = computed(() => [
  inButtonGroupAttributes?.class,
  props.wrapperClass,
  {
    'btn-group': !props.wrapperClass && props.split,
    'dropdown': !props.wrapperClass && !props.split,
    'position-static': props.boundary !== 'clippingAncestors' && !props.isNav,
  },
])

const buttonClasses = computed(() => [
  props.split ? props.splitClass : props.toggleClass,
  {
    'nav-link': props.isNav,
    'dropdown-toggle': !props.split,
    'dropdown-toggle-no-caret': props.noCaret && !props.split,
    'show': props.split ? undefined : showRef.value,
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
    if (showRef.value && (props.autoClose === true || props.autoClose === 'outside')) {
      hide()
    }
  },
  {ignore: [button, splitButton]}
)
const onClickInside = () => {
  if (showRef.value && (props.autoClose === true || props.autoClose === 'inside')) {
    hide()
  }
}
const buildTriggerableEvent = (
  type: string,
  opts: Partial<BvTriggerableEvent> = {}
): BvTriggerableEvent =>
  new BvTriggerableEvent(type, {
    cancelable: false,
    target: referencePlacement.value || null,
    relatedTarget: null,
    trigger: null,
    ...opts,
    componentId: computedId.value,
  })

let noAction = false

watch(modelValue, () => {
  if (noAction) {
    noAction = false
    return
  }
  modelValue.value ? show() : hide()
})

const hide = () => {
  const event = buildTriggerableEvent('hide', {cancelable: true})

  emit('hide', event)

  if (event.defaultPrevented) {
    emit('hide-prevented', buildTriggerableEvent('hide-prevented'))
    nextTick(() => {
      noAction = true
      modelValue.value = true
      setTimeout(() => {
        // If the model value is still false, then we need to force it to true.
        // Happens mainly when clickOutSide, autoClose is true and clicking causes modelvalue to change elsewhere.
        if (modelValue.value) return
        noAction = true
        modelValue.value = true
      }, 32)
    })
    return
  }
  showRef.value = false
  emit('hidden', buildTriggerableEvent('hidden'))
  if (modelValue.value) {
    noAction = true
    modelValue.value = false
  }
  wrapper.value?.dispatchEvent?.(new Event('forceHide'))
}

const show = () => {
  const event = buildTriggerableEvent('show', {cancelable: true})
  emit('show', event)

  if (event.defaultPrevented) {
    if (modelValue.value) modelValue.value = false
    emit('show-prevented', buildTriggerableEvent('show-prevented'))
    nextTick(() => {
      noAction = true
      modelValue.value = false
    })

    return
  }

  showRef.value = true
  emit('shown', buildTriggerableEvent('shown'))
  if (!modelValue.value) {
    noAction = true
    nextTick(() => {
      modelValue.value = true
    })
  }
  wrapper.value?.dispatchEvent?.(new Event('forceHide'))
}

const toggle = () => {
  const e = buildTriggerableEvent('toggle', {cancelable: true})
  emit('toggle', e)
  if (e.defaultPrevented) {
    emit('toggle-prevented', buildTriggerableEvent('toggle-prevented'))
    // nextTick(() => {
    //   noAction = true
    //   console.log('t2', currentModelValue)
    //   modelValue.value = currentModelValue
    // })
    return
  }
  showRef.value ? hide() : show()
}

watch(showRef, () => {
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
  visible: toRef(() => showRef.value),
  isNav: toRef(() => props.isNav),
})
</script>
