<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <h4 class="my-3">Table without field definitions</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table responsive caption="List of users" :items="items" striped hover foot-clone>
          <template #cell(first_name)="data">
            <a href="#">{{ data.value }}</a>
          </template>
        </b-table>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4 class="my-3">Table with string field definitions</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table
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
        </b-table>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <h4 class="my-3">Table with object field definitions</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table
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
        </b-table>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4 class="my-3">Selectable table</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-checkbox
          id="checkbox-1"
          v-model="showSelectBox"
          name="checkbox-1"
          :value="true"
          :unchecked-value="false"
          >Show Selectable column</b-form-checkbox
        >
      </b-col>
      <b-col>
        <p>Selection mode</p>
        <b-form-radio
          v-for="(car, index) in ['single', 'multi', 'range']"
          :key="index"
          v-model="selectionMode"
          :value="car"
          >{{ car }}</b-form-radio
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table
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
        </b-table>
      </b-col>
      <div>Selected rows: {{ selection }}</div>
    </b-row>
    <b-row>
      <b-col>
        <h4 class="my-3">Table: Adding additional rows to the header</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table
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
          <template #thead-sub="{key, label}">
            <tr class="my">
              <th variant="danger" />
              <th variant="danger">
                <b-form-select :placeholder="label" :options="[label, key]" label-field="label" />
              </th>
            </tr>
          </template>
          <template #cell(first_name)="data">
            <a href="#">{{ data.value }}</a>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import {ref, type Ref} from 'vue'
import type {TableField, TableItem} from 'bootstrap-vue-next'

const stringTableDefinitions = ref(['last_name', 'first_name', 'age'])
const objectTableDefinitions: Ref<TableField[]> = ref([
  {
    key: 'last_name',
    label: 'Family name',
    formatter: (value: unknown) => (typeof value === 'string' ? value.toUpperCase() : `${value}`),
  },
  {key: 'first_name', label: 'Given name'},
  {key: 'age', label: 'Age', formatter: (value: unknown) => `${value} years`},
])
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
const selectionMode = ref('single')
function selectClick(selected: TableItem[]) {
  console.log(selected)
  selection.value = selected
}
</script>
