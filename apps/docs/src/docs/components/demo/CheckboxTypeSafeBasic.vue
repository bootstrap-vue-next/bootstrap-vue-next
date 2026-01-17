<template>
  <div>
    <BFormCheckboxGroup
      id="checkbox-type-safe-basic"
      v-model="selectedUsers"
      :options="users"
      value-field="id"
      text-field="name"
      disabled-field="inactive"
    />
    <div class="mt-3">
      Selected user IDs: <strong>{{ selectedUsers }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

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

// TypeScript knows selectedUsers is number[]
const selectedUsers = ref<number[]>([1, 4])
</script>
