<script setup lang="ts">
import {ref} from 'vue'

const files = ref()

const formatNames = (files: File[]) =>
  files.length > 1 ? `${files.length} files` : (files[0]?.name ?? '')
</script>

<template>
  <!-- #region template -->
  <BFormFile
    v-model="files"
    :file-name-formatter="formatNames"
    multiple
    show-file-names
  />
  <!-- #endregion template -->
</template>
