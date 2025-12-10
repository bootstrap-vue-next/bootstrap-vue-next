<template>
  <!-- #region template -->
  <BFormFile
    v-model="files"
    directory
  />
  <!-- #endregion template -->
</template>

<script setup lang="ts">
// #region script
import {ref, watch} from 'vue'

const files = ref<File[]>([])

// Access file paths via the $path property
watch(files, (newFiles) => {
  newFiles.forEach((file) => {
    console.log(file.$path) // e.g., "src/components/Button.vue"
  })
})
// #endregion script
</script>
