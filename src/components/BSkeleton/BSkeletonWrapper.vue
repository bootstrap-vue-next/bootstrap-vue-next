<template>
  <slot v-if="loading" name="loading" />
  <slot v-else />
</template>

<script setup lang="ts">
defineProps({
  loading: {type: Boolean, default: false},
})
</script>
