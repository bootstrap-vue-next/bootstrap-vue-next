<template>
  <div>
    <BFormFile v-model="files" multiple :file-name-formatter="formatNames" placeholder="Choose multiple files" />
    <div class="mt-3">Display: {{ displayText }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const files = ref<File[] | null>(null)

const formatNames = (files: readonly File[]): string => {
  if (files.length === 1 && files[0]) {
    return files[0].name
  }
  return `${files.length} files selected (${files.map((f) => f.name).join(', ')})`
}

const displayText = computed(() => {
  if (!files.value || files.value.length === 0) return 'None'
  return formatNames(files.value)
})
</script>
