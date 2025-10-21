<template>
  <BApp
    :defaults="appDefaults"
    :merge-defaults="customMerge"
  >
    <!-- Your application content -->
  </BApp>
</template>

<script setup lang="ts">
import {BApp} from 'bootstrap-vue-next'

const appDefaults = {
  BButton: {
    variant: 'primary' as const,
  },
}

const customMerge = (
  oldDefaults: Record<string, unknown>,
  newDefaults: Record<string, unknown>
): Record<string, unknown> => ({...oldDefaults, ...newDefaults})
</script>
