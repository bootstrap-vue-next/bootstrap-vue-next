<template>
  <BContainer>
    <BRow>
      <BCol>
        <BTable :items="sortItems" :fields="sortFields" :sort-by="sortBy" />
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
// You can use this file as a development spot to test your changes
// Please do not commit this file
import {BCol, BContainer, BRow, BTable} from './components'
import type {BTableSortBy} from './types'

const sortFields = [
  {key: 'last_name', sortable: true},
  {key: 'first_name', sortable: true},
  {key: 'marks', sortable: true},
]

const sortItems = [
  {marks: -40, first_name: 'Dickerson', last_name: 'Macdonald'},
  {marks: -45, first_name: 'Zelda', last_name: 'Macdonald'},
  {marks: 21, first_name: 'Larsen', last_name: 'Shaw'},
  {marks: 89, first_name: 'Geneva', last_name: 'Wilson'},
  {marks: 89, first_name: 'Gary', last_name: 'Wilson'},
  {marks: 38, first_name: 'Jami', last_name: 'Carney'},
]

const sortBy = [{key: 'first_name', order: undefined}] as BTableSortBy<(typeof sortItems)[0]>[]
</script>
