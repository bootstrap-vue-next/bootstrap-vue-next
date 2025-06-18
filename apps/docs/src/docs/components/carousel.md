# Carousel

<PageHeader>

The carousel is a slideshow for cycling through a series of content. It works with a series of images, text,
or custom markup. It also includes support for previous/next controls and indicators.

Nested carousels are not supported. You should also be aware that carousels in general can often cause
usability and accessibility challenges.

</PageHeader>

## Basic usage

<<< DEMO ./demo/CarouselBasic.vue#template{vue-html}

### Sizing

Carousels don't automatically normalize slide dimensions. As such, you may need to use additional
utilities or custom styles to appropriately size content. When using images in each slide, ensure
they all have the same dimensions (or aspect ratio).

When using `img-src` or `img-blank` on `<BCarouselSlide>`, you can set the image width and height
via the `img-width` and `img-height` props on `<BCarousel>` and have these values automatically
applied to each `carousel-slide` image.

Note that images will still be responsive and automatically grow or shrink to fit within the width
of its parent container.

Internally, `<BCarouselSlide>` uses the [`<BImg>`](/docs/components/image) component to render
the images. The `img-*` props map to the corresponding props available to `<BImg>`.

### Indicators

With the `indicators` prop, can add indicators to the Carousel, along side the previous/next controls. The indicators let users jump to a particular slide.

<<< DEMO ./demo/CarouselIndicators.vue#template{vue-html}

### Captions

You can add captions to a particular slide using the following methods: using the `caption` prop, that will render its text, by using `captionHtml` prop, which will render html, or by using the `caption` _slot_.

<<< DEMO ./demo/CarouselCaptions.vue#template{vue-html}

### Crossfade

You can use the `fade` prop to animate slides with a fade transition instead of a slide.

<<< DEMO ./demo/CarouselCrossfade.vue#template{vue-html}

## Autoplaying Carousels

You can make your Carousels autoplay on a page load by setting the `ride` prop to `carousel`. Autoplaying Carousels are automatically paused when hovering with a mouse. You can disable pausing during hover by using the `noHoverPause` prop.

<BAlert :model-value="true" variant="info">
For accessibility reasons, we recommend avoiding the use of autoplaying carousels. If your page does include an autoplaying carousel, we recommend providing an additional button or control to explicitly pause/stop the carousel.

See [WCAG 2.1 Success Criterion 2.2.2 Pause, Stop, Hide.](https://www.w3.org/TR/WCAG21/#pause-stop-hide),

Related: [Autoplay Manipulation](#autoplay-manipulation),
</BAlert>

### Ride

<<< DEMO ./demo/CarouselAutoplay.vue#template{vue-html}

When the `ride` prop is set to `true`, rather than `carousel`, the Carousel will not automatically start to cycle on page load. Instead, it will only start after the first user interaction.

<<< DEMO ./demo/CarouselRideTrue.vue#template{vue-html}

### Interval

You can adjust the speed at which the Carousel is moving by adjusting the interval in real time. The default is `5000ms`. You can also set intervals per slide by setting the `interval` prop on the slide

<<< DEMO ./demo/CarouselInterval.vue

### Autoplay Reverse

You can use the `ride-reverse` prop to reverse the direction that the Carousel will autoplay.

<<< DEMO ./demo/CarouselAutoplayReverse.vue#template{vue-html}

### Autoplay Manipulation

There can come situations where you need to manually pause/resume the state of an autoplay. BCarousel exposes two functions for this: `pause(), resume()`. These are accessed through the [template ref](https://vuejs.org/guide/essentials/template-refs.html#template-refs).

<<< DEMO ./demo/CarouselAutoplayManipulation.vue

## Touch Swiping

BCarousel comes with automatic support for touch swiping devices. You can disable touch swiping by using the `no-touch` prop.

<BAlert :model-value="true" variant="info">
  Due to touch swiping not being available to everyone, such as a user that is using a mouse, you will likely want to include multiple ways to transition the slides. Otherwise, transitioning can be impossible to those users.
</BAlert>

<<< DEMO ./demo/CarouselTouchSwiping.vue#template{vue-html}

### Touch Threshold

You can adjust the distance in pixels it takes to cause a transition to occur by using the `touch-threshold` prop. A higher value will mean the user needs to swipe a longer distance in order to trigger a transition.

<<< DEMO ./demo/CarouselTouchThreshold.vue

## Usage With v-model

You are not required to, but you can bind the v-model. This allows for finer control and allows for outside manipulation of the slide, beyond the controls exposed through [Exposed Methods](#exposed-methods).

<<< DEMO ./demo/CarouselModel.vue

### Changing the Starting Slide

You can change the default starting slide by binding the v-model to the index of the slide you want the Carousel to start at.

- Starts at the last index (2)

<<< DEMO ./demo/CarouselStartingSlide.vue

## Exposed Methods

You are also able to use the built in methods for going to the next, or previous slide using the [template ref](https://vuejs.org/guide/essentials/template-refs.html#template-refs). In total there are four methods exposed, but this section only covers `prev()` and `next()`. Pause and Resume are mentioned [here](#autoplay-manipulation).

1. `prev`: goes to the previous slide, ie, moving to the _left_
2. `next`: goes to the next slide, ie, moving to the _right_
3. `pause`: pauses the autoplay timer
4. `resume`: resumes the autoplay timer

<<< DEMO ./demo/CarouselMethods.vue

## Full Example

<<< DEMO ./demo/CarouselFull.vue#template{vue-html}

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/carousel.data'
</script>
