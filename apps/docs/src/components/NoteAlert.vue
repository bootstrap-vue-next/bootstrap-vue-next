<template>
  <BAlert variant="info" :model-value="true">
    {{ withNoteTextPrepend === true ? 'Note: ' : '' }}<slot />
  </BAlert>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    withNoteTextPrepend?: boolean
  }>(),
  {withNoteTextPrepend: true}
)
</script>
