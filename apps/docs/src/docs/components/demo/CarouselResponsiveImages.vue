<template>
  <!-- #region template -->
  <BCarousel controls indicators :interval="0">
    <BCarouselSlide
      caption="First slide"
      img-src="https://picsum.photos/1200/480?image=40"
      img-srcset="https://picsum.photos/400/160?image=40 400w,
                  https://picsum.photos/800/320?image=40 800w,
                  https://picsum.photos/1200/480?image=40 1200w"
    />
    <BCarouselSlide
      caption="Second slide"
      img-src="https://picsum.photos/1200/480?image=41"
      img-srcset="https://picsum.photos/400/160?image=41 400w,
                  https://picsum.photos/800/320?image=41 800w,
                  https://picsum.photos/1200/480?image=41 1200w"
    />
    <BCarouselSlide
      caption="Third slide"
      img-src="https://picsum.photos/1200/480?image=42"
      img-srcset="https://picsum.photos/400/160?image=42 400w,
                  https://picsum.photos/800/320?image=42 800w,
                  https://picsum.photos/1200/480?image=42 1200w"
    />
  </BCarousel>
  <!-- #endregion template -->
</template>
