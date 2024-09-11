<template>
  <a
    href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/blob/main/CONTRIBUTING.md#developing"
    ><span style="color: red">Not yet implemented</span><span v-if="$slots.default">: </span><slot
  /></a>
</template>

<script setup lang="ts">
defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()
</script>
