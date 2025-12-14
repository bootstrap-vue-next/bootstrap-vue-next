<template>
  <!-- #region template -->
  <div>
    <BFormCheckboxGroup
      v-model="selectedRoles"
      :options="roleOptions"
      value-field="value"
      text-field="label"
      disabled-field="disabled"
    />
    <div class="mt-3">
      Selected roles: <strong>{{ selectedRoles }}</strong>
    </div>
  </div>
  <!-- #endregion template -->
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {UserRole} from './CheckboxTypeSafeEnumTypes'

interface RoleOption {
  value: UserRole
  label: string
  disabled?: boolean
}

const roleOptions: RoleOption[] = [
  {value: UserRole.Admin, label: 'Administrator'},
  {value: UserRole.Editor, label: 'Editor'},
  {value: UserRole.Viewer, label: 'Viewer'},
  {value: UserRole.Guest, label: 'Guest', disabled: true},
]

// TypeScript knows selectedRoles is readonly UserRole[]
const selectedRoles = ref<readonly UserRole[]>([UserRole.Editor, UserRole.Viewer])
</script>
