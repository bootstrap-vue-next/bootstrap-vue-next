<script setup lang="ts">
import {ref} from 'vue'

const files = ref<File[]>([])
</script>

<template>
  <BFormFile
    v-model="files"
    multiple
    show-file-names
    placeholder="No files selected"
  />
</template>
