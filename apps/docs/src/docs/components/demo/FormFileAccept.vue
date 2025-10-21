<template>
  <BFormFile
    v-model="file"
    accept="image/*"
  />
  <div class="mt-3">
    Files: <strong>{{ file?.name || 'No file selected' }}</strong>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const file = ref<null | File>(null)
</script>
