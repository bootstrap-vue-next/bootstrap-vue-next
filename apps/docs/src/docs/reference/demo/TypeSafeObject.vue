<template>
  <BFormSelect
    v-model="userId"
    :options="userOptions"
  />
  <p class="mt-2">Selected User ID: {{ userId }}</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const userOptions = [
  {value: 1, text: 'Alice'},
  {value: 2, text: 'Bob'},
  {value: 3, text: 'Charlie'},
] as const

// TypeScript infers: Ref<1 | 2 | 3>
const userId = ref<1 | 2 | 3>(1)
</script>
