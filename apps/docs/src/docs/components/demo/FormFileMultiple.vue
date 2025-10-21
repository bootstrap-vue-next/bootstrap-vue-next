<template>
  <BFormFile
    v-model="files"
    multiple
  />
  <div class="mt-3">
    Files: <strong>{{ files?.map((file) => file.name).join(', ') || 'No files selected' }}</strong>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const files = ref<null | File[]>(null)
</script>
