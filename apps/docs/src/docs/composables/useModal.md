<ComposableHeader path="useModal/index.ts" title="useModal" />

<div class="lead mb-5">

The `useModal` composable provides a powerful API to create, manage, and control modals programmatically from anywhere in your application. It allows you to create modals on-demand, manage existing modals, and handle modal interactions through promises.

</div>

## Setup

To use `useModal`, you need one of the following setup approaches:

### BApp Component (Recommended)

The easiest way is to wrap your application with the `BApp` component, which automatically sets up the orchestrator and registry:

<HighlightCard>
<template #html>

```vue
<template>
  <BApp>
    <router-view />
  </BApp>
</template>
```

</template>
</HighlightCard>

### Plugin Setup (Legacy)

Alternatively, you can use the traditional plugin approach.

<UsePluginAlert />

## Creating Modals

Creating a modal is done through the `create` method:

<HighlightCard>
  <BButton @click="showExample">Click me</BButton>

<template #html>

```vue
<template>
  <BButton @click="showExample">Click me</BButton>
</template>

<script setup lang="ts">
const {create} = useModal()

const showExample = async () => {
  const value = await create({title: 'Hello World!'}).show()

  create({
    body: `Promise resolved to object with {ok: ${value.ok}, trigger: ${value.trigger}}`,
    variant: 'info',
  }).show()
}
</script>
```

  </template>
</HighlightCard>

### Reactivity Within `create`

`create` props property can accept a `MaybeRef`, meaning that you can make properties reactive

<HighlightCard>
  <BButton @click="showReactiveExample">Click me</BButton>

<template #html>

```vue
<template>
  <BButton @click="showReactiveExample">Click me</BButton>
</template>

<script setup lang="ts">
const {create} = useModal()

const title = ref('Hello')
onMounted(() => {
  setInterval(() => {
    title.value = title.value === 'Hello' ? 'World' : 'Hello'
  }, 2500)
})

const showReactiveExample = () => {
  create({
    title: title,
  }).show()
}
</script>
```

  </template>
</HighlightCard>

### Advanced Creation

Using props can work for most situations, but it leaves some finer control to be desired. For instance, you cannot add HTML to any slot value using props alone. This is where the `component` property comes into play. Using the `component` property, you can input the component to render. This can either be an imported SFC or an inline render function.

You can also use component slots to render what you want. This is done through the `slots` property. The `slots` property is an object that contains the slot name as the key and a render function or component as the value. The render function is passed a `scope` object that contains the slots scope.

<HighlightCard>
  <BButton @click="showMeAdvancedExample">Click me</BButton>

<template #html>

```vue
<template>
  <BButton @click="showMeAdvancedExample">Click me</BButton>
</template>

<script setup lang="ts">
const {create} = useModal()

const firstRef = ref({
  body: `${Math.random()}`,
})
onMounted(() => {
  setInterval(() => {
    firstRef.value.body = `${Math.random()}`
  }, 1000)
})
const showMeAdvancedExample = () => {
  create({
    slots: {
      default: (scope) =>
        h('div', null, {default: () => `custom ${firstRef.value.body} - ${scope.visible}`}),
    },
  }).show()

  // Demonstration pseudocode, you can import a component and use it
  // const importedComponent = () => {
  //   create({
  //     component: (await import('./TestModal.vue')).default,
  //   })
  // }
}
</script>
```

  </template>
</HighlightCard>

### Return Value

The `create` method returns a promise that resolves after the modal has been hidden to a `BvTriggerableEvent` object.  
Using the `resolveOnHide` option (in the second argument), the promise resolves at the time the modal begins hiding, rather than after it is fully hidden.

```js
const value = await create({title: 'Hello World!'}, {resolveOnHide: true})
```

This object contains the following properties:

- `ok: boolean`

  Clicking the `ok` button resolve this to `true`, `cancel` to `false` and any other closable action `null` (clicking the backdrop, or some other custom closing action. More accurately, when the `hide` function does not pass in the trigger parameter of `ok` or `cancel`)

- `trigger: string | null`

  This is the trigger that closed the modal. This is useful for determining what action closed the modal.

The promise also contains functions to control the modal:

- `show: () => void`

  This function shows the modal.

- `hide: (trigger?: string) => void`

  This function hides the modal. If a trigger is passed, it will be passed to the `trigger` property of the resolved promise

- `toggle: () => void`

  This function toggles the visibility of the modal.

- `set: (props: Partial<ModalOrchestratorParam>) => void`

  This function sets the props of the modal. This is useful for updating the modal after it has been created.

- `destroy: () => Promise<void>`

  This function destroys the modal and cleans up any resources associated with it.

### Lifecycle

By default, the modal is destroyed once it's closed. If you want to keep the modal, use the `keep` option in the second argument of the `create` method.
The modal is destroyed when the current scope is exited. You can also destroy it manually by calling the `destroy` method.

```js
const modal = create({title: 'Hello World!'}, {keep: true})
modal.show()
// do something
modal.destroy()
```

We also support the typescript feature `await using` to automatically destroy the modal when the scope is exited.

```js
await using modal = create({title: 'Hello World!'})
```

## Globally Hiding Modals

In addition to creating modals in a global context, you can also hide modals from anywhere in the app. This feature does not require an orchestrator component to be present.

<HighlightCard>
  <BButton @click="nestedModal1 = !nestedModal1">Open First Modal</BButton>
 
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

const {hide, hideAll} = useModal()
</script>
```

  </template>
</HighlightCard>

<script setup lang="ts">
import {useModal} from 'bootstrap-vue-next/composables/useModal'
import HighlightCard from '../../components/HighlightCard.vue'

import UsePluginAlert from '../../components/UsePluginAlert.vue'
import {ref, computed, h, onMounted, nextTick} from 'vue'
import ComposableHeader from './ComposableHeader.vue'

const nestedModal1 = ref(false)
const nestedModal2 = ref(false)
const nestedModal3 = ref(false)

const {hide, hideAll, create} = useModal()

const title = ref('Hello')

onMounted(() => {
  setInterval(() => {
    title.value = title.value === 'Hello' ? 'World' : 'Hello'
  }, 1000)
})

const showExample = async () => {
  const value = await create({ body: 'Hello World!' }).show()
  await nextTick()
  create({ body: `Promise resolved to object with {ok: ${value.ok}, trigger: ${value.trigger}}`, variant: 'info' }).show()
}

const showReactiveExample = () => {
  create({
      title: title,
  }).show()
}

const firstRef = ref({
  body: `${Math.random()}`,
})
onMounted(() => {
  setInterval(() => {
    firstRef.value.body = `${Math.random()}`
  }, 1000)
})

const showMeAdvancedExample = () => {
  create({
    slots: {
      default: (scope) => h('div', null, {default: () => `custom ${firstRef.value.body} - ${scope.visible}`}),
    },
  }).show()
}
</script>
