<template>
  <div>
    <BTable
      sticky-header
      :items="items"
      head-variant="light"
    />
  </div>
</template>

<script setup lang="ts">
const items = [
  {heading1: 'table cell', heading2: 'table cell', heading3: 'table cell'},
  {heading1: 'table cell', heading2: 'table cell', heading3: 'table cell'},
  {heading1: 'table cell', heading2: 'table cell', heading3: 'table cell'},
  {heading1: 'table cell', heading2: 'table cell', heading3: 'table cell'},
  {heading1: 'table cell', heading2: 'table cell', heading3: 'table cell'},
  {heading1: 'table cell', heading2: 'table cell', heading3: 'table cell'},
  {heading1: 'table cell', heading2: 'table cell', heading3: 'table cell'},
  {heading1: 'table cell', heading2: 'table cell', heading3: 'table cell'},
  {heading1: 'table cell', heading2: 'table cell', heading3: 'table cell'},
  {heading1: 'table cell', heading2: 'table cell', heading3: 'table cell'},
  {heading1: 'table cell', heading2: 'table cell', heading3: 'table cell'},
  {heading1: 'table cell', heading2: 'table cell', heading3: 'table cell'},
]
</script>
