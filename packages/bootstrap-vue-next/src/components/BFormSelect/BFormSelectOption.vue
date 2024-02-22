<template>
  <option :value="value" :disabled="disabledBoolean">
    <slot />
  </option>
</template>

<script setup lang="ts" generic="T">
import {computed} from 'vue'

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

const disabledBoolean = computed(() => props.disabled)
</script>
