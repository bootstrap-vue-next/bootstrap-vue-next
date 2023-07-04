<template>
  <span ref="placeholder" />
  <slot name="target" v-bind="{show, hide: hideFn, toggle, showState}" />
  <!-- TODO: fix this clunky solution when https://github.com/vuejs/core/issues/6152 is fixed -->
  <RenderComponentOrSkip :tag="'Teleport'" :to="container" :skip="!container">
    <div
      v-if="showStateInternal"
      :id="id"
      v-bind="$attrs"
      ref="element"
      :class="computedClasses"
      role="tooltip"
      tabindex="-1"
      :style="{
        position: strategy,
        top: `${y}px`,
        left: `${x}px`,
        width: 'max-content',
      }"
    >
      <div
        ref="arrow"
        :class="`${tooltipBoolean ? 'tooltip' : 'popover'}-arrow`"
        :style="arrowStyle"
        data-popper-arrow
      />
      <template v-if="title || $slots.title">
        <div v-if="!isHtml" :class="tooltipBoolean ? 'tooltip-inner' : 'popover-header'">
          <slot name="title">
            {{ title }}
          </slot>
        </div>
        <!-- eslint-disable vue/no-v-html -->
        <div
          v-else
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
  </RenderComponentOrSkip>
</template>

<script setup lang="ts">
import {
  type Alignment,
  arrow as arrowMiddleware,
  autoPlacement,
  autoUpdate,
  flip,
  hide as hideMiddleware,
  inline as inlineMiddleware,
  type Middleware,
  offset as offsetMiddleware,
  type Placement as OriginalPlacement,
  shift,
  type Strategy,
  useFloating,
} from '@floating-ui/vue'
import {
  BvTriggerableEvent,
  getTransitionDelay,
  IS_BROWSER,
  resolveBootstrapPlacement,
} from '../utils'
import {DefaultAllowlist, sanitizeHtml} from '../utils/sanitizer'
import {onClickOutside, useMouseInElement} from '@vueuse/core'
import RenderComponentOrSkip from './RenderComponentOrSkip.vue'
import {
  type ComponentPublicInstance,
  computed,
  type CSSProperties,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  type VNode,
  watch,
  watchEffect,
} from 'vue'
import {useBooleanish, useId} from '../composables'
import type {Booleanish, BPopoverPlacement, ColorVariant} from '../types'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    modelValue?: Booleanish
    container?: string | ComponentPublicInstance<HTMLElement> | HTMLElement | undefined
    target?:
      | (() => HTMLElement | VNode)
      | string
      | ComponentPublicInstance<HTMLElement>
      | HTMLSpanElement
      | HTMLElement
      | null
    reference?:
      | (() => HTMLElement | VNode)
      | string
      | ComponentPublicInstance<HTMLElement>
      | HTMLSpanElement
      | HTMLElement
      | null
    content?: string
    id?: string
    title?: string
    delay?:
      | number
      | {
          show: number
          hide: number
        }
    click?: Booleanish
    manual?: Booleanish
    variant?: ColorVariant | null
    offset?: number | null
    customClass?: string
    placement?: BPopoverPlacement
    strategy?: Strategy
    floatingMiddleware?: Middleware[]
    noFlip?: Booleanish
    noShift?: Booleanish
    noFade?: Booleanish
    noAutoClose?: Booleanish
    hide?: Booleanish
    realtime?: Booleanish
    inline?: Booleanish
    tooltip?: Booleanish
    html?: Booleanish
  }>(),
  {
    floatingMiddleware: undefined,
    title: undefined,
    id: undefined,
    content: undefined,
    modelValue: false,
    container: undefined,
    customClass: '',
    placement: 'top',
    strategy: 'absolute',
    delay: () => ({show: 100, hide: 300}),
    click: false,
    manual: false,
    variant: null,
    offset: null,
    noFlip: false,
    noShift: false,
    noFade: false,
    noAutoClose: false,
    hide: true,
    realtime: false,
    inline: false,
    tooltip: false,
    html: false,
    reference: null,
    target: null,
  }
)

const emit = defineEmits<{
  'show': [value: BvTriggerableEvent]
  'shown': [value: BvTriggerableEvent]
  'hide': [value: BvTriggerableEvent]
  'hidden': [value: BvTriggerableEvent]
  'hide-prevented': []
  'show-prevented': []
  'update:modelValue': [value: boolean]
}>()

defineSlots<{
  target?: (props: {
    show: () => void
    hide: (e: Event) => void
    toggle: (e: Event) => void
    showState: boolean
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
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
  modelValueBoolean.value ? show() : hideFn(new Event('update:modelValue'))
})

const computedId = useId(() => props.id, 'popover')

const clickBoolean = useBooleanish(() => props.click)
const manualBoolean = useBooleanish(() => props.manual)
const noShiftBoolean = useBooleanish(() => props.noShift)
const noFlipBoolean = useBooleanish(() => props.noFlip)
const noFadeBoolean = useBooleanish(() => props.noFade)
const noAutoCloseBoolean = useBooleanish(() => props.noAutoClose)
const hideBoolean = useBooleanish(() => props.hide)
const realtimeBoolean = useBooleanish(() => props.realtime)
const inlineBoolean = useBooleanish(() => props.inline)
const tooltipBoolean = useBooleanish(() => props.tooltip)
const isHtml = useBooleanish(() => props.html)
const hidden = ref(false)

const element = ref<HTMLElement | null>(null)
const targetTrigger = ref<HTMLElement | null>(null)
const arrow = ref<HTMLElement | null>(null)
const trigger = ref<HTMLElement | null>(null)
const placeholder = ref<HTMLElement | null>(null)

const cleanElementProp = (
  target:
    | (() => HTMLElement | VNode)
    | string
    | ComponentPublicInstance<HTMLElement>
    | HTMLElement
    | undefined
): HTMLElement | string | undefined => {
  if (typeof target === 'string') {
    return target
  }
  if (target instanceof HTMLElement) {
    return target
    // eslint-disable-next-line
  }
  if (typeof target === 'function')
    return (target() as ComponentPublicInstance<HTMLElement>).$el
      ? (target() as ComponentPublicInstance<HTMLElement>).$el
      : target()
  if (typeof target !== 'undefined')
    return (target as ComponentPublicInstance<HTMLElement>).$el as HTMLElement
  return undefined
}

const getElement = (element: HTMLElement | string | undefined): HTMLElement | undefined => {
  if (!element) return undefined
  if (typeof element === 'string') {
    const idElement = document.getElementById(element)
    return idElement ? idElement : undefined
  }
  return element
}

const sanitizedTitle = computed(() =>
  props.title ? sanitizeHtml(props.title, DefaultAllowlist) : ''
)

const sanitizedContent = computed(() =>
  props.content ? sanitizeHtml(props.content, DefaultAllowlist) : ''
)
const isAutoPlacement = computed(() => props.placement.startsWith('auto'))

const floatingMiddleware = computed<Middleware[]>(() => {
  if (props.floatingMiddleware !== undefined) {
    return props.floatingMiddleware
  }
  const off = typeof props.offset === 'number' ? props.offset : tooltipBoolean.value ? 0 : 10
  const arr: Middleware[] = [offsetMiddleware(off)]
  if (noFlipBoolean.value === false && !isAutoPlacement.value) {
    arr.push(flip())
  }
  if (isAutoPlacement.value) {
    arr.push(
      autoPlacement({
        alignment: (props.placement.split('-')[1] as Alignment) || undefined,
      })
    )
  }
  if (noShiftBoolean.value === false) {
    arr.push(shift())
  }
  if (hideBoolean.value === true) {
    arr.push(hideMiddleware({padding: 10}))
  }
  if (inlineBoolean.value === true) {
    arr.push(inlineMiddleware())
  }
  arr.push(arrowMiddleware({element: arrow, padding: 10}))
  return arr
})

const placementRef = computed(() =>
  isAutoPlacement.value ? undefined : (props.placement as OriginalPlacement)
)

const {x, y, strategy, middlewareData, placement, update} = useFloating(targetTrigger, element, {
  placement: placementRef,
  middleware: floatingMiddleware,
  strategy: props.strategy,
  whileElementsMounted: (...args) => {
    const cleanup = autoUpdate(...args, {animationFrame: realtimeBoolean.value})
    // Important! Always return the cleanup function.
    return cleanup
  },
})

const arrowStyle = ref<CSSProperties>({position: 'absolute'})

watch(middlewareData, () => {
  if (hideBoolean.value === true) {
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
  showState.value ? hideFn(event) : show()
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
    setTimeout(
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

const hideFn = (e: Event) => {
  const event = buildTriggerableEvent('hide', {cancelable: true})
  emit('hide', event)
  if (event.defaultPrevented) {
    emit('hide-prevented')
    return
  }
  const delay = typeof props.delay === 'number' ? props.delay : props.delay?.hide || 100
  setTimeout(() => {
    if (
      e?.type === 'click' ||
      (e?.type === 'update:modelValue' && manualBoolean.value) ||
      (isOutside.value &&
        triggerIsOutside.value &&
        !element.value?.contains(document?.activeElement))
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
      setTimeout(() => {
        hideFn(e)
      }, delay)
    }
  }, delay)
}

defineExpose({
  hide: hideFn,
  show,
  toggle,
})

const bind = () => {
  // TODO: is this the best way to bind the events?
  // we place a span and get the next element sibling fo rthe listeners
  if (props.target) {
    const elem = getElement(cleanElementProp(props.target))
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
    const elem = getElement(cleanElementProp(props.reference))
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
  clickBoolean.value && trigger.value.addEventListener('click', toggle)
  !clickBoolean.value && trigger.value.addEventListener('pointerenter', show)
  !clickBoolean.value && trigger.value.addEventListener('pointerleave', hideFn)
  !clickBoolean.value && trigger.value.addEventListener('focus', show)
  !clickBoolean.value && trigger.value.addEventListener('blur', hideFn)
}

const unbind = () => {
  if (trigger.value) {
    trigger.value.removeEventListener('click', toggle)
    trigger.value.removeEventListener('pointerenter', show)
    trigger.value.removeEventListener('pointerleave', hideFn)
    trigger.value.removeEventListener('focus', show)
    trigger.value.removeEventListener('blur', hideFn)
  }
}

onClickOutside(
  element,
  () => {
    if (showState.value && clickBoolean.value && !noAutoCloseBoolean.value && !manualBoolean.value)
      hideFn(new Event('clickOutside'))
  },
  {ignore: [trigger]}
)

watch([() => props.click, () => props.target, () => props.reference], () => {
  unbind()
  bind()
})

onMounted(bind)

onBeforeUnmount(unbind)
</script>
