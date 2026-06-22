<template>
  <div>
    <BFormFile
      v-model="files"
      multiple
      :file-name-formatter="formatNames"
      :aria-live-formatter="formatAriaLive"
      placeholder="Choose multiple files"
    />
    <div class="mt-3">Display: {{ displayText }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const files = ref<File[] | null>(null)

const formatNames = (files: readonly File[]): string => {
  // This is where one would add internationalization code
  if (files.length === 1 && files[0] !== undefined) {
    return files[0].name
  }
  return `${files.length} files selected (${files.map((f) => f.name).join(', ')})`
}
const formatAriaLive = (files: readonly File[]): string => {
  // This is where one would add internationalization code
  if (files.length === 1 && files[0] !== undefined) {
    return `Selected file: ${files[0].name}`
  }
  return `${files.length} files selected`
}

const displayText = computed(() => {
  if (!files.value || files.value.length === 0) return 'None'
  return formatNames(files.value)
})
</script>
