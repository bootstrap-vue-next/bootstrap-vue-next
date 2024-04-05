<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <h4 class="my-3">Table without field definitions</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BTable responsive caption="List of users" :items="items" striped hover foot-clone>
          <template #cell(first_name)="data">
            <a href="#">{{ data.value }}</a>
          </template>
        </BTable>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4 class="my-3">Table with string field definitions</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BTable
          responsive
          caption="List of users"
          :items="items"
          :fields="stringTableDefinitions"
          striped
          hover
          foot-clone
        >
          <template #cell(first_name)="data">
            <a href="#">{{ data.value }}</a>
          </template>
        </BTable>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <h4 class="my-3">Table with object field definitions</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BTable
          responsive
          caption="List of users"
          :items="items"
          :fields="objectTableDefinitions"
          striped
          hover
          foot-clone
        >
          <template #cell(first_name)="data">
            <a href="#">{{ data.value }}</a>
          </template>
        </BTable>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4 class="my-3">Selectable table</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormCheckbox
          id="checkbox-1"
          v-model="showSelectBox"
          name="checkbox-1"
          :value="true"
          :unchecked-value="false"
          >Show Selectable column</BFormCheckbox
        >
      </BCol>
      <BCol>
        <p>Selection mode</p>
        <BFormRadioGroup v-model="selectionMode" :options="['single', 'multi', 'range']" />
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BTable
          selectable
          :select-head="showSelectBox"
          caption="List of users"
          :select-mode="selectionMode"
          :items="items"
          :fields="objectTableDefinitions"
          striped
          hover
          foot-clone
          @selection="selectClick"
        >
          <template #cell(first_name)="data">
            <a href="#">{{ data.value }}</a>
          </template>
        </BTable>
      </BCol>
      <div>Selected rows: {{ selection }}</div>
    </BRow>
    <BRow>
      <BCol>
        <h4 class="my-3">Table: Adding additional rows to the header</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BTable
          responsive
          caption="List of users"
          :items="items"
          :fields="objectTableDefinitions"
          striped
          hover
          foot-clone
          dark
        >
          <template #thead-top>
            <tr class="my">
              <th colspan="2">
                <span class="sr-only">List of users</span>
              </th>
            </tr>
          </template>
          <!-- <template #thead-sub="{field}">
            <tr class="my">
              <th variant="danger" />
              <th variant="danger">
                <BFormSelect
                  :placeholder="field.label"
                  :options="[field.label, field.key]"
                  label-field="label"
                />
              </th>
            </tr>
          </template> -->
          <template #cell(first_name)="data">
            <a href="#">{{ data.value }}</a>
          </template>
        </BTable>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4 class="my-3">Refreshable table (displays current time)</h4>
        <BButton @click="refreshTime">Refresh</BButton>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BTable
          ref="currentTimeTable"
          responsive
          :fields="currentTimeTableDefinitions"
          :provider="currentTimeProvider"
        />
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4 class="my-3">"Full" table example from BSV legacy</h4>
      </BCol>
    </BRow>
    <BRow>
      <BContainer class="py-5">
        <!-- User Interface controls -->
        <BRow>
          <BCol lg="6" class="my-1">
            <BFormGroup
              v-slot="{ariaDescribedby}"
              label="Sort"
              label-for="sort-by-select"
              label-cols-sm="3"
              label-align-sm="right"
              label-size="sm"
              class="mb-0"
            >
              <BInputGroup size="sm">
                <BFormSelect
                  id="sort-by-select"
                  v-model="sortBy"
                  :options="sortOptions"
                  :aria-describedby="ariaDescribedby"
                  class="w-75"
                >
                  <template #first>
                    <option value="">-- none --</option>
                  </template>
                </BFormSelect>

                <BFormSelect
                  v-model="sortDesc"
                  :disabled="!sortBy"
                  :aria-describedby="ariaDescribedby"
                  size="sm"
                  class="w-25"
                >
                  <option :value="false">Asc</option>
                  <option :value="true">Desc</option>
                </BFormSelect>
              </BInputGroup>
            </BFormGroup>
          </BCol>

          <BCol lg="6" class="my-1">
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

                <BInputGroupAppend>
                  <BButton :disabled="!filter" @click="filter = ''">Clear</BButton>
                </BInputGroupAppend>
              </BInputGroup>
            </BFormGroup>
          </BCol>

          <BCol lg="6" class="my-1">
            <BFormGroup
              v-slot="{ariaDescribedby}"
              v-model="sortDirection"
              label="Filter On"
              description="Leave all unchecked to filter on all data"
              label-cols-sm="3"
              label-align-sm="right"
              label-size="sm"
              class="mb-0"
            >
              <div class="d-flex gap-2">
                <BFormCheckbox v-model="filterOn" value="name" :aria-describedby="ariaDescribedby"
                  >Name</BFormCheckbox
                >
                <BFormCheckbox v-model="filterOn" value="age" :aria-describedby="ariaDescribedby"
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

          <BCol sm="5" md="6" class="my-1">
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

          <BCol sm="7" md="6" class="my-1">
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
        <!-- TODO: Re-enable sortby with multi-sort v-model:sort-by="sortBy"-->
        <BTable
          v-model:sort-desc="sortDesc"
          :sort-internal="true"
          :items="itemsTyped"
          :fields="fieldsTyped"
          :current-page="currentPage"
          :per-page="perPage"
          :filter="filter"
          :responsive="false"
          :filterable="filterOn"
          :small="true"
          @filtered="onFiltered"
          @row-clicked="onRowClicked"
        >
          <!-- TODO: is typing of dynamic slots possible? -->
          <template #cell(name)="row">
            {{ (row.value as PersonName).first }}
            {{ (row.value as PersonName).last }}
          </template>

          <template #cell(actions)="row">
            <BButton size="sm" class="mr-1" @click="info(row.item, row.index)">
              Info modal
            </BButton>
            <BButton size="sm" @click="row.toggleDetails">
              {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
            </BButton>
          </template>

          <template #row-details="row">
            <BCard>
              <ul>
                <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
                <BButton size="sm" @click="row.toggleDetails"> Toggle Details </BButton>
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
      </BContainer>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {computed, reactive, ref} from 'vue'
import type {BTable, ColorVariant, TableFieldRaw, TableItem} from 'bootstrap-vue-next'

type LiteralUnion<T, U = string> = T | (U & Record<never, never>)

const stringTableDefinitions = ['last_name', 'first_name', 'age']
const objectTableDefinitions: TableFieldRaw[] = [
  {
    key: 'last_name',
    label: 'Family name',
    formatter: (value: unknown) => (typeof value === 'string' ? value.toUpperCase() : `${value}`),
  },
  {key: 'first_name', label: 'Given name'},
  {key: 'age', label: 'Age', formatter: (value: unknown) => `${value} years`},
]
const items: TableItem[] = [
  {age: 40, first_name: 'Dickerson', last_name: 'Macdonald'},
  {age: 21, first_name: 'Larsen', last_name: 'Shaw'},
  {age: 89, first_name: 'Geneva', last_name: 'Wilson'},
  {
    age: 89,
    first_name: 'Michael',
    last_name: 'Jordan',
    _rowVariant: 'primary',
    _cellVariants: {last_name: 'danger'},
  },
  {age: 38, first_name: 'Jami', last_name: 'Carney'},
]
const selection = ref<TableItem[]>([])
const showSelectBox = ref(false)
const selectionMode = ref<'single' | 'range' | 'multi'>('single')
const selectClick = (selected: TableItem[]) => {
  // eslint-disable-next-line no-console
  console.log(selected)
  selection.value = selected
}

const currentTimeTable = ref<typeof BTable | null>(null)
const currentTimeTableDefinitions: TableFieldRaw[] = [
  {key: 'hours', label: 'Hours'},
  {key: 'minutes', label: 'Minutes'},
  {key: 'seconds', label: 'Seconds'},
  {key: 'milliseconds', label: 'Milliseconds'},
]
const currentTimeProvider = (): TableItem[] => {
  const now = new Date()

  return [
    {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
      milliseconds: now.getMilliseconds(),
    },
  ]
}

// TODO: We're exposing refresh in BTable - why is typescript griping?
const refreshTime = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(currentTimeTable.value as any)?.refresh()
}

interface PersonName {
  first: string
  last: string
}

interface Person {
  name: PersonName
  age: number
  isActive: boolean
}

const itemsTyped: TableItem<Person>[] = [
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

const fieldsTyped: Exclude<TableFieldRaw<Person>, string>[] = [
  {
    key: 'name',
    label: 'Person full name',
    sortable: true,
    sortDirection: 'desc',
  },
  {
    key: 'sortableName',
    label: 'Person sortable name',
    sortable: true,
    sortDirection: 'desc',
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

const pageOptions = [5, 10, 15, {value: 100, text: 'Show a lot'}]

const totalRows = ref(itemsTyped.length)
const currentPage = ref(1)
const perPage = ref(5)
const sortBy = ref('')
const sortDirection = ref('asc')
const sortDesc = ref(false)
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
  fieldsTyped.filter((f) => f.sortable).map((f) => ({text: f.label, value: f.key}))
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

  // The following logging is just to prove that typing is working
  filteredItems.forEach((item) => {
    // eslint-disable-next-line no-console
    console.log(
      `${item.name.first} ${item.name.last} is ${item.age} years old and is active = ${item.isActive}`
    )
  })
}

function onRowClicked(row: TableItem<Person>, index: number) {
  // eslint-disable-next-line no-console
  console.log(`clicked on row ${index}: ${row.name.first} ${row.name.last}`)
}
</script>
