<template>
  <div>
    <BTable
      :fields="fields"
      :items="items"
    >
      <template #cell(name)="data">
        <!-- `data.value` is the value after formatted by the Formatter -->
        <a :href="`#${(data.value as any as string).replace(/[^a-z]+/i, '-').toLowerCase()}`">{{
          data.value
        }}</a>
      </template>
    </BTable>
  </div>
</template>

<script setup lang="ts">
import type {TableFieldRaw} from 'bootstrap-vue-next'

interface Name {
  first: string
  last: string
}

interface Person {
  name: Name
  sex: string
  age: number
}

const fullName = (value: unknown) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const name = value as any as Name
  return `${name.first} ${name.last}`
}

const fields: TableFieldRaw<Person>[] = [
  {
    // A column that needs custom formatting,
    // calling formatter 'fullName' in this app
    key: 'name',
    label: 'Full Name',
    formatter: fullName,
  },
  // A regular column
  'age',
  {
    // A regular column with custom formatter
    key: 'sex',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    formatter: (value) => (value as any as string).charAt(0).toUpperCase(),
  },
  {
    // A virtual column with custom formatter
    key: 'birthYear',
    label: 'Calculated Birth Year',
    formatter: (value_, key_, item: Person) => (new Date().getFullYear() - item.age).toString(),
  },
]

const items = [
  {name: {first: 'John', last: 'Doe'}, sex: 'Male', age: 42},
  {name: {first: 'Jane', last: 'Doe'}, sex: 'Female', age: 36},
  {name: {first: 'Rubin', last: 'Kincade'}, sex: 'male', age: 73},
  {name: {first: 'Shirley', last: 'Partridge'}, sex: 'female', age: 62},
]
</script>
