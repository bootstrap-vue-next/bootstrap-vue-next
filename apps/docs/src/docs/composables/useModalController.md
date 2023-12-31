# useModalController

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

`useModalController` can hide modals everywhere in the app, as well as creating modals on the fly

</div>

## Creating Modals

It is possible to create modals. It is similar to the [useToast](/docs/composables/useToast) composable. To use this functionality, you must initialize a `BModalOrchestrator` component **once** in your app. There are two primary methods, `show` and `confirm`. Unlike `Toasts`, these two functions return a `promise`

Both `show` and `confirm` may accept two variations

### Basic creation

The first variation, and simplest is to pass in a simple object. This corresponds mostly to the props of `BModal`. The object can be a `MaybeRefOrGetter` for reactivity

<HighlightCard>
  <BButton @click="createBasic">Click me</BButton>

<template #html>

```vue
<template>
  <BButton @click="createBasic">Click me</BButton>
</template>

<script setup lang="ts">
const {confirm} = useModalController()
const toast = useToast()

const title = ref('Hello')

setInterval(() => {
  title.value = title.value === 'Hello' ? 'World' : 'Hello'
}, 2500)

const createBasic = async () => {
  const value = await confirm(computed(() => ({title: title.value})))

  toast.show(`Promise resolved to ${value}`, {variant: 'info'})
}
</script>
```

  </template>
</HighlightCard>

### Advanced Creation

Similar to `useToast`, it is also possible to input variation of components for fine grained control

<HighlightCard>
  <BButton @click="createAdvanced">Click me</BButton>

<template #html>

```vue
<template>
  <BButton @click="createAdvanced">Click me</BButton>
</template>

<script setup lang="ts">
const {show} = useModalController()

const createAdvanced = () => {
  show(
    h(BModal, null, {
      default: () => 'Hello world',
      cancel: () => h('button', null, {default: () => 'button!'}),
    })
  )
}
</script>
```

  </template>
</HighlightCard>

### Show vs Confirm

The difference between `show` and `confirm` is simple. Both methods accept the same parameters. The difference being that `show` will always have its promise resolve to `true`, whereas `confirm` can be one of `true`, `false`, or `null`. Clicking the `ok` button will resolve to `true`, `cancel` to `false` and any other closable action `null` (clicking the backdrop, or some other custom closing action. More accurately, when the `hide` function does not pass in the trigger parameter of `ok` or `cancel`)

## Globally Hiding Modals

In addition to being able to create modals in a global context, you are also able to hide modals from anywhere in the app. This specific feature does not require that `BModalOrchestrator` exists

<HighlightCard>
  <BButton @click="nestedModal1 = !nestedModal1">Open First Modal</BButton>
  <BModal v-model="nestedModal1" title="First Modal" ok-only>
    <p class="my-2">First Modal</p>
    <BButtonGroup>
      <BButton @click="nestedModal2 = !nestedModal2">Open Second Modal</BButton>
      <BButton @click="hide">Hide Last</BButton>
      <BButton @click="hideAll">Hide All</BButton>
    </BButtonGroup>
  </BModal>
  <BModal v-model="nestedModal2" title="Second Modal" ok-only>
    <p class="my-2">Second Modal</p>
    <BButtonGroup>
      <BButton @click="nestedModal3 = !nestedModal3" size="sm">Open Third Modal</BButton>
      <BButton @click="hide">Hide Last</BButton>
      <BButton @click="hideAll">Hide All</BButton>
    </BButtonGroup>
  </BModal>
  <BModal v-model="nestedModal3" title="Third Modal" ok-only>
    <p class="my-1">Third Modal</p>
    <BButtonGroup>
      <BButton @click="hide">Hide Last</BButton>
      <BButton @click="hideAll">Hide All</BButton>
    </BButtonGroup>
  </BModal>
  <template #html>

```vue
<template>
  <BButton @click="nestedModal1 = !nestedModal1">Open First Modal</BButton>
  <BModal v-model="nestedModal1" title="First Modal" ok-only>
    <p class="my-2">First Modal</p>
    <BButtonGroup>
      <BButton @click="nestedModal2 = !nestedModal2">Open Second Modal</BButton>
      <BButton @click="hide">Hide Last</BButton>
      <BButton @click="hideAll">Hide All</BButton>
    </BButtonGroup>
  </BModal>
  <BModal v-model="nestedModal2" title="Second Modal" ok-only>
    <p class="my-2">Second Modal</p>
    <BButtonGroup>
      <BButton @click="nestedModal3 = !nestedModal3" size="sm">Open Third Modal</BButton>
      <BButton @click="hide">Hide Last</BButton>
      <BButton @click="hideAll">Hide All</BButton>
    </BButtonGroup>
  </BModal>
  <BModal v-model="nestedModal3" title="Third Modal" ok-only>
    <p class="my-1">Third Modal</p>
    <BButtonGroup>
      <BButton @click="hide">Hide Last</BButton>
      <BButton @click="hideAll">Hide All</BButton>
    </BButtonGroup>
  </BModal>
</template>

<script setup lang="ts">
const nestedModal1 = ref(false)
const nestedModal2 = ref(false)
const nestedModal3 = ref(false)

const {hide, hideAll} = useModalController()
</script>
```

  </template>
</HighlightCard>

<script setup lang="ts">
import {BButton, BModal, useModalController, BButtonGroup, useToast} from 'bootstrap-vue-next'
import HighlightCard from '../../components/HighlightCard.vue'
import {ref, computed, h} from 'vue'

const nestedModal1 = ref(false)
const nestedModal2 = ref(false)
const nestedModal3 = ref(false)

const {hide, hideAll, show, confirm, modals} = useModalController()
const toast = useToast()

const title = ref('Hello')

setInterval(() => {
  title.value = title.value === 'Hello' ? 'World' : 'Hello'
}, 2500)

const createBasic = async () => {
  const value = await confirm(computed(() => ({title: title.value})))

  toast.show(`Promise resolved to ${value}`, {variant: 'info'})
}

const createAdvanced = () => {
  show(
    h(BModal, null, {
      default: () => 'Hello world',
      cancel: () => h('button', null, {default: () => 'button!'})
    })
  )
}
</script>
