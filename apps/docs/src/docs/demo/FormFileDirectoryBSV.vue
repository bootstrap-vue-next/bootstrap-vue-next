<template>
  <!-- #region template -->
  <BFormFile
    v-model="files"
    directory
    :no-traverse="false"
  />
  <!-- #endregion template -->
</template>

<script setup lang="ts">
import {ref} from 'vue'

const files = ref<File[] | null>(null)
</script>
