<template>
  <div>
    <BFormFile
      v-model="files"
      multiple
      plain
      placeholder="Choose files"
    />
    <div class="mt-3">Selected: {{ files?.length || 0 }} files</div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const files = ref<File[] | null>(null)
</script>
