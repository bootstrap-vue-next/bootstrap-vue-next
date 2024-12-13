<template>
  <BFormRadioGroup
    v-model="selected"
    :options="options"
    class="mb-3"
    value-field="item"
    text-field="name"
    disabled-field="notEnabled"
  />

  <div class="mt-3">
    Selected: <strong>{{ selected }}</strong>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const selected = ref('A')

const options = [
  {item: 'A', name: 'Option A'},
  {item: 'B', name: 'Option B'},
  {item: 'D', name: 'Option C', notEnabled: true},
  {item: {d: 1}, name: 'Option D'},
]
</script>
