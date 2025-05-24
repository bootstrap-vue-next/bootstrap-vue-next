<template>
  <span :id="computedId + '_placeholder'" ref="_placeholder" style="display: none" />
  <slot name="target" v-bind="sharedSlots" />
  <ConditionalTeleport
    :to="props.teleportTo"
    :disabled="!props.teleportTo || props.teleportDisabled"
  >
    <Transition
      v-if="renderRef || contentShowing"
      v-bind="transitionProps"
      :appear="modelValue || props.visible"
    >
      <div
        v-show="showRef && !hidden"
        :id="computedId"
        v-bind="attrs"
        ref="_element"
        :class="computedClasses"
        role="tooltip"
        tabindex="-1"
        :style="floatingStyles"
      >
        <div
          ref="_arrow"
          :class="`${props.tooltip ? 'tooltip' : 'popover'}-arrow`"
          :style="arrowStyle"
          data-popper-arrow
        />
        <div ref="_content" class="overflow-auto" :style="sizeStyles">
          <template v-if="props.title || slots.title">
            <div
              class="position-sticky top-0"
              :class="[props.tooltip ? 'tooltip-inner' : 'popover-header', props.titleClass]"
            >
              <slot name="title" v-bind="sharedSlots">
                {{ props.title }}
              </slot>
            </div>
          </template>
          <template v-if="(props.tooltip && !slots.title && !props.title) || !props.tooltip">
            <div :class="[props.tooltip ? 'tooltip-inner' : 'popover-body', props.bodyClass]">
              <slot v-bind="sharedSlots">{{ props.body }}{{ attrs.content }}</slot>
            </div>
          </template>
        </div>
      </div>
    </Transition>
  </ConditionalTeleport>
</template>

<script setup lang="ts">
import {
  type Alignment,
  arrow as arrowMiddleware,
  autoPlacement,
  autoUpdate,
  type Boundary,
  flip,
  type Placement as FloatingPlacement,
  hide as hideMiddleware,
  inline as inlineMiddleware,
  type Middleware,
  offset as offsetMiddleware,
  type ReferenceElement,
  type RootBoundary,
  shift,
  size as sizeMiddleware,
  useFloating,
} from '@floating-ui/vue'
import {onClickOutside, useToNumber} from '@vueuse/core'
import {
  computed,
  type CSSProperties,
  type EmitFn,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  toRef,
  toValue,
  useAttrs,
  useTemplateRef,
  watch,
} from 'vue'
import {useDefaults} from '../../composables/useDefaults'
import {useMouse} from '../../composables/useMouse'
import {useId} from '../../composables/useId'
import type {BPopoverProps} from '../../types/ComponentProps'
import type {BPopoverEmits} from '../../types/ComponentEmits'
import type {BPopoverSlots, ShowHideSlotsData} from '../../types/ComponentSlots'
import {isBoundary, isRootBoundary, resolveBootstrapPlacement} from '../../utils/floatingUi'
import {getElement} from '../../utils/getElement'
import ConditionalTeleport from '../ConditionalTeleport.vue'
import {useShowHide} from '../../composables/useShowHide'

defineOptions({
  inheritAttrs: false,
})

const attrs = useAttrs()

// TODO: deprication remove warning in 2025-06
if (attrs.content)
  // eslint-disable-next-line no-console
  console.warn(
    'BPopover/BTooltip: `content` prop is deprecated. Use prop body or default slot instead.'
  )

const _props = withDefaults(defineProps<Omit<BPopoverProps, 'modelValue'>>(), {
  boundary: 'clippingAncestors',
  boundaryPadding: undefined,
  bodyClass: undefined,
  click: false,
  closeOnHide: false,
  teleportTo: undefined,
  teleportDisabled: false,
  body: undefined,
  delay: () => ({show: 100, hide: 300}),
  floatingMiddleware: undefined,
  hideMargin: 2,
  id: undefined,
  initialAnimation: false,
  inline: false,
  lazy: false,
  manual: false,
  noAutoClose: false,
  noFade: false,
  noFlip: false,
  noHide: false,
  noShift: false,
  noSize: false,
  noninteractive: false,
  offset: null,
  unmountLazy: false,
  placement: 'top',
  realtime: false,
  reference: null,
  strategy: 'absolute',
  target: null,
  title: undefined,
  titleClass: undefined,
  show: false,
  tooltip: false,
  visible: false,
})

const props = useDefaults(_props, 'BPopover')

const emit = defineEmits<BPopoverEmits>()

const slots = defineSlots<BPopoverSlots>()

const modelValue = defineModel<Exclude<BPopoverProps['modelValue'], undefined>>({
  default: false,
})

const computedId = useId(() => props.id, 'popover')

const hidden = ref(false)

const floatingElement = useTemplateRef<HTMLElement>('_element')
const content = useTemplateRef<HTMLElement>('_content')
const arrow = useTemplateRef<HTMLElement>('_arrow')
const placeholder = useTemplateRef<HTMLElement>('_placeholder')

const referenceElement = ref<HTMLElement | null>(null)
const triggerElement = ref<HTMLElement | null>(null)

const isAutoPlacement = computed(() => props.placement.startsWith('auto'))
const offsetNumber = useToNumber(() => props.offset ?? NaN)

const boundary = computed<Boundary | undefined>(() =>
  isBoundary(props.boundary) ? props.boundary : undefined
)
const rootBoundary = computed<RootBoundary | undefined>(() =>
  isRootBoundary(props.boundary) ? props.boundary : undefined
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
            maxHeight:
              availableHeight >= (content.value?.scrollHeight ?? 0)
                ? undefined
                : availableHeight
                  ? `${Math.max(0, availableHeight)}px`
                  : undefined,
            maxWidth:
              availableWidth >= (content.value?.scrollWidth ?? 0)
                ? undefined
                : availableWidth
                  ? `${Math.max(0, availableWidth)}px`
                  : undefined,
          }
        },
      })
    )
  }
  return arr
})

const placementRef = computed(() =>
  isAutoPlacement.value ? undefined : (props.placement as FloatingPlacement)
)

const {floatingStyles, middlewareData, placement, update} = useFloating(
  referenceElement,
  floatingElement,
  {
    placement: placementRef,
    middleware: floatingMiddleware,
    strategy: toRef(() => props.strategy),
  }
)

const arrowStyle = ref<CSSProperties>({position: 'absolute'})

watch(middlewareData, (newValue) => {
  if (props.noHide === false) {
    if (newValue.hide?.referenceHidden && !hidden.value && showRef.value) {
      if (props.closeOnHide && !props.noAutoClose && !props.manual) {
        throttleHide('close-on-hide')
      } else {
        localTemporaryHide.value = true
        hidden.value = true
      }
    } else if (localTemporaryHide.value && !newValue.hide?.referenceHidden) {
      localTemporaryHide.value = false
      hidden.value = false
    }
  }
  if (newValue.arrow) {
    const {x, y} = newValue.arrow
    arrowStyle.value = {
      position: 'absolute',
      top: y ? `${y}px` : '',
      left: x ? `${x}px` : '',
    }
  }
})

let cleanup: ReturnType<typeof autoUpdate> | undefined
const {
  showRef,
  hide,
  show,
  toggle,
  throttleHide,
  computedNoAnimation,
  transitionProps,
  contentShowing,
  isVisible,
  isActive,
  renderRef,
  localTemporaryHide,
} = useShowHide(modelValue, props, emit as EmitFn, floatingElement, computedId, {
  showFn: () => {
    update()
    nextTick(() => {
      cleanup = autoUpdate(
        referenceElement.value as ReferenceElement,
        floatingElement.value as HTMLElement,
        update,
        {animationFrame: props.realtime}
      )
    })
  },
  hideFn: () => {
    if (cleanup) {
      cleanup()
      cleanup = undefined
    }
  },
})

const computedClasses = computed(() => {
  const type = props.tooltip ? 'tooltip' : 'popover'
  return [
    type,
    `b-${type}`,
    {
      show: isVisible.value && !hidden.value,
      fade: !computedNoAnimation.value,
      [`bs-${type}-${resolveBootstrapPlacement(placement.value)}`]: placement.value !== undefined,
    },
  ]
})

const {x, y} = useMouse()

const isElementAndTriggerOutside = () => {
  const triggerRect = triggerElement.value?.getBoundingClientRect()
  const elementRect = floatingElement.value?.getBoundingClientRect()
  const margin = parseInt(props.hideMargin as unknown as string, 10) || 0
  const offsetX = window?.scrollX || 0
  const offsetY = window?.scrollY || 0
  const triggerIsOutside =
    !triggerRect ||
    x.value < triggerRect.left + offsetX - margin ||
    x.value > triggerRect.right + offsetX + margin ||
    y.value < triggerRect.top + offsetY - margin ||
    y.value > triggerRect.bottom + offsetY + margin

  const isOutside =
    !elementRect ||
    x.value < elementRect.left + offsetX - margin ||
    x.value > elementRect.right + offsetX + margin ||
    y.value < elementRect.top + offsetY - margin ||
    y.value > elementRect.bottom + offsetY + margin

  return {triggerIsOutside, isOutside}
}

let looptimeout: ReturnType<typeof setTimeout> | undefined
const tryHide = (e?: Readonly<Event>) => {
  const {triggerIsOutside, isOutside} = isElementAndTriggerOutside()
  if (
    (!props.noninteractive &&
      isOutside &&
      triggerIsOutside &&
      !floatingElement.value?.contains(document?.activeElement) &&
      !triggerElement.value?.contains(document?.activeElement)) ||
    (props.noninteractive && triggerIsOutside)
  ) {
    hide(e?.type)
  } else {
    if (looptimeout) clearTimeout(looptimeout)
    looptimeout = setTimeout(() => {
      tryHide(e)
    }, 50)
  }
}

watch(isVisible, () => {
  update()
})

defineExpose({
  hide,
  show,
  toggle,
})

const localToggle = (e: Event) => {
  if (showRef.value) {
    hide(e.type === 'click' ? 'click' : 'toggle')
  } else {
    show()
  }
}

const localShow = () => {
  show()
}

const bind = () => {
  // TODO: is this the best way to bind the events?
  // we place a span and get the next element sibling for the listeners
  if (props.target) {
    const elem = getElement(toValue(props.target))
    if (elem) {
      triggerElement.value = elem
    } else {
      // eslint-disable-next-line no-console
      console.warn('Target element not found', props.target)
    }
  } else {
    triggerElement.value = placeholder.value?.nextElementSibling as HTMLElement
  }
  if (props.reference) {
    const elem = getElement(toValue(props.reference))
    if (elem) {
      referenceElement.value = elem
    } else {
      // eslint-disable-next-line no-console
      console.warn('Reference element not found', props.reference)
    }
  } else {
    referenceElement.value = triggerElement.value
  }
  if (!triggerElement.value || props.manual) {
    return
  }
  if (props.click) {
    triggerElement.value.addEventListener('click', localToggle)
    return
  }
  triggerElement.value.addEventListener('pointerenter', localShow)
  triggerElement.value.addEventListener('pointerleave', tryHide)
  triggerElement.value.addEventListener('focus', localShow)
  triggerElement.value.addEventListener('blur', tryHide)
}

const unbind = () => {
  if (triggerElement.value) {
    triggerElement.value.removeEventListener('click', localToggle)
    triggerElement.value.removeEventListener('pointerenter', localShow)
    triggerElement.value.removeEventListener('pointerleave', tryHide)
    triggerElement.value.removeEventListener('focus', localShow)
    triggerElement.value.removeEventListener('blur', tryHide)
  }
}

onClickOutside(
  floatingElement,
  () => {
    if (showRef.value && props.click && !props.noAutoClose && !props.manual) hide('click-outside')
  },
  {ignore: [triggerElement]}
)

watch([() => props.click, () => props.manual, () => props.target, () => props.reference], () => {
  unbind()
  bind()
  // update()
})

const sharedSlots = computed<ShowHideSlotsData>(() => ({
  toggle,
  show,
  hide,
  id: computedId.value,
  visible: isVisible.value,
  active: isActive.value,
}))

onMounted(() => {
  bind()
  nextTick(() => {
    update()
  })
})

onBeforeUnmount(unbind)
</script>
