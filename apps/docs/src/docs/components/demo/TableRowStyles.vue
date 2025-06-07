<template>
  <div>
    <BTable
      :items="items"
      :fields="fields"
      :tbody-tr-class="rowClass"
    />
  </div>
</template>

<script setup lang="ts">
import type {TableRowType, TableStrictClassValue} from 'bootstrap-vue-next'

interface Person {
  age: number
  first_name: string
  last_name: string
  status?: string
}

const fields = ['first_name', 'last_name', 'age']
const items = [
  {age: 40, first_name: 'Dickerson', last_name: 'Macdonald', status: 'awesome'},
  {age: 21, first_name: 'Larsen', last_name: 'Shaw'},
  {age: 89, first_name: 'Geneva', last_name: 'Wilson'},
]

const rowClass = (item: Person, type: TableRowType): TableStrictClassValue =>
  type === 'row' && item.status === 'awesome' ? 'table-success' : ''
</script>
