<template>
  <BFormRadioGroup
    v-model="selectedUserId"
    :options="users"
    value-field="id"
    text-field="name"
  />
  <p class="mt-2">Selected User ID: {{ selectedUserId }}</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'

interface User {
  id: number
  name: string
  email: string
}

const users: User[] = [
  {id: 1, name: 'Alice', email: 'alice@example.com'},
  {id: 2, name: 'Bob', email: 'bob@example.com'},
  {id: 3, name: 'Charlie', email: 'charlie@example.com'},
]

// TypeScript infers that selectedUserId is of type: number
const selectedUserId = ref<number>(1)
</script>
