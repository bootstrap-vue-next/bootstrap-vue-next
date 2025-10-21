<template>
  <BFormFile
    v-model="file"
    label="Hello!"
  />
  <div class="mt-3">
    Files: <strong>{{ file }}</strong>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const file = ref<null | File>(null)
</script>
