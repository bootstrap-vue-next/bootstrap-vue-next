<template>
  <BCarousel
    v-model="slide"
    controls
  >
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=1" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=2" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=3" />
  </BCarousel>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const slide = ref(0)
</script>
