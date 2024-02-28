<template>
  <slot v-if="props.loading" name="loading" />
  <slot v-else />
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    loading?: boolean
  }>(),
  {
    loading: false,
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loading?: (props: Record<string, never>) => any
}>()
</script>
