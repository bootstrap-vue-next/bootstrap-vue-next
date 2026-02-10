<template>
  <div>
    <BFormCheckboxGroup
      id="checkbox-type-safe-basic"
      v-model="selectedUsers"
      :options="userOptions"
    />
    <div class="mt-3">
      Selected user IDs: <strong>{{ selectedUsers }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'

interface User {
  id: number
  name: string
  inactive?: boolean
}

const users: User[] = [
  {id: 1, name: 'Alice'},
  {id: 2, name: 'Bob'},
  {id: 3, name: 'Charlie', inactive: true},
  {id: 4, name: 'David'},
]

// Map to standard format for full type safety
const userOptions = computed(() =>
  users.map((user) => ({
    value: user.id,
    text: user.name,
    disabled: user.inactive,
  }))
)

// TypeScript knows selectedUsers is number[]
const selectedUsers = ref<number[]>([1, 4])
</script>
