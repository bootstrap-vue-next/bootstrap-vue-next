# useModal

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

You can use `useModal` to get the closest modal in **child component** and hide it. It can also be supplied a target id to show or hide a specific modal

</div>

<HighlightCard>
  <template #html>

```vue
<BModal>
  <MyComponent />
</BModal>

<template>
  <BButton @click="hide">Done</BButton>
</template>

<script setup lang="ts">
const {hide} = useModal()
</script>
```

  </template>
</HighlightCard>

You can also provide an id to get particular modal and show/hide it. Currently, we do not support using CSS selector to
find modal since the `BModal` in lazy mode may not render at page initial. If the modal component does not exist and you attempt to call any of the exposed methods the methods will safely ignore

<HighlightCard>
<BButton @click="show">Click me</BButton>
<BModal v-if="someConditions" v-model="programmaticModal" id="my-modal">
  <BButton @click="hide">Hide me</BButton>
</BModal>
<template #html>

```vue
<template>
  <BButton @click="show">Click me</BButton>
  <BModal v-if="someConditions" v-model="programmaticModal" id="my-modal">
    <BButton @click="hide">Hide me</BButton>
  </BModal>
</template>

<script setup lang="ts">
const someConditions = ref(false)
const programmaticModal = ref(false)

onMounted(() => {
  someConditions.value = true
})

const {show, hide, modal} = useModal('my-modal')
</script>
```

  </template>
</HighlightCard>

<script setup lang="ts">
import {BButton, BModal, useModal} from 'bootstrap-vue-next'
import HighlightCard from '../../components/HighlightCard.vue'
import {ref, onMounted} from 'vue'

const someConditions = ref(false)
const programmaticModal = ref(false)

onMounted(() => {
    someConditions.value = true
})

const {show, hide} = useModal('my-modal')
</script>
