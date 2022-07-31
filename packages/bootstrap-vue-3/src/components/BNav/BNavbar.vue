<template>
  <nav :class="classes">
    <div class="container-fluid">
      <slot></slot>
    </div>
  </nav>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {ColorVariant, NavbarBreakpoint} from '../../types/index'

interface Props {
  variant?: ColorVariant
  toggleable?: NavbarBreakpoint
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'light',
  toggleable: false, // navbar never collapses
})

const classes = computed(() => {
  const result: {[key: string]: boolean} = {
    'navbar': true,
    'navbar-light': props.variant === 'light',
    'navbar-dark': props.variant !== 'light',
    'navbar-expand': props.toggleable === false, // for navbars that never collapse
  }

  if (typeof props.toggleable === 'string') {
    result[`navbar-expand-${props.toggleable}`] = true
  }

  result[`bg-${props.variant}`] = true

  return result
})
</script>
