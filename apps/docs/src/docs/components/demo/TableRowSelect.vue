<template>
  <div>
    <BFormGroup
      label="Selection mode:"
      label-for="table-select-mode-select"
      label-cols-md="4"
    >
      <BFormSelect
        id="table-select-mode-select"
        v-model="selectMode"
        :options="modes"
        class="mb-3"
      />
    </BFormGroup>

    <BTable
      ref="selectable-table"
      :items="items"
      :fields="fields"
      :select-mode="selectMode"
      responsive="sm"
      selectable
      @update:selected-items="onSelectedItems"
    >
      <!-- Example scoped slot for select state illustrative purposes -->
      <template #cell(selected)="{rowSelected}">
        <template v-if="rowSelected">
          <span aria-hidden="true">&check;</span>
          <span class="sr-only">Selected</span>
        </template>
        <template v-else>
          <span aria-hidden="true">&nbsp;</span>
          <span class="sr-only">Not selected</span>
        </template>
      </template>
    </BTable>
    <p>
      <BButton
        size="sm"
        class="me-2"
        @click="selectAllRows"
        >Select all</BButton
      >
      <BButton
        size="sm"
        class="me-2"
        @click="clearSelected"
        >Clear selected</BButton
      >
      <BButton
        size="sm"
        class="me-2"
        @click="selectThirdRow"
        >Select 3rd row</BButton
      >
      <BButton
        size="sm"
        @click="unselectThirdRow"
        >Unselect 3rd row</BButton
      >
    </p>
    <p>
      Selected Rows:<br />
      {{ selected }}
    </p>
  </div>
</template>

<script setup lang="ts">
import {ref, useTemplateRef} from 'vue'
import {BTable} from 'bootstrap-vue-next/components/BTable'
import type {ComponentExposed} from 'vue-component-type-helpers'

interface Person {
  first_name: string
  last_name: string
  age: number
  isActive: boolean
}

const selectableTable = useTemplateRef<ComponentExposed<typeof BTable>>('selectable-table')

const modes = ['multi', 'single', 'range']
const fields = ['selected', 'isActive', 'age', 'first_name', 'last_name']
const items: Person[] = [
  {isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald'},
  {isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw'},
  {isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson'},
  {isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney'},
]
const selectMode = ref<'multi' | 'single' | 'range'>('multi')

const selected = ref<Person[]>([])

const onSelectedItems = (selectedItems: readonly Person[]) => {
  selected.value = [...selectedItems]
}

const selectAllRows = () => {
  selectableTable?.value?.selectAllRows()
}
const clearSelected = () => {
  selectableTable?.value?.clearSelected()
}
const selectThirdRow = () => {
  // Rows are indexed from 0, so the third row is index 2
  selectableTable?.value?.selectRow(2)
}
const unselectThirdRow = () => {
  // Rows are indexed from 0, so the third row is index 2
  selectableTable?.value?.unselectRow(2)
}
</script>
