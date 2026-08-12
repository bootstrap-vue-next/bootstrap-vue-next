<template>
  <div id="carousel-page">
    <BCarousel>
      <BCarouselSlide
        img-src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%230d6efd'/%3E%3C/svg%3E"
        caption="Slide 1"
      />
      <BCarouselSlide
        img-src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%236c757d'/%3E%3C/svg%3E"
        caption="Slide 2"
      />
    </BCarousel>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'CarouselPage' })
</script>
