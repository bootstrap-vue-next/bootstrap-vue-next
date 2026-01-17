<template>
  <div>
    <BFormInput
      v-model="selectedUserId"
      type="text"
      list="user-list"
      placeholder="Type to search users..."
    />
    <BFormDatalist
      id="user-list"
      :options="users"
      value-field="id"
      text-field="name"
      disabled-field="inactive"
    />
    <div class="mt-3">
      Selected user ID: <strong>{{ selectedUserId }}</strong>
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
  {id: 1, name: 'Alice Smith'},
  {id: 2, name: 'Bob Johnson'},
  {id: 3, name: 'Charlie Brown', inactive: true},
  {id: 4, name: 'David Wilson'},
]

// TypeScript knows selectedUserId is a number (matching the id field type)
const selectedUserId = ref<number>()
</script>
