<template>
  <div>
    <h5>Valid field names (autocompleted by IDE):</h5>
    <BFormRadioGroup
      v-model="selectedUserId"
      :options="users"
      value-field="id"
      text-field="name"
      disabled-field="inactive"
    />
    <p class="mt-2">Selected: {{ selectedUserId }}</p>

    <!-- Uncommenting this will show TypeScript errors: -->
    <!--
    <h5 class="mt-3">Invalid field names (TypeScript errors):</h5>
    <BFormRadioGroup
      v-model="selected"
      :options="users"
      value-field="userId"
      text-field="fullName"
      disabled-field="isDisabled"
    />
    TypeScript errors:
    - 'userId' doesn't exist on User (should be 'id')
    - 'fullName' doesn't exist on User (should be 'name')
    - 'isDisabled' doesn't exist on User (should be 'inactive')
    -->
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

interface User {
  id: number
  name: string
  email: string
  inactive: boolean
}

const users: User[] = [
  {id: 1, name: 'Alice', email: 'alice@example.com', inactive: false},
  {id: 2, name: 'Bob', email: 'bob@example.com', inactive: false},
  {id: 3, name: 'Charlie', email: 'charlie@example.com', inactive: true},
]

const selectedUserId = ref<number>(1)
</script>
