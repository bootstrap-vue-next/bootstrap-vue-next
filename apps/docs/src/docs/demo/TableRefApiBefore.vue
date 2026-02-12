<template>
  <BTable
    ref="tableRef"
    :items="items"
    selectable
  >
    <BButton @click="handleClearSelection">Clear Selection</BButton>
    <BButton @click="handleSelectAll">Select All</BButton>
  </BTable>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const tableRef = ref()
const items = [{name: 'Item 1'}, {name: 'Item 2'}]

const handleClearSelection = () => {
  tableRef.value.clearSelected()
}

const handleSelectAll = () => {
  tableRef.value.selectAll()
}

// Access selected items
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getSelectedItems = () => tableRef.value.selectedItems
</script>
