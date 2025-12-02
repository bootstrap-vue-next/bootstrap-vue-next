<template>
  <div>
    <BTable
      :fields="fields"
      :items="items"
      class="custom-sort-icons"
      striped
      hover
    />
  </div>
</template>

<script setup lang="ts">
interface Person {
  first_name: string
  last_name: string
  age: number
}

const fields = [
  {key: 'first_name', label: 'First Name', sortable: true},
  {key: 'last_name', label: 'Last Name', sortable: true},
  {key: 'age', label: 'Age', sortable: true},
]

const items: Person[] = [
  {first_name: 'John', last_name: 'Doe', age: 42},
  {first_name: 'Jane', last_name: 'Smith', age: 36},
  {first_name: 'Bob', last_name: 'Wilson', age: 55},
  {first_name: 'Alice', last_name: 'Johnson', age: 28},
]
</script>

<style scoped>
/* Custom sort icons using CSS variables */
.custom-sort-icons {
  /* Unsorted state - double arrows pointing up/down */
  --bvn-sort-icon-none: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='%23999' viewBox='0 0 16 16'%3E%3Cpath opacity='0.5' d='M8 4l3 3H5l3-3zm0 8l-3-3h6l-3 3z'/%3E%3C/svg%3E");

  /* Ascending - solid up arrow */
  --bvn-sort-icon-asc: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='%23007bff' viewBox='0 0 16 16'%3E%3Cpath d='M8 4l3 3H5l3-3z'/%3E%3C/svg%3E");

  /* Descending - solid down arrow */
  --bvn-sort-icon-desc: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='%23007bff' viewBox='0 0 16 16'%3E%3Cpath d='M8 12l-3-3h6l-3 3z'/%3E%3C/svg%3E");
}
</style>
