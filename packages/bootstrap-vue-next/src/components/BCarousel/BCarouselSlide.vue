<template>
  <div class="carousel-item" :style="computedStyle">
    <slot name="img">
      <BImg
        class="d-block w-100"
        :alt="props.imgAlt"
        :srcset="props.imgSrcset"
        :src="props.imgSrc"
        :width="props.imgWidth || parentData?.width.value"
        :height="props.imgHeight || parentData?.height.value"
        :blank="props.imgBlank"
        :blank-color="props.imgBlankColor"
      />
    </slot>
    <component
      :is="props.contentTag"
      v-if="hasContent"
      class="carousel-caption"
      :class="computedContentClasses"
    >
      <component :is="props.captionTag" v-if="hasCaption">
        <slot name="caption">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <span v-if="props.captionHtml" v-html="props.captionHtml" />
          <span v-else>{{ props.caption }}</span>
        </slot>
      </component>
      <component :is="props.textTag" v-if="hasText">
        <slot name="text">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <span v-if="props.textHtml" v-html="props.textHtml" />
          <span v-else>{{ props.text }}</span>
        </slot>
      </component>
      <slot />
    </component>
  </div>
</template>

<script setup lang="ts">
import {computed, type CSSProperties, inject, toRef} from 'vue'
import type {BCarouselSlideProps} from '../../types'
import {carouselInjectionKey, isEmptySlot} from '../../utils'
import BImg from '../BImg.vue'
import {useDefaults} from '../../composables'

const _props = withDefaults(defineProps<BCarouselSlideProps>(), {
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
})
const props = useDefaults(_props, 'BCarouselSlide')

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
