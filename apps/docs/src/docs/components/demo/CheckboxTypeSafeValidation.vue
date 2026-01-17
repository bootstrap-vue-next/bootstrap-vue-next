<template>
  <BFormGroup
    label="Select users"
    description="Select one or more users"
  >
    <BFormCheckboxGroup
      id="checkbox-type-safe-validation"
      v-model="selectedIds"
      :options="users"
      :state="validationState"
      value-field="id"
      text-field="name"
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

const selectedIds = ref<number[]>([])

const validationState = computed(() => selectedIds.value.length > 0)
</script>
