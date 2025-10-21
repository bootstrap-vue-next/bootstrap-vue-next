<template>
  <BOrchestrator :filter="customFilter" />
</template>

<script setup lang="ts">
import {BOrchestrator, type OrchestratorArrayValue} from 'bootstrap-vue-next'

const customFilter = (item: OrchestratorArrayValue) =>
  // Only show items that should be kept (example filter logic)
  item.options?.keep !== false
</script>
