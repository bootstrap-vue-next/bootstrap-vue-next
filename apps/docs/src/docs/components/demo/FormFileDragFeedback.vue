<template>
  <BFormFile
    v-model="files"
    accept="image/*"
    multiple
    show-file-names
    placeholder="Select images only"
    drop-placeholder="Drop images here..."
    no-drop-placeholder="Only images are allowed!"
  />
</template>

<script setup lang="ts">
import {ref} from 'vue'

const files = ref<File[]>([])
</script>
