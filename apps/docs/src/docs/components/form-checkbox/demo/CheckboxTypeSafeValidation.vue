<template>
  <!-- #region template -->
  <BFormGroup
    label="Select users"
    description="Select one or more users"
  >
    <BFormCheckboxGroup
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
  <!-- #endregion template -->
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

const selectedIds = ref<readonly number[]>([])

const validationState = computed(() => selectedIds.value.length > 0)
</script>
