<template>
  <div :id="computedId" ref="element" class="carousel slide" data-bs-ride="carousel">
    <div v-if="indicatorsBoolean" class="carousel-indicators">
      <button
        v-for="(slide, i) of slides"
        :key="i"
        type="button"
        :data-bs-target="`#${computedId}`"
        :data-bs-slide-to="i"
        :class="i === 0 ? 'active' : ''"
        aria-current="true"
        :aria-label="`Slide ${i}`"
      />
    </div>

    <div class="carousel-inner">
      <slot />
    </div>

    <template v-if="controlsBoolean">
      <button
        class="carousel-control-prev"
        type="button"
        :data-bs-target="`#${computedId}`"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true" />
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        :data-bs-target="`#${computedId}`"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true" />
        <span class="visually-hidden">Next</span>
      </button>
    </template>
  </div>
</template>

<script setup lang="ts">
// import type {BCarouselProps, BCarouselEmits} from '../types/components'
import type {BCarouselParentData} from '../../types/components'
import {InjectionKey, onMounted, provide, ref, toRef, useSlots, VNode} from 'vue'
import Carousel from 'bootstrap/js/dist/carousel'
import {useBooleanish, useEventListener, useId} from '../../composables'
import type {Booleanish} from '../../types'

interface BCarouselProps {
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
}

const props = withDefaults(defineProps<BCarouselProps>(), {
  modelValue: 0,
  controls: false,
  indicators: false,
  interval: 5000,
  noTouch: false,
  noWrap: false,
})

const controlsBoolean = useBooleanish(toRef(props, 'controls'))
const indicatorsBoolean = useBooleanish(toRef(props, 'indicators'))
const noTouchBoolean = useBooleanish(toRef(props, 'noTouch'))
// TODO no wrap is never used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const noWrapBoolean = useBooleanish(toRef(props, 'noWrap'))

interface BCarouselEmits {
  (e: 'sliding-start', value: Event): void
  (e: 'sliding-end', value: Event): void
}

const emit = defineEmits<BCarouselEmits>()

const slots = useSlots()

const element = ref<HTMLElement>()
const instance = ref<Carousel>()
const computedId = useId(props.id, 'accordion')
const slides = ref<VNode[]>([])

useEventListener(element, 'slide.bs.carousel', (payload) => emit('sliding-start', payload))
useEventListener(element, 'slid.bs.carousel', (payload) => emit('sliding-end', payload))

onMounted(() => {
  instance.value = new Carousel(element.value as HTMLElement, {
    wrap: !noTouchBoolean.value,
    interval: props.interval,
    touch: !noTouchBoolean.value,
  })

  if (slots.default) {
    slides.value = slots.default().filter((child: any) => child.type?.name === 'BCarouselSlide')
  }
})

provide(injectionKey, {
  background: props.background,
  width: props.imgWidth,
  height: props.imgHeight,
})
</script>

<script lang="ts">
export const injectionKey: InjectionKey<BCarouselParentData> = Symbol()
</script>
