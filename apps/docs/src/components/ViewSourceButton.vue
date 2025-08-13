<template>
  <BButton variant="outline-info" target="_blank" :href> <slot> View Source </slot> </BButton>
</template>

<script setup lang="ts">
defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

defineProps<{
  href: string
}>()
</script>
