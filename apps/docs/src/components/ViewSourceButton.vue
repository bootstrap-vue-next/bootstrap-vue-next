<template>
  <BButton variant="outline-info" :target :href> <slot> View Source </slot> </BButton>
</template>

<script setup lang="ts">
import type {LinkTarget} from 'bootstrap-vue-next/types'

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

defineProps<{
  href: string
  target?: LinkTarget
}>()
</script>
