<template>
  <BFormSelect
    v-model="selected"
    :options="exMultiOptions"
    multiple
    :select-size="4"
  />

  <div class="mt-3">
    Selected: <strong>{{ selected }}</strong>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

// Options already in standard format for full type safety
const exMultiOptions = [
  {value: 'a', text: 'This is First option'},
  {value: 'b', text: 'Default Selected Option'},
  {value: 'c', text: 'This is another option'},
  {value: 'd', text: 'This one is disabled', disabled: true},
  {value: 'e', text: 'This is option e'},
  {value: 'f', text: 'This is option f'},
  {value: 'g', text: 'This is option g'},
]

const selected = ref<string[]>(['b'])
</script>
