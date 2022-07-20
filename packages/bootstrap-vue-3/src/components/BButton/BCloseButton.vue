<template>
  <button
    type="button"
    class="btn-close"
    :disabled="disabled"
    :class="classes"
    aria-label="Close"
  />
</template>

<script setup lang="ts">
// import type {BCloseButtonProps} from '../../types/components'
import {computed} from 'vue'

interface BCloseButtonProps {
  disabled?: boolean
  white?: boolean
}

const props = withDefaults(defineProps<BCloseButtonProps>(), {
  disabled: false,
  white: false,
})

const classes = computed(() => ({
  'btn-close-white': props.white,
}))
</script>
