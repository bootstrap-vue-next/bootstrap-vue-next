<template>
  <div class="carousel-item" :style="computedStyle">
    <slot name="img">
      <b-img
        class="d-block w-100"
        :alt="imgAlt"
        :src="imgSrc"
        :width="imgWidth || parentData?.width"
        :height="imgHeight || parentData?.height"
        :blank="imgBlank"
        :blank-color="imgBlankColor"
      />
    </slot>
    <component
      :is="contentTag"
      v-if="hasContent"
      class="carousel-caption"
      :class="computedContentClasses"
    >
      <component :is="captionTag" v-if="hasCaption">
        <slot name="caption">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <span v-if="captionHtml" v-html="captionHtml" />
          <span v-else>{{ caption }}</span>
        </slot>
      </component>
      <component :is="textTag" v-if="hasText">
        <slot name="text">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <span v-if="textHtml" v-html="textHtml" />
          <span v-else>{{ text }}</span>
        </slot>
      </component>
      <slot />
    </component>
  </div>
</template>

<script setup lang="ts">
// import type {BCarouselSlideProps} from '../../types/components'
import {computed, inject, StyleValue, useSlots} from 'vue'
import type {Booleanish} from '../../types'
import type {BCarouselParentData} from '../../types/components'
import {carouselInjectionKey, isEmptySlot} from '../../utils'
import BImg from '../BImg.vue'

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

// TODO interval is unused
// Need to add https://getbootstrap.com/docs/5.3/components/carousel/#individual-carousel-item-interval
// Perhaps a provide/inject with next/prev values where the component can call those would work.

const props = withDefaults(defineProps<BCarouselSlideProps>(), {
  captionTag: 'h3',
  contentTag: 'div',
  imgBlank: false,
  imgBlankColor: 'transparent',
  textTag: 'p',
})

const slots = useSlots()

const parentData = inject<BCarouselParentData>(carouselInjectionKey)

const hasText = computed(() => props.text || props.textHtml || !isEmptySlot(slots.text))
const hasCaption = computed(() => props.caption || props.captionHtml || !isEmptySlot(slots.caption))
const hasContent = computed(() => hasText.value || hasCaption.value || !isEmptySlot(slots.default))

const computedStyle = computed<StyleValue>(() => ({
  background: `${
    props.background || parentData?.background || 'rgb(171, 171, 171)'
  } none repeat scroll 0% 0%`,
}))

const computedContentClasses = computed(() => ({
  'd-none': props.contentVisibleUp !== undefined,
  [`d-${props.contentVisibleUp}-block`]: props.contentVisibleUp !== undefined,
}))
</script>
