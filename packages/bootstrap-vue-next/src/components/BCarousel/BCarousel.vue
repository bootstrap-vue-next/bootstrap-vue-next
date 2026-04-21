<template>
  <div
    :id="computedId"
    ref="_element"
    class="carousel slide pointer-event"
    :class="computedClasses"
  >
    <div
      v-if="props.indicators"
      class="carousel-indicators"
      :aria-label="props.labelIndicators"
      :aria-owns="buttonOwnership"
    >
      <!-- :data-bs-target="`#${computedId}`" is required since the classes target elems with that attr -->
      <button
        v-for="(_, i) in slides.length"
        :key="i"
        type="button"
        data-bs-target=""
        :class="i === modelValue ? 'active' : ''"
        :aria-current="i === modelValue ? true : undefined"
        :aria-label="`${props.indicatorsButtonLabel} ${i}`"
        :aria-controls="buttonOwnership"
        :aria-describedby="slideValues?.[i]?._id"
        @click="slideTo(i)"
      />
    </div>

    <div ref="_relatedTarget" class="carousel-inner">
      <TransitionGroup v-bind="transitionGroupProps">
        <component
          :is="slide"
          v-for="(slide, i) in slides"
          v-show="i === modelValue"
          :key="i"
          ref="_slideValues"
          :class="{active: i === modelValue && isTransitioning === false}"
          :style="props.noAnimation && {transition: 'none'}"
        />
      </TransitionGroup>
    </div>

    <template v-if="props.controls">
      <button class="carousel-control-prev" type="button" @click="onClickPrev">
        <span class="carousel-control-prev-icon" aria-hidden="true" />
        <span class="visually-hidden">{{ props.controlsPrevText }}</span>
      </button>
      <button class="carousel-control-next" type="button" @click="onClickNext">
        <span class="carousel-control-next-icon" aria-hidden="true" />
        <span class="visually-hidden">{{ props.controlsNextText }}</span>
      </button>
    </template>
  </div>
</template>

<script setup lang="ts">
import {BvCarouselEvent} from '../../utils'
import {computed, onMounted, provide, ref, toRef, useTemplateRef, watch} from 'vue'
import {useId} from '../../composables/useId'
import {onKeyStroke, useElementHover, useIntervalFn, useSwipe, useToNumber} from '@vueuse/core'
import type BCarouselSlide from './BCarouselSlide.vue'
import {useDefaults} from '../../composables/useDefaults'
import type {Numberish} from '../../types/CommonTypes'
import {getSlotElements} from '../../utils/getSlotElements'
import {carouselInjectionKey} from '../../utils/keys'
import type {BCarouselEmits, BCarouselProps, BCarouselSlots} from '../../types'

const _props = withDefaults(defineProps<Omit<BCarouselProps, 'modelValue'>>(), {
  background: undefined,
  controls: false,
  controlsNextText: 'Next',
  controlsPrevText: 'Previous',
  fade: false,
  id: undefined,
  imgHeight: undefined,
  imgWidth: undefined,
  indicators: false,
  indicatorsButtonLabel: 'Slide',
  interval: 5000,
  labelIndicators: 'Select a slide to display',
  keyboard: true,
  noAnimation: false,
  noHoverPause: false,
  noTouch: false,
  noWrap: false,
  ride: false,
  rideReverse: false,
  touchThreshold: 50,
})
const props = useDefaults(_props, 'BCarousel')
const emit = defineEmits<BCarouselEmits>()
const slots = defineSlots<BCarouselSlots>()

const computedId = useId(() => props.id, 'carousel')
const buttonOwnership = useId(undefined, 'carousel-button-ownership')

const modelValue = defineModel<Exclude<BCarouselProps['modelValue'], undefined>>({default: 0})

const slideValues = useTemplateRef<InstanceType<typeof BCarouselSlide>[]>('_slideValues')

const touchThresholdNumber = useToNumber(() => props.touchThreshold)
const slideInterval = ref<Numberish | null>(null)
onMounted(() => {
  slideInterval.value =
    slideValues.value?.find((slid) => slid.$el.style.display !== 'none')?._interval ?? null
})
const intervalNumber = useToNumber(() => slideInterval.value ?? props.interval)

const isTransitioning = ref(false)
const rideStarted = ref(false)
const direction = ref<'start' | 'end'>('start')
const relatedTarget = useTemplateRef('_relatedTarget')
const element = useTemplateRef('_element')

let previousModelValue = modelValue.value
let isInternalChange = false

const isHovering = useElementHover(element)

const {pause, resume} = useIntervalFn(
  () => {
    if (props.rideReverse) {
      prev()
      return
    }
    next()
  },
  intervalNumber,
  {immediate: props.ride === 'carousel'}
)

const isRiding = computed(
  () => (props.ride === true && rideStarted.value === true) || props.ride === 'carousel'
)
const slides = computed(() => getSlotElements(slots.default, 'BCarouselSlide'))
const computedClasses = computed(() => ({'carousel-fade': props.fade}))

const buildBvCarouselEvent = (event: 'slid' | 'slide') =>
  new BvCarouselEvent(event, {
    componentId: computedId.value,
    cancelable: false,
    target: element.value,
    direction: direction.value === 'start' ? 'right' : 'left',
    from: previousModelValue,
    to: modelValue.value,
    relatedTarget: relatedTarget.value?.children[modelValue.value] ?? null,
  })

watch(modelValue, (newValue, oldValue) => {
  if (!isInternalChange) {
    // External v-model change: determine direction from the new/old values
    const lastIndex = slides.value.length - 1
    const wrappedForward = oldValue === lastIndex && newValue === 0
    const wrappedBackward = oldValue === 0 && newValue === lastIndex
    if (wrappedForward) {
      direction.value = 'start'
    } else if (wrappedBackward) {
      direction.value = 'end'
    } else {
      direction.value = newValue > oldValue ? 'start' : 'end'
    }
  }
  isInternalChange = false
  // If one ever thinks to change the transitions dependence on modelValue and thinks it is appropriate to remove this isTransitioning line, be careful
  // This directly effects how transitions are applied. The watch is for if you have an external change to modelValue, and doesn't directly call slideTo
  isTransitioning.value = true
})
const slideTo = (value: number): void => {
  if (isTransitioning.value === true) return

  if (props.ride === true) {
    rideStarted.value = true
  }
  if (isRiding.value === true) {
    resume()
  }
  let nextValue = value
  if (nextValue >= slides.value.length) {
    if (props.noWrap) return
    nextValue = 0
  }
  if (nextValue < 0) {
    if (props.noWrap) return
    nextValue = slides.value.length - 1
  }
  if (nextValue === modelValue.value) return
  // Set direction based on the original requested value (before wrapping) so that
  // next() always animates forward and prev() always animates backward, regardless
  // of how many slides there are. This fixes the 2-slide case where wrap-detection
  // heuristics in the watcher would otherwise produce the wrong direction.
  // Note: `value` is the raw index passed by the caller (e.g. modelValue+1 for next()),
  // while `nextValue` is the resolved/wrapped index that becomes the new modelValue.
  direction.value = value > modelValue.value ? 'start' : 'end'
  // Mark as internal so the modelValue watcher skips its direction heuristics.
  // A race condition here is not possible because the isTransitioning guard above
  // ensures slideTo cannot be called again until the current transition completes.
  isInternalChange = true
  isTransitioning.value = true
  previousModelValue = modelValue.value
  modelValue.value = nextValue
}

const prev = (): void => {
  slideTo(modelValue.value - 1)
}
const next = (): void => {
  slideTo(modelValue.value + 1)
}

const {lengthX} = useSwipe(element, {
  passive: true,
  onSwipeStart() {
    if (props.noTouch) return
    pause()
  },
  onSwipeEnd() {
    if (props.noTouch) return
    const resumeRiding = () => {
      if (isRiding.value === false) return
      resume()
    }
    if (lengthX.value >= touchThresholdNumber.value) {
      next()
      resumeRiding()
      return
    }
    if (lengthX.value <= -touchThresholdNumber.value) {
      prev()
      resumeRiding()
    }
  },
})

const onClickPrev = (event: MouseEvent) => {
  emit('prev-click', event)
  if (event.defaultPrevented) return
  prev()
}
const onClickNext = (event: MouseEvent) => {
  emit('next-click', event)
  if (event.defaultPrevented) return
  next()
}

const onMouseEnter = () => {
  if (props.noHoverPause) return
  pause()
}
const onMouseLeave = () => {
  if (!isRiding.value) return
  resume()
}
watch(isHovering, (newValue) => {
  if (newValue) {
    onMouseEnter()
    return
  }
  onMouseLeave()
})
onKeyStroke(
  ['ArrowLeft', 'ArrowRight'],
  (event) => {
    if (!props.keyboard) return
    if (event.key === 'ArrowLeft') {
      prev()
    } else {
      next()
    }
  },
  {target: element, passive: true}
)

watch(
  () => props.ride,
  () => {
    rideStarted.value = false
  }
)

const enterDirectionClass = computed(
  () => `carousel-item-${direction.value === 'start' ? 'next' : 'prev'}`
)
const orderDirectionClass = computed(() => `carousel-item-${direction.value}`)
const transitionGroupProps = computed(() => ({
  enterFromClass: `carousel-item ${enterDirectionClass.value}`,
  enterActiveClass: `carousel-item ${enterDirectionClass.value}`,
  enterToClass: `carousel-item ${enterDirectionClass.value} ${orderDirectionClass.value}`,
  leaveFromClass: 'carousel-item active',
  leaveActiveClass: 'carousel-item active',
  leaveToClass: `carousel-item active ${orderDirectionClass.value}`,
  onBeforeLeave: () => {
    emit('slide', buildBvCarouselEvent('slide'))
  },
  onAfterLeave: () => {
    emit('slid', buildBvCarouselEvent('slid'))
    isTransitioning.value = false
  },
  // carousel-item class is removed from the slide during the transition,
  // as is included within enter classes.
  // The first slide recovers carousel-item class,
  onAfterEnter: (el: Readonly<Element>) => {
    if (modelValue.value !== 0) {
      el.classList.add('carousel-item')
    }
  },
  onEnter: (el: Readonly<Element>) => {
    slideInterval.value = slideValues.value?.find((slid) => slid.$el === el)?._interval ?? null
  },
}))

defineExpose({
  resume,
  pause,
  next,
  prev,
  slideTo,
})

provide(carouselInjectionKey, {
  background: toRef(() => props.background),
  width: toRef(() => props.imgWidth),
  height: toRef(() => props.imgHeight),
})
</script>
