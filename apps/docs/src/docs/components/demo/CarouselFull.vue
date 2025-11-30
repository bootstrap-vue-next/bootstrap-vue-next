<template>
  <!-- #region template -->
  <BCarousel controls indicators>
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=40">
      <h1>First slide</h1>
      <p>Some more detailed description or whatever content.</p>
    </BCarouselSlide>
    <BCarouselSlide
      caption="Second slide"
      text="Does the same, just a bit differently."
      img-src="https://picsum.photos/1024/480/?image=41"
    />
    <BCarouselSlide>
      <template #img>
        <BImg
          width="1024"
          height="480"
          src="https://picsum.photos/1024/480/?image=42"
          alt="image slot"
        />
      </template>
      <h1>Third slide</h1>
      <p>Constains a customized background image</p>
    </BCarouselSlide>
    <BCarouselSlide
      img-width="1024"
      img-height="480"
      img-blank
      img-blank-color="pink"
      img-alt="Blank image"
    >
      <h1>Fourth slide</h1>
      <p>No background image</p>
    </BCarouselSlide>
  </BCarousel>
  <!-- #endregion template -->
</template>
