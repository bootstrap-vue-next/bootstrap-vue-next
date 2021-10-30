<template>
  <div
    class="carousel-item"
    :class="{active}"
    :style="{
      background: 'rgb(171, 171, 171) none repeat scroll 0% 0%',
    }"
  >
    <slot name="img">
      <img
        class="d-block w-100"
        :src="img"
        :width="imgWidth || width"
        :height="imgHeight || height"
      />
    </slot>
    <div v-if="caption || text || $slots.default" class="carousel-caption d-none d-md-block">
      <h5 v-if="caption">
        {{ caption }}
      </h5>
      <slot>
        <p v-if="text">
          {{ text }}
        </p>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, inject} from 'vue'
import {injectionKey, ParentData} from './BCarousel.vue'

export default defineComponent({
  name: 'BCarouselSlide',
  props: {
    active: {type: Boolean, default: false},
    caption: {type: String},
    imgBlank: {type: Boolean, default: false},
    imgHeight: {type: String},
    imgSrc: {type: String},
    imgWidth: {type: String},
    text: {type: String},
    interval: {type: [String, Number]},
  },
  setup(props) {
    const parentData = inject<ParentData>(injectionKey, {})
    const imgBlank =
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221024%22%20height%3D%22480%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20%25%7Bw%7D%20%25%7Bh%7D%22%20preserveAspectRatio%3D%22none%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22fill%3Atransparent%3B%22%3E%3C%2Frect%3E%3C%2Fsvg%3E'

    const img = computed(() => (props.imgBlank ? imgBlank : props.imgSrc))

    return {
      width: parentData.width,
      height: parentData.height,
      img,
    }
  },
})
</script>
