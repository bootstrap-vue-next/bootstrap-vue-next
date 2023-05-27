<template>
  <li role="presentation">
    <form class="px-4 py-3">
      <slot />
    </form>
  </li>
</template>

<script setup lang="ts">
defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()
</script>
