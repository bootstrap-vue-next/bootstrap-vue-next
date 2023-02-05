<template>
  <div
    :id="computedId"
    ref="target"
    :class="computedClasses"
    @keydown.left="onKeydown(prev)"
    @keydown.right="onKeydown(next)"
    @mouseenter.stop="onMouseEnter"
    @mouseleave.stop="onMouseLeave"
    @touchstart.passive="onTouchStart"
    @touchend.passive="onTouchEnd"
  >
    <div v-if="indicatorsBoolean" class="carousel-indicators">
      <!-- :data-bs-target="`#${computedId}`" is required since the classes target elems with that attr -->
      <button
        v-for="(_, i) in slides.length"
        :key="i"
        type="button"
        data-bs-target=""
        :class="i === modelValue ? 'active' : ''"
        :aria-current="i === modelValue ? 'true' : undefined"
        :aria-label="`${indicatorsButtonLabel} ${i}`"
        @click="goToValue(i)"
      />
    </div>

    <div ref="relatedTarget" class="carousel-inner">
      <transition
        v-for="(slide, i) in slides"
        :key="i"
        :enter-from-class="`carousel-item-next carousel-item-${direction ? 'end' : 'start'}`"
        leave-active-class="active"
        :leave-to-class="`carousel-item-prev carousel-item-${direction ? 'start' : 'end'}`"
        @before-leave="onBeforeLeave"
        @after-leave="onAfterLeave"
      >
        <component :is="slide" v-show="i === modelValue" :class="{active: i === modelValue}" />
      </transition>
    </div>

    <div class="carousel-inner">
      <slot />
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
// import type {BCarouselProps, BCarouselEmits} from '../types/components'
import {
  BvCarouselEvent,
  carouselInjectionKey,
  getSlotElements,
  isBooleanish,
  resolveBooleanish,
} from '../../utils'
import {computed, provide, ref, toRef, useSlots, watch} from 'vue'
import {useBooleanish, useId} from '../../composables'
import type {Booleanish} from '../../types'
import {useIntervalFn} from '@vueuse/core'

interface BCarouselProps {
  ride?: true | false | 'true' | 'false' | '' | 'carousel' // Booleanish | 'carousel'
  noHoverPause?: Booleanish
  rideReverse?: Booleanish
  fade?: Booleanish
  id?: string
  imgHeight?: string
  imgWidth?: string
  background?: string
  modelValue?: number
  controls?: Booleanish
  indicators?: Booleanish
  interval?: number
  noTouch?: Booleanish
  noWrap?: Booleanish
  controlsPrevText?: string
  controlsNextText?: string
  indicatorsButtonLabel?: string
  keyboard?: Booleanish
}

const props = withDefaults(defineProps<BCarouselProps>(), {
  ride: false,
  noHoverPause: false,
  rideReverse: false,
  modelValue: 0,
  fade: false,
  controls: false,
  indicators: false,
  keyboard: true,
  interval: 5000,
  noTouch: false,
  noWrap: false,
  controlsNextText: 'Next',
  controlsPrevText: 'Previous',
  indicatorsButtonLabel: 'Slide',
})

interface BCarouselEmits {
  (e: 'slid', value: BvCarouselEvent): void
  (e: 'slide', value: BvCarouselEvent): void
  (e: 'update:modelValue', value: number): void
}

const emit = defineEmits<BCarouselEmits>()

const slots = useSlots()

const computedId = useId(toRef(props, 'id'), 'carousel')

const keyboardBoolean = useBooleanish(toRef(props, 'keyboard'))
const rideReverseBoolean = useBooleanish(toRef(props, 'rideReverse'))
const noHoverPauseBoolean = useBooleanish(toRef(props, 'noHoverPause'))
const fadeBoolean = useBooleanish(toRef(props, 'fade'))
const controlsBoolean = useBooleanish(toRef(props, 'controls'))
const indicatorsBoolean = useBooleanish(toRef(props, 'indicators'))
const noTouchBoolean = useBooleanish(toRef(props, 'noTouch'))
const noWrapBoolean = useBooleanish(toRef(props, 'noWrap'))

let xDown: number | null = null
let yDown: number | null = null

const isTransitioning = ref(false)
const rideStarted = ref(false)
const direction = ref(true)
const relatedTarget = ref<null | HTMLElement>(null)
const target = ref<null | HTMLElement>(null)

const rideResolved = computed<boolean | 'carousel'>(() =>
  isBooleanish(props.ride) ? resolveBooleanish(props.ride) : props.ride
)

const {pause, resume} = useIntervalFn(
  () => {
    rideReverseBoolean.value ? prev() : next()
  },
  toRef(props, 'interval'),
  {immediate: rideResolved.value === 'carousel'}
)

const isRiding = computed(
  () =>
    (rideResolved.value === true && rideStarted.value === true) || rideResolved.value === 'carousel'
)
const slides = computed(() => getSlotElements(slots.default, 'BCarouselSlide'))
const computedClasses = computed(() => [
  'carousel',
  'slide',
  'pointer-event',
  {'carousel-fade': fadeBoolean.value},
])
// TODO a general idea of showing only slides that are in bounds
// const localValue = computed(() =>
//   props.modelValue >= slides.value.length
//     ? slides.value.length - 1
//     : props.modelValue < 0
//     ? 0
//     : props.modelValue
// )

const buildBvCarouselEvent = (event: 'slid' | 'slide', from: number) =>
  new BvCarouselEvent(event, {
    componentId: computedId.value,
    cancelable: false,
    target: target.value,
    direction: direction.value ? 'right' : 'left',
    from,
    to: props.modelValue,
    relatedTarget: relatedTarget.value?.children[props.modelValue] ?? null,
  })

const goToValue = (value: number): void => {
  if (isTransitioning.value === true) return

  if (rideResolved.value === true) {
    rideStarted.value = true
  }
  if (isRiding.value === true) {
    resume()
  }
  direction.value = value < props.modelValue ? false : true
  if (value >= slides.value.length) {
    if (noWrapBoolean.value) return
    emit('update:modelValue', 0)
    return
  }
  if (value < 0) {
    if (noWrapBoolean.value) return
    emit('update:modelValue', slides.value.length - 1)
    return
  }
  emit('update:modelValue', value)
}

const prev = (): void => goToValue(props.modelValue - 1)
const next = (): void => goToValue(props.modelValue + 1)

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

const onTouchStart = (e: TouchEvent) => {
  if (noTouchBoolean.value) return
  xDown = e.touches[0].clientX
  yDown = e.touches[0].clientY
  pause()
}
const onTouchEnd = (e: TouchEvent) => {
  if (!xDown || !yDown) return
  const xUp = e.touches[0].clientX
  const yUp = e.touches[0].clientY
  const xDiff = xDown - xUp
  const yDiff = yDown - yUp
  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    xDiff > 0 ? next() : prev()
  }
  xDown = null
  yDown = null
  if (isRiding.value === false) return
  resume()
}

const onBeforeLeave = (i: number) => {
  emit('slide', buildBvCarouselEvent('slide', i))
  isTransitioning.value = true
}
const onAfterLeave = (i: number) => {
  emit('slid', buildBvCarouselEvent('slid', i))
  isTransitioning.value = false
}

watch(
  () => props.ride,
  () => (rideStarted.value = false)
)

defineExpose({pause, resume, prev, next})

provide(carouselInjectionKey, {
  background: props.background,
  width: props.imgWidth,
  height: props.imgHeight,
})
</script>
