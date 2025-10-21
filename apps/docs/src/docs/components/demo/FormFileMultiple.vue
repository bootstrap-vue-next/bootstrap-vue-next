<template>
  <BFormFile
    v-model="files"
    multiple
  />
  <div class="mt-3">
    Files: <strong>{{ files }}</strong>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const files = ref<null | File[]>(null)
</script>
