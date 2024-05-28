<template>
  <span :id="computedId + '_placeholder'" ref="placeholder" />
  <slot name="target" :show="show" :hide="hide" :toggle="toggle" :show-state="showState" />
  <Teleport :to="props.teleportTo" :disabled="!props.teleportTo || props.teleportDisabled">
    <div
      v-if="showStateInternal || props.persistent"
      :id="computedId"
      v-bind="$attrs"
      ref="element"
      :class="computedClasses"
      role="tooltip"
      tabindex="-1"
      :style="floatingStyles"
    >
      <div
        ref="arrow"
        :class="`${props.tooltip ? 'tooltip' : 'popover'}-arrow`"
        :style="arrowStyle"
        data-popper-arrow
      />
      <div class="overflow-auto" :style="sizeStyles">
        <template v-if="props.title || $slots.title">
          <div
            v-if="!props.html"
            class="position-sticky top-0"
            :class="props.tooltip ? 'tooltip-inner' : 'popover-header'"
          >
            <slot name="title">
              {{ props.title }}
            </slot>
          </div>
          <!-- eslint-disable vue/no-v-html -->
          <div
            v-else
            class="position-sticky top-0"
            :class="props.tooltip ? 'tooltip-inner' : 'popover-header'"
            v-html="sanitizedTitle"
          />
          <!-- eslint-enable vue/no-v-html -->
        </template>
        <template v-if="(props.tooltip && !$slots.title && !props.title) || !props.tooltip">
          <div v-if="!props.html" :class="props.tooltip ? 'tooltip-inner' : 'popover-body'">
            <slot>
              {{ props.content }}
            </slot>
          </div>
          <!-- eslint-disable vue/no-v-html -->
          <div
            v-else
            :class="props.tooltip ? 'tooltip-inner' : 'popover-body'"
            v-html="sanitizedContent"
          />
          <!-- eslint-enable vue/no-v-html -->
        </template>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import {
  type Alignment,
  arrow as arrowMiddleware,
  autoPlacement,
  autoUpdate,
  type Boundary,
  flip,
  hide as hideMiddleware,
  inline as inlineMiddleware,
  type Middleware,
  offset as offsetMiddleware,
  type Placement as OriginalPlacement,
  type RootBoundary,
  shift,
  size as sizeMiddleware,
  useFloating,
} from '@floating-ui/vue'
import {onClickOutside, useMouseInElement, useToNumber} from '@vueuse/core'
import {
  computed,
  type CSSProperties,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  toRef,
  watch,
  watchEffect,
} from 'vue'
import {useDefaults, useId} from '../composables'
import type {BPopoverProps} from '../types'
import {
  BvTriggerableEvent,
  getElement,
  getTransitionDelay,
  IS_BROWSER,
  resolveBootstrapPlacement,
} from '../utils'
import {DefaultAllowlist, sanitizeHtml} from '../utils/sanitizer'

defineOptions({
  inheritAttrs: false,
})

const _props = withDefaults(defineProps<BPopoverProps>(), {
  boundary: 'clippingAncestors',
  boundaryPadding: undefined,
  click: false,
  teleportTo: undefined,
  teleportDisabled: false,
  content: undefined,
  customClass: '',
  delay: () => ({show: 100, hide: 300}),
  floatingMiddleware: undefined,
  html: false,
  id: undefined,
  inline: false,
  manual: false,
  noAutoClose: false,
  noFade: false,
  noFlip: false,
  noHide: false,
  noShift: false,
  noSize: false,
  noninteractive: false,
  offset: null,
  persistent: false,
  placement: 'top',
  realtime: false,
  reference: null,
  strategy: 'absolute',
  target: null,
  title: undefined,
  tooltip: false,
  variant: null,
})

const props = useDefaults(_props, 'BPopover')

const emit = defineEmits<{
  'hidden': [value: BvTriggerableEvent]
  'hide': [value: BvTriggerableEvent]
  'hide-prevented': []
  'show': [value: BvTriggerableEvent]
  'show-prevented': []
  'shown': [value: BvTriggerableEvent]
}>()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  target?: (props: {
    show: () => void
    hide: (e: Event) => void
    toggle: (e: Event) => void
    showState: boolean
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  title?: (props: Record<string, never>) => any
}>()

const modelValue = defineModel<boolean>({
  default: false,
})

const showState = ref(modelValue.value)
const showStateInternal = ref(modelValue.value)
watchEffect(() => {
  modelValue.value = showState.value
})

watch(modelValue, (newValue) => {
  if (newValue === showState.value) return
  newValue ? show() : hide(new Event('update:modelValue'))
})

const computedId = useId(() => props.id, 'popover')

const hidden = ref(false)

const element = ref<HTMLElement | null>(null)
const targetTrigger = ref<HTMLElement | null>(null)
const arrow = ref<HTMLElement | null>(null)
const trigger = ref<HTMLElement | null>(null)
const placeholder = ref<HTMLElement | null>(null)

const sanitizedTitle = computed(() =>
  props.title ? sanitizeHtml(props.title, DefaultAllowlist) : ''
)

const sanitizedContent = computed(() =>
  props.content ? sanitizeHtml(props.content, DefaultAllowlist) : ''
)
const isAutoPlacement = toRef(() => props.placement.startsWith('auto'))
const offsetNumber = useToNumber(() => props.offset ?? NaN)

const boundary = computed<Boundary | undefined>(() =>
  props.boundary === 'document' || props.boundary === 'viewport' ? undefined : props.boundary
)
const rootBoundary = computed<RootBoundary | undefined>(() =>
  props.boundary === 'document' || props.boundary === 'viewport' ? props.boundary : undefined
)

const sizeStyles = ref<CSSProperties>({})
const floatingMiddleware = computed<Middleware[]>(() => {
  if (props.floatingMiddleware !== undefined) {
    return props.floatingMiddleware
  }
  const off = props.offset !== null ? offsetNumber.value : props.tooltip ? 6 : 8
  const arr: Middleware[] = [offsetMiddleware(off)]
  if (props.noFlip === false && !isAutoPlacement.value) {
    arr.push(
      flip({
        boundary: boundary.value,
        rootBoundary: rootBoundary.value,
        padding: props.boundaryPadding,
      })
    )
  }
  if (isAutoPlacement.value) {
    arr.push(
      autoPlacement({
        alignment: (props.placement.split('-')[1] as Alignment) || undefined,
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
  if (props.noHide === false) {
    arr.push(
      hideMiddleware({
        boundary: boundary.value,
        rootBoundary: rootBoundary.value,
        padding: props.boundaryPadding,
      })
    )
  }
  if (props.inline === true) {
    arr.push(inlineMiddleware())
  }
  arr.push(arrowMiddleware({element: arrow, padding: 10}))
  if (props.noSize === false) {
    arr.push(
      sizeMiddleware({
        boundary: boundary.value,
        rootBoundary: rootBoundary.value,
        padding: props.boundaryPadding,
        apply({availableWidth, availableHeight}) {
          sizeStyles.value = {
            maxHeight: availableHeight ? `${availableHeight}px` : undefined,
            maxWidth: availableWidth ? `${availableWidth}px` : undefined,
          }
        },
      })
    )
  }
  return arr
})

const placementRef = toRef(() =>
  isAutoPlacement.value ? undefined : (props.placement as OriginalPlacement)
)

const {floatingStyles, middlewareData, placement, update} = useFloating(targetTrigger, element, {
  placement: placementRef,
  middleware: floatingMiddleware,
  strategy: toRef(() => props.strategy),
  whileElementsMounted: (...args) => {
    const cleanup = autoUpdate(...args, {animationFrame: props.realtime})
    // Important! Always return the cleanup function.
    return cleanup
  },
})

const arrowStyle = ref<CSSProperties>({position: 'absolute'})

watch(middlewareData, () => {
  if (props.noHide === false) {
    if (middlewareData.value.hide?.referenceHidden) {
      hidden.value = true
    } else {
      hidden.value = false
    }
  }
  if (middlewareData.value.arrow) {
    const {x, y} = middlewareData.value.arrow
    arrowStyle.value = {
      position: 'absolute',
      top: y ? `${y}px` : '',
      left: x ? `${x}px` : '',
    }
  }
})

const computedClasses = computed(() => {
  const type = props.tooltip ? 'tooltip' : 'popover'
  return [
    type,
    `b-${type}`,
    {
      [`b-${type}-${props.variant}`]: props.variant !== null,
      show: showState.value && !hidden.value,
      ['pe-none']: !showState.value,
      fade: !props.noFade,
      ['d-none']: !showState.value && props.noFade,
      [`${props.customClass}`]: props.customClass !== undefined,
      [`bs-${type}-${resolveBootstrapPlacement(placement.value)}`]: placement.value !== undefined,
    },
  ]
})

const {isOutside} = useMouseInElement(element)
const {isOutside: triggerIsOutside} = useMouseInElement(trigger)

const toggle = (e?: Event) => {
  const event = e ?? new Event('click')
  showState.value ? hide(event) : show()
}

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

let showTimeout: ReturnType<typeof setTimeout> | undefined
const show = () => {
  const event = buildTriggerableEvent('show', {cancelable: true})
  emit('show', event)
  if (event.defaultPrevented) {
    emit('show-prevented')
    return
  }
  showStateInternal.value = true
  nextTick(() => {
    update()
    showTimeout = setTimeout(
      () => {
        update()
        showState.value = true
        nextTick(() => {
          emit('shown', buildTriggerableEvent('shown'))
        })
      },
      typeof props.delay === 'number' ? props.delay : props.delay?.show || 0
    )
  })
}

const hide = (e: Readonly<Event>) => {
  const event = buildTriggerableEvent('hide', {cancelable: true})
  emit('hide', event)
  if (event.defaultPrevented) {
    emit('hide-prevented')
    return
  }
  if (showTimeout) {
    clearTimeout(showTimeout)
    showTimeout = undefined
  }
  const delay = typeof props.delay === 'number' ? props.delay : props.delay?.hide || 0
  setTimeout(() => {
    if (
      e?.type === 'click' ||
      e?.type === 'forceHide' ||
      (e?.type === 'update:modelValue' && props.manual) ||
      (!props.noninteractive &&
        isOutside.value &&
        triggerIsOutside.value &&
        !element.value?.contains(document?.activeElement) &&
        !trigger.value?.contains(document?.activeElement)) ||
      (props.noninteractive && triggerIsOutside.value)
    ) {
      showState.value = false
      nextTick(() => {
        setTimeout(
          () => {
            showStateInternal.value = false
          },
          element.value ? getTransitionDelay(element.value) : 150
        )
        emit('hidden', buildTriggerableEvent('hidden'))
      })
    } else {
      setTimeout(
        () => {
          hide(e)
        },
        delay < 50 ? 50 : delay
      )
    }
  }, delay)
}

defineExpose({
  hide,
  show,
  toggle,
})

const bind = () => {
  // TODO: is this the best way to bind the events?
  // we place a span and get the next element sibling fo rthe listeners
  if (props.target) {
    const elem = getElement(props.target)
    if (elem) {
      trigger.value = elem
    } else {
      // eslint-disable-next-line no-console
      console.warn('Target element not found', props.target)
    }
  } else {
    trigger.value = placeholder.value?.nextElementSibling as HTMLElement
  }
  if (props.reference) {
    const elem = getElement(props.reference)
    if (elem) {
      targetTrigger.value = elem
    } else {
      // eslint-disable-next-line no-console
      console.warn('Reference element not found', props.reference)
    }
  } else {
    targetTrigger.value = trigger.value
  }
  if (!trigger.value || props.manual) {
    return
  }
  if (!IS_BROWSER) return
  trigger.value.addEventListener('forceHide', hide)
  if (props.click) {
    trigger.value.addEventListener('click', toggle)
    return
  }
  trigger.value.addEventListener('pointerenter', show)
  trigger.value.addEventListener('pointerleave', hide)
  trigger.value.addEventListener('focus', show)
  trigger.value.addEventListener('blur', hide)
}

const unbind = () => {
  if (trigger.value) {
    trigger.value.removeEventListener('forceHide', hide)
    trigger.value.removeEventListener('click', toggle)
    trigger.value.removeEventListener('pointerenter', show)
    trigger.value.removeEventListener('pointerleave', hide)
    trigger.value.removeEventListener('focus', show)
    trigger.value.removeEventListener('blur', hide)
  }
}

onClickOutside(
  element,
  () => {
    if (showState.value && props.click && !props.noAutoClose && !props.manual)
      hide(new Event('clickOutside'))
  },
  {ignore: [trigger]}
)

watch([() => props.click, () => props.target, () => props.reference], () => {
  unbind()
  bind()
  // update()
})

onMounted(bind)

onBeforeUnmount(unbind)
</script>
