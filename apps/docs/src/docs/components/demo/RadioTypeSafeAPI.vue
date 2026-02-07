<template>
  <BFormRadioGroup
    id="radio-type-safe-api"
    v-model="selectedUserId"
    :options="userOptions"
  />
  <p class="mt-2">Selected User ID: {{ selectedUserId }}</p>
  <p class="text-muted small">TypeScript validates snake_case field names from API</p>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'

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

// Map to standard format for full type safety
const userOptions = computed(() =>
  users.map((user) => ({
    value: user.user_id,
    text: user.user_name,
    disabled: user.is_inactive,
  }))
)

const selectedUserId = ref<number>(1)
</script>
