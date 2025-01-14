<template>
  <div>
    <BTable striped hover :items="items" :fields="fields" />
  </div>
</template>

<script setup lang="ts">
import type {TableFieldRaw} from 'bootstrap-vue-next'

interface Person {
  first_name: string
  last_name: string
  age: number
  isActive: boolean
}

// Note 'isActive' is left out and will not appear in the rendered table
const fields: Exclude<TableFieldRaw<Person>, string>[] = [
  {
    key: 'last_name',
    sortable: true,
  },
  {
    key: 'first_name',
    sortable: false,
  },
  {
    key: 'age',
    label: 'Person age',
    sortable: true,
    // Variant applies to the whole column, including the header and footer
    variant: 'danger',
  },
]

const items: Person[] = [
  {isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald'},
  {isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw'},
  {isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson'},
  {isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney'},
]
</script>
