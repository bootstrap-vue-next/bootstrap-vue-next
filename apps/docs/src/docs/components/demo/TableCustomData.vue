<template>
  <div>
    <BTable
      small
      :fields="fields"
      :items="items"
      responsive="sm"
    >
      <!-- A virtual column -->
      <template #cell(index)="data">
        {{ data.index + 1 }}
      </template>

      <!-- A custom formatted column -->
      <template #cell(name)="data">
        <b class="text-info">{{ data.item.name.last.toUpperCase() }}</b
        >, <b>{{ data.item.name.first }}</b>
      </template>

      <!-- A virtual composite column -->
      <template #cell(nameage)="data">
        {{ data.item.name.first }} is {{ data.item.age }} years old
      </template>

      <!-- Optional default data cell scoped slot -->
      <template #cell()="data">
        <i>{{ data.value }}</i>
      </template>
    </BTable>
  </div>
</template>

<script setup lang="ts">
interface Person {
  name: {first: string; last: string}
  sex: string
  age: number
}

const fields = [
  // A virtual column that doesn't exist in items
  'index',
  // A column that needs custom formatting
  {key: 'name', label: 'Full Name'},
  // A regular column
  'age',
  // A regular column
  'sex',
  // A virtual column made up from two fields
  {key: 'nameage', label: 'First name and age'},
]
const items: Person[] = [
  {name: {first: 'John', last: 'Doe'}, sex: 'Male', age: 42},
  {name: {first: 'Jane', last: 'Doe'}, sex: 'Female', age: 36},
  {name: {first: 'Rubin', last: 'Kincade'}, sex: 'Male', age: 73},
  {name: {first: 'Shirley', last: 'Partridge'}, sex: 'Female', age: 62},
]
</script>
