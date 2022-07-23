<template>
  <div class="my-2">
    <h2>Overlay</h2>
    <div>
      <b-overlay :show="showOverlay" rounded="sm">
        <b-card title="Card with overlay" :aria-hidden="showOverlay ? 'true' : null">
          <b-card-text>Laborum consequat non elit enim exercitation cillum.</b-card-text>
          <b-card-text>Click the button to toggle the overlay:</b-card-text>
          <b-button :disabled="showOverlay" variant="primary" @click="showOverlay = true"
            >Show overlay</b-button
          >
        </b-card>
      </b-overlay>
      <b-button class="mt-3" @click="showOverlay = !showOverlay">Toggle overlay</b-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const showOverlay = ref(false)
</script>
