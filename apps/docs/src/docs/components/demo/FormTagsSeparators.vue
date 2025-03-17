<template>
  <div>
    <label for="tags-separators">Enter tags separated by space, comma or semicolon</label>
    <BFormTags
      v-model="value"
      input-id="tags-separators"
      separator=" ,;"
      placeholder="Enter new tags separated by space, comma or semicolon"
      no-add-on-enter
    />
    <p class="mt-2">Value: {{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const value = ref<string[]>(['apple', 'orange'])
</script>
