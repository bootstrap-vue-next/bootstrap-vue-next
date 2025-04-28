<template>
  <div>
    <div class="mb-2">
      <b-form-checkbox v-model="stickyHeader" inline>Sticky header</b-form-checkbox>
      <b-form-checkbox v-model="noCollapse" inline>No border collapse</b-form-checkbox>
    </div>
    <b-table
      :sticky-header="stickyHeader"
      :no-border-collapse="noCollapse"
      responsive
      :items="items"
      :fields="fields"
    >
      <!-- We are using utility class `text-nowrap` to help illustrate horizontal scrolling -->
      <template #head(id)>
        <div class="text-nowrap">Row ID</div>
      </template>
      <template #head()="scope">
        <div class="text-nowrap">Heading {{ scope.label }}</div>
      </template>
    </b-table>
  </div>
</template>

<script setup lang="ts">
import type {TableFieldRaw} from 'bootstrap-vue-next'
import {ref} from 'vue'

const fields: TableFieldRaw[] = [
  {key: 'id', stickyColumn: true, isRowHeader: true, variant: 'primary'},
  'a',
  'b',
  {key: 'c', stickyColumn: true, variant: 'info'},
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
]
const items = [
  {id: 1, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11},
  {id: 2, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11},
  {id: 3, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11},
  {id: 4, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11},
  {id: 5, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11},
  {id: 6, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11},
  {id: 7, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11},
  {id: 8, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11},
  {id: 9, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11},
  {id: 10, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11},
]

const stickyHeader = ref(true)
const noCollapse = ref(false)
</script>
