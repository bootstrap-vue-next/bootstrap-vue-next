<template>
  <BTable v-model:sort-by="sortBy" :items="items" :fields="fields" />
  <div>sortBy = {{ JSON.stringify(sortBy) }}</div>
  <div>singleSortBy = {{ JSON.stringify(singleSortBy) }}</div>
</template>

<script setup lang="ts">
import {type BTableSortBy, type TableFieldRaw, type TableItem} from 'bootstrap-vue-next'
import {computed, ref} from 'vue'

interface SortPerson {
  first_name: string
  last_name: string
  age: number
  isActive: boolean
}

const items: TableItem<SortPerson>[] = [
  {isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald'},
  {isActive: true, age: 45, first_name: 'Zelda', last_name: 'Macdonald'},
  {isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw'},
  {isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson'},
  {isActive: false, age: 89, first_name: 'Gary', last_name: 'Wilson'},
  {isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney'},
]

const fields: TableFieldRaw<SortPerson>[] = [
  {key: 'last_name', sortable: true},
  {key: 'first_name', sortable: true},
  {key: 'age', sortable: true},
  {key: 'isActive', sortable: false},
]

const sortBy = ref<BTableSortBy[]>([{key: 'first_name', order: 'desc'}])

const singleSortBy = computed(() => sortBy.value.find((sb) => sb.order !== undefined))
</script>
