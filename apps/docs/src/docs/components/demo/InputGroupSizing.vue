<template>
  <BInputGroup
    v-for="size in ['sm', 'md', 'lg']"
    :key="size"
    :size="size as keyof BaseSize"
    class="mb-3"
    prepend="Label"
  >
    <BFormInput />
    <BButton size="sm" text="Button" variant="success">Button</BButton>
  </BInputGroup>
</template>

<script setup lang="ts">
import type {BaseSize} from 'bootstrap-vue-next'
</script>
