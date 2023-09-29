# useToast

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

`useToast` is used to create `Toasts` on demand. You must have initialized the `BToaster` component once in your application. This is covered mostly under the [components docs](/docs/components/toast) section. So, this will be more in depth as to what the composable does. The following examples are shown in the component documentation

</div>

## Showing a Toast

Showing a toast is done through the show method

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

The show method returns a symbol. This symbol is a unique id. Since `Toasts` are fluid and can move around a lot, returning the index at a given point in time is not ideal for obvious reasons. So, for use with the hide method, we need to give you a unique identifier

## Hiding a Toast

We then use that returned id to hide a `Toast`

<HighlightCard>
  <BButtonGroup>
    <BButton @click="showMe" variant="success">
      Show the Toast
    </BButton>
    <BButton @click="hideMe" variant="danger">
      Hide the Toast
    </BButton>
  </BButtonGroup>
  <template #html>

```vue
<template>
  <BButtonGroup>
    <BButton @click="showMe" variant="success"> Show the Toast </BButton>
    <BButton @click="hideMe" variant="danger"> Hide the Toast </BButton>
  </BButtonGroup>
</template>

<script setup lang="ts">
const {show, hide} = useToast()

let showValue: undefined | symbol

const showMe = () => {
  if (typeof showValue === 'symbol') return
  // `show` returns a symbol
  showValue = show('Showing', {value: true, variant: 'success', pos: 'bottom-center'})
}

const hideMe = () => {
  if (showValue === undefined) return
  hide(showValue)
  showValue = undefined
}
</script>
```

  </template>

</HighlightCard>

## The `toasts` Value

Not covered in the component docs is the value `toasts` returned by the composable. This is mostly an internal value used by the `BToaster` component for actually rendering your `BToast` component. This is actually how the entire thing functions! It is simply the array of `Toasts`. Its not a very useful property externally. Keep in mind, this is all global. If you add a Toast from one place, it will always be added from to this array. There is no separation. Functionally it is quite similar to `useBreadcrumb`

<HighlightCard>
  <BButton @click="show('Hello World!')">Show</BButton>
  {{ toasts }}
  <template #html>

```vue
<template>
  <BButton @click="show('Hello World!')">Show</BButton>
  {{ toasts }}
</template>

<script setup lang="ts">
const {show, toasts} = useToast()
</script>
```

  </template>
</HighlightCard>

<script setup lang="ts">
import {data} from '../../data/components/toast.data'
import {BButton, useToast, BButtonGroup} from 'bootstrap-vue-next'
import HighlightCard from '../../components/HighlightCard.vue'

const {show, hide, toasts} = useToast()

let showValue: undefined | symbol

const showMe = () => {
  if (typeof showValue === 'symbol') return
  showValue = show('Showing', {value: true, variant: 'success', pos: 'bottom-center'})
}

const hideMe = () => {
  if (showValue === undefined) return
  hide(showValue)
  showValue = undefined
}

</script>
