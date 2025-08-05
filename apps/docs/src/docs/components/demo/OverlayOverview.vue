<template>
  <BOverlay
    :show="show"
    rounded="sm"
  >
    <BCard
      title="Card with overlay"
      :aria-hidden="show ? 'true' : null"
    >
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
  </BOverlay>

  <BButton @click="show = !show">Toggle overlay</BButton>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const show = ref(false)
</script>
