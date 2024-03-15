<template>
  <option :value="value" :disabled="props.disabled">
    <slot />
  </option>
</template>

<script setup lang="ts" generic="T">
const props = withDefaults(
  defineProps<{
    disabled?: boolean
    value?: T
  }>(),
  {
    disabled: false,
    value: undefined,
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()
</script>
