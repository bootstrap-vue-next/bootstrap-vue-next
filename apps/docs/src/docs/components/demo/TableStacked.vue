<template>
  <div>
    <BTable
      stacked
      :items="items"
    />
  </div>
</template>

<script setup lang="ts">
const items = [
  {age: 40, first_name: 'Dickerson', last_name: 'Macdonald'},
  {age: 21, first_name: 'Larsen', last_name: 'Shaw'},
  {age: 89, first_name: 'Geneva', last_name: 'Wilson'},
]
</script>
