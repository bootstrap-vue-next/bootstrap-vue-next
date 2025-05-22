<template>
  <div>
    <label for="tags-pills">Enter tags</label>
    <BFormTags
      v-model="value"
      input-id="tags-pills"
      tag-variant="primary"
      tag-pills
      size="lg"
      separator=" "
      placeholder="Enter new tags separated by space"
    />
    <p class="mt-2">Value: {{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const value = ref<string[]>(['apple', 'orange', 'grape'])
</script>
