<template>
  <BTable :items="items">
    <!-- @ts-expect-error - BSV pattern no longer supported -->
    <template #cell(show_details)="row">
      <!-- @ts-expect-error - BSV pattern no longer supported -->
      <BButton @click="row.toggleDetails">
        <!-- @ts-expect-error - BSV pattern no longer supported -->
        {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
      </BButton>
    </template>
    <!-- @ts-expect-error - BSV slot name no longer supported -->
    <template #row-details="row">
      <BCard>{{ row.item.fullDetails }}</BCard>
    </template>
  </BTable>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck -- BSV example demonstrating deprecated patterns
const items = [
  {name: 'Item 1', fullDetails: 'Full details for Item 1'},
  {name: 'Item 2', fullDetails: 'Full details for Item 2'},
]
// Expansion was controlled via _showDetails property on items
</script>
