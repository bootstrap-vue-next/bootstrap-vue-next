<template>
  <li>
    <h6 class="dropdown-header">
      <slot />
    </h6>
  </li>
</template>

<script setup lang="ts">
defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()
</script>
