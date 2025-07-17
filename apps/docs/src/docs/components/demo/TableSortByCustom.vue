<template>
  <BFormRadioGroup v-model="caseFirst">
    <BFormRadio value="false">Default</BFormRadio>
    <BFormRadio value="lower">Lowercase First</BFormRadio>
    <BFormRadio value="upper">Uppercase First</BFormRadio>
  </BFormRadioGroup>
  <BTable
    ref="my-table"
    v-model:sort-by="sortBy"
    :items="items"
    :fields="fields"
  />
  <div>sortBy = {{ JSON.stringify(sortBy) }}</div>
  <div>singleSortBy = {{ JSON.stringify(singleSortBy) }}</div>
</template>

<script setup lang="ts">
import {type BTableSortBy, type TableField, type TableItem} from 'bootstrap-vue-next'
import {computed, ref, useTemplateRef} from 'vue'

const table = useTemplateRef('my-table')

const caseFirst = ref<'lower' | 'upper' | 'false'>('false')

const getStringValue = (item: SortPerson, key: string): string =>
  table.value?.getStringValue(item, key) ?? ''

const comparer = (a: SortPerson, b: SortPerson, key: string) =>
  getStringValue(a, key).localeCompare(getStringValue(b, key), undefined, {
    caseFirst: caseFirst.value,
  })

interface SortPerson {
  first_name: string
  last_name: string
  age: number
  isActive: boolean
}

const items: TableItem<SortPerson>[] = [
  {isActive: true, age: 40, first_name: 'Dickerson', last_name: 'MacDonald'},
  {isActive: true, age: 45, first_name: 'Zelda', last_name: 'Macdonald'},
  {isActive: false, age: 25, first_name: 'larsen', last_name: 'shaw'},
  {isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw'},
  {isActive: false, age: 32, first_name: 'geneva', last_name: 'wilson'},
  {isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson'},
  {isActive: false, age: 89, first_name: 'Gary', last_name: 'Wilson'},
  {isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney'},
]

const fields: TableField<SortPerson>[] = [
  {key: 'last_name', sortable: true, comparer},
  {key: 'first_name', sortable: true, comparer},
  {key: 'age', sortable: true},
  {key: 'isActive', sortable: false},
]

const sortBy = ref<BTableSortBy[]>([{key: 'last_name', order: 'asc'}])

const singleSortBy = computed(() => (sortBy.value.length ? sortBy.value[0].key : undefined))
</script>
