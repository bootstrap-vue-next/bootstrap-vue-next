<template>
  <div class="carousel-item" :style="computedStyle">
    <slot name="img">
      <BImg
        class="d-block w-100"
        :alt="imgAlt"
        :srcset="imgSrcset"
        :src="imgSrc"
        :width="imgWidth || parentData?.width.value"
        :height="imgHeight || parentData?.height.value"
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
import {computed, type CSSProperties, inject, toRef} from 'vue'
import type {Booleanish} from '../../types'
import {carouselInjectionKey, isEmptySlot} from '../../utils'
import BImg from '../BImg.vue'

// TODO interval is unused
// Need to add https://getbootstrap.com/docs/5.3/components/carousel/#individual-carousel-item-interval
// Perhaps a provide/inject with next/prev values where the component can call those would work.

const props = withDefaults(
  defineProps<{
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
    imgHeight?: string | number
    imgSrc?: string
    imgSrcset?: string | string[]
    imgWidth?: string | number
    interval?: string | number
    text?: string
    textHtml?: string
    textTag?: string
  }>(),
  {
    background: undefined,
    caption: undefined,
    captionHtml: undefined,
    captionTag: 'h3',
    contentTag: 'div',
    contentVisibleUp: undefined,
    id: undefined,
    imgAlt: undefined,
    imgBlank: false,
    imgBlankColor: 'transparent',
    imgHeight: undefined,
    imgSrc: undefined,
    imgSrcset: undefined,
    imgWidth: undefined,
    interval: undefined,
    text: undefined,
    textHtml: undefined,
    textTag: 'p',
  }
)

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  caption?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  text?: (props: Record<string, never>) => any
}>()

const parentData = inject(carouselInjectionKey, null)

const hasText = toRef(() => props.text || props.textHtml || !isEmptySlot(slots.text))
const hasCaption = toRef(() => props.caption || props.captionHtml || !isEmptySlot(slots.caption))
const hasContent = toRef(() => hasText.value || hasCaption.value || !isEmptySlot(slots.default))

const computedStyle = computed<CSSProperties>(() => ({
  background: `${
    props.background || parentData?.background.value || 'rgb(171, 171, 171)'
  } none repeat scroll 0% 0%`,
}))

const computedContentClasses = computed(() => ({
  'd-none': props.contentVisibleUp !== undefined,
  [`d-${props.contentVisibleUp}-block`]: props.contentVisibleUp !== undefined,
}))
</script>
