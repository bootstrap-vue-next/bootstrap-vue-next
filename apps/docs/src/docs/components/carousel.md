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
  <BCarousel controls>
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=1" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=2" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=3" />
  </BCarousel>
  <template #html>

```vue-html
<BCarousel controls>
  <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=1" />
  <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=2" />
  <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=3" />
</BCarousel>
```

  </template>
</HighlightCard>

### Indicators

With the `indicators` prop, can add indicators to the Carousel, along side the previous/next controls. The indicators let users jump to a particular slide.

<HighlightCard>
  <BCarousel indicators>
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=4" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=5" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=6" />
  </BCarousel>
  <template #html>

```vue-html
<BCarousel indicators>
  <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=4" />
  <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=5" />
  <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=6" />
</BCarousel>
```

  </template>
</HighlightCard>

### Captions

You can add captions to a particular slide using the following methods: using the `caption` prop, that will render its text, by using `captionHtml` prop, which will render html, or by using the `caption` _slot_.

<HighlightCard>
  <BCarousel controls indicators>
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=7" caption="First Caption" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=8" caption-html="<h1>Second Caption</h1>" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=9">
      <template #caption>
        Third Caption
      </template>
    </BCarouselSlide>
  </BCarousel>
  <template #html>

```vue-html
<BCarousel controls indicators>
  <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=7" caption="First Caption" />
  <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=8" caption-html="<h1>Second Caption</h1>" />
  <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=9">
    <template #caption>
      Third Caption
    </template>
  </BCarouselSlide>
</BCarousel>
```

  </template>
</HighlightCard>

### Crossfade

You can use the `fade` prop to animate slides with a fade transition instead of a slide.

<HighlightCard>
  <BCarousel fade controls indicators>
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=10" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=11" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=12" />
  </BCarousel>
  <template #html>

```vue-html
<BCarousel fade controls indicators>
  <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=10" />
  <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=11" />
  <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=12" />
</BCarousel>
```

  </template>
</HighlightCard>

## Autoplaying Carousels

You can make your Carousels autoplay on a page load by setting the `ride` prop to `carousel`. Autoplaying Carousels are automatically paused when hovering with a mouse. You can disable pausing during hover by using the `noHoverPause` prop.

<BAlert :model-value="true" variant="info">
For accessibility reasons, we recommend avoiding the use of autoplaying carousels. If your page does include an autoplaying carousel, we recommend providing an additional button or control to explicitly pause/stop the carousel.

See [WCAG 2.1 Success Criterion 2.2.2 Pause, Stop, Hide.](https://www.w3.org/TR/WCAG21/#pause-stop-hide),

Related: [Autoplay Manipulation](#autoplay-manipulation),
</BAlert>

### Ride

<HighlightCard>
  <BCarousel controls indicators ride="carousel">
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=13" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=14" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=15" />
  </BCarousel>
  <template #html>

```vue-html
<BCarousel controls indicators ride="carousel">
  <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=13" />
  <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=14" />
  <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=15" />
</BCarousel>
```

  </template>
</HighlightCard>

When the `ride` prop is set to `true`, rather than `carousel`, the Carousel will not automatically start to cycle on page load. Instead, it will only start after the first user interaction.

<HighlightCard>
  <BCarousel controls indicators ride="true">
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=16" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=17" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=18" />
  </BCarousel>
  <template #html>

```vue-html
<BCarousel controls indicators ride="true">
  <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=16" />
  <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=17" />
  <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=18" />
</BCarousel>
```

  </template>
</HighlightCard>

### Interval

You can adjust the speed at which the Carousel is moving by adjusting the interval in real time. The default is `5000ms`.

<HighlightCard>
  <BCarousel :interval="slideInterval" controls indicators ride="carousel">
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=19" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=20" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=21" />
  </BCarousel>
  <BButtonGroup class="my-4">
    <BButton variant="danger" @click="slideInterval = slideInterval - 1000">
      Minus 1000
    </BButton>
    <BButton variant="success" @click="slideInterval = slideInterval + 1000">
      Plus 1000
    </BButton>
  </BButtonGroup>
  Current Interval Speed: {{ slideInterval }} ms
  <template #html>

```vue
<template>
  <BCarousel :interval="slideInterval" controls indicators ride="carousel">
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=19" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=20" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=21" />
  </BCarousel>

  <BButtonGroup>
    <BButton variant="danger" @click="slideInterval = slideInterval - 1000"> Minus 1000 </BButton>
    <BButton variant="success" @click="slideInterval = slideInterval + 1000"> Plus 1000 </BButton>
  </BButtonGroup>

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
    <BCarousel controls indicators ride="carousel" ride-reverse="true">
      <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=22" />
      <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=23" />
      <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=24" />
    </BCarousel>
  <template #html>

```vue-html
<BCarousel controls indicators ride="carousel" ride-reverse="true">
  <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=22" />
  <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=23" />
  <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=24" />
</BCarousel>
```

  </template>
</HighlightCard>

### Autoplay Manipulation

There can come situations where you need to manually pause/resume the state of an autoplay. BCarousel exposes two functions for this: `pause(), resume()`. These are accessed through the [template ref](https://vuejs.org/guide/essentials/template-refs.html#template-refs).

<HighlightCard>
  <BCarousel ref="myCarousel" :interval="2500" controls indicators ride="carousel">
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=25" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=26" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=27" />
  </BCarousel>
  <BButtonGroup class="mt-3">
    <BButton variant="danger" @click="pause">Pause</BButton>
    <BButton variant="success" @click="resume">Resume</BButton>
  </BButtonGroup>
  <template #html>

```vue
<template>
  <BCarousel ref="myCarousel" :interval="2500" controls indicators ride="carousel">
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=25" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=26" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=27" />
  </BCarousel>

  <BButtonGroup>
    <BButton variant="danger" @click="pause">Pause</BButton>
    <BButton variant="success" @click="resume">Resume</BButton>
  </BButtonGroup>
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

<BAlert :model-value="true" variant="info">
  Due to touch swiping not being available to everyone, such as a user that is using a mouse, you will likely want to include multiple ways to transition the slides. Otherwise, transitioning can be impossible to those users.
</BAlert>

<HighlightCard>
  <BCarousel no-touch>
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=28" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=29" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=30" />
  </BCarousel>
  <template #html>

```vue-html
<BCarousel no-touch>
  <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=28" />
  <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=29" />
  <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=30" />
</BCarousel>
```

  </template>
</HighlightCard>

### Touch Threshold

You can adjust the distance in pixels it takes to cause a transition to occur by using the `touchThreshold` prop. A higher value will mean the user needs to swipe a longer distance in order to trigger a transition.

<HighlightCard>
  <BCarousel :touch-threshold="slideThreshold">
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=31" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=32" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=33" />
  </BCarousel>
  <BButtonGroup class="mt-3">
    <BButton variant="danger" @click="slideThreshold = slideThreshold - 10">Decrease</BButton>
    <BButton variant="success" @click="slideThreshold = slideThreshold + 10">Increase</BButton>
  </BButtonGroup>
  Threshold: {{ slideThreshold }}
  <template #html>

```vue
<template>
  <BCarousel :touch-threshold="threshold">
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=31" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=32" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=33" />
  </BCarousel>

  <BButtonGroup>
    <BButton variant="danger" @click="threshold = threshold - 10">Decrease</BButton>
    <BButton variant="success" @click="threshold = threshold + 10">Increase</BButton>
  </BButtonGroup>

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
  <BCarousel v-model="firstSlide" controls>
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=1" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=2" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=3" />
  </BCarousel>
  <template #html>

```vue
<template>
  <BCarousel v-model="slide" controls>
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=1" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=2" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=3" />
  </BCarousel>
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
  <BCarousel v-model="secondSlide" indicators>
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=34" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=35" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=36" />
  </BCarousel>
  <template #html>

```vue
<template>
  <BCarousel v-model="slide" indicators>
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=34" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=35" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=36" />
  </BCarousel>
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
  <BCarousel ref="mySecondCarousel">
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=37" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=38" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=39" />
  </BCarousel>
  <BButtonGroup class="mt-3">
    <BButton variant="danger" @click="prev">Previous Slide</BButton>
    <BButton variant="success" @click="next">Next Slide</BButton>
  </BButtonGroup>
  <template #html>

```vue
<template>
  <BCarousel ref="myCarousel">
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=37" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=38" />
    <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=39" />
  </BCarousel>

  <BButtonGroup>
    <BButton variant="danger" @click="prev">Previous Slide</BButton>
    <BButton variant="success" @click="next">Next Slide</BButton>
  </BButtonGroup>
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
        <img
          width="1024"
          height="480"
          src="https://picsum.photos/1024/480/?image=42"
          alt="image slot"
        />
      </template>
      <h1>Third slide</h1>
      <p>Constains a customized background image</p>
    </BCarouselSlide>
    <BCarouselSlide img-height="480px" img-blank img-blank-color="pink" img-alt="Blank image">
      <h1>Fourth slide</h1>
      <p>No background image</p>
    </BCarouselSlide>
  </BCarousel>
  <template #html>

```vue-html
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
      <img
        width="1024"
        height="480"
        src="https://picsum.photos/1024/480/?image=42"
        alt="image slot"
      />
    </template>
    <h1>Third slide</h1>
    <p>Constains a customized background image</p>
  </BCarouselSlide>

  <BCarouselSlide img-height="480px" img-blank img-blank-color="pink" img-alt="Blank image">
    <h1>Fourth slide</h1>
    <p>No background image</p>
  </BCarouselSlide>
</BCarousel>
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
