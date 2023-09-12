# Modal

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

Modals are streamlined, but flexible dialog prompts powered by JavaScript and CSS. They support a number of use cases from user notification to completely custom content and feature a handful of helpful sub-components, sizes, variants, accessibility, and more.

</div>

## Usage

<HighlightCard>
  <BButton @click="modal = !modal">
    Toggle modal
  </BButton>
  <BModal v-model="modal" title="Hello, World!">
    Foobar?
  </BModal>
  <template #html>

```vue
<template>
  <BButton @click="modal = !modal"> Toggle modal </BButton>
  <BModal v-model="modal"> Foo bar </BModal>
</template>

<script setup lang="ts">
const modal = ref(false)
</script>
```

  </template>
</HighlightCard>

## Changing state via root

At this time, there is no built in functionality for toggling a modal in a global state. A simple workaround to be able to modify the state of the modal is to use a global state management tool like [pinia](https://pinia.vuejs.org/). By simply v-modelling to a ref managed by the pinia state you can open and close the modal without context. This is not a perfect solution and will be looked at further in the future. Alternatively, you can export a `ref` from an external file and v-model to that.

## Prevent Closing

It is possible to prevent showing/closing modals. You can prevent hiding on the following Events: ok, cancel, close, and hide.

<HighlightCard>
  <BButton @click="preventableModal = !preventableModal">
    Toggle modal
  </BButton>
  <BModal v-model="preventableModal" title="Hello, World!" @hide.prevent>
    Foobar?
    <BButton @click="preventableModal = false">Force leave</BButton>
  </BModal>
  <template #html>

```vue
<template>
  <BButton @click="preventableModal = !preventableModal"> Toggle modal </BButton>

  <BModal v-model="preventableModal" title="Hello, World!" @hide.prevent>
    Foobar?
    <BButton @click="preventableModal = false">Force leave</BButton>
  </BModal>
</template>

<script setup lang="ts">
const preventableModal = ref(false)
</script>
```

  </template>
</HighlightCard>

## Multiple Modal Support

<HighlightCard>
  <BButton @click="nestedModal1 = !nestedModal1">Open First Modal</BButton>
  <BModal v-model="nestedModal1" size="lg" title="First Modal" ok-only no-stacking>
    <p class="my-2">First Modal</p>
    <BButton @click="nestedModal2 = !nestedModal2">Open Second Modal</BButton>
  </BModal>
  <BModal v-model="nestedModal2" title="Second Modal" ok-only>
    <p class="my-2">Second Modal</p>
    <BButton @click="nestedModal3 = !nestedModal3" size="sm">Open Third Modal</BButton>
  </BModal>
  <BModal v-model="nestedModal3" size="sm" title="Third Modal" ok-only>
    <p class="my-1">Third Modal</p>
  </BModal>
  <template #html>

```vue
<template>
  <BButton @click="nestedModal1 = !nestedModal1">Open First Modal</BButton>

  <BModal v-model="nestedModal1" size="lg" title="First Modal" ok-only no-stacking>
    <p class="my-2">First Modal</p>
    <BButton @click="nestedModal2 = !nestedModal2">Open Second Modal</BButton>
  </BModal>

  <BModal v-model="nestedModal2" title="Second Modal" ok-only>
    <p class="my-2">Second Modal</p>
    <BButton @click="nestedModal3 = !nestedModal3" size="sm">Open Third Modal</BButton>
  </BModal>

  <BModal v-model="nestedModal3" size="sm" title="Third Modal" ok-only>
    <p class="my-1">Third Modal</p>
  </BModal>
</template>

<script setup lang="ts">
const nestedModal1 = ref(false)
const nestedModal2 = ref(false)
const nestedModal3 = ref(false)
</script>
```

  </template>
</HighlightCard>

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/modal.data'
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import {BCard, BCardBody, BModal, BButton} from 'bootstrap-vue-next'
import {ref} from 'vue'

const modal = ref(false)

const preventableModal = ref(false)

const nestedModal1 = ref(false)
const nestedModal2 = ref(false)
const nestedModal3 = ref(false)
</script>

## Programmatically Control

### `useModal()`

You can use `useModal()` to get the closest modal in child component and hide it.

```vue
<BModal>
  <MyComponent>
</BModal>
```

```vue
<template>
  <BButton @click="hideSelf">Done</BButton>
</template>

<script setup lang="ts">
import {useModal} from 'bootstrap-vue-next'

const {hide} = useModal()

function hideSelf() {
  hide()
}
</script>
```

You can also provide an id to get particular modal and show/hide it. Currently, we don't support using CSS selector to
find modal since the `BModal` in lazy mode may not render at page initial.

```vue
<template>
  <BModal v-if="someConditions" id="my-modal"> ...</BModal>
</template>

<script setup lang="ts">
import {useModal} from 'bootstrap-vue-next'
import {ref} from 'vue'

const someConditions = ref(...)

const {show, hide, modal} = useModal('my-modal')

// modal variable is BModal component ref
if (modal.value) {
  show()
  hide()

  modal.value.show()
  modal.value.hide()
} else {
  // If modal component not exists, you can still call show/hide methods but nothing happened
  show()
  hide()
}
</script>
```

### `useModalController()`

`modalController` can hide modals everywhere.

```ts
import {useModalController} from 'bootstrap-vue-next'

const modalController = useModalController()

modalController.hide() // Hide last modal
modalController.hideAll() // Hide all modals at once
```
