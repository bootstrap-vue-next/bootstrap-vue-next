<template>
  <div class="my-2">
    <h2>Form Textarea</h2>
    <b-form-textarea v-model="description" class="my-3" />
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const description = ref('This is a description')
</script>
