<template>
  <!-- #region template -->
  <div>
    <BFormCheckboxGroup
      v-model="selectedUsers"
      :options="apiUsers"
      value-field="userId"
      text-field="username"
      disabled-field="disabled"
    />
    <div class="mt-3">
      Selected user IDs: <strong>{{ selectedUsers }}</strong>
    </div>
  </div>
  <!-- #endregion template -->
</template>

<script setup lang="ts">
import {ref} from 'vue'

interface ApiUser {
  userId: string
  username: string
  email: string
  disabled?: boolean
}

// Simulated API response
const apiUsers: ApiUser[] = [
  {userId: 'usr_001', username: 'alice@example.com', email: 'alice@example.com'},
  {userId: 'usr_002', username: 'bob@example.com', email: 'bob@example.com'},
  {
    userId: 'usr_003',
    username: 'charlie@example.com',
    email: 'charlie@example.com',
    disabled: true,
  },
]

// TypeScript knows selectedUsers is readonly string[]
const selectedUsers = ref<readonly string[]>(['usr_001'])
</script>
