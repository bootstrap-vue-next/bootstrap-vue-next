# useModalController

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

`useModalController` can hide modals everywhere in the app, as well as creating modals on the fly

</div>

## BModalOrchestrator

As described, you must have initialized `BModalOrchestrator` once and only once (doing multiple may display multiple `Modals`). This is usually best placed at the App root.

<HighlightCard>

<template #html>

```vue-html
<BModalOrchestrator />
```

  </template>
</HighlightCard>

The only props it access are `teleportDisabled` and `teleportTo` to modify the location that it is placed

In addition, it contains a few exposed methods. These exposed methods on the `template ref` correspond to those in the `useToast` function, described below

- confirm
- show
- modals

## Creating Modals

Showing a modal is done through the `show` or `confirm` method

<HighlightCard>
  <BButton @click="showExample">Click me</BButton>

<template #html>

```vue
<template>
  <BButton @click="showExample">Click me</BButton>
</template>

<script setup lang="ts">
const {confirm} = useModalController()
const toast = useToast()

const showExample = async () => {
  const value = await confirm({props: {title: 'Hello World!'}})

  toast.show({props: {title: `Promise resolved to ${value}`, variant: 'info'}})
}
</script>
```

  </template>
</HighlightCard>

### Reactivity Within Show

`show` and `confirm` can accept a `MaybeRefOrGetter`, meaning that all properties are reactive

<HighlightCard>
  <BButton @click="showReactiveExample">Click me</BButton>

<template #html>

```vue
<template>
  <BButton @click="showReactiveExample">Click me</BButton>
</template>

<script setup lang="ts">
const {show} = useModalController()

const title = ref('Hello')

setInterval(() => {
  title.value = title.value === 'Hello' ? 'World' : 'Hello'
}, 2500)

const showReactiveExample = () => {
  show({
    props: computed(() => ({
      title: title.value,
    })),
  })
}
</script>
```

  </template>
</HighlightCard>

### Advanced Creation

Using props can work for most situations, but it leaves some finer control to be desired. For instance, you can not add HTML to any slot value. This is where the `component` property comes into play. Using the `component` property, you can input the component to render. This can either be an imported SFC or an inline render function. Of course, it is also reactive

<HighlightCard>
  <BButton @click="showMeAdvancedExample">Click me</BButton>

<template #html>

```vue
<template>
  <BButton @click="showMeAdvancedExample">Click me</BButton>
</template>

<script setup lang="ts">
const {show} = useModalController()

const firstRef = ref<OrchestratedToast>({
  body: `${Math.random()}`,
})

setInterval(() => {
  firstRef.value.body = `${Math.random()}`
}, 1000)

const showMeAdvancedExample = () => {
  show({
    props: () => ({
      body: firstRef.value.body,
    }),
    component: computed(() =>
      Number.parseInt(firstRef.value.body?.charAt(2) ?? '0') % 2 === 0
        ? BModal
        : h(BModal, null, {default: () => `custom ${firstRef.value.body}`})
    ),
  })

  // Demonstration psuedocode, you can import a component and use it
  // const importedComponent = () => {
  //   show({
  //     component: import('./MyModalComponent.vue'),
  //   })
  // }
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
}, 1000)

const showExample = async () => {
  const value = await confirm({ props: { title: 'Hello World!' } })

  toast.show({ props: { title: `Promise resolved to ${value}`, variant: 'info' } })
}

const showReactiveExample = () => {
  show({
    props: computed(() => ({
      title: title.value
    }))
  })
}

const showMeAdvancedExample = () => {
  show({
    props: () => ({
      body: title.value,
    }),
    component: computed(() =>
      title.value === 'Hello'
        ? BModal
        : h(BModal, null, {default: () => `custom ${title.value}`})
    ),
  })
}
</script>
