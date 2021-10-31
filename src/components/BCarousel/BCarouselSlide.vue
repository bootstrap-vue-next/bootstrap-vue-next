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
        :width="imgWidth || width"
        :height="imgHeight || height"
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

<script lang="ts">
import useId from '../../composables/useId'
import {computed, defineComponent, inject} from 'vue'
import {injectionKey, ParentData} from './BCarousel.vue'

export default defineComponent({
  name: 'BCarouselSlide',
  props: {
    active: {type: Boolean, default: false},
    background: {type: String, required: false},
    caption: {type: String, required: false},
    captionHtml: {type: String, required: false},
    captionTag: {type: String, default: 'h3'},
    contentTag: {type: String, default: 'div'},
    contentVisibleUp: {type: String, required: false},
    id: {type: String, required: false},
    imgAlt: {type: String, required: false},
    imgBlank: {type: Boolean, default: false},
    imgBlankColor: {type: String, default: 'transparent'},
    imgHeight: {type: String},
    imgSrc: {type: String},
    imgWidth: {type: String},
    interval: {type: [String, Number]},
    text: {type: String, required: false},
    textHtml: {type: String, required: false},
    textTag: {type: String, default: 'p'},
  },
  setup(props) {
    const parentData = inject<ParentData>(injectionKey, {})
    const computedId = useId(props.id, 'accordion')
    const img = computed(() => (props.imgBlank ? props.imgBlank : props.imgSrc))

    const computedAttr = computed(() => ({
      background: `${
        props.background || parentData.background || 'rgb(171, 171, 171)'
      } none repeat scroll 0% 0%`,
    }))

    const computedContentClasses = computed(() => ({
      'd-none': props.contentVisibleUp,
      [`d-${props.contentVisibleUp}-block`]: props.contentVisibleUp,
    }))
    const showText = computed(() => props.text && !props.textHtml)
    const showTextAsHtml = computed(() => props.textHtml)
    const showCaption = computed(() => props.caption && !props.captionHtml)
    const showCaptionAsHtml = computed(() => props.captionHtml)

    return {
      computedAttr,
      computedContentClasses,
      computedId,
      height: parentData.height,
      img,
      showCaption,
      showCaptionAsHtml,
      showText,
      showTextAsHtml,
      width: parentData.width,
    }
  },
})
</script>
