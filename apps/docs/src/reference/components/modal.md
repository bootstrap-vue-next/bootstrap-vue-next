# Modal

## Usage

<HighlightCard>
  <b-button @click="modal = !modal">
    Toggle modal
  </b-button>
  <b-modal v-model="modal" title="Hello, World!">
    Foobar?
  </b-modal>
  <template #html>

```vue-html
<template>
  <b-button @click="modal = !modal">
    Toggle modal
  </b-button>
  <b-modal v-model="modal">
    Foo bar
  </b-modal>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const modal = ref(false)
</script>
```

  </template>
</HighlightCard>

## Changing state via root

At this time, there is no built in functionality for toggling a modal in a global state. A simple workaround to be able to modify the state of the modal is to use a global state management tool like [pinia](https://pinia.vuejs.org/). By simply v-modelling to a ref managed by the pinia state you can open and close the modal without context. This is not a perfect solution and will be looked at further in the future. Alternatively, you can export a `ref` from an external file and v-model to that

## Prevent Closing

It is possible to prevent showing/closing modals. You can prevent hiding on the following Events: ok, cancel, close, and hide

<HighlightCard>
  <b-button @click="preventableModal = !preventableModal">
    Toggle modal
  </b-button>
  <b-modal v-model="preventableModal" title="Hello, World!" @hide.prevent>
    Foobar?
    <b-button @click="preventableModal = false">Force leave</b-button>
  </b-modal>
  <template #html>

```vue-html
<template>
  <b-button @click="preventableModal = !preventableModal">
    Toggle modal
  </b-button>

  <b-modal v-model="preventableModal" title="Hello, World!" @hide.prevent>
    Foobar?
    <b-button @click="preventableModal = false">Force leave</b-button>
  </b-modal>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const preventableModal = ref(false)
</script>
```

  </template>
</HighlightCard>

## Multiple Modal Support

<HighlightCard>
  <b-button @click="nestedModal1 = !nestedModal1">Open First Modal</b-button>
  <b-modal v-model="nestedModal1" size="lg" title="First Modal" ok-only no-stacking>
    <p class="my-2">First Modal</p>
    <b-button @click="nestedModal2 = !nestedModal2">Open Second Modal</b-button>
  </b-modal>
  <b-modal v-model="nestedModal2" title="Second Modal" ok-only>
    <p class="my-2">Second Modal</p>
    <b-button @click="nestedModal3 = !nestedModal3" size="sm">Open Third Modal</b-button>
  </b-modal>
  <b-modal v-model="nestedModal3" size="sm" title="Third Modal" ok-only>
    <p class="my-1">Third Modal</p>
  </b-modal>
  <template #html>

```vue-html
<template>
  <b-button @click="nestedModal1 = !nestedModal1">Open First Modal</b-button>

  <b-modal v-model="nestedModal1" size="lg" title="First Modal" ok-only no-stacking>
    <p class="my-2">First Modal</p>
    <b-button @click="nestedModal2 = !nestedModal2">Open Second Modal</b-button>
  </b-modal>

  <b-modal v-model="nestedModal2" title="Second Modal" ok-only>
    <p class="my-2">Second Modal</p>
    <b-button @click="nestedModal3 = !nestedModal3" size="sm">Open Third Modal</b-button>
  </b-modal>

  <b-modal v-model="nestedModal3" size="sm" title="Third Modal" ok-only>
    <p class="my-1">Third Modal</p>
  </b-modal>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const nestedModal1 = ref(false)
const nestedModal2 = ref(false)
const nestedModal3 = ref(false)
</script>
```

  </template>
</HighlightCard>

<ComponentReference :data="data"></ComponentReference>

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
