<template>
  <BCarousel ref="myCarousel">
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=37" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=38" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=39" />
  </BCarousel>

  <BButtonGroup class="mt-3">
    <BButton
      variant="danger"
      @click="prev"
      >Previous Slide</BButton
    >
    <BButton
      variant="success"
      @click="next"
      >Next Slide</BButton
    >
  </BButtonGroup>
</template>

<script setup lang="ts">
import {BCarousel} from 'bootstrap-vue-next/components/BCarousel'
import {useTemplateRef} from 'vue'

const myCarousel = useTemplateRef('myCarousel')

const prev = () => myCarousel.value?.prev()
const next = () => myCarousel.value?.next()
</script>
