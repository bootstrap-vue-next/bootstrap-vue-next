<template>
  <div :id="computedId" ref="element" class="carousel slide pointer-event" :class="computedClasses">
    <div v-if="indicatorsBoolean" class="carousel-indicators">
      <!-- :data-bs-target="`#${computedId}`" is required since the classes target elems with that attr -->
      <button
        v-for="(_, i) in slides.length"
        :key="i"
        type="button"
        data-bs-target=""
        :class="i === modelValue ? 'active' : ''"
        :aria-current="i === modelValue ? true : undefined"
        :aria-label="`${indicatorsButtonLabel} ${i}`"
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
      >
        <component
          :is="slide"
          v-for="(slide, i) in slides"
          v-show="i === modelValue"
          :key="i"
          :class="{active: i === modelValue && isTransitioning === false}"
        />
      </TransitionGroup>
    </div>

    <template v-if="controlsBoolean">
      <button class="carousel-control-prev" type="button" @click="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true" />
        <span class="visually-hidden">{{ controlsPrevText }}</span>
      </button>
      <button class="carousel-control-next" type="button" @click="next">
        <span class="carousel-control-next-icon" aria-hidden="true" />
        <span class="visually-hidden">{{ controlsNextText }}</span>
      </button>
    </template>
  </div>
</template>

<script setup lang="ts">
import {BvCarouselEvent, carouselInjectionKey, getSlotElements} from '../../utils'
import {computed, provide, ref, toRef, watch} from 'vue'
import {useBooleanish, useId} from '../../composables'
import type {Booleanish} from '../../types'
import {
  onKeyStroke,
  useElementHover,
  useIntervalFn,
  useSwipe,
  useToNumber,
  useVModel,
} from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    background?: string
    controls?: Booleanish
    controlsNextText?: string
    controlsPrevText?: string
    fade?: Booleanish
    id?: string
    imgHeight?: string
    imgWidth?: string
    indicators?: Booleanish
    indicatorsButtonLabel?: string
    interval?: number | string
    keyboard?: Booleanish
    modelValue?: number
    noHoverPause?: Booleanish
    noTouch?: Booleanish
    noWrap?: Booleanish
    ride?: Booleanish | 'carousel'
    rideReverse?: Booleanish
    touchThreshold?: number | string
  }>(),
  {
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
    modelValue: 0,
    noHoverPause: false,
    noTouch: false,
    noWrap: false,
    // eslint-disable-next-line vue/require-valid-default-prop
    ride: false,
    rideReverse: false,
    touchThreshold: 50,
  }
)

const emit = defineEmits<{
  'slide': [value: BvCarouselEvent]
  'slid': [value: BvCarouselEvent]
  'update:modelValue': [value: number]
}>()

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const computedId = useId(() => props.id, 'carousel')

const modelValue = useVModel(props, 'modelValue', emit, {passive: true})

const keyboardBoolean = useBooleanish(() => props.keyboard)
const rideReverseBoolean = useBooleanish(() => props.rideReverse)
const noHoverPauseBoolean = useBooleanish(() => props.noHoverPause)
const fadeBoolean = useBooleanish(() => props.fade)
const controlsBoolean = useBooleanish(() => props.controls)
const indicatorsBoolean = useBooleanish(() => props.indicators)
const noTouchBoolean = useBooleanish(() => props.noTouch)
const noWrapBoolean = useBooleanish(() => props.noWrap)
const touchThresholdNumber = useToNumber(() => props.touchThreshold)
const intervalNumber = useToNumber(() => props.interval)
const rideResolved = useBooleanish(() => props.ride)

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
    rideReverseBoolean.value ? prev() : next()
  },
  intervalNumber,
  {immediate: rideResolved.value === 'carousel'}
)

const isRiding = toRef(
  () =>
    (rideResolved.value === true && rideStarted.value === true) || rideResolved.value === 'carousel'
)
const slides = computed(() => getSlotElements(slots.default, 'BCarouselSlide'))
const computedClasses = computed(() => ({'carousel-fade': fadeBoolean.value}))
// TODO a general idea of showing only slides that are in bounds
// const localValue = computed(() =>
//   props.modelValue >= slides.value.length
//     ? slides.value.length - 1
//     : props.modelValue < 0
//     ? 0
//     : props.modelValue
// )

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

  if (rideResolved.value === true) {
    rideStarted.value = true
  }
  if (isRiding.value === true) {
    resume()
  }
  direction.value = value < modelValue.value ? false : true
  if (value >= slides.value.length) {
    if (noWrapBoolean.value) return
    modelValue.value = 0
    return
  }
  if (value < 0) {
    if (noWrapBoolean.value) return
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
  if (keyboardBoolean.value === false) return
  fn()
}

const onMouseEnter = () => {
  if (noHoverPauseBoolean.value) return
  pause()
}
const onMouseLeave = () => {
  if (!isRiding.value) return
  resume()
}

const {lengthX} = useSwipe(element, {
  passive: true,
  onSwipeStart() {
    if (noTouchBoolean.value === true) return
    pause()
  },
  onSwipeEnd() {
    if (noTouchBoolean.value === true) return
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
const onAfterEnter = (el: Element) => {
  if (modelValue.value !== 0) {
    el.classList.add('carousel-item')
  }
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

watch(rideResolved, () => {
  rideStarted.value = false
})

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
