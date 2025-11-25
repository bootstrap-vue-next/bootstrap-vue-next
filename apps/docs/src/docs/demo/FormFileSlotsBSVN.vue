<script setup lang="ts">
import {ref} from 'vue'

const files = ref()
</script>

<template>
  <BFormFile
    v-model="files"
    multiple
  >
    <template #file-name="{files, names}">
      <div class="mt-2">
        <strong>{{ files.length }}</strong> file(s) selected:
        <ul class="mb-0">
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
        {{ dropAllowed ? '✓ Drop your files here!' : '✗ These files are not allowed' }}
      </div>
    </template>
  </BFormFile>
</template>
