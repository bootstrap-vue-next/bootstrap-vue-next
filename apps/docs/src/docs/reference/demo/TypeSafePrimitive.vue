<template>
  <BFormRadioGroup
    v-model="color"
    :options="colors"
  />
  <p class="mt-2">Selected: {{ color }}</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const colors = ['Red', 'Green', 'Blue'] as const

// TypeScript infers: Ref<'Red' | 'Green' | 'Blue'>
const color = ref<'Red' | 'Green' | 'Blue'>('Red')
</script>
