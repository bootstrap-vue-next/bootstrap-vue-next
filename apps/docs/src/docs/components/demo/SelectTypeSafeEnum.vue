<template>
  <BFormSelect
    v-model="currentStatus"
    :options="statusOptions"
  />
  <p class="mt-2">Selected Status: {{ currentStatus }}</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {Status} from './SelectTypeSafeEnumTypes'

// Use explicit {value, text} structure for type inference
const statusOptions: {value: Status; text: string}[] = [
  {value: Status.Active, text: 'Active'},
  {value: Status.Inactive, text: 'Inactive'},
  {value: Status.Pending, text: 'Pending'},
]

// TypeScript knows this is of type Status
const currentStatus = ref<Status>(statusOptions[0].value)
</script>
