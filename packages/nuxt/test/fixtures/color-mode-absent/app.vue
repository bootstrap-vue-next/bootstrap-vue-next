<template>
  <div id="color-mode-absent-page">
    <span id="has-preference">{{ hasPreference }}</span>
    <span id="mode-value">{{ modeValue }}</span>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const hasPreference
  = colorMode !== null && typeof colorMode === 'object' && 'preference' in colorMode ? 'yes' : 'no'
const modeValue
  = colorMode !== null && typeof colorMode === 'object' && 'value' in colorMode
    ? String((colorMode as { value: unknown }).value)
    : ''
</script>
