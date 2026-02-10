<template>
  <BFormSelect
    v-model="selectedUserId"
    :options="userOptions"
  />
  <p class="mt-2">Selected User ID: {{ selectedUserId }}</p>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'

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

// Map to standard format for full type safety
const userOptions = computed(() =>
  users.map((user) => ({
    value: user.id,
    text: user.name,
  }))
)

// TypeScript infers that selectedUserId is of type: number
const selectedUserId = ref<number>()
</script>
