<template>
  <div>
    <BFormFile
      v-model="files"
      directory
      multiple
      placeholder="Select a directory to see file paths"
    />
    <div class="mt-3">
      <div v-if="files && files.length > 0">
        <strong>{{ files.length }} files selected:</strong>
        <ul class="mt-2 font-monospace small">
          <li
            v-for="(file, index) in files.slice(0, 10)"
            :key="index"
          >
            {{ file.$path || file.name }}
          </li>
          <li v-if="files.length > 10">
            <em>...and {{ files.length - 10 }} more files</em>
          </li>
        </ul>
        <p class="text-muted small mt-2">
          Each file has a <code>$path</code> property with the relative path from the directory
          root.
        </p>
      </div>
      <div v-else>No directory selected</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const files = ref<File[]>([])
</script>
