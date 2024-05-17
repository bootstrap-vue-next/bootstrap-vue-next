<template>
  <div :id="computedId" ref="element" class="carousel slide pointer-event" :class="computedClasses">
    <div v-if="props.indicators" class="carousel-indicators">
      <!-- :data-bs-target="`#${computedId}`" is required since the classes target elems with that attr -->
      <button
        v-for="(_, i) in slides.length"
        :key="i"
        type="button"
        data-bs-target=""
        :class="i === modelValue ? 'active' : ''"
        :aria-current="i === modelValue ? true : undefined"
        :aria-label="`${props.indicatorsButtonLabel} ${i}`"
        @click="goToValue(i)"
      />
    </div>

    <div ref="relatedTarget" class="carousel-inner">
      <TransitionGroup
        :enter-from-class="enterClasses"
        :enter-active-class="enterClasses"
        :enter-to-class="enterClasses"
        :leave-from-class="leaveClasses"
        :leave-active-class="leaveClasses"
        :leave-to-class="leaveClasses"
        @before-leave="onBeforeLeave"
        @after-leave="onAfterLeave"
        @after-enter="onAfterEnter"
        @enter="onEnter"
      >
        <component
          :is="slide"
          v-for="(slide, i) in slides"
          v-show="i === modelValue"
          :key="i"
          ref="slideValues"
          :class="{active: i === modelValue && isTransitioning === false}"
        />
      </TransitionGroup>
    </div>

    <template v-if="props.controls">
      <button class="carousel-control-prev" type="button" @click="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true" />
        <span class="visually-hidden">{{ props.controlsPrevText }}</span>
      </button>
      <button class="carousel-control-next" type="button" @click="next">
        <span class="carousel-control-next-icon" aria-hidden="true" />
        <span class="visually-hidden">{{ props.controlsNextText }}</span>
      </button>
    </template>
  </div>
</template>

<script setup lang="ts">
import {BvCarouselEvent, carouselInjectionKey, getSlotElements} from '../../utils'
import {computed, onMounted, provide, ref, toRef, watch} from 'vue'
import {useDefaults, useId} from '../../composables'
import type {BCarouselProps, Numberish} from '../../types'
import {onKeyStroke, useElementHover, useIntervalFn, useSwipe, useToNumber} from '@vueuse/core'
import type BCarouselSlide from './BCarouselSlide.vue'

const _props = withDefaults(defineProps<BCarouselProps>(), {
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
  keyboard: true,
  noHoverPause: false,
  noTouch: false,
  noWrap: false,
  // eslint-disable-next-line vue/require-valid-default-prop
  ride: false,
  rideReverse: false,
  touchThreshold: 50,
})
const props = useDefaults(_props, 'BCarousel')

const emit = defineEmits<{
  slide: [value: BvCarouselEvent]
  slid: [value: BvCarouselEvent]
}>()

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const computedId = useId(() => props.id, 'carousel')

const modelValue = defineModel<number>({default: 0})

const slideValues = ref<null | InstanceType<typeof BCarouselSlide>[]>(null)

const touchThresholdNumber = useToNumber(() => props.touchThreshold)
const slideInterval = ref<Numberish | null>(null)
onMounted(() => {
  slideInterval.value =
    slideValues.value?.find((slid) => slid.$el.style.display !== 'none')?.$props.interval ?? null
})
const intervalNumber = useToNumber(() => slideInterval.value ?? props.interval)

const isTransitioning = ref(false)
const rideStarted = ref(false)
const direction = ref(true)
const relatedTarget = ref<HTMLElement | null>(null)
const element = ref<HTMLElement | null>(null)
const previousModelValue = ref(modelValue.value)

const isHovering = useElementHover(element)

// Class carousel-item is a static property
// If you make it static, the direction can be reversed -- properly (atm it does the carousel-item-${} logic backwards for entering, a weird hack)
// So all that would be great. However, when you do this, it will break the transition flow. Something about it breaks and I'm not sure why!
// Try it by removing carousel-item from below and making `!direction.value` => `direction.value` for enter
// Then reviewing the behavior
const enterClasses = toRef(
  () =>
    `carousel-item carousel-item-${!direction.value ? 'next' : 'prev'} carousel-item-${
      !direction.value ? 'start' : 'end'
    }`
)
const leaveClasses = toRef(
  () => `carousel-item active carousel-item-${direction.value ? 'start' : 'end'}`
)

const {pause, resume} = useIntervalFn(
  () => {
    props.rideReverse ? prev() : next()
  },
  intervalNumber,
  {immediate: props.ride === 'carousel'}
)

const isRiding = toRef(
  () => (props.ride === true && rideStarted.value === true) || props.ride === 'carousel'
)
const slides = computed(() => getSlotElements(slots.default, 'BCarouselSlide'))
const computedClasses = computed(() => ({'carousel-fade': props.fade}))

const buildBvCarouselEvent = (event: 'slid' | 'slide') =>
  new BvCarouselEvent(event, {
    componentId: computedId.value,
    cancelable: false,
    target: element.value,
    direction: direction.value ? 'right' : 'left',
    from: previousModelValue.value,
    to: modelValue.value,
    relatedTarget: relatedTarget.value?.children[modelValue.value] ?? null,
  })

const goToValue = (value: number): void => {
  if (isTransitioning.value === true) return

  if (props.ride === true) {
    rideStarted.value = true
  }
  if (isRiding.value === true) {
    resume()
  }
  direction.value = value < modelValue.value ? false : true
  if (value >= slides.value.length) {
    if (props.noWrap) return
    modelValue.value = 0
    return
  }
  if (value < 0) {
    if (props.noWrap) return
    modelValue.value = slides.value.length - 1
    return
  }
  previousModelValue.value = modelValue.value
  modelValue.value = value
}

const prev = (): void => {
  goToValue(modelValue.value - 1)
}
const next = (): void => {
  goToValue(modelValue.value + 1)
}

const onKeydown = (fn: () => void) => {
  if (props.keyboard === false) return
  fn()
}

const onMouseEnter = () => {
  if (props.noHoverPause) return
  pause()
}
const onMouseLeave = () => {
  if (!isRiding.value) return
  resume()
}

const {lengthX} = useSwipe(element, {
  passive: true,
  onSwipeStart() {
    if (props.noTouch === true) return
    pause()
  },
  onSwipeEnd() {
    if (props.noTouch === true) return
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

const onBeforeLeave = () => {
  emit('slide', buildBvCarouselEvent('slide'))
  isTransitioning.value = true
}
const onAfterLeave = () => {
  emit('slid', buildBvCarouselEvent('slid'))
  isTransitioning.value = false
}
// carousel-item class is removed from the slide during the transition,
// as is included within enter classes.
// The first slide recovers carousel-item class,
const onAfterEnter = (el: Readonly<Element>) => {
  if (modelValue.value !== 0) {
    el.classList.add('carousel-item')
  }
}
const onEnter = (el: Readonly<Element>) => {
  slideInterval.value = slideValues.value?.find((slid) => slid.$el === el)?.$props.interval ?? null
}

onKeyStroke(
  'ArrowLeft',
  () => {
    onKeydown(prev)
  },
  {target: element}
)
onKeyStroke(
  'ArrowRight',
  () => {
    onKeydown(next)
  },
  {target: element}
)

watch(
  () => props.ride,
  () => {
    rideStarted.value = false
  }
)

watch(isHovering, (newValue) => {
  if (newValue) {
    onMouseEnter()
    return
  }
  onMouseLeave()
})

defineExpose({
  next,
  pause,
  prev,
  resume,
})

provide(carouselInjectionKey, {
  background: toRef(() => props.background),
  width: toRef(() => props.imgWidth),
  height: toRef(() => props.imgHeight),
})
</script>
