<template>
  <BCarousel
    ref="myCarousel"
    :interval="2500"
    controls
    indicators
    ride="carousel"
  >
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=25" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=26" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=27" />
  </BCarousel>

  <BButtonGroup>
    <BButton
      variant="danger"
      @click="pause"
      >Pause</BButton
    >
    <BButton
      variant="success"
      @click="resume"
      >Resume</BButton
    >
  </BButtonGroup>
</template>

<script setup lang="ts">
import {BCarousel} from 'bootstrap-vue-next/components/BCarousel'
import {useTemplateRef} from 'vue'

const myCarousel = useTemplateRef('myCarousel')
const pause = () => myCarousel.value?.pause()
const resume = () => myCarousel.value?.resume()
</script>
