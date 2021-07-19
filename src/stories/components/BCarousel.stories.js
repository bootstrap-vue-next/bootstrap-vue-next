import BCarousel from '../../components/BCarousel.vue';
import BCarouselSlide from '../../components/BCarouselSlide.vue';

export default {
  title: 'Components/Carousel',
  component: BCarousel,
  argTypes: {
    controls: { control: { type: 'boolean'} },
    indicators: { control: { type: 'boolean'} },
  },
};

export const Default = (args) => ({
  components: {
    BCarousel,
    BCarouselSlide
  },
  setup() {
    return {
      args
    }
  },
  template: `
  <b-carousel
  v-bind="args"
  background="#ababab"
  img-width="1024"
  img-height="480"
  style="text-shadow: 1px 1px 2px #333;"
>
  <!-- Text slides with image -->
  <b-carousel-slide
  active
    caption="First slide"
    text="Nulla vitae elit libero, a pharetra augue mollis interdum."
    img-src="https://picsum.photos/1024/480/?image=52"
  ></b-carousel-slide>

  <!-- Slides with custom text -->
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
    <h1>Hello world!</h1>
  </b-carousel-slide>

  <!-- Slides with image only -->
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

  <!-- Slides with img slot -->
  <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
  <b-carousel-slide>
    <template #img>
      <img
        width="1024"
        height="480"
        src="https://picsum.photos/1024/480/?image=55"
        alt="image slot"
      >
    </template>
  </b-carousel-slide>

  <!-- Slide with blank fluid image to maintain slide aspect ratio -->
  <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
      a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
    </p>
  </b-carousel-slide>
</b-carousel>
  `
})
Default.args = {
    controls: true,
    indicators: true
}