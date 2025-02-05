<template>
  <div>
    <b-table :items="items">
      <template #cell(html)="data">
        <!-- eslint-disable vue/no-v-html -->
        <span v-html="data.value" />
      </template>
    </b-table>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    text: 'This is <i>escaped</i> content',
    html: 'This is <i>raw <strong>HTML</strong></i> <span style="color:red">content</span>',
  },
]
</script>
