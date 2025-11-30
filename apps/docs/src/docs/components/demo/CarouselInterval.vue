<template>
  <BCarousel :interval="slideInterval" controls indicators ride="carousel">
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=19" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=20" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=21" />
  </BCarousel>

  <BButtonGroup>
    <BButton variant="danger" @click="slideInterval = slideInterval - 1000"> Minus 1000 </BButton>
    <BButton variant="success" @click="slideInterval = slideInterval + 1000"> Plus 1000 </BButton>
  </BButtonGroup>

  Current Interval Speed: {{ slideInterval }} ms
</template>

<script setup lang="ts">
import {ref} from 'vue'

const slideInterval = ref(5000)
</script>
