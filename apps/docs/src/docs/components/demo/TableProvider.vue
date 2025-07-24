<template>
  <BContainer class="py-5">
    <!-- User Interface controls -->
    <BRow>
      <BCol
        lg="6"
        class="my-1"
      >
        <BFormGroup
          label="Filter"
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <BInputGroup size="sm">
            <BFormInput
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
            />
            <BInputGroupText>
              <BButton
                :disabled="!filter"
                @click="filter = ''"
                >Clear</BButton
              >
            </BInputGroupText>
          </BInputGroup>
        </BFormGroup>
      </BCol>
      <BCol
        lg="6"
        class="my-1"
      >
        <BFormGroup
          label="Per page"
          label-for="per-page-select"
          label-cols-sm="6"
          label-cols-md="4"
          label-cols-lg="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <BFormSelect
            id="per-page-select"
            v-model="perPage"
            :options="pageOptions"
            size="sm"
          />
        </BFormGroup>
      </BCol>
      <BCol
        lg="6"
        class="my-1"
      >
        <BPagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          :align="'fill'"
          size="sm"
          class="my-0"
        />
      </BCol>
    </BRow>
    <!-- Main table element for typed table-->
    <BTable
      ref="provider-table"
      v-model:sort-by="sortBy"
      :sort-internal="true"
      :provider="provider"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :responsive="false"
      :small="true"
      :multisort="true"
    />
  </BContainer>
</template>

<script setup lang="ts">
import type {
  BTableProviderContext,
  BTableSortBy,
  ColorVariant,
  TableFieldRaw,
  TableItem,
} from 'bootstrap-vue-next'
import {BTable} from 'bootstrap-vue-next/components/BTable'
import {computed, ref, useTemplateRef, watch} from 'vue'
import {type ComponentExposed} from 'vue-component-type-helpers'

interface Person {
  first_name: string
  last_name: string
  age: number
  isActive: boolean
}

const table = useTemplateRef<ComponentExposed<typeof BTable<Person>>>('provider-table')

const provider = (context: Readonly<BTableProviderContext<Person>>) =>
  sortItems(filteredItems.value, context.sortBy).slice(
    (context.currentPage - 1) * context.perPage,
    context.currentPage * context.perPage
  )

const sortItems = (items: Person[], sortBy?: BTableSortBy[]) => {
  if (!sortBy || sortBy.length === 0) {
    return items
  }

  return filteredItems.value.toSorted((a: Person, b: Person) => {
    for (const sort of sortBy) {
      if (sort.order === undefined) {
        continue
      }
      const order = sort.order === 'asc' ? 1 : -1
      const key = sort.key as keyof Person
      const aValue = a[key] as string | number
      const bValue = b[key] as string | number
      if (aValue < bValue) {
        return -1 * order
      } else if (aValue > bValue) {
        return 1 * order
      }
    }
    return 0
  })
}

const items: TableItem<Person>[] = [
  {isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald'},
  {isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw'},
  {
    isActive: false,
    age: 9,
    first_name: 'Mini',
    last_name: 'Navarro',
    _rowVariant: 'success' as ColorVariant,
  },
  {isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson'},
  {isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney'},
  {isActive: false, age: 27, first_name: 'Essie', last_name: 'Dunlap'},
  {isActive: true, age: 40, first_name: 'Thor', last_name: 'Macdonald'},
  {
    isActive: true,
    age: 87,
    first_name: 'Larsen',
    last_name: 'Shaw',
    _cellVariants: {age: 'danger', isActive: 'warning'},
  },
  {isActive: false, age: 26, first_name: 'Mitzi', last_name: 'Navarro'},
  {isActive: false, age: 22, first_name: 'Genevieve', last_name: 'Wilson'},
  {isActive: true, age: 38, first_name: 'John', last_name: 'Carney'},
  {isActive: false, age: 29, first_name: 'Dick', last_name: 'Dunlap'},
]

const fields: Exclude<TableFieldRaw<Person>, string>[] = [
  {
    key: 'first_name',
    sortable: true,
  },
  {
    key: 'last_name',
    sortable: true,
  },
  {key: 'age', label: 'Person age', sortable: true, class: 'text-center'},
]

const pageOptions = [
  {value: 5, text: '5'},
  {value: 10, text: '10'},
  {value: 15, text: '15'},
  {value: 100, text: 'Show a lot'},
]

const currentPage = ref(1)
const perPage = ref(5)
const sortBy = ref<BTableSortBy[]>([])
const filter = ref('')

const lcFilter = computed(() => filter.value.toLocaleLowerCase())

const filteredItems = computed(() => {
  if (!filter.value) {
    return items
  }
  return items.filter(
    (item) =>
      item.first_name.toLowerCase().includes(lcFilter.value) ||
      item.last_name.toLowerCase().includes(lcFilter.value) ||
      item.age.toLocaleString().includes(lcFilter.value)
  )
})

const totalRows = computed(() => filteredItems.value.length)

watch(filter, () => {
  table.value?.refresh()
})
</script>
