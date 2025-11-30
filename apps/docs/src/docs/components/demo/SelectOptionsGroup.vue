<template>
  <BFormSelect v-model="selected" :options="ex1GroupOptions" />

  <div class="mt-3">
    Selected: <strong>{{ selected }}</strong>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const ex1GroupOptions = [
  {value: null, text: 'Please select an option'},
  {value: 'a', text: 'This is First option'},
  {value: 'b', text: 'Selected Option', disabled: true},
  {
    label: 'Grouped options',
    options: [
      {value: {C: '3PO'}, text: 'Option with object value'},
      {value: {R: '2D2'}, text: 'Another option with object value'},
    ],
  },
]

const selected = ref()
</script>
