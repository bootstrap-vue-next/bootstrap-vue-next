<template>
  <div>
    <BTable striped hover :items="items" :fields="fields" />
  </div>
</template>

<script setup lang="ts">
// Note `isActive` is left out and will not appear in the rendered table
const fields = ['first_name', 'last_name', 'age']
const items = [
  {isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald'},
  {isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw'},
  {isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson'},
  {isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney'},
]
</script>
