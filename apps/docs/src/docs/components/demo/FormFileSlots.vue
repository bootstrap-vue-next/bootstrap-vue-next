<template>
  <BFormFile
    v-model="files"
    multiple
  >
    <template #placeholder>
      <em class="text-muted">Choose files or drag them here...</em>
    </template>

    <template #file-name="{files, names}">
      <div class="mt-2 p-2 bg-light rounded">
        <strong>{{ files.length }}</strong> file(s) selected:
        <ul class="mb-0 mt-1">
          <li
            v-for="name in names"
            :key="name"
          >
            {{ name }}
          </li>
        </ul>
      </div>
    </template>

    <template #drop-placeholder="{dropAllowed}">
      <div :class="dropAllowed ? 'text-success' : 'text-danger'">
        {{ dropAllowed ? '✓ Drop your files here!' : '✗ File type not allowed' }}
      </div>
    </template>
  </BFormFile>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const files = ref<File[]>([])
</script>
