<template>
  <div>
    <h5>Default (icons at far right of cell)</h5>
    <BTable
      :items="items"
      :fields="fields"
    />

    <h5 class="mt-4">Icons at left of cell (<code>sort-icon-left</code>)</h5>
    <BTable
      :items="items"
      :fields="fields"
      sort-icon-left
    />
  </div>
</template>

<script setup lang="ts">
import type {TableFieldRaw, TableItem} from 'bootstrap-vue-next'

interface Person {
  first_name: string
  last_name: string
  age: number
  city: string
}

const items: TableItem<Person>[] = [
  {age: 40, first_name: 'Dickerson', last_name: 'Macdonald', city: 'New York'},
  {age: 21, first_name: 'Larsen', last_name: 'Shaw', city: 'Los Angeles'},
  {age: 89, first_name: 'Geneva', last_name: 'Wilson', city: 'Chicago'},
  {age: 38, first_name: 'Jami', last_name: 'Carney', city: 'Houston'},
]

const fields: Exclude<TableFieldRaw<Person>, string>[] = [
  {key: 'first_name', label: 'First Name', sortable: true},
  {key: 'last_name', label: 'Last Name', sortable: true},
  {key: 'age', label: 'Age', sortable: true},
  {key: 'city', label: 'City', sortable: true},
]
</script>
