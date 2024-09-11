<template>
  <BButton variant="outline-info" target="_blank" :href> View Source </BButton>
</template>

<script setup lang="ts">
import {BButton} from 'bootstrap-vue-next'

defineProps<{
  href: string
}>()
</script>
