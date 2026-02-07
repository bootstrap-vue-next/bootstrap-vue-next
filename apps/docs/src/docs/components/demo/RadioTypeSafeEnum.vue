<template>
  <BFormRadioGroup
    v-model="selectedPriority"
    :options="priorityOptions"
  />
  <p class="mt-2">
    Selected Priority: <strong>{{ selectedPriority }}</strong>
  </p>
  <p class="text-muted small">v-model is constrained to Priority enum values</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {Priority} from './RadioTypeSafeEnumTypes'

// Use explicit {value, text} structure with additional properties for type inference
const priorityOptions: {text: string; value: Priority; color: string}[] = [
  {text: 'Low Priority', value: Priority.Low, color: 'success'},
  {text: 'Medium Priority', value: Priority.Medium, color: 'info'},
  {text: 'High Priority', value: Priority.High, color: 'warning'},
  {text: 'Critical Priority', value: Priority.Critical, color: 'danger'},
]

// TypeScript ensures selectedPriority can only be a Priority enum value
const selectedPriority = ref<Priority>(Priority.Medium)
</script>
