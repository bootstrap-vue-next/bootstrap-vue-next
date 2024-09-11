<template>
  <BCarousel v-model="slide" indicators>
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=34" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=35" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=36" />
  </BCarousel>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const slide = ref(2)
</script>
