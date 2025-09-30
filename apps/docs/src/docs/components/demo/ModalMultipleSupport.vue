<template>
  <div>
    <BButton @click="nestedModal1 = !nestedModal1">Open First Modal</BButton>

    <BModal
      v-model="nestedModal1"
      size="lg"
      title="First Modal"
      ok-only
      no-stacking
    >
      <p class="my-2">First Modal</p>
      <BButton @click="nestedModal2 = !nestedModal2">Open Second Modal</BButton>
    </BModal>

    <BModal
      v-model="nestedModal2"
      title="Second Modal"
      ok-only
    >
      <p class="my-2">Second Modal</p>
      <BButton
        size="sm"
        @click="nestedModal3 = !nestedModal3"
      >
        Open Third Modal
      </BButton>
    </BModal>

    <BModal
      v-model="nestedModal3"
      size="sm"
      title="Third Modal"
      ok-only
    >
      <p class="my-1">Third Modal</p>
      <BButton
        size="sm"
        @click="nestedModal4 = !nestedModal4"
      >
        Open Fourth Modal
      </BButton>
    </BModal>

    <BModal
      v-model="nestedModal4"
      size="sm"
      title="Fourth Modal"
      ok-only
    >
      <p class="my-1">Fourth Modal</p>
    </BModal>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const nestedModal1 = ref(false)
const nestedModal2 = ref(false)
const nestedModal3 = ref(false)
const nestedModal4 = ref(false)
</script>

<style>
/* Modal stacking example styles */
.modal {
  --bs-modal-zindex: 1900;
  transform: translate(
    calc((var(--b-count, 0) - var(--b-position, 0)) * 20px),
    calc((var(--b-count, 0) - var(--b-position, 0)) * 20px)
  );
  transition:
    transform 0.5s,
    opacity 0.15s linear !important;
}
.modal:not(.stack-inverse-position-0) {
  opacity: calc(1 - ((var(--b-count, 0) - var(--b-position, 0)) * 0.1));
}
.modal-backdrop:not(.stack-inverse-position-0) {
  opacity: 0 !important;
}
</style>
