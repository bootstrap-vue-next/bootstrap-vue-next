<template>
  <div id="carousel-page">
    <BCarousel>
      <BCarouselSlide
        img-src="https://example.com/img1.png"
        caption="Slide 1"
      />
      <BCarouselSlide
        img-src="https://example.com/img2.png"
        caption="Slide 2"
      />
    </BCarousel>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'CarouselPage' })
</script>
