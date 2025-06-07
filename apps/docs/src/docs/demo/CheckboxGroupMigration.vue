<template>
  <div>
    <BFormCheckboxGroup
      v-model="model"
      :options="options"
    >
      <template #option="{value}">
        {{ (value as Name).first }} <b>{{ (value as Name).last }}</b>
      </template>
    </BFormCheckboxGroup>
    <b>model = </b>{{ model }}
  </div>
</template>

<script setup lang="ts">
import type {CheckboxOption} from 'bootstrap-vue-next'
import {ref} from 'vue'

interface Name {
  first: string
  last: string
}

const model = ref<CheckboxOption[]>([])
const options = [
  {value: {last: 'Brown', first: 'Christina'}},
  {value: {last: 'Smith', first: 'John'}},
  {value: {last: 'Doe', first: 'Jane'}},
  {value: {last: 'Johnson', first: 'Michael'}},
  {value: {last: 'Williams', first: 'Patricia'}},
  {value: {last: 'Jones', first: 'Robert'}},
  {value: {last: 'Garcia', first: 'Linda'}},
]
</script>
