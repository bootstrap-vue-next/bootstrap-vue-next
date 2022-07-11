<template>
  <option :value="value ?? ''" :disabled="disabled">
    <slot />
  </option>
</template>

<script setup lang="ts">
// import type {BFormSelectOptionProps} from '../../types/components'

interface BFormSelectOptionProps {
  value?: unknown
  disabled?: boolean
}

withDefaults(defineProps<BFormSelectOptionProps>(), {
  disabled: false,
})
</script>
