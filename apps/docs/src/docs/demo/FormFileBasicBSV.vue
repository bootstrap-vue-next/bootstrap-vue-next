<script setup lang="ts">
import {ref} from 'vue'

const file = ref()
</script>

<template>
  <!-- #region template -->
  <b-form-file
    v-model="file"
    placeholder="Choose a file or drop it here..."
    browse-text="Browse"
  />
  <!-- #endregion template -->
</template>
