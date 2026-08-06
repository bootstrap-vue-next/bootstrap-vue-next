<template>
  <a
    v-bind="$attrs"
    :href="typeof props.to === 'string' ? props.to : '#'"
    data-router-component="NuxtLink"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  to: string | { path?: string }
}>()
</script>
