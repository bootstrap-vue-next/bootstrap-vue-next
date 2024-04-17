<template>
  <div class="form-floating">
    <slot>
      {{ text }}
    </slot>
    <label :for="labelFor">
      <slot name="label">
        {{ label }}
      </slot>
    </label>
  </div>
</template>

<script setup lang="ts">
import type {BFormFloatingLabelProps} from '../../types'

withDefaults(defineProps<BFormFloatingLabelProps>(), {
  label: undefined,
  labelFor: undefined,
  text: undefined,
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  label?: (props: Record<string, never>) => any
}>()
</script>
