<template>
  <BFormFile
    v-model="files"
    directory
  />
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'

const files = ref<File[]>([])

// Access file paths via the webkitRelativePath property
watch(files, (newFiles) => {
  newFiles.forEach((file) => {
    console.log(file.webkitRelativePath) // e.g., "src/components/Button.vue"
  })
})
</script>
