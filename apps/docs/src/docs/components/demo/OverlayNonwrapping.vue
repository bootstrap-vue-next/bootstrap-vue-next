<template>
  <div class="position-relative p-4 bg-info">
    <p class="text-light fw-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <BCard title="Card with parent overlay">
      <BCardText>Laborum consequat non elit enim exercitation cillum.</BCardText>
      <BCardText>Click the button to toggle the overlay:</BCardText>
      <BButton
        :disabled="show"
        variant="primary"
        @click="show = true"
      >
        Show overlay
      </BButton>
    </BCard>
    <p class="text-light fw-bold mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <BOverlay
      :show="show"
      no-wrap
    />
  </div>
  <BButton
    class="mt-3"
    @click="show = !show"
    >Toggle overlay</BButton
  >
</template>

<script setup lang="ts">
import {ref} from 'vue'

const show = ref(false)
</script>
