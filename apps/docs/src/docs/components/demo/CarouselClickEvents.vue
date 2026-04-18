<template>
  <BCarousel controls indicators :interval="0" @prev-click="onPrev" @next-click="onNext">
    <BCarouselSlide caption="First slide" img-src="https://picsum.photos/1024/480/?image=50" />
    <BCarouselSlide caption="Second slide" img-src="https://picsum.photos/1024/480/?image=51" />
    <BCarouselSlide caption="Third slide" img-src="https://picsum.photos/1024/480/?image=52" />
  </BCarousel>

  <div class="mt-3">
    <div>Previous-click count: {{ prevCount }}</div>
    <div>Next-click count: {{ nextCount }}</div>
    <div>
      Last event: <code>{{ lastEvent || '—' }}</code>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const prevCount = ref(0)
const nextCount = ref(0)
const lastEvent = ref('')

const onPrev = () => {
  prevCount.value += 1
  lastEvent.value = 'prev-click'
}
const onNext = () => {
  nextCount.value += 1
  lastEvent.value = 'next-click'
}
</script>
