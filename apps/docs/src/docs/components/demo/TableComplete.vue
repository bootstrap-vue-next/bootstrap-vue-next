<template>
  <BContainer class="py-5">
    <!-- User Interface controls -->
    <BRow>
      <BCol
        lg="6"
        class="my-1"
      >
        <BFormGroup
          v-slot="{ariaDescribedby}"
          label="Sort"
          label-for="sort-by-select"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <BButton
            size="sm"
            @click="onAddSort"
            >Add Sort...</BButton
          >
          <BInputGroup
            v-for="sort in sortBy"
            :key="sort.key"
            size="sm"
          >
            <BFormSelect
              id="sort-by-select"
              v-model="sort.key"
              :options="sortOptions"
              :aria-describedby="ariaDescribedby"
              class="w-75"
            >
              <template #first>
                <option value="">-- none --</option>
              </template>
            </BFormSelect>
            <BFormSelect
              v-model="sort.order"
              :disabled="!sortBy"
              :aria-describedby="ariaDescribedby"
              size="sm"
              class="w-25"
            >
              <option value="asc">Asc</option>
              <option value="desc">Desc</option>
            </BFormSelect>
          </BInputGroup>
        </BFormGroup>
      </BCol>

      <BCol
        sm="5"
        md="6"
        class="my-1"
      >
        <BFormGroup
          label="Initial Direction"
          label-for="initial-sort-direction"
          label-cols-sm="6"
          label-cols-md="4"
          label-cols-lg="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <BFormSelect
            id="initial-sort-direction"
            v-model="initialSortDirection"
            :options="sortDirectionOptions"
            size="sm"
          />
        </BFormGroup>
      </BCol>
      <BCol
        lg="6"
        class="my-1"
      >
        <BFormGroup
          v-slot="{ariaDescribedby}"
          label="Filter On"
          description="Leave all unchecked to filter on all data"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <div class="d-flex gap-2">
            <BFormCheckbox
              v-model="filterOn"
              value="name"
              :aria-describedby="ariaDescribedby"
              >Name</BFormCheckbox
            >
            <BFormCheckbox
              v-model="filterOn"
              value="age"
              :aria-describedby="ariaDescribedby"
              >Age</BFormCheckbox
            >
            <BFormCheckbox
              v-model="filterOn"
              value="isActive"
              :aria-describedby="ariaDescribedby"
              >Active</BFormCheckbox
            >
          </div>
        </BFormGroup>
      </BCol>
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
        sm="7"
        md="6"
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
      <BCol
        sm="5"
        md="6"
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
    </BRow>
    <!-- Main table element for typed table-->
    <BTable
      ref="complete-table"
      v-model:sort-by="sortBy"
      :sort-internal="true"
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :responsive="false"
      :filterable="filterOn"
      :small="true"
      :multisort="true"
      :initial-sort-direction="initialSortDirection"
      @filtered="onFiltered"
    >
      <template #cell(name)="row">
        {{ (row.value as PersonName).first }}
        {{ (row.value as PersonName).last }}
      </template>
      <template #cell(actions)="row">
        <BButton
          size="sm"
          class="me-1"
          @click="info(row.item, row.index)"
        >
          Info modal
        </BButton>
        <BButton
          size="sm"
          @click="row.toggleDetails"
        >
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </BButton>
      </template>
      <template #row-details="row">
        <BCard>
          <ul>
            <li
              v-for="(value, key) in row.item"
              :key="key"
            >
              {{ key }}: {{ value }}
            </li>
            <BButton
              size="sm"
              @click="row.toggleDetails"
            >
              Toggle Details
            </BButton>
          </ul>
        </BCard>
      </template>
    </BTable>
    <!-- Info modal -->
    <BModal
      :id="infoModal.id"
      v-model="infoModal.open"
      :title="infoModal.title"
      :ok-only="true"
      @hide="resetInfoModal"
    >
      <pre>{{ infoModal.content }}</pre>
    </BModal>
    <BRow
      ><BCol
        >Displayed Items ({{ displayItems.length }}):
        {{
          displayItems.map((item) => {
            const person = item as Person
            return `${person.name.first} ${person.name.last}`
          })
        }}
        Filter On: {{ filterOn.join(', ') }}</BCol
      ></BRow
    >
  </BContainer>
</template>

<script setup lang="ts">
import {
  BTable,
  type BTableInitialSortDirection,
  type BTableSortBy,
  type ColorVariant,
  type LiteralUnion,
  type TableFieldRaw,
  type TableItem,
} from 'bootstrap-vue-next'
import {computed, reactive, ref, useTemplateRef} from 'vue'
import {type ComponentExposed} from 'vue-component-type-helpers'

interface PersonName {
  first: string
  last: string
}

interface Person {
  name: PersonName
  age: number
  isActive: boolean
}

const table = useTemplateRef<ComponentExposed<typeof BTable<Person>>>('complete-table')
const displayItems = computed(() => (table.value?.displayItems ?? []) as TableItem<Person>[])

const items: TableItem<Person>[] = [
  {isActive: true, age: 40, name: {first: 'Dickerson', last: 'Macdonald'}},
  {isActive: false, age: 21, name: {first: 'Larsen', last: 'Shaw'}},
  {
    isActive: false,
    age: 9,
    name: {first: 'Mini', last: 'Navarro'},
    _rowVariant: 'success' as ColorVariant,
  },
  {isActive: false, age: 89, name: {first: 'Geneva', last: 'Wilson'}},
  {isActive: true, age: 38, name: {first: 'Jami', last: 'Carney'}},
  {isActive: false, age: 27, name: {first: 'Essie', last: 'Dunlap'}},
  {isActive: true, age: 40, name: {first: 'Thor', last: 'Macdonald'}},
  {
    isActive: true,
    age: 87,
    name: {first: 'Larsen', last: 'Shaw'},
    _cellVariants: {age: 'danger', isActive: 'warning'},
  },
  {isActive: false, age: 26, name: {first: 'Mitzi', last: 'Navarro'}},
  {isActive: false, age: 22, name: {first: 'Genevieve', last: 'Wilson'}},
  {isActive: true, age: 38, name: {first: 'John', last: 'Carney'}},
  {isActive: false, age: 29, name: {first: 'Dick', last: 'Dunlap'}},
]

const fields: Exclude<TableFieldRaw<Person>, string>[] = [
  {
    key: 'name',
    label: 'Person full name',
    sortable: true,
  },
  {
    key: 'sortableName',
    label: 'Person sortable name',
    sortable: true,
    formatter: (_value: unknown, _key?: LiteralUnion<keyof Person>, item?: Person) =>
      item ? `${item.name.last}, ${item.name.first}` : 'Something went wrong',
    sortByFormatted: true,
    filterByFormatted: true,
  },
  {key: 'age', label: 'Person age', sortable: true, class: 'text-center'},
  {
    key: 'isActive',
    label: 'Is Active',
    formatter: (value: unknown) => (value ? 'Yes' : 'No'),
    sortable: true,
    sortByFormatted: true,
    filterByFormatted: true,
  },
  {key: 'actions', label: 'Actions'},
]

const pageOptions = [
  {value: 5, text: '5'},
  {value: 10, text: '10'},
  {value: 15, text: '15'},
  {value: 100, text: 'Show a lot'},
]

const sortDirectionOptions = [
  {value: 'asc', text: 'Ascending'},
  {value: 'desc', text: 'Descending'},
  {value: 'last', text: 'Last clicked column'},
]

const totalRows = ref(items.length)
const currentPage = ref(1)
const perPage = ref(5)
const sortBy = ref<BTableSortBy[]>([])
const initialSortDirection = ref<BTableInitialSortDirection>('asc')
const filter = ref('')
const filterOn = ref([])
const infoModal = reactive({
  open: false,
  id: 'info-modal',
  title: '',
  content: '',
})

// Create an options list from our fields
const sortOptions = computed(() =>
  fields.filter((f) => f.sortable).map((f) => ({text: f.label, value: f.key}))
)

function info(item: TableItem<Person>, index: number) {
  infoModal.title = `Row index: ${index}`
  infoModal.content = JSON.stringify(item, null, 2)
  infoModal.open = true
}

function resetInfoModal() {
  infoModal.title = ''
  infoModal.content = ''
}

function onFiltered(filteredItems: TableItem<Person>[]) {
  // Trigger pagination to update the number of buttons/pages due to filtering
  totalRows.value = filteredItems.length
  currentPage.value = 1
}

function onAddSort() {
  sortBy.value.push({key: '', order: 'asc'})
}
</script>
