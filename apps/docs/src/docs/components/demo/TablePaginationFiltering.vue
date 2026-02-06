<template>
  <div>
    <BRow class="mb-3">
      <BCol md="6">
        <BFormGroup
          label="Filter"
          label-for="filter-input"
        >
          <BFormInput
            id="filter-input"
            v-model="filter"
            type="search"
            placeholder="Type to search"
          />
        </BFormGroup>
      </BCol>
      <BCol md="6">
        <BFormGroup
          label="Per page"
          label-for="per-page-select"
        >
          <BFormSelect
            id="per-page-select"
            v-model="perPage"
            :options="[5, 10, 15]"
          />
        </BFormGroup>
      </BCol>
    </BRow>

    <BTable
      ref="tableRef"
      :items="items"
      :fields="fields"
      :filter="filter"
      :per-page="perPage"
      :current-page="currentPage"
    />

    <BPagination
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
      align="center"
    />

    <p class="mt-3">
      Showing {{ displayedCount }} of {{ totalRows }} filtered items
    </p>
  </div>
</template>

<script setup lang="ts">
import {computed, ref, useTemplateRef} from 'vue'
import {BTable} from 'bootstrap-vue-next/components/BTable'
import type {TableFieldRaw, TableItem} from 'bootstrap-vue-next'
import type {ComponentExposed} from 'vue-component-type-helpers'

interface Person {
  first_name: string
  last_name: string
  age: number
}

const items: TableItem<Person>[] = [
  {first_name: 'John', last_name: 'Doe', age: 42},
  {first_name: 'Jane', last_name: 'Doe', age: 36},
  {first_name: 'Bob', last_name: 'Smith', age: 29},
  {first_name: 'Alice', last_name: 'Smith', age: 31},
  {first_name: 'Charlie', last_name: 'Brown', age: 45},
  {first_name: 'Diana', last_name: 'Prince', age: 28},
  {first_name: 'Edward', last_name: 'Norton', age: 52},
  {first_name: 'Fiona', last_name: 'Apple', age: 38},
  {first_name: 'George', last_name: 'Martin', age: 61},
  {first_name: 'Helen', last_name: 'Mirren', age: 55},
]

const fields: Exclude<TableFieldRaw<Person>, string>[] = [
  {key: 'first_name', label: 'First Name', sortable: true},
  {key: 'last_name', label: 'Last Name', sortable: true},
  {key: 'age', label: 'Age', sortable: true},
]

const filter = ref('')
const perPage = ref(5)
const currentPage = ref(1)

// Use template ref to access BTable's displayItems
const tableRef = useTemplateRef<ComponentExposed<typeof BTable<Person>>>('tableRef')

// Compute total rows from displayItems (accounts for filtering)
const totalRows = computed(() => tableRef.value?.displayItems.length ?? items.length)

// Compute how many items are currently displayed on the page
const displayedCount = computed(() => {
  const total = totalRows.value
  const start = (currentPage.value - 1) * perPage.value
  const end = Math.min(start + perPage.value, total)
  return Math.max(0, end - start)
})
</script>
