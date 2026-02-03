<template>
  <BButton @click="nestedModal1 = !nestedModal1">Open First Modal</BButton>

  <BModal
    v-model="nestedModal1"
    title="First Modal"
    ok-only
  >
    <p class="my-2">First Modal</p>
    <BButtonGroup>
      <BButton @click="nestedModal2 = !nestedModal2">Open Second Modal</BButton>
      <BButton @click="() => hide()">Hide Last</BButton>
      <BButton @click="() => hideAll()">Hide All</BButton>
    </BButtonGroup>
  </BModal>
  <BModal
    v-model="nestedModal2"
    title="Second Modal"
    ok-only
  >
    <p class="my-2">Second Modal</p>
    <BButtonGroup>
      <BButton
        size="sm"
        @click="nestedModal3 = !nestedModal3"
        >Open Third Modal</BButton
      >
      <BButton @click="() => hide()">Hide Last</BButton>
      <BButton @click="() => hideAll()">Hide All</BButton>
    </BButtonGroup>
  </BModal>
  <BModal
    v-model="nestedModal3"
    title="Third Modal"
    ok-only
  >
    <p class="my-1">Third Modal</p>
    <BButtonGroup>
      <BButton @click="() => hide()">Hide Last</BButton>
      <BButton @click="() => hideAll()">Hide All</BButton>
    </BButtonGroup>
  </BModal>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {BButton, BButtonGroup, BModal, useModal} from 'bootstrap-vue-next'

const nestedModal1 = ref(false)
const nestedModal2 = ref(false)
const nestedModal3 = ref(false)

const {hide, hideAll} = useModal()
</script>
