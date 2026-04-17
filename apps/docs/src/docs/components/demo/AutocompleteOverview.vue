<template>
  <div>
    <label for="autocomplete-basic">Select a fruit</label>
    <BAutocomplete
      id="autocomplete-basic"
      v-model="selected"
      :options="fruits"
      placeholder="Type to search fruits..."
    />
    <p class="mt-2">Selected: {{ selected }}</p>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const selected = ref<string | undefined>(undefined)
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew']
</script>
