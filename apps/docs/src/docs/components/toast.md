# Toast

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

Push notifications to your visitors with `BToast` and `BToaster`. These are lightweight components which are generally easily customizable for generating alert messages

</div>

Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems. Toasts are intended to be small interruptions to your visitors or users, and therefore should contain minimal, to-the-point, non-interactive content. Please refer to the Accessibility tips section below for important usage information

## Overview

Toasts are usually used in a global context with the `BToaster` component. You should create this component **once** usually in your `app` root component. This component is not initialized by default

<HighlightCard>

```vue
<template>
  <BToaster />
</template>
```

</HighlightCard>

After you create `BToaster` you can start using the provided composable. The main usage is the returned `show` function

<HighlightCard>
  <BButton @click="show('Hello World!')">Show</BButton>
  <template #html>

```vue
<template>
  <BButton @click="show('Hello World!')">Show</BButton>
</template>

<script setup lang="ts">
const {show} = useToast()
</script>
```

  </template>
</HighlightCard>

## Options

### String

There are two acceptable options for the `show` function. The first set of options are a `string` followed by an `object`. The string corresponds to the body of the `Toast`. If only the string is passed, a simple `Toast` is made, and by default it is made at the `top-right` and it will expire in `5000` ms. You can pass in an optional `object` for the second parameter where you have a list of options, such as `pos`, `value`, `variant`, etc. Many of the values correspond to props for the `BToast` component. However, some props are taken out as they are reserved

<HighlightCard>
  <BButton
    @click="
      show('Bar (this Toast will not auto expire)', {
        title: 'Foo',
        variant: 'danger',
        pos: 'top-center',
        value: true,
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
      show('Bar (this Toast will not auto expire)', {
        title: 'Foo',
        variant: 'danger',
        pos: 'top-center',
        value: true,
      })
    "
  >
    Show
  </BButton>
</template>

<script setup lang="ts">
const {show} = useToast()
</script>
```

  </template>

</HighlightCard>

### Object

The second option is to use a full object, this is similar to the string, however it includes the body parameter in the object itself. The only difference between the two is that this object includes a body property. There is no difference between these two beyond this property

<HighlightCard>
  <BButton
    @click="
      show({
        body: 'Bar (this Toast will not auto expire)',
        title: 'Foo',
        variant: 'danger',
        pos: 'top-center',
        value: true,
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
      show({
        body: 'Bar (this Toast will not auto expire)',
        title: 'Foo',
        variant: 'danger',
        pos: 'top-center',
        value: true,
      })
    "
  >
    Show
  </BButton>
</template>

<script setup lang="ts">
const {show} = useToast()
</script>
```

  </template>

</HighlightCard>

## Positioning

You can position toasts in all of the typical ways that one would expect from a notification system

<HighlightCard>
  <BButtonGroup v-for="(chunk, index) in chunks" :key="index" style="display: block;">
    <BButton
      v-for="position in chunk"
      :key="position"
      @click="show(position, {pos: position})"
    >
      {{ position }}
    </BButton>
  </BButtonGroup>
  <template #html>

```vue
<template>
  <BButtonGroup v-for="(chunk, index) in chunks" :key="index" style="display: block;">
    <BButton v-for="position in chunk" :key="position" @click="show(position, {pos: position})">
      {{ position }}
    </BButton>
  </BButtonGroup>
</template>

<script setup lang="ts">
const {show} = useToast()

const chunks = [
  'top-left',
  'top-center',
  'top-right',
  'middle-left',
  'middle-center',
  'middle-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
].reduce((all, one, i) => {
  const ch = Math.floor(i / 3)
  all[ch] = [].concat(all[ch] || [], one)
  return all
}, [])
</script>
```

</template>
</HighlightCard>

## Static placement

You can place toasts in static static placements, and with more control by using them directly. Although, it is more uncommon

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

## Automatic Countdown

As you may have noticed, `BToast` counts down similar to `BAlert`, in fact, it actually uses the same underlying engine that powers the countdown timer of `BAlert`, albeit with some minor adjustments. So, many of the same props are shared, including the `interval` props and others. So, similar quirks apply

<HighlightCard>
  <BButton
    @click="
      show('Watch me!', {
        title: 'Counting down!',
        variant: 'info',
        pos: 'middle-center',
        value: 10000,
        interval: 100,
        progressProps: {
          variant: 'danger',
        },
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
      show('Watch me!', {
        title: 'Counting down!',
        variant: 'info',
        pos: 'middle-center',
        value: 10000,
        interval: 100,
        progressProps: {
          variant: 'danger',
        },
      })
    "
  >
    Show
  </BButton>
</template>

<script setup lang="ts">
const {show} = useToast()
</script>
```

  </template>

</HighlightCard>

### ProgressBar Integration

As you may have noticed in that example, there was a built-in progress bar. This is triggered when using a value that is a `number` and when `progressProps` is not `undefined`. This was implemented because it can be difficult do modify the behavior of `BToast` when using a pure method, and the appearance of a ticking down progress bar is a "nice to have". Although, it is not out of the box behavior by Bootstrap, so its behavior is opt-in. This functions similarly to examples in `BAlert`

## BLink Integration

`Toast` can accept `Blink` props which will modify its behavior

<HighlightCard>
  <BButton @click="show('I am a BLink', {href: 'https://getbootstrap.com/', target: '_blank'})">
    Show
  </BButton>
  <template #html>

```vue
<template>
  <BButton @click="show('I am a BLink', {href: 'https://getbootstrap.com/', target: '_blank'})">
    Show
  </BButton>
</template>

<script setup lang="ts">
const {show} = useToast()
</script>
```

  </template>

</HighlightCard>

## Accessibility

Toasts are intended to be **small interruptions** to your visitors or users, so to help those with screen readers and similar assistive technologies, toasts are wrapped in an aria-live region. Changes to live regions (such as injecting/updating a toast component) are automatically announced by screen readers without needing to move the user's focus or otherwise interrupt the user. Additionally, `aria-atomic="true"` is automatically set to ensure that the entire toast is always announced as a single (atomic) unit, rather than announcing what was changed (which could lead to problems if you only update part of the toast's content, or if displaying the same toast content at a later point in time).

If you just need a single simple message to appear along the bottom or top of the user's window, use a fixed position `BAlert` instead.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/toast.data'
import ComponentReference from '../../components/ComponentReference.vue'
import {BButtonGroup, BButton, BToast, useToast} from 'bootstrap-vue-next'
import HighlightCard from '../../components/HighlightCard.vue'
import {ref} from 'vue'

const {show, toasts} = useToast()

const active = ref(true)

const chunks = [
  'top-left',
  'top-center',
  'top-right',
  'middle-left',
  'middle-center',
  'middle-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
].reduce((all, one, i) => {
  const ch = Math.floor(i / 3)
  all[ch] = [].concat(all[ch] || [], one)
  return all
}, [])
</script>
