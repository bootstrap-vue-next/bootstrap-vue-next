<script setup lang="ts">
import {ref} from 'vue'

const file = ref()
</script>

<template>
  <!-- #region template -->
  <BFormFile
    v-model="file"
    show-file-names
    placeholder="Choose a file or drop it here..."
  />
  <!-- Note: browse-text not available (uses browser's native button) -->
  <!-- #endregion template -->
</template>
