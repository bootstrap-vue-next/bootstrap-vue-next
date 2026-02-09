<template>
  <BFormSelect
    v-model="selectedTags"
    :options="tagOptions"
    multiple
  />
  <p class="mt-2">Selected: {{ selectedTags }}</p>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'

interface Tag {
  tagId: string
  tagName: string
}

const tags: Tag[] = [
  {tagId: 'vue', tagName: 'Vue.js'},
  {tagId: 'ts', tagName: 'TypeScript'},
  {tagId: 'bs', tagName: 'Bootstrap'},
]

const tagOptions = computed(() => tags.map((tag) => ({value: tag.tagId, text: tag.tagName})))

const selectedTags = ref<string[]>([])
</script>
