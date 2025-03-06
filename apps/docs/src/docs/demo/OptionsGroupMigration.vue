<template>
  <div>
    <BFormRadioGroup v-model="model" :options="options">
      <template #option="{value}">
        {{ (value as Name).first }} <b>{{ (value as Name).last }}</b>
      </template>
    </BFormRadioGroup>
    <b>model = </b>{{ model }}
  </div>
</template>

<script setup lang="ts">
import type {RadioValue} from 'bootstrap-vue-next'
import {ref} from 'vue'

interface Name {
  first: string
  last: string
}

const options = [
  {value: {last: 'Brown', first: 'Christina'}},
  {value: {last: 'Smith', first: 'John'}},
  {value: {last: 'Doe', first: 'Jane'}},
  {value: {last: 'Johnson', first: 'Michael'}},
  {value: {last: 'Williams', first: 'Patricia'}},
  {value: {last: 'Jones', first: 'Robert'}},
  {value: {last: 'Garcia', first: 'Linda'}},
]

const model = ref<RadioValue>(options[0].value)
</script>
