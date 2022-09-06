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
// import type {BFormFloatingLabelProps} from '../../types/components'

interface BFormFloatingLabelProps {
  labelFor?: string
  label?: string
  text?: string
}

defineProps<BFormFloatingLabelProps>()
</script>
