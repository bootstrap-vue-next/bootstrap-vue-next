<template>
  <div>
    <BTable :items="items" :fields="fields">
      <template #table-colgroup>
        <col style="width: 30%" />
        <col style="width: 45%" />
        <col style="width: 25%" />
      </template>
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
