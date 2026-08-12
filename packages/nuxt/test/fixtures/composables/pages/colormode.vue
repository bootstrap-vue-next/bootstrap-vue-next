<template>
  <div id="colormode-page">
    <span id="theme-mode">{{ mode }}</span>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'ColorModePage' })
const colorMode = useColorMode()
const mode = colorMode.value
</script>
