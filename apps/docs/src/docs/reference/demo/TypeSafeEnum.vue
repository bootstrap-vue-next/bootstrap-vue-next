<template>
  <BFormRadioGroup
    v-model="priority"
    :options="priorityOptions"
  />
  <p class="mt-2">Selected: {{ priority }}</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'

enum Priority {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
}

const priorityOptions = [
  {value: Priority.Low, text: 'Low'},
  {value: Priority.Medium, text: 'Medium'},
  {value: Priority.High, text: 'High'},
]

const priority = ref<Priority>(Priority.Medium)
</script>
