<template>
  <div :id="computedId" ref="element" class="carousel slide" data-bs-ride="carousel">
    <div v-if="indicators" class="carousel-indicators">
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

    <template v-if="controls">
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

<script lang="ts">
import {defineComponent, InjectionKey, onMounted, provide, ref, VNode} from 'vue'
import {Carousel} from 'bootstrap'
import useEventListener from '../../composables/useEventListener'
import useId from '../../composables/useId'

export interface ParentData {
  background?: string
  width?: string
  height?: string
}

export const injectionKey: InjectionKey<ParentData> = Symbol()

export default defineComponent({
  name: 'BCarousel',
  props: {
    background: {type: String, required: false},
    modelValue: {type: Number, default: 0},
    controls: {type: Boolean, default: false},
    id: {type: String},
    imgHeight: {type: String},
    imgWidth: {type: String},
    indicators: {type: Boolean, default: false},
    interval: {type: Number, default: 5000},
    noTouch: {type: Boolean, default: false},
    noWrap: {type: Boolean, default: false},
  },
  emits: ['sliding-start', 'sliding-end'],
  setup(props, {slots, emit}) {
    const element = ref<HTMLElement>()
    const instance = ref<Carousel>()
    const computedId = useId(props.id, 'accordion')
    const slides = ref<VNode[]>([])

    useEventListener(element, 'slide.bs.carousel', (payload) => emit('sliding-start', payload))
    useEventListener(element, 'slid.bs.carousel', (payload) => emit('sliding-end', payload))

    onMounted(() => {
      instance.value = new Carousel(element.value as HTMLElement, {
        wrap: !props.noTouch,
        interval: props.interval,
        touch: !props.noTouch,
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

    return {
      element,
      computedId,
      slides,
    }
  },
})
</script>
