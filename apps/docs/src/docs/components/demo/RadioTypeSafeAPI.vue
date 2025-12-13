<template>
  <BFormRadioGroup
    v-model="selectedUserId"
    :options="users"
    value-field="user_id"
    text-field="user_name"
    disabled-field="is_inactive"
  />
  <p class="mt-2">Selected User ID: {{ selectedUserId }}</p>
  <p class="text-muted small">TypeScript validates snake_case field names from API</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'

interface ApiUser {
  user_id: number // API uses snake_case
  user_name: string
  user_email: string
  is_inactive: boolean
}

// In a real app, you'd fetch from API:
// onMounted(async () => {
//   const response = await fetch('/api/users')
//   users.value = await response.json()
// })

const users: ApiUser[] = [
  {user_id: 1, user_name: 'Alice', user_email: 'alice@example.com', is_inactive: false},
  {user_id: 2, user_name: 'Bob', user_email: 'bob@example.com', is_inactive: false},
  {user_id: 3, user_name: 'Charlie', user_email: 'charlie@example.com', is_inactive: true},
]

const selectedUserId = ref<number>(1)
</script>
