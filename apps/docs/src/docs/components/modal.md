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
  <BModal v-model="modal" title="Hello, World!"> Foobar? </BModal>
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

## Scrolling long content

When modals become too long for the user's viewport or device, they scroll independent of the page
itself. Try the demo below to see what we mean.

<HighlightCard>
  <BButton v-b-modal.modal-tall>Launch overflowing modal</BButton>

  <BModal id="modal-tall" title="Overflowing Content">
    <p class="my-4" v-for="i in 20" :key="i">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
      in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p>
  </BModal>
  <template #html>

```vue
<template>
  <BButton v-b-modal.modal-tall>Launch overflowing modal</BButton>

  <BModal id="modal-tall" title="Overflowing Content">
    <p class="my-4" v-for="i in 20" :key="i">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
      egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p>
  </BModal>
</template>
```

  </template>
</HighlightCard>

You can also create a scrollable modal that allows the scrolling of the modal body by setting the
prop `scrollable` to `true`.

<HighlightCard>
  <BButton v-b-modal.modal-scrollable>Launch scrolling modal</BButton>

  <BModal id="modal-scrollable" scrollable title="Scrollable Content">
    <p class="my-4" v-for="i in 20" :key="i">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
      in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p>
  </BModal>
  <template #html>

```vue
<template>
  <BButton v-b-modal.modal-scrollable>Launch scrolling modal</BButton>

  <BModal id="modal-scrollable" scrollable title="Scrollable Content">
    <p class="my-4" v-for="i in 20" :key="i">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
      egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p>
  </BModal>
</template>
```

  </template>
</HighlightCard>

## Vertically centered modal

Vertically center your modal in the viewport by setting the `centered` prop.

<HighlightCard>
  <BButton v-b-modal.modal-center>Launch centered modal</BButton>

  <BModal id="modal-center" centered title="BootstrapVue">
    <p class="my-4">Vertically centered modal!</p>
  </BModal>
  <template #html>

```vue
<template>
  <BButton v-b-modal.modal-center>Launch centered modal</BButton>

  <BModal id="modal-center" centered title="BootstrapVue">
    <p class="my-4">Vertically centered modal!</p>
  </BModal>
</template>
```

  </template>
</HighlightCard>

Feel free to mix vertically `centered` with `scrollable`.

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

## Programmatically Control

To programmatically control your modals with global state, refer to our documentation at [useModal](/docs/composables/useModal) and [useModalController](/docs/composables/useModalController)

### Programmatically Create Modals

To programmatically create modals, refer to the documentation at [useModalController](/docs/composables/useModalController)

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/modal.data'
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import {BCard, BCardBody, BModal, BButton, vBModal} from 'bootstrap-vue-next'
import {ref} from 'vue'

const modal = ref(false)

const preventableModal = ref(false)

const nestedModal1 = ref(false)
const nestedModal2 = ref(false)
const nestedModal3 = ref(false)
</script>
