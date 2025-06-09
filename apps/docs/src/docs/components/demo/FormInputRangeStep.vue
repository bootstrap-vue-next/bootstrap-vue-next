<template>
  <label for="range-step">Example range with min and max</label>
  <BFormInput
    id="range-step"
    v-model="value"
    type="range"
    min="0"
    max="5"
    step="0.5"
  />
  <div class="mt-2">Value: {{ value }}</div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const value = ref('2')
</script>
