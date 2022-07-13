<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    :id="computedId"
    class="carousel-item"
    :class="{active}"
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
      v-if="caption || captionHtml || text || textHtml || $slots.default"
      class="carousel-caption"
      :class="computedContentClasses"
    >
      <component :is="captionTag" v-if="caption || captionHtml">
        <span v-if="showCaption">{{ caption }}</span>
        <span v-if="showCaptionAsHtml" v-html="captionHtml"></span>
      </component>
      <component :is="textTag" v-if="text || textHtml">
        <span v-if="showText">{{ text }}</span>
        <span v-if="showTextAsHtml" v-html="textHtml"></span>
      </component>
      <slot> </slot>
    </component>
  </div>
</template>

<script setup lang="ts">
// import type {BCarouselSlideProps} from '../../types/components'
import useId from '../../composables/useId'
import {computed, inject} from 'vue'
import type {BCarouselParentData} from '../../types/components'
import {injectionKey} from './BCarousel.vue'

interface BCarouselSlideProps {
  imgSrc?: string
  imgHeight?: string
  imgWidth?: string
  interval?: string | number
  active?: boolean
  background?: string
  caption?: string
  captionHtml?: string
  captionTag?: string
  contentTag?: string
  contentVisibleUp?: string
  id?: string
  imgAlt?: string
  imgBlank?: boolean
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

const parentData = inject<BCarouselParentData>(injectionKey, {})
const computedId = useId(props.id, 'accordion')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const img = computed<string | true | undefined>(() =>
  props.imgBlank ? props.imgBlank : props.imgSrc
)

const computedAttr = computed(() => ({
  background: `${
    props.background || parentData.background || 'rgb(171, 171, 171)'
  } none repeat scroll 0% 0%`,
}))

const computedContentClasses = computed(() => ({
  'd-none': props.contentVisibleUp,
  [`d-${props.contentVisibleUp}-block`]: props.contentVisibleUp,
}))
const showText = computed<boolean | '' | undefined>(() => props.text && !props.textHtml)
const showTextAsHtml = computed<string | undefined>(() => props.textHtml)
const showCaption = computed<boolean | '' | undefined>(() => props.caption && !props.captionHtml)
const showCaptionAsHtml = computed<string | undefined>(() => props.captionHtml)
const parentWidth = computed<string | undefined>(() => parentData.width)
const parentHeight = computed<string | undefined>(() => parentData.height)
</script>
