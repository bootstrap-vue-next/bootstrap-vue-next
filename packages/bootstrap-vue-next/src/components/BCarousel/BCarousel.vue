<template>
  <div :id="computedId" class="carousel slide">
    <div v-if="indicatorsBoolean" class="carousel-indicators">
      <!-- :data-bs-target="`#${computedId}`" is required since the classes target elems with that attr -->
      <button
        v-for="(_, i) in slotsLength"
        :key="i"
        type="button"
        data-bs-target=""
        :class="i === modelValue ? 'active' : ''"
        :aria-current="i === modelValue ? 'true' : undefined"
        :aria-label="`${indicatorsButtonLabel} ${i}`"
        @click="goToValue(i)"
      />
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
import {carouselInjectionKey, carouselRegistryKey} from '../../utils'
import {computed, provide, ref, toRef, useSlots} from 'vue'
import {useBooleanish, useId} from '../../composables'
import type {Booleanish} from '../../types'

interface BCarouselProps {
  startingSlide?: number
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
}

const props = withDefaults(defineProps<BCarouselProps>(), {
  startingSlide: 0,
  modelValue: 0,
  controls: false,
  indicators: false,
  interval: 5000,
  noTouch: false,
  noWrap: false,
  controlsNextText: 'Next',
  controlsPrevText: 'Previous',
  indicatorsButtonLabel: 'Slide',
})

interface BCarouselEmits {
  (e: 'sliding-start', value: Event): void
  (e: 'sliding-end', value: Event): void
  (e: 'update:modelValue', value: number): void
}
// TODO FUCK all this
//  Do this instead https://skirtles-code.github.io/vue-examples/components/tabs.html#tabs-example
const emit = defineEmits<BCarouselEmits>()

const slots = useSlots()

const computedId = useId(toRef(props, 'id'), 'carousel')

const controlsBoolean = useBooleanish(toRef(props, 'controls'))
const indicatorsBoolean = useBooleanish(toRef(props, 'indicators'))
// TODO no wrap is never used, I'm not sure how to implement that
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const noTouchBoolean = useBooleanish(toRef(props, 'noTouch'))
const noWrapBoolean = useBooleanish(toRef(props, 'noWrap'))

const activeSlide = ref<null | symbol>(null)
const slides = ref<Array<symbol>>([])

const slotsLength = computed(() => slots.default?.().length ?? 0)

const goToValue = (value: number) => emit('update:modelValue', value)

const prev = () => {
  if (props.modelValue === 0) {
    if (noWrapBoolean.value === true) return
    goToValue(slotsLength.value - 1)
    return
  }
  goToValue(props.modelValue - 1)
}

const next = () => {
  if (props.modelValue === slotsLength.value - 1) {
    if (noWrapBoolean.value === true) return
    goToValue(0)
    return
  }
  goToValue(props.modelValue + 1)
}

provide(carouselRegistryKey, (slide: symbol) => {
  slides.value.push(slide)
  return {
    isActive: computed(() => activeSlide.value === slide),
    unregister() {
      const index = slides.value.indexOf(slide)
      slides.value.splice(index, 1)
      const [first] = slides.value
      if (activeSlide.value === slide && first !== undefined) {
        activeSlide.value = first
      }
    },
  }
})

provide(carouselInjectionKey, {
  background: props.background,
  width: props.imgWidth,
  height: props.imgHeight,
})
</script>
