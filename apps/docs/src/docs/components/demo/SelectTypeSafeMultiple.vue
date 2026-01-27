<template>
  <BFormSelect
    v-model="selectedTags as any"
    :options="tags"
    value-field="tagId"
    text-field="tagName"
    multiple
  />
  <p class="mt-2">Selected Tags: {{ selectedTags.join(', ') || 'None' }}</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'

interface Tag {
  tagId: string
  tagName: string
}

const tags: Tag[] = [
  {tagId: 'vue', tagName: 'Vue.js'},
  {tagId: 'ts', tagName: 'TypeScript'},
  {tagId: 'bs', tagName: 'Bootstrap'},
]

// TypeScript knows this is string[]
const selectedTags = ref<string[]>([])
</script>
