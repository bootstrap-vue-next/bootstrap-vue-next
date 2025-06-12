<template>
  <div>
    <label for="tags-limit">Enter tags</label>
    <BFormTags
      v-model="value"
      input-id="tags-limit"
      :limit="limit"
      remove-on-delete
    />
    <p class="mt-2">Value: {{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const value = ref<string[]>([])
const limit = ref<number>(5)
</script>
