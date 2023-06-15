# Carousel

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

The Carousel is a slideshow for cycling through a series of content.

</div>

## Basic usage

<HighlightCard>
  <b-carousel controls>
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=1" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=2" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=3" />
  </b-carousel>
  <template #html>

```vue-html
<b-carousel controls>
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=1" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=2" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=3" />
</b-carousel>
```

  </template>
</HighlightCard>

### Indicators

With the `indicators` prop, can add indicators to the Carousel, along side the previous/next controls. The indicators let users jump to a particular slide.

<HighlightCard>
  <b-carousel indicators>
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=4" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=5" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=6" />
  </b-carousel>
  <template #html>

```vue-html
<b-carousel indicators>
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=4" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=5" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=6" />
</b-carousel>
```

  </template>
</HighlightCard>

### Captions

You can add captions to a particular slide using the following methods: using the `caption` prop, that will render its text, by using `captionHtml` prop, which will render html, or by using the `caption` _slot_.

<HighlightCard>
  <b-carousel controls indicators>
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=7" caption="First Caption" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=8" caption-html="<h1>Second Caption</h1>" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=9">
      <template #caption>
        Third Caption
      </template>
    </b-carousel-slide>
  </b-carousel>
  <template #html>

```vue-html
<b-carousel controls indicators>
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=7" caption="First Caption" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=8" caption-html="<h1>Second Caption</h1>" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=9">
    <template #caption>
      Third Caption
    </template>
  </b-carousel-slide>
</b-carousel>
```

  </template>
</HighlightCard>

### Crossfade

You can use the `fade` prop to animate slides with a fade transition instead of a slide.

<HighlightCard>
  <b-carousel fade controls indicators>
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=11" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=12" />
  </b-carousel>
  <template #html>

```vue-html
<b-carousel fade controls indicators>
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=11" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=12" />
</b-carousel>
```

  </template>
</HighlightCard>

## Autoplaying Carousels

You can make your Carousels autoplay on a page load by setting the `ride` prop to `carousel`. Autoplaying Carousels are automatically paused when hovering with a mouse. You can disable pausing during hover by using the `noHoverPause` prop.

<b-alert :model-value="true" variant="info">
For accessibility reasons, we recommend avoiding the use of autoplaying carousels. If your page does include an autoplaying carousel, we recommend providing an additional button or control to explicitly pause/stop the carousel.

See [WCAG 2.1 Success Criterion 2.2.2 Pause, Stop, Hide.](https://www.w3.org/TR/WCAG21/#pause-stop-hide),

Related: [Autoplay Manipulation](#autoplay-manipulation),
</b-alert>

### Ride

<HighlightCard>
  <b-carousel controls indicators ride="carousel">
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=13" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=14" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=15" />
  </b-carousel>
  <template #html>

```vue-html
<b-carousel controls indicators ride="carousel">
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=13" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=14" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=15" />
</b-carousel>
```

  </template>
</HighlightCard>

When the `ride` prop is set to `true`, rather than `carousel`, the Carousel won't automatically start to cycle on page load. Instead, it will only start after the first user interaction.

<HighlightCard>
  <b-carousel controls indicators ride="true">
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=16" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=17" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=18" />
  </b-carousel>
  <template #html>

```vue-html
<b-carousel controls indicators ride="true">
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=16" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=17" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=18" />
</b-carousel>
```

  </template>
</HighlightCard>

### Interval

You can adjust the speed at which the Carousel is moving by adjusting the interval in real time. The default is `5000ms`.

<HighlightCard>
  <b-carousel :interval="slideInterval" controls indicators ride="carousel">
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=19" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=20" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=21" />
  </b-carousel>
  <b-button-group class="my-4">
    <b-button variant="danger" @click="slideInterval = slideInterval - 1000">
      Minus 1000
    </b-button>
    <b-button variant="success" @click="slideInterval = slideInterval + 1000">
      Plus 1000
    </b-button>
  </b-button-group>
  Current Interval Speed: {{ slideInterval }} ms
  <template #html>

```vue
<template>
  <b-carousel :interval="slideInterval" controls indicators ride="carousel">
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=19" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=20" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=21" />
  </b-carousel>

  <b-button-group>
    <b-button variant="danger" @click="slideInterval = slideInterval - 1000"> Minus 1000 </b-button>
    <b-button variant="success" @click="slideInterval = slideInterval + 1000"> Plus 1000 </b-button>
  </b-button-group>

  Current Interval Speed: {{ slideInterval }} ms
</template>

<script setup lang="ts">
const slideInterval = ref(5000)
</script>
```

  </template>
</HighlightCard>

### Autoplay Reverse

You can use the `rideReverse` prop to reverse the direction that the Carousel will autoplay.

<HighlightCard>
    <b-carousel controls indicators ride="carousel" ride-reverse="true">
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=22" />
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=23" />
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=24" />
    </b-carousel>
  <template #html>

```vue-html
<b-carousel controls indicators ride="carousel" ride-reverse="true">
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=22" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=23" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=24" />
</b-carousel>
```

  </template>
</HighlightCard>

### Autoplay Manipulation

There can come situations where you need to manually pause/resume the state of an autoplay. BCarousel exposes two functions for this: `pause(), resume()`. These are accessed through the [template ref](https://vuejs.org/guide/essentials/template-refs.html#template-refs).

<HighlightCard>
  <b-carousel ref="myCarousel" :interval="2500" controls indicators ride="carousel">
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=25" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=26" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=27" />
  </b-carousel>
  <b-button-group class="mt-3">
    <b-button variant="danger" @click="pause">Pause</b-button>
    <b-button variant="success" @click="resume">Resume</b-button>
  </b-button-group>
  <template #html>

```vue
<template>
  <b-carousel ref="myCarousel" :interval="2500" controls indicators ride="carousel">
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=25" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=26" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=27" />
  </b-carousel>

  <b-button-group>
    <b-button variant="danger" @click="pause">Pause</b-button>
    <b-button variant="success" @click="resume">Resume</b-button>
  </b-button-group>
</template>

<script setup lang="ts">
import type {BCarousel} from 'bootstrap-vue-next'

const myCarousel = ref<null | InstanceType<typeof BCarousel>>(null)
const pause = () => myCarousel.value?.pause()
const resume = () => myCarousel.value?.resume()
</script>
```

  </template>
</HighlightCard>

## Touch Swiping

BCarousel comes with automatic support for touch swiping devices. You can disable touch swiping by using the `noTouch` prop.

<b-alert :model-value="true" variant="info">
  Due to touch swiping not being available to everyone, such as a user that is using a mouse, you will likely want to include multiple ways to transition the slides. Otherwise, transitioning can be impossible to those users.
</b-alert>

<HighlightCard>
  <b-carousel no-touch>
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=28" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=29" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=30" />
  </b-carousel>
  <template #html>

```vue-html
<b-carousel no-touch>
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=28" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=29" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=30" />
</b-carousel>
```

  </template>
</HighlightCard>

### Touch Threshold

You can adjust the distance in pixels it takes to cause a transition to occur by using the `touchThreshold` prop. A higher value will mean the user needs to swipe a longer distance in order to trigger a transition.

<HighlightCard>
  <b-carousel :touch-threshold="slideThreshold">
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=31" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=32" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=33" />
  </b-carousel>
  <b-button-group class="mt-3">
    <b-button variant="danger" @click="slideThreshold = slideThreshold - 10">Decrease</b-button>
    <b-button variant="success" @click="slideThreshold = slideThreshold + 10">Increase</b-button>
  </b-button-group>
  Threshold: {{ slideThreshold }}
  <template #html>

```vue
<template>
  <b-carousel :touch-threshold="threshold">
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=31" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=32" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=33" />
  </b-carousel>

  <b-button-group>
    <b-button variant="danger" @click="threshold = threshold - 10">Decrease</b-button>
    <b-button variant="success" @click="threshold = threshold + 10">Increase</b-button>
  </b-button-group>

  Threshold: {{ threshold }}
</template>

<script setup lang="ts">
const threshold = ref(50)
</script>
```

  </template>
</HighlightCard>

## Usage With v-model

You are not required to, but you can bind the v-model. This allows for finer control and allows for outside manipulation of the slide, beyond the controls exposed through [Exposed Methods](#exposed-methods).

<HighlightCard>
  <b-carousel v-model="firstSlide" controls>
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=1" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=2" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=3" />
  </b-carousel>
  <template #html>

```vue
<template>
  <b-carousel v-model="slide" controls>
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=1" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=2" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=3" />
  </b-carousel>
</template>

<script setup lang="ts">
const slide = ref(0)
</script>
```

  </template>
</HighlightCard>

### Changing the Starting Slide

You can change the default starting slide by binding the v-model to the index of the slide you want the Carousel to start at.

- Starts at the last index (2)

<HighlightCard>
  <b-carousel v-model="secondSlide" indicators>
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=34" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=35" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=36" />
  </b-carousel>
  <template #html>

```vue
<template>
  <b-carousel v-model="slide" indicators>
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=34" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=35" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=36" />
  </b-carousel>
</template>

<script setup lang="ts">
const slide = ref(2)
</script>
```

  </template>
</HighlightCard>

## Exposed Methods

You are also able to use the built in methods for going to the next, or previous slide using the [template ref](https://vuejs.org/guide/essentials/template-refs.html#template-refs). In total there are four methods exposed, but this section only covers `prev()` and `next()`. Pause and Resume are mentioned [here](#autoplay-manipulation).

1. `prev`: goes to the previous slide, ie, moving to the _left_
2. `next`: goes to the next slide, ie, moving to the _right_
3. `pause`: pauses the autoplay timer
4. `resume`: resumes the autoplay timer

<HighlightCard>
  <b-carousel ref="mySecondCarousel">
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=37" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=38" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=39" />
  </b-carousel>
  <b-button-group class="mt-3">
    <b-button variant="danger" @click="prev">Previous Slide</b-button>
    <b-button variant="success" @click="next">Next Slide</b-button>
  </b-button-group>
  <template #html>

```vue
<template>
  <b-carousel ref="myCarousel">
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=37" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=38" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=39" />
  </b-carousel>

  <b-button-group>
    <b-button variant="danger" @click="prev">Previous Slide</b-button>
    <b-button variant="success" @click="next">Next Slide</b-button>
  </b-button-group>
</template>

<script setup lang="ts">
import type {BCarousel} from 'bootstrap-vue-next'

const myCarousel = ref<null | InstanceType<typeof BCarousel>>(null)

const prev = () => myCarousel.value?.prev()
const next = () => myCarousel.value?.next()
</script>
```

  </template>
</HighlightCard>

## Full Example

<HighlightCard>
  <b-carousel controls indicators>
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=40">
      <h1>First slide</h1>
      <p>Some more detailed description or whatever content.</p>
    </b-carousel-slide>
    <b-carousel-slide
      caption="Second slide"
      text="Does the same, just a bit differently."
      img-src="https://picsum.photos/1024/480/?image=41"
    />
    <b-carousel-slide>
      <template #img>
        <img
          width="1024"
          height="480"
          src="https://picsum.photos/1024/480/?image=42"
          alt="image slot"
        />
      </template>
      <h1>Third slide</h1>
      <p>Constains a customized background image</p>
    </b-carousel-slide>
    <b-carousel-slide img-height="480px" img-blank img-blank-color="pink" img-alt="Blank image">
      <h1>Fourth slide</h1>
      <p>No background image</p>
    </b-carousel-slide>
  </b-carousel>
  <template #html>

```vue-html
<b-carousel controls indicators>
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=40">
    <h1>First slide</h1>
    <p>Some more detailed description or whatever content.</p>
  </b-carousel-slide>

  <b-carousel-slide
    caption="Second slide"
    text="Does the same, just a bit differently."
    img-src="https://picsum.photos/1024/480/?image=41"
  />

  <b-carousel-slide>
    <template #img>
      <img
        width="1024"
        height="480"
        src="https://picsum.photos/1024/480/?image=42"
        alt="image slot"
      />
    </template>
    <h1>Third slide</h1>
    <p>Constains a customized background image</p>
  </b-carousel-slide>

  <b-carousel-slide img-height="480px" img-blank img-blank-color="pink" img-alt="Blank image">
    <h1>Fourth slide</h1>
    <p>No background image</p>
  </b-carousel-slide>
</b-carousel>
```

  </template>
</HighlightCard>

## Reference

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/carousel.data'
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import {BButton, BButtonGroup, BAlert, BCarouselSlide, BCarousel} from 'bootstrap-vue-next'
import {ref} from 'vue'

const firstSlide = ref(0)

const secondSlide = ref(2)

const slideInterval = ref(5000)

const myCarousel = ref<null | InstanceType<typeof BCarousel>>(null)
const pause = () => myCarousel.value?.pause()
const resume = () => myCarousel.value?.resume()

const mySecondCarousel = ref<null | InstanceType<typeof BCarousel>>(null)
const prev = () => mySecondCarousel.value?.prev()
const next = () => mySecondCarousel.value?.next()

const slideThreshold = ref(50)
</script>
