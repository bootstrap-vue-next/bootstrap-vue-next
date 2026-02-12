<template>
  <BTable
    v-model:expanded-items="expandedItems"
    :items="items"
  >
    <template #cell(show_details)="row">
      <BButton @click="row.toggleExpansion">
        {{ row.expansionShowing ? 'Hide' : 'Show' }} Details
      </BButton>
    </template>
    <template #row-expansion="row">
      <BCard>{{ row.item.fullDetails }}</BCard>
    </template>
  </BTable>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const items = [
  {name: 'Item 1', fullDetails: 'Full details for Item 1'},
  {name: 'Item 2', fullDetails: 'Full details for Item 2'},
]

// Expansion state managed via v-model
const expandedItems = ref([items[0]]) // Expand first item by default
</script>
