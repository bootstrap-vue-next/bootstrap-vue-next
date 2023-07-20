<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <BCarousel
          id="carousel-1"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333"
        >
          <!-- Text slides with image -->
          <BCarouselSlide
            active
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="https://picsum.photos/1024/480/?image=52"
          />

          <!-- Slides with custom text -->
          <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=54">
            <h1>Hello world!</h1>
          </BCarouselSlide>

          <!-- Slides with image only -->
          <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=58" />

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <BCarouselSlide>
            <template #img>
              <img
                width="1024"
                height="480"
                src="https://picsum.photos/1024/480/?image=55"
                alt="image slot"
              />
            </template>
          </BCarouselSlide>

          <!-- Slide with blank fluid image to maintain slide aspect ratio -->
          <BCarouselSlide caption="Blank Image" img-blank img-alt="Blank image">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis,
              tincidunt a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
            </p>
          </BCarouselSlide>
        </BCarousel>
      </BCol>
    </BRow>
  </BContainer>
</template>
