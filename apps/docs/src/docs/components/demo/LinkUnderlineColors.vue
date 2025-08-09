<template>
  <p
    v-for="color in variants"
    :key="color"
  >
    <BLink :underline-variant="color"> {{ color }} link </BLink>
  </p>
</template>

<script setup lang="ts">
import type {BaseColorVariant} from 'bootstrap-vue-next'
const variants: (keyof BaseColorVariant)[] = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
]
</script>
