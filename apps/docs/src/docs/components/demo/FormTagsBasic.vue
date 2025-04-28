<template>
  <label for="tags-basic">Type a new tag and press enter</label>
  <BFormTags v-model="value" input-id="tags-basic" />
  <p class="mt-2">Value: {{ value }}</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const value = ref<string[]>(['apple', 'orange'])
</script>
