<template>
  <div>
    <BTable :items="items" :fields="fields" responsive="sm">
      <template #thead-top>
        <BTr>
          <BTh colspan="2"><span class="visually-hidden">Name and ID</span></BTh>
          <BTh variant="secondary">Type 1</BTh>
          <BTh variant="primary" colspan="3">Type 2</BTh>
          <BTh variant="danger">Type 3</BTh>
        </BTr>
      </template>
    </BTable>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    name: 'Stephen Hawking',
    id: 1,
    type1: false,
    type2a: true,
    type2b: false,
    type2c: false,
    type3: false,
  },
  {
    name: 'Johnny Appleseed',
    id: 2,
    type1: false,
    type2a: true,
    type2b: true,
    type2c: false,
    type3: false,
  },
  {
    name: 'George Washington',
    id: 3,
    type1: false,
    type2a: false,
    type2b: false,
    type2c: false,
    type3: true,
  },
  {
    name: 'Albert Einstein',
    id: 4,
    type1: true,
    type2a: false,
    type2b: false,
    type2c: true,
    type3: false,
  },
  {
    name: 'Isaac Newton',
    id: 5,
    type1: true,
    type2a: true,
    type2b: false,
    type2c: true,
    type3: false,
  },
]
const fields = [
  'name',
  {key: 'id', label: 'ID'},
  {key: 'type1', label: 'Type 1'},
  {key: 'type2a', label: 'Type 2A'},
  {key: 'type2b', label: 'Type 2B'},
  {key: 'type2c', label: 'Type 2C'},
  {key: 'type3', label: 'Type 3'},
]
</script>
