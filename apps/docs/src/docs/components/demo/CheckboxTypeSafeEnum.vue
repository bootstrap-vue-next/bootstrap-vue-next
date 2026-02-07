<template>
  <div>
    <BFormCheckboxGroup
      id="checkbox-type-safe-enum"
      v-model="selectedRoles"
      :options="roleOptions"
    />
    <div class="mt-3">
      Selected roles: <strong>{{ selectedRoles }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {UserRole} from './CheckboxTypeSafeEnumTypes'

// Use explicit {value, text, disabled?} structure for type inference
const roleOptions: {value: UserRole; text: string; disabled?: boolean}[] = [
  {value: UserRole.Admin, text: 'Administrator'},
  {value: UserRole.Editor, text: 'Editor'},
  {value: UserRole.Viewer, text: 'Viewer'},
  {value: UserRole.Guest, text: 'Guest', disabled: true},
]

// TypeScript knows selectedRoles is UserRole[]
const selectedRoles = ref<UserRole[]>([UserRole.Editor, UserRole.Viewer])
</script>
