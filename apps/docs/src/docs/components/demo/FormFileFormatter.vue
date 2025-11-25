<script setup lang="ts">
import {ref} from 'vue'

const files = ref<File[]>([])

const formatFileNames = (files: readonly File[]) => {
  if (files.length === 0) return ''
  if (files.length === 1) return `📄 ${files[0].name}`
  return `📁 ${files.length} files selected (${files.map((f) => f.name).join(', ')})`
}
</script>

<template>
  <BFormFile
    v-model="files"
    :file-name-formatter="formatFileNames"
    multiple
    show-file-names
  />
</template>
