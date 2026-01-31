<template>
  <BFormSelect
    v-model="currentStatus"
    :options="statusOptions"
  />
  <p class="mt-2">Selected Status: {{ currentStatus }}</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {Status, statusOptions} from './SelectTypeSafeEnumTypes'

// TypeScript knows this is of type Status
const currentStatus = ref<Status>(statusOptions[0]?.value || Status.Active)
</script>
