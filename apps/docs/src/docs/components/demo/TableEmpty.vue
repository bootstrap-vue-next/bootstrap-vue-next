<template>
  <!-- #region template -->
  <BTable :fields="fields" :items="items" show-empty>
    <template #empty="scope">
      <h4>{{ scope.emptyText }}</h4>
    </template>
    <template #empty-filtered="scope">
      <h4>{{ scope.emptyFilteredText }}</h4>
    </template>
  </BTable>
  <!-- #endregion template -->
</template>

<script setup lang="ts">
const fields = ['first_name', 'last_name', 'age']
const items: {first_name: string; last_name: string; age: number}[] = []
</script>
