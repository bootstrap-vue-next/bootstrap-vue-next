<template>
  <nav :class="classes">
    <div class="container-fluid">
      <slot></slot>
    </div>
  </nav>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {ColorVariant} from '../../types/index'

interface Props {
  variant?: ColorVariant
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'light',
})

const classes = computed(() => {
  const result: {[key: string]: boolean} = {
    'navbar': true,
    'navbar-expand-lg': true,
    'navbar-light': props.variant === 'light',
    'navbar-dark': props.variant !== 'light',
  }
  result[`bg-${props.variant}`] = true
  return result
})
</script>

<style scoped></style>
