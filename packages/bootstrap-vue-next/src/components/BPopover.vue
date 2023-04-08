<template>
  <span ref="placeholder" />
  <slot name="target" v-bind="{show, hide, toggle, showState}" />
  <!-- TODO: fix this clunky solution when https://github.com/vuejs/core/issues/6152 is fixed -->
  <teleport v-if="container" :to="container">
    <div
      :id="id"
      v-bind="$attrs"
      ref="element"
      :class="computedClasses"
      role="tooltip"
      tabindex="-1"
      :style="{
        position: strategy,
        top: `${y ?? 0}px`,
        left: `${x ?? 0}px`,
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
  </teleport>
  <div
    v-else
    :id="id"
    v-bind="$attrs"
    ref="element"
    :class="computedClasses"
    role="tooltip"
    tabindex="-1"
    :style="{
      position: strategy,
      top: `${y ?? 0}px`,
      left: `${x ?? 0}px`,
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
</template>

<script lang="ts" setup>
import {
  arrow as arrowMiddleware,
  autoUpdate,
  flip,
  hide as hideMiddleware,
  inline,
  type Middleware,
  offset,
  type Placement,
  shift,
  type Strategy,
  useFloating,
} from '@floating-ui/vue'
import {BvTriggerableEvent, IS_BROWSER, resolveBootstrapPlacement} from '../utils'
import {DefaultAllowlist, sanitizeHtml} from '../utils/sanitizer'
import {onClickOutside, useMouseInElement} from '@vueuse/core'

import {
  type ComponentPublicInstance,
  computed,
  type CSSProperties,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  toRef,
  type VNode,
  watch,
  watchEffect,
} from 'vue'
import {useBooleanish, useId} from '../composables'
import type {Booleanish, ColorVariant} from '../types'

interface DelayObject {
  show: number
  hide: number
}

interface BPopoverProps {
  modelValue?: Booleanish
  container?: string | ComponentPublicInstance<HTMLElement> | HTMLElement | null
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
  delay?: number | DelayObject
  click?: Booleanish
  manual?: Booleanish
  variant?: ColorVariant
  offset?: number | null
  customClass?: string
  placement?: Placement
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
}

const props = withDefaults(defineProps<BPopoverProps>(), {
  floatingMiddleware: undefined,
  title: undefined,
  id: undefined,
  content: undefined,
  modelValue: false,
  container: null,
  customClass: '',
  placement: 'top',
  strategy: 'absolute',
  delay: () => ({show: 100, hide: 300}),
  click: false,
  manual: false,
  variant: undefined,
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
})

interface BPopoverEmits {
  (e: 'show', value: BvTriggerableEvent): void
  (e: 'shown', value: BvTriggerableEvent): void
  (e: 'hide', value: BvTriggerableEvent): void
  (e: 'hidden', value: BvTriggerableEvent): void
  (e: 'hide-prevented'): void
  (e: 'show-prevented'): void
  (e: 'update:modelValue', value: boolean): void
}

const emit = defineEmits<BPopoverEmits>()

const modelValueBoolean = useBooleanish(toRef(props, 'modelValue'))
const showState = ref(modelValueBoolean.value)
watchEffect(() => {
  emit('update:modelValue', showState.value)
})

watch(modelValueBoolean, () => {
  if (modelValueBoolean.value === showState.value) return
  modelValueBoolean.value ? show() : hide(new Event('update:modelValue'))
})

const computedId = useId(toRef(props, 'id'), 'popover')

const clickBoolean = useBooleanish(toRef(props, 'click'))
const manualBoolean = useBooleanish(toRef(props, 'manual'))
const noShiftBoolean = useBooleanish(toRef(props, 'noShift'))
const noFlipBoolean = useBooleanish(toRef(props, 'noFlip'))
const noFadeBoolean = useBooleanish(toRef(props, 'noFade'))
const noAutoCloseBoolean = useBooleanish(toRef(props, 'noAutoClose'))
const hideBoolean = useBooleanish(toRef(props, 'hide'))
const realtimeBoolean = useBooleanish(toRef(props, 'realtime'))
const inlineBoolean = useBooleanish(toRef(props, 'inline'))
const tooltipBoolean = useBooleanish(toRef(props, 'tooltip'))
const isHtml = useBooleanish(toRef(props, 'html'))
const hidden = ref(false)

const element = ref<HTMLElement | null>(null)
const target = ref<HTMLElement | null>(null)
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

const floatingMiddleware = computed<Middleware[]>(() => {
  if (props.floatingMiddleware !== undefined) {
    return props.floatingMiddleware
  }
  const off = props.offset ? props.offset : tooltipBoolean.value ? 0 : 10
  const arr: Middleware[] = [offset(off)]
  if (noFlipBoolean.value === false) {
    arr.push(flip())
  }
  if (noShiftBoolean.value === false) {
    arr.push(shift())
  }
  if (hideBoolean.value === true) {
    arr.push(hideMiddleware({padding: 10}))
  }
  if (inlineBoolean.value === true) {
    arr.push(inline())
  }
  arr.push(arrowMiddleware({element: arrow, padding: 10}))
  return arr
})

const placementRef = computed(() => props.placement)

const {x, y, strategy, middlewareData, placement, update} = useFloating(target, element, {
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
      [`b-${type}-${props.variant}`]: props.variant !== undefined,
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

const show = () => {
  const event = buildTriggerableEvent('show', {cancelable: true})
  emit('show', event)
  if (event.defaultPrevented) {
    emit('show-prevented')
    return
  }
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
}

const hide = (e: Event) => {
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
      (isOutside.value &&
        triggerIsOutside.value &&
        !element.value?.contains(document?.activeElement))
    ) {
      showState.value = false
      nextTick(() => {
        emit('hidden', buildTriggerableEvent('hidden'))
      })
    } else {
      setTimeout(() => {
        hide(e)
      }, delay)
    }
  }, delay)
}

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
      target.value = elem
    } else {
      // eslint-disable-next-line no-console
      console.warn('Reference element not found', props.reference)
    }
  } else {
    target.value = trigger.value
  }
  if (!trigger.value || manualBoolean.value) {
    return
  }
  if (!IS_BROWSER) return
  clickBoolean.value && trigger.value.addEventListener('click', toggle)
  !clickBoolean.value && trigger.value.addEventListener('pointerenter', show)
  !clickBoolean.value && trigger.value.addEventListener('pointerleave', hide)
  !clickBoolean.value && trigger.value.addEventListener('focus', show)
  !clickBoolean.value && trigger.value.addEventListener('blur', hide)
}

const unbind = () => {
  if (trigger.value) {
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

watch(
  () => [props.click, props.target, props.reference],
  () => {
    unbind()
    bind()
  }
)

onMounted(bind)

onBeforeUnmount(unbind)
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
