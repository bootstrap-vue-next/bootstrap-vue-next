<template>
  <BTable v-model:sort-by="multiSortBy" :items="sortItems" :fields="sortFields" :multisort="true" />
  <div>sortBy = {{ JSON.stringify(multiSortBy) }}</div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {type BTableSortBy, type TableFieldRaw, type TableItem} from 'bootstrap-vue-next'

interface PersonName {
  first: string
  last: string
}

interface Person {
  name: PersonName
  age: number
  isActive: boolean
}

interface SortPerson {
  first_name: string
  last_name: string
  age: number
  isActive: boolean
}

const sortItems: TableItem<Person>[] = [
  {isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald'},
  {isActive: true, age: 45, first_name: 'Zelda', last_name: 'Macdonald'},
  {isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw'},
  {isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson'},
  {isActive: false, age: 89, first_name: 'Gary', last_name: 'Wilson'},
  {isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney'},
]

const sortFields: Exclude<TableFieldRaw<SortPerson>, string>[] = [
  {key: 'last_name', sortable: true},
  {key: 'first_name', sortable: true},
  {key: 'age', sortable: true},
  {key: 'isActive', sortable: false},
]

const multiSortBy = ref<BTableSortBy[]>([
  {key: 'last_name', order: 'asc'},
  {key: 'first_name', order: 'asc'},
])
</script>
