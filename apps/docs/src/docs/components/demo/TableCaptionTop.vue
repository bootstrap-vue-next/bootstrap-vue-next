<template>
  <div>
    <BTable
      :items="items"
      :fields="fields"
      caption-top
    >
      <template #table-caption>This is a table caption at the top.</template>
    </BTable>
  </div>
</template>

<script setup lang="ts">
const fields = ['first_name', 'last_name', 'age']
const items = [
  {age: 40, first_name: 'Dickerson', last_name: 'Macdonald'},
  {age: 21, first_name: 'Larsen', last_name: 'Shaw'},
  {age: 89, first_name: 'Geneva', last_name: 'Wilson'},
]
</script>
