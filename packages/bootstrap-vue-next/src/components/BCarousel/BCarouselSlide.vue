<template>
  <div :class="computedClasses" @animationstart="doStuff" @animationend="doStuff">
    <slot name="img">
      <b-img
        class="d-block w-100"
        :alt="imgAlt"
        :src="imgSrc"
        :width="imgWidth || parentWidth"
        :height="imgHeight || parentHeight"
        :blank="imgBlank"
        :blank-color="imgBlankColor"
      />
    </slot>
    <component
      :is="contentTag"
      v-if="caption || captionHtml || text || textHtml || hasDefaultSlot"
      class="carousel-caption"
      :class="computedContentClasses"
    >
      <component :is="captionTag" v-if="caption || captionHtml">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-if="captionHtml" v-html="captionHtml" />
        <span v-else>{{ caption }}</span>
      </component>
      <component :is="textTag" v-if="text || textHtml">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-if="textHtml" v-html="textHtml" />
        <span v-else>{{ text }}</span>
      </component>
      <slot />
    </component>
  </div>
</template>

<script setup lang="ts">
// import type {BCarouselSlideProps} from '../../types/components'
import {computed, inject, onUnmounted, readonly, ref, StyleValue, useSlots, watchEffect} from 'vue'
import type {Booleanish} from '../../types'
import BImg from '../BImg.vue'
import {carouselInjectionKey, carouselRegistryKey, isEmptySlot} from '../../utils'

interface BCarouselSlideProps {
  imgSrc?: string
  imgHeight?: string | number
  imgWidth?: string | number
  interval?: string | number
  background?: string
  caption?: string
  captionHtml?: string
  captionTag?: string
  contentTag?: string
  contentVisibleUp?: string
  id?: string
  imgAlt?: string
  imgBlank?: Booleanish
  imgBlankColor?: string
  text?: string
  textHtml?: string
  textTag?: string
}

const props = withDefaults(defineProps<BCarouselSlideProps>(), {
  captionTag: 'h3',
  contentTag: 'div',
  imgBlank: false,
  imgBlankColor: 'transparent',
  textTag: 'p',
})

const slots = useSlots()

const self = Symbol()

const parentData = inject(carouselInjectionKey, {})

const register = inject(carouselRegistryKey, () => ({
  isActive: computed(() => false),
  unregister: () => ({}),
  done: () => ({}),
  isEntering: computed(() => false),
  isLeaving: computed(() => false),
  direction: readonly(ref('start')),
}))

const {isActive, direction, unregister, isEntering, isLeaving, done} = register(self)

const computedClasses = computed(() => [
  'carousel-item',
  {
    active: isActive.value,
    [`carousel-item-${direction.value === 'start' ? 'next' : 'prev'}`]: isEntering.value,
    [`carousel-item-${direction.value}`]: isEntering.value || isLeaving.value,
  },
])

watchEffect(() => {
  if (isEntering.value === true) {
    setTimeout(() => {
      console.log('done')
      done()
    }, 600)
  }
})

const doStuff = () => {
  console.log('do stuff')
}

const hasDefaultSlot = computed<boolean>(() => !isEmptySlot(slots.default))

const computedStyle = computed<StyleValue>(() => ({
  background: `${
    props.background || parentData.background || 'rgb(171, 171, 171)'
  } none repeat scroll 0% 0%`,
}))

const computedContentClasses = computed(() => ({
  'd-none': props.contentVisibleUp !== undefined,
  [`d-${props.contentVisibleUp}-block`]: props.contentVisibleUp !== undefined,
}))

const parentWidth = computed<string | undefined>(() => parentData.width)
const parentHeight = computed<string | undefined>(() => parentData.height)

onUnmounted(unregister)
</script>
