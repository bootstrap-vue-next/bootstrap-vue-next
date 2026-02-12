<template>
  <BTable
    ref="tableRef"
    v-model:expanded-items="expandedItems"
    :items="items"
  >
    <BButton @click="handleExpandAll">Expand All</BButton>
    <BButton @click="handleCollapseAll">Collapse All</BButton>
  </BTable>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const tableRef = ref()
const expandedItems = ref([])
const items = [{name: 'Item 1'}, {name: 'Item 2'}]

const handleExpandAll = () => {
  tableRef.value.expansion.expandAll()
}

const handleCollapseAll = () => {
  tableRef.value.expansion.collapseAll()
}
</script>
