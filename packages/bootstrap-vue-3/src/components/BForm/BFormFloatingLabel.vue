<template>
  <div class="form-floating">
    <slot />
    <label :for="labelFor">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
// import type {BFormFloatingLabelProps} from '../../types/components'

interface BFormFloatingLabelProps {
  labelFor?: string
  label?: string
}

defineProps<BFormFloatingLabelProps>()
</script>

<script lang="ts">
export default {
  name: 'BFormFloatingLabel',
}
</script>
