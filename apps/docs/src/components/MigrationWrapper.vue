<template>
  <div class="py-3">
    <h3>{{ component }} - {{ change }}</h3>
    {{ fix }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  component: string
  change: string
  fix: string
}>()
</script>
