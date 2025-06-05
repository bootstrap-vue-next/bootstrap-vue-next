<template>
  <div>
    <div class="text-center mb-3 d-flex justify-content-between">
      <BSpinner
        v-for="variant in variants"
        :key="variant"
        :variant="variant"
      />
    </div>

    <div class="text-center d-flex justify-content-between">
      <BSpinner
        v-for="variant in variants"
        :key="variant"
        :variant="variant"
        type="grow"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {type ColorVariant} from 'bootstrap-vue-next'

const variants = [
  'primary',
  'secondary',
  'danger',
  'warning',
  'success',
  'info',
  'light',
  'dark',
] as ColorVariant[]
</script>
