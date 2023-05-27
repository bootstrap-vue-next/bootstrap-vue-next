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
interface BFormFloatingLabelProps {
  labelFor?: string
  label?: string
  text?: string
}

withDefaults(defineProps<BFormFloatingLabelProps>(), {
  label: undefined,
  text: undefined,
  labelFor: undefined,
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  label?: (props: Record<string, never>) => any
}>()
</script>
