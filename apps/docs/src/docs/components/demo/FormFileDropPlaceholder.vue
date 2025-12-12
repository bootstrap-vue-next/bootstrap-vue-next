<template>
  <div>
    <BFormFile
      v-model="files"
      multiple
      drop-placeholder="Drop files here..."
      no-drop-placeholder="Drag and drop is disabled"
      placeholder="Choose files or drag them here"
    />
    <div class="mt-3">Selected: {{ files?.length || 0 }} files</div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const files = ref<File[] | null>(null)
</script>
