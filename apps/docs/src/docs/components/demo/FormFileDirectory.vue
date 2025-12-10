<template>
  <div>
    <BFormFile
      v-model="files"
      directory
      multiple
      placeholder="Select a directory"
      browse-text="Browse Directories"
    />
    <div class="mt-3">
      <div v-if="files && files.length > 0">
        <strong>{{ files.length }} files selected from directory:</strong>
        <ul class="mt-2">
          <li
            v-for="(file, index) in files.slice(0, 10)"
            :key="index"
          >
            {{ file.name }}
          </li>
          <li v-if="files.length > 10">
            <em>...and {{ files.length - 10 }} more files</em>
          </li>
        </ul>
      </div>
      <div v-else>No directory selected</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const files = ref<File[] | null>(null)
</script>
