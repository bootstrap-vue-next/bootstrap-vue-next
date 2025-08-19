# Toast

<PageHeader>

Push notifications to your visitors with `BToast` and `BToastOrchestrator`. These are components that are easily customizable for generating alert messages

</PageHeader>

Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems. Toasts are intended to be small interruptions to your visitors or users and therefore should contain minimal, to-the-point, non-interactive content. Please refer to the Accessibility Tips section below for important usage information

## Overview

This section only refers to using the raw component variation. Oftentimes, `Toasts` are generated in a global context programmatically, like showing a success message after saving a form. That functionality is covered under the composable docs [here](/docs/composables/useToast)

The component variation is shown by using the `v-model` like so

<HighlightCard>
  <BToast v-model="active" variant="info">
    <template #title>
      Title
    </template>
      Body
  </BToast>
  <template #html>

```vue
<template>
  <BToast v-model="active" variant="info">
    <template #title> Title </template>
    Body
  </BToast>
</template>

<script setup lang="ts">
const isActive = ref(false)
</script>
```

  </template>
</HighlightCard>

By default Toasts are rendered in place. You can use Vue's `Teleport` to change the location, commonly to `body`

## Positioning

In combination with `Teleport`, you can render Toasts above the page, and in specific locations. You will need to create a wrapper component around said Toast to declare its location

<HighlightCard>
  <template
    v-for="(pos, index) in values"
    :key="index"
  >
    <BButton
      @click="values[index] = !values[index]"
    >
      {{ locations[index] }}
    </BButton>
    <Teleport to="body">
      <div
        :class="locations[index]"
        class="toast-container position-fixed p-3"
      >
        <BToast v-model="values[index]">
          <template #title>
            Title
          </template>
          {{ locations[index] }}
        </BToast>
      </div>
    </Teleport>
  </template>
  <template #html>

```vue
<template>
  <template v-for="(pos, index) in values" :key="index">
    <BButton @click="values[index] = !values[index]">
      {{ locations[index] }}
    </BButton>
    <Teleport to="body">
      <div :class="locations[index]" class="toast-container position-fixed p-3">
        <BToast v-model="values[index]">
          <template #title> Title </template>
          {{ locations[index] }}
        </BToast>
      </div>
    </Teleport>
  </template>
</template>

<script setup lang="ts">
const locations = [
  'top-0 start-0',
  'top-0 start-50 translate-middle-x',
  'top-0 end-0',
  'top-50 start-0 translate-middle-y',
  'top-50 start-50 translate-middle',
  'top-50 end-0 translate-middle-y',
  'bottom-0 start-0',
  'bottom-0 start-50 translate-middle-x',
  'bottom-0 end-0',
]

const values = ref(Array.from({length: locations.length}, () => false))
</script>
```

  </template>
</HighlightCard>

## Static placement

You can place toasts in static placements, and with more control by using them directly. Although, it is more uncommon

<HighlightCard>
  <BToast v-model="active" variant="info">
    <template #title>
      Title
    </template>
      Body
  </BToast>
  <BButton @click="active = !active">Toggle</BButton>
  <template #html>

```vue-html
<BToast v-model="active" variant="info">
  <template #title>
    Title
  </template>
    Body
</BToast>
<BButton @click="active = !active">Toggle</BButton>
```

</template>
</HighlightCard>

## Auto-dismissing Toasts

To create a `BToast` that dismisses automatically after a specified duration, set the `modelValue` prop to the number of **milliseconds** you want the `BToast` to remain visible. By default, the timer updates on every browser frame via `requestAnimationFrame` (roughly every 16 ms). To throttle updates for example to once per second—set the `interval` prop to `1000` (or any millisecond value). Timed Toasts automatically pause when hovered over with a mouse, but you can disable this behavior using the `noHoverPause` prop. Ensure that the `modelValue` is an integer representing milliseconds. Any change to the `modelValue` will reset the timer.

The **interval** prop determines how frequently the timer updates. While the default is `requestAnimationFrame`, you can set a custom interval. Negative values for either `modelValue` or `interval` will stop the timer. If the `modelValue` does not divide evenly by the interval, the timer will continue to the nearest interval. For example, a `modelValue` of 5400 ms with an interval of 1000 ms will run for 6000 ms. To avoid this, choose an interval that divides evenly into the `modelValue`, such as 540 ms or 1080 ms.

<HighlightCard>
  <BButton
    @click="
      create({
        title: 'Counting down!',
        variant: 'info',
        pos: 'middle-center',
        modelValue: 10000,
        progressProps: {
          variant: 'danger',
        },
        body: 'Watch me!'
      })
    "
  >
    Show
  </BButton>

<template #html>

```vue
<template>
  <BButton
    @click="
      create({
        title: 'Counting down!',
        variant: 'info',
        pos: 'middle-center',
        modelValue: 10000,
        progressProps: {
          variant: 'danger',
        },
        body: 'Watch me!',
      })
    "
  >
    Show
  </BButton>
</template>
```

  </template>

</HighlightCard>

### ProgressBar Integration

As you may have noticed in that example, there was a built-in progress bar. This is triggered when using a value that is a `number` and when `progressProps` is not `undefined`. This was implemented because it can be difficult to modify the behavior of `BToast` when using a pure method, and the appearance of a ticking down progress bar is a "nice to have". Although it is not out of the box behavior by Bootstrap, its behavior is opt-in. This functions similarly to examples in `BAlert`

## BLink Integration

`Toast` can accept `BLink` props which will modify its behavior

<HighlightCard>
  <BButton @click="create({href: 'https://getbootstrap.com/', modelValue: true, target: '_blank', body: 'I am a BLink'})">
    Show
  </BButton>

<template #html>

```vue
<template>
  <BButton
    @click="
      create({
        href: 'https://getbootstrap.com/',
        modelValue: true,
        target: '_blank',
        body: 'I am a BLink',
      })
    "
  >
    Show
  </BButton>
</template>

<script setup lang="ts">
const {create} = useToast()
</script>
```

  </template>

</HighlightCard>

## Programmatically Control

To programmatically control your toasts with global state, refer to our documentation at [useToast](/docs/composables/useToast)

## Accessibility

Toasts are intended to be **small interruptions** to your visitors or users, so to help those with screen readers and similar assistive technologies, toasts are wrapped in an aria-live region. Changes to live regions (such as injecting/updating a toast component) are automatically announced by screen readers without needing to move the user's focus or otherwise interrupt the user. Additionally, `aria-atomic="true"` is automatically set to ensure that the entire toast is always announced as a single (atomic) unit, rather than announcing what was changed (which could lead to problems if you only update part of the toast's content, or if displaying the same toast content at a later point in time).

If you just need a single simple message to appear along the bottom or top of the user's window, use a fixed position `BAlert` instead.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/toast.data'
import ComponentReference from '../../components/ComponentReference.vue'
import {useToast} from 'bootstrap-vue-next/composables/useToast'
import HighlightCard from '../../components/HighlightCard.vue'
import {ref, h, onMounted} from 'vue'

const {create, toasts} = useToast()

const active = ref(true)

const locations = [
  'top-0 start-0',
  'top-0 start-50 translate-middle-x',
  'top-0 end-0',
  'top-50 start-0 translate-middle-y',
  'top-50 start-50 translate-middle',
  'top-50 end-0 translate-middle-y',
  'bottom-0 start-0',
  'bottom-0 start-50 translate-middle-x',
  'bottom-0 end-0',
]

const values = ref(Array.from({length: locations.length}, () => false))

</script>
