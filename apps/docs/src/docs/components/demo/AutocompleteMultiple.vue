<template>
  <div>
    <label for="autocomplete-tags">Select multiple fruits</label>
    <BAutocomplete
      id="autocomplete-tags"
      v-model="selected"
      :options="fruits"
      multiple
      tags
      placeholder="Type to add fruits..."
    />
    <p class="mt-2">Selected: {{ selected }}</p>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const selected = ref<string[]>([])
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew']
</script>
