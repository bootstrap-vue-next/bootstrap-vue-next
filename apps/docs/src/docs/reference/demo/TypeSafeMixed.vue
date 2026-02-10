<template>
  <BFormSelect
    v-model="selected"
    :options="mixedOptions"
  />
  <p class="mt-2">Selected: {{ selected }} (type: {{ typeof selected }})</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'

// Options can mix primitives and objects
const mixedOptions = [
  'Any',
  {value: 'sm', text: 'Small'},
  {value: 'md', text: 'Medium'},
  {value: 'lg', text: 'Large'},
] as const

// TypeScript infers: 'Any' | 'sm' | 'md' | 'lg'
const selected = ref<'Any' | 'sm' | 'md' | 'lg'>('Any')
</script>
