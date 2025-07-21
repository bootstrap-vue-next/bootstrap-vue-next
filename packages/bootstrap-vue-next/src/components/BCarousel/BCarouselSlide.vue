<template>
  <div :id="computedId" class="carousel-item" :style="computedStyle">
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
          <span>{{ props.caption }}</span>
        </slot>
      </component>
      <component :is="props.textTag" v-if="hasText">
        <slot name="text">
          <span>{{ props.text }}</span>
        </slot>
      </component>
      <slot />
    </component>
  </div>
</template>

<script setup lang="ts">
import {computed, type CSSProperties, inject, toRef} from 'vue'
import type {BCarouselSlideProps} from '../../types/ComponentProps'
import {carouselInjectionKey} from '../../utils/keys'
import BImg from '../BImg/BImg.vue'
import {useDefaults} from '../../composables/useDefaults'
import {isEmptySlot} from '../../utils/dom'
import {useId} from '../../composables/useId'
import {BCarouselSlideSlots} from '../../types/ComponentSlots'

const _props = withDefaults(defineProps<BCarouselSlideProps>(), {
  background: undefined,
  caption: undefined,
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
  textTag: 'p',
})
const props = useDefaults(_props, 'BCarouselSlide')
const slots = defineSlots<BCarouselSlideSlots>()

const computedId = useId(() => props.id, 'carousel-slide')
const parentData = inject(carouselInjectionKey, null)

const hasText = computed(() => props.text || !isEmptySlot(slots.text))
const hasCaption = computed(() => props.caption || !isEmptySlot(slots.caption))
const hasContent = computed(() => hasText.value || hasCaption.value || !isEmptySlot(slots.default))

const computedStyle = computed<CSSProperties>(() => ({
  background: `${
    props.background || parentData?.background.value || 'rgb(171, 171, 171)'
  } none repeat scroll 0% 0%`,
}))

const computedContentClasses = computed(() => ({
  'd-none': props.contentVisibleUp !== undefined,
  [`d-${props.contentVisibleUp}-block`]: props.contentVisibleUp !== undefined,
}))

defineExpose({
  _interval: toRef(() => props.interval),
  _id: computedId,
})
</script>
