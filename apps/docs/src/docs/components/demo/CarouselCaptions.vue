<template>
  <!-- #region template -->
  <BCarousel controls indicators>
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=7" caption="First Caption" />
    <BCarouselSlide
      img-src="https://picsum.photos/1024/480/?image=8"
      caption-html="<h1>Second Caption</h1>"
    />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=9">
      <template #caption> Third Caption </template>
    </BCarouselSlide>
  </BCarousel>
  <!-- #endregion template -->
</template>
