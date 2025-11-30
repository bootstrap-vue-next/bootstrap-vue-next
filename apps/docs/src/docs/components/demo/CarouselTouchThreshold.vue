<template>
  <BCarousel :touch-threshold="slideThreshold">
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=31" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=32" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=33" />
  </BCarousel>
  <BButtonGroup class="mt-3">
    <BButton variant="danger" @click="slideThreshold = slideThreshold - 10">Decrease</BButton>
    <BButton variant="success" @click="slideThreshold = slideThreshold + 10">Increase</BButton>
  </BButtonGroup>
  Threshold: {{ slideThreshold }}
</template>

<script setup lang="ts">
import {ref} from 'vue'
const slideThreshold = ref(50)
</script>
