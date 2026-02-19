<template>
  <!-- #region warning -->
  <!-- ❌ Wrong: missing inner quotes -->
  <!-- eslint-disable-next-line vue/no-parsing-error -->
  <BButton v-b-tooltip="My tooltip">Button</BButton>

  <!-- ✅ Correct: string literal with quotes -->
  <BButton v-b-tooltip="'My tooltip'">Button</BButton>
  <!-- #endregion warning -->
</template>

<script setup lang="ts">
// Dummy variables to allow the "wrong" example to type-check
// These are only here to prevent TypeScript errors in the demo
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const My = undefined
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tooltip = undefined
</script>
