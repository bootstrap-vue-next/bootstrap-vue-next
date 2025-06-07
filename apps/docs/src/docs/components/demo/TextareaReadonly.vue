<template>
  <BFormTextarea
    id="textarea-plaintext"
    plaintext
    :model-value="textReadOnly"
  />
</template>

<script setup lang="ts">
const textReadOnly = 'This is some text.\nIt is read only and does not look like an input.'
</script>
