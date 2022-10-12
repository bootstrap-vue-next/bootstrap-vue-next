<template>
  <div
    class="carousel-item"
    :class="{active: activeBoolean}"
    :data-bs-interval="interval"
    :style="computedAttr"
  >
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
import {useBooleanish} from '../../composables'
import {computed, inject, toRef, useSlots} from 'vue'
import type {Booleanish} from '../../types'
import type {BCarouselParentData} from '../../types/components'
import {injectionKey} from './BCarousel.vue'
import BImg from '../BImg.vue'
import {isEmptySlot} from '../../utils'

interface BCarouselSlideProps {
  imgSrc?: string
  imgHeight?: string | number
  imgWidth?: string | number
  interval?: string | number
  active?: Booleanish
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
  active: false,
  captionTag: 'h3',
  contentTag: 'div',
  imgBlank: false,
  imgBlankColor: 'transparent',
  textTag: 'p',
})

const slots = useSlots()

const parentData = inject<BCarouselParentData>(injectionKey, {})

// instead of using this property, it would be nice to use `startingSlide`
// of the parent Carousel in order to set the proper active slide
const activeBoolean = useBooleanish(toRef(props, 'active'))

const hasDefaultSlot = computed<boolean>(() => !isEmptySlot(slots.default))

const computedAttr = computed(() => ({
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
</script>
