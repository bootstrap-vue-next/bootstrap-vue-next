<template>
  <div>
    <BTable
      striped
      hover
      :items="items"
      :fields="fields"
    />
  </div>
</template>

<script setup lang="ts">
import type {TableFieldRaw} from 'bootstrap-vue-next'

interface Address {
  street: string
  city: string
  state: string
}

interface Person {
  id: number
  name: {
    first: string
    last: string
  }
  address: Address
  age: number
}

const fields: TableFieldRaw<Person>[] = [
  {
    key: 'id',
    label: 'ID',
  },
  {
    key: 'firstName',
    label: 'First Name',
    // Use accessor function for nested property
    accessor: (item) => item.name.first,
  },
  {
    key: 'lastName',
    label: 'Last Name',
    // Use accessor function for nested property
    accessor: (item) => item.name.last,
  },
  {
    key: 'location',
    label: 'Location',
    // Accessor can compute values from multiple properties
    accessor: (item) => `${item.address.city}, ${item.address.state}`,
  },
  {
    key: 'age',
    label: 'Age',
    // Simple root property doesn't need accessor
  },
]

const items: Person[] = [
  {
    id: 1,
    name: {first: 'John', last: 'Doe'},
    address: {street: '123 Main St', city: 'New York', state: 'NY'},
    age: 30,
  },
  {
    id: 2,
    name: {first: 'Jane', last: 'Smith'},
    address: {street: '456 Oak Ave', city: 'Los Angeles', state: 'CA'},
    age: 25,
  },
  {
    id: 3,
    name: {first: 'Bob', last: 'Johnson'},
    address: {street: '789 Pine Rd', city: 'Chicago', state: 'IL'},
    age: 35,
  },
]
</script>
