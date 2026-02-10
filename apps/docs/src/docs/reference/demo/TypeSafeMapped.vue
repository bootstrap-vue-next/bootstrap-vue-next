<template>
  <BFormCheckboxGroup
    v-model="selectedIds"
    :options="userOptions"
  />
  <p class="mt-2">Selected IDs: {{ selectedIds }}</p>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'

interface User {
  user_id: number
  display_name: string
  is_active: boolean
}

const users: User[] = [
  {user_id: 1, display_name: 'Alice', is_active: true},
  {user_id: 2, display_name: 'Bob', is_active: true},
  {user_id: 3, display_name: 'Charlie', is_active: false},
]

const userOptions = computed(() =>
  users.map((u) => ({
    value: u.user_id,
    text: u.display_name,
    disabled: !u.is_active,
  }))
)

const selectedIds = ref<number[]>([])
</script>
