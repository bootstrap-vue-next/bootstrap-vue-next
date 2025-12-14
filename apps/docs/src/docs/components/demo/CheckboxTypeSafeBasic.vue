<template>
  <!-- #region template -->
  <div>
    <BFormCheckboxGroup
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
  <!-- #endregion template -->
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

// TypeScript knows selectedUsers is readonly number[]
const selectedUsers = ref<readonly number[]>([1, 4])
</script>
