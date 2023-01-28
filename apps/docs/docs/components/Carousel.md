# Carousel

> The Carousel is a slideshow for cycling through a series of content

## Basic usage

Simply use v-model with the value corresponding to the index of the list of children

<b-carousel v-model="firstSlide" controls>
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=11" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=12" />
</b-carousel>

```html
<b-carousel v-model="slide" controls>
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=11" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=12" />
</b-carousel>

<script setup lang="ts">
import {ref} from 'vue'

const slide = ref(0)
</script>
```

### Indicators

With the `indicators` prop, can add indicators to the Carousel, along side the previous/next controls. The indicators let users jump to a particular slide

<b-carousel v-model="eightSlide" indicators>
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=11" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=12" />
</b-carousel>

```html
<b-carousel v-model="slide" indicators>
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=11" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=12" />
</b-carousel>

<script setup lang="ts">
import {ref} from 'vue'

const slide = ref(0)
</script>
```

### Captions

You can add captions to a particular slide using the following methods: using the `caption` prop, that will render its text, by using `captionHtml` prop, which will render html, or by using the `caption` _slot_

<b-carousel v-model="ninthSlide" controls indicators>
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10" caption="First Caption" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=11" caption-html="<h1>Second Caption</h1>" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=12">
    <template #caption>
      Third Caption
    </template>
  </b-carousel-slide>
</b-carousel>

```html
<b-carousel v-model="slide" controls indicators>
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10" caption="First Caption" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=11" caption-html="<h1>Second Caption</h1>" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=12">
    <template #caption>
      Third Caption
    </template>
  </b-carousel-slide>
</b-carousel>

<script setup lang="ts">
import {ref} from 'vue'

const slide = ref(0)
</script>
```

### Crossfade

You can use the `fade` prop to animate slides with a fade transition instead of a slide

<b-carousel v-model="seventhSlide" fade controls indicators>
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=11" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=12" />
</b-carousel>

```html
<b-carousel v-model="slide" fade controls indicators>
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=11" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=12" />
</b-carousel>

<script setup lang="ts">
import {ref} from 'vue'

const slide = ref(0)
</script>
```

## Autoplaying Carousels

You can make your Carousels autoplay on a page load by setting the `ride` prop to `carousel`. Autoplaying Carousels are automatically paused when hovering with a mouse. You can disable pausing during hover by using the `noHoverPause` prop.

<b-alert :model-value="true" variant="info">
For accessibility reasons, we recommend avoiding the use of autoplaying carousels. If your page does include an autoplaying carousel, we recommend providing an additional button or control to explicitly pause/stop the carousel.

See [WCAG 2.1 Success Criterion 2.2.2 Pause, Stop, Hide.](https://www.w3.org/TR/WCAG21/#pause-stop-hide)

Related: [Autoplay Manipulation](#autoplay-manipulation)
</b-alert>

### Ride

<b-carousel v-model="secondSlide" controls indicators ride="carousel">
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=20" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=21" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=22" />
</b-carousel>

```html
<b-carousel v-model="slide" controls indicators ride="carousel">
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=20" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=21" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=22" />
</b-carousel>

<script setup lang="ts">
import {ref} from 'vue'

const slide = ref(0)
</script>
```

When the `ride` prop is set to `true`, rather than `carousel`, the Carousel won't automatically start to cycle on page load. Instead, it will only start after the first user interaction

<b-carousel v-model="thirdSlide" controls indicators ride="true">
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=20" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=21" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=22" />
</b-carousel>

```html
<b-carousel v-model="slide" controls indicators ride="true">
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=20" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=21" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=22" />
</b-carousel>

<script setup lang="ts">
import {ref} from 'vue'

const slide = ref(0)
</script>
```

### Interval

You can adjust the speed at which the Carousel is moving by adjusting the interval in real time. The default is `5000ms`

<b-carousel v-model="fourthSlide" :interval="fourthSlideInterval" controls indicators ride="carousel">
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=20" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=21" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=22" />
</b-carousel>

<b-button-group>
  <b-button variant="danger" @click="fourthSlideInterval = fourthSlideInterval - 1000">
    Minus 1000
  </b-button>
  <b-button variant="success" @click="fourthSlideInterval = fourthSlideInterval + 1000">
    Plus 1000
  </b-button>
</b-button-group>

Current Interval Speed: {{ fourthSlideInterval }} ms

```html
<b-carousel v-model="slide" :interval="slideInterval" controls indicators ride="carousel">
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=20" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=21" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=22" />
</b-carousel>

<b-button-group>
  <b-button variant="danger" @click="slideInterval = slideInterval - 1000">
    Minus 1000
  </b-button>
  <b-button variant="success" @click="slideInterval = slideInterval + 1000">
    Plus 1000
  </b-button>
</b-button-group>

Current Interval Speed: {{ slideInterval }} ms

<script setup lang="ts">
import {ref} from 'vue'

const slide = ref(0)
const slideInterval = ref(5000)
</script>
```

You can use the `rideReverse` prop to reverse the direction that the Carousel will autoplay

<b-carousel v-model="fifthSlide" controls indicators ride="carousel" ride-reverse="true">
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=20" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=21" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=22" />
</b-carousel>

```html
<b-carousel v-model="slide" controls indicators ride="carousel" ride-reverse="true">
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=20" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=21" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=22" />
</b-carousel>

<script setup lang="ts">
import {ref} from 'vue'

const slide = ref(0)
</script>
```

### Autoplay Manipulation

There can come situations where you need to manually pause/resume the state of an autoplay. BCarousel exposes two functions for this: `pause(), resume()`. These are accessed through the [template ref](https://vuejs.org/guide/essentials/template-refs.html#template-refs)

<b-carousel v-model="sixthSlide" ref="myCarousel" :interval="2500" controls indicators ride="carousel">
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=20" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=21" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=22" />
</b-carousel>

<b-button-group>
  <b-button variant="danger" @click="pause">Pause</b-button>
  <b-button variant="success" @click="resume">Resume</b-button>
</b-button-group>

```html
<b-carousel v-model="slide" ref="myCarousel" :interval="2500" controls indicators ride="carousel">
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=20" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=21" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=22" />
</b-carousel>

<b-button-group>
  <b-button variant="danger" @click="pause">Pause</b-button>
  <b-button variant="success" @click="resume">Resume</b-button>
</b-button-group>

<script setup lang="ts">
import {ref} from 'vue'

const slide = ref(0)
const myCarousel = ref<HTMLElement | null>(null)
const pause = () => myCarousel.value?.pause()
const resume = () => myCarousel.value?.resume()
</script>
```

## Touch Swiping

BCarousel comes with automatic support for touch swiping devices. You can disable touch swiping by using the `noTouch` prop. 

<b-alert :model-value="true" variant="info">
  Due to touch swiping not being available to everyone, such as a user that is using a mouse, you will likely want to include multiple ways to transition the slides. Otherwise, transitioning can be impossible to those users.
</b-alert>

<b-carousel v-model="tenthSlide" no-touch>
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=11" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=12" />
</b-carousel>

```html
<b-carousel v-model="slide" no-touch>
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=11" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=12" />
</b-carousel>

<script setup lang="ts">
import {ref} from 'vue'

const slide = ref(0)
</script>
```

## Changing the Default Starting Slide

The default starting slide can be set by simply picking the appropriate index for your `v-model`

* Starts at the last index (2)

<b-carousel v-model="twelthSlide" indicators>
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=11" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=12" />
</b-carousel>

```html
<b-carousel v-model="slide" indicators>
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=11" />
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=12" />
</b-carousel>

<script setup lang="ts">
import {ref} from 'vue'

const slide = ref(2)
</script>
```

## Full Example

<b-carousel v-model="eleventhSlide" controls indicators>
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=30">
    <h1>First slide</h1>
    <p>Some more detailed description or whatever content.</p>
  </b-carousel-slide>
  <b-carousel-slide
    caption="Second slide"
    text="Does the same, just a bit differently."
    img-src="https://picsum.photos/1024/480/?image=31"
  />
  <b-carousel-slide>
    <template #img>
      <img
        width="1024"
        height="480"
        src="https://picsum.photos/1024/480/?image=32"
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

```html
<b-carousel v-model="slide" controls indicators>
  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=30">
    <h1>First slide</h1>
    <p>Some more detailed description or whatever content.</p>
  </b-carousel-slide>
  <b-carousel-slide
    caption="Second slide"
    text="Does the same, just a bit differently."
    img-src="https://picsum.photos/1024/480/?image=31"
  />
  <b-carousel-slide>
    <template #img>
      <img
        width="1024"
        height="480"
        src="https://picsum.photos/1024/480/?image=32"
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

<script setup lang="ts">
import {ref} from 'vue'

const slide = ref(0)
</script>
```

## Reference

<ClientOnly>
  <ComponentReference></ComponentReference>
</ClientOnly>

<script setup lang="ts">
import {ref} from 'vue'

const firstSlide = ref(0)

const secondSlide = ref(0)

const thirdSlide = ref(0)

const fourthSlide = ref(0)
const fourthSlideInterval = ref(5000)

const fifthSlide = ref(0)

const sixthSlide = ref(0)
const myCarousel = ref<HTMLElement | null>(null)
const pause = () => myCarousel.value?.pause()
const resume = () => myCarousel.value?.resume()

const seventhSlide = ref(0)

const eighthSlide = ref(0)

const ninthSlide = ref(0)

const tenthSlide = ref(0)

const eleventhSlide = ref(0)

const twelthSlide = ref(2)
</script>
