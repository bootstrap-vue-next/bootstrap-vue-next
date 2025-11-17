<template>
  <BApp
    :defaults="appDefaults"
    :merge-defaults="true"
  >
    <!-- Your application content -->
  </BApp>
</template>

<script setup lang="ts">
import {BApp} from 'bootstrap-vue-next'

const appDefaults = {
  BButton: {
    variant: 'primary' as const, // This will merge with existing BButton defaults
  },
}
</script>
