<template>
  <BFormRadioGroup
    v-model="selectedPriority"
    :options="priorityOptions"
    value-field="value"
    text-field="label"
  />
  <p class="mt-2">
    Selected Priority: <strong>{{ selectedPriority }}</strong>
  </p>
  <p class="text-muted small">v-model is constrained to Priority enum values</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {Priority, type PriorityOption} from './RadioTypeSafeEnumTypes'

const priorityOptions: PriorityOption[] = [
  {label: 'Low Priority', value: Priority.Low, color: 'success'},
  {label: 'Medium Priority', value: Priority.Medium, color: 'info'},
  {label: 'High Priority', value: Priority.High, color: 'warning'},
  {label: 'Critical Priority', value: Priority.Critical, color: 'danger'},
]

// TypeScript ensures selectedPriority can only be a Priority enum value
const selectedPriority = ref<Priority>(Priority.Medium)
</script>
