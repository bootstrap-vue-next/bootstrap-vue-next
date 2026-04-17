<template>
  <div>
    <label for="autocomplete-filter">Search with custom filter (case-sensitive, starts-with)</label>
    <BAutocomplete
      id="autocomplete-filter"
      v-model="selected"
      :options="languages"
      :filter-function="startsWithFilter"
      placeholder="Type to search languages..."
    />
    <p class="mt-2">Selected: {{ selected }}</p>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import type {SelectOption} from 'bootstrap-vue-next'

const selected = ref<string | undefined>(undefined)
const languages = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'Go',
  'Rust',
  'Ruby',
  'PHP',
  'Swift',
  'Kotlin',
]

const startsWithFilter = (options: SelectOption[], searchTerm: string) => {
  if (!searchTerm) return options
  const term = searchTerm.toLowerCase()
  return options.filter((opt) => String(opt.text).toLowerCase().startsWith(term))
}
</script>
