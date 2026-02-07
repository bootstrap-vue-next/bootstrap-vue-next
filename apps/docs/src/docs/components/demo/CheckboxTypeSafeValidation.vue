<template>
  <BFormGroup
    label="Select users"
    description="Select one or more users"
  >
    <BFormCheckboxGroup
      id="checkbox-type-safe-validation"
      v-model="selectedIds"
      :options="userOptions"
      :state="validationState"
      stacked
    />
    <BFormInvalidFeedback :state="validationState">
      Please select at least one user
    </BFormInvalidFeedback>
  </BFormGroup>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'

interface User {
  id: number
  name: string
}

const users: User[] = [
  {id: 1, name: 'Alice'},
  {id: 2, name: 'Bob'},
  {id: 3, name: 'Charlie'},
]

// Map to standard format for full type safety
const userOptions = computed(() =>
  users.map((user) => ({
    value: user.id,
    text: user.name,
  }))
)

const selectedIds = ref<number[]>([])

const validationState = computed(() => selectedIds.value.length > 0)
</script>
