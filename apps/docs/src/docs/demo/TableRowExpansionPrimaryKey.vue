<template>
  <BTable
    ref="tableRef"
    v-model:expanded-items="expandedItems"
    :items="items"
    primary-key="id"
  >
    <!-- ... -->
  </BTable>
</template>

<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import {onMounted, ref} from 'vue'

const tableRef = ref()
const items = [
  {id: 1, name: 'Item 1'},
  {id: 2, name: 'Item 2'},
]
const expandedItems = ref<any[]>([])

// Set default expanded items after mount
onMounted(() => {
  expandedItems.value.push(tableRef.value.expansion.get(items[1]))
})
</script>
