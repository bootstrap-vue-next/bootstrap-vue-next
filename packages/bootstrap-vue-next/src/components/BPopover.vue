<template>
  <span ref="placeholder" />
  <slot name="target" :show="show" :hide="hide" :toggle="toggle" :show-state="showState" />
  <Teleport :to="container" :disabled="!container">
    <div
      v-if="showStateInternal || persistentBoolean"
      :id="id"
      v-bind="$attrs"
      ref="element"
      :class="computedClasses"
      role="tooltip"
      tabindex="-1"
      :style="floatingStyles"
    >
      <div
        ref="arrow"
        :class="`${tooltipBoolean ? 'tooltip' : 'popover'}-arrow`"
        :style="arrowStyle"
        data-popper-arrow
      />
      <div class="overflow-auto" :style="sizeStyles">
        <template v-if="title || $slots.title">
          <div
            v-if="!isHtml"
            class="position-sticky top-0"
            :class="tooltipBoolean ? 'tooltip-inner' : 'popover-header'"
          >
            <slot name="title">
              {{ title }}
            </slot>
          </div>
          <!-- eslint-disable vue/no-v-html -->
          <div
            v-else
            class="position-sticky top-0"
            :class="tooltipBoolean ? 'tooltip-inner' : 'popover-header'"
            v-html="sanitizedTitle"
          />
          <!-- eslint-enable vue/no-v-html -->
        </template>
        <template v-if="(tooltipBoolean && !$slots.title && !title) || !tooltipBoolean">
          <div v-if="!isHtml" :class="tooltipBoolean ? 'tooltip-inner' : 'popover-body'">
            <slot>
              {{ content }}
            </slot>
          </div>
          <!-- eslint-disable vue/no-v-html -->
          <div
            v-else
            :class="tooltipBoolean ? 'tooltip-inner' : 'popover-body'"
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
import {
  BvTriggerableEvent,
  getTransitionDelay,
  IS_BROWSER,
  resolveBootstrapPlacement,
} from '../utils'
import {DefaultAllowlist, sanitizeHtml} from '../utils/sanitizer'
import {onClickOutside, useMouseInElement, useToNumber} from '@vueuse/core'
import {
  type ComponentPublicInstance,
  computed,
  type CSSProperties,
  type MaybeRef,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  toRef,
  unref,
  watch,
  watchEffect,
} from 'vue'
import {useBooleanish, useId} from '../composables'
import type {BPopoverProps} from '../types'
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BPopoverProps>(), {
  boundary: 'clippingAncestors',
  boundaryPadding: undefined,
  click: false,
  container: undefined,
  content: undefined,
  customClass: '',
  delay: () => ({show: 100, hide: 300}),
  floatingMiddleware: undefined,
  hide: undefined,
  html: false,
  id: undefined,
  inline: false,
  manual: false,
  modelValue: false,
  noAutoClose: false,
  noFade: false,
  noFlip: false,
  noHide: false,
  noShift: false,
  noSize: false,
  noninteractive: false,
  offset: null,
  placement: 'top',
  realtime: false,
  reference: null,
  strategy: 'absolute',
  target: null,
  title: undefined,
  tooltip: false,
  variant: null,
  persistent: false,
})

const emit = defineEmits<{
  'hidden': [value: BvTriggerableEvent]
  'hide': [value: BvTriggerableEvent]
  'hide-prevented': []
  'show': [value: BvTriggerableEvent]
  'show-prevented': []
  'shown': [value: BvTriggerableEvent]
  'update:modelValue': [value: boolean]
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

const modelValueBoolean = useBooleanish(() => props.modelValue)
const showState = ref(modelValueBoolean.value)
const showStateInternal = ref(modelValueBoolean.value)
watchEffect(() => {
  emit('update:modelValue', showState.value)
})

watch(modelValueBoolean, () => {
  if (modelValueBoolean.value === showState.value) return
  modelValueBoolean.value ? show() : hide(new Event('update:modelValue'))
})

const computedId = useId(() => props.id, 'popover')

const clickBoolean = useBooleanish(() => props.click)
const manualBoolean = useBooleanish(() => props.manual)
const noShiftBoolean = useBooleanish(() => props.noShift)
const noSizeBoolean = useBooleanish(() => props.noSize)
const noFlipBoolean = useBooleanish(() => props.noFlip)
const noFadeBoolean = useBooleanish(() => props.noFade)
const noAutoCloseBoolean = useBooleanish(() => props.noAutoClose)
const noHideBoolean = useBooleanish(() => props.noHide)
const realtimeBoolean = useBooleanish(() => props.realtime)
const inlineBoolean = useBooleanish(() => props.inline)
const persistentBoolean = useBooleanish(() => props.persistent)
const tooltipBoolean = useBooleanish(() => props.tooltip)
const noninteractiveBoolean = useBooleanish(() => props.noninteractive)
const isHtml = useBooleanish(() => props.html)

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
  const off = props.offset !== null ? offsetNumber.value : tooltipBoolean.value ? 6 : 8
  const arr: Middleware[] = [offsetMiddleware(off)]
  if (noFlipBoolean.value === false && !isAutoPlacement.value) {
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
  if (noShiftBoolean.value === false) {
    arr.push(
      shift({
        boundary: boundary.value,
        rootBoundary: rootBoundary.value,
        padding: props.boundaryPadding,
      })
    )
  }
  if (noHideBoolean.value === false) {
    arr.push(
      hideMiddleware({
        boundary: boundary.value,
        rootBoundary: rootBoundary.value,
        padding: props.boundaryPadding,
      })
    )
  }
  if (inlineBoolean.value === true) {
    arr.push(inlineMiddleware())
  }
  arr.push(arrowMiddleware({element: arrow, padding: 10}))
  if (noSizeBoolean.value === false) {
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
    const cleanup = autoUpdate(...args, {animationFrame: realtimeBoolean.value})
    // Important! Always return the cleanup function.
    return cleanup
  },
})

const arrowStyle = ref<CSSProperties>({position: 'absolute'})

watch(middlewareData, () => {
  if (noHideBoolean.value === false) {
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
  const type = tooltipBoolean.value ? 'tooltip' : 'popover'
  return [
    type,
    `b-${type}`,
    {
      [`b-${type}-${props.variant}`]: props.variant !== null,
      show: showState.value && !hidden.value,
      ['pe-none']: !showState.value,
      fade: !noFadeBoolean.value,
      ['d-none']: !showState.value && noFadeBoolean.value,
      [`${props.customClass}`]: props.customClass !== undefined,
      [`bs-${type}-${resolveBootstrapPlacement(placement.value)}`]: placement.value !== undefined,
    },
  ]
})

const {isOutside} = useMouseInElement(element)
const {isOutside: triggerIsOutside} = useMouseInElement(trigger)

const toggle = (e: Event) => {
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

const hide = (e: Event) => {
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
      (e?.type === 'update:modelValue' && manualBoolean.value) ||
      (!noninteractiveBoolean.value &&
        isOutside.value &&
        triggerIsOutside.value &&
        !element.value?.contains(document?.activeElement) &&
        !trigger.value?.contains(document?.activeElement)) ||
      (noninteractiveBoolean.value && triggerIsOutside.value)
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

const getElement = (
  target: MaybeRef<
    string | ComponentPublicInstance<HTMLElement> | HTMLSpanElement | HTMLElement | null
  >
): HTMLElement | undefined => {
  const element = unref(target)
  if (!element) return undefined
  if (typeof element === 'string') {
    const idElement = document.getElementById(element)
    return idElement ? idElement : undefined
  }
  if ((element as ComponentPublicInstance<HTMLElement>).$el) {
    return (element as ComponentPublicInstance<HTMLElement>).$el as HTMLElement
  }
  return element
}

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
  if (!trigger.value || manualBoolean.value) {
    return
  }
  if (!IS_BROWSER) return
  trigger.value.addEventListener('forceHide', hide)
  if (clickBoolean.value) {
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
    if (showState.value && clickBoolean.value && !noAutoCloseBoolean.value && !manualBoolean.value)
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
