<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-form-select v-model="formSelectSelected" :options="formSelectOptions" />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4 class="mt-2">plain</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-select v-model="formSelectSelected" :options="formSelectOptions" size="sm" plain />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        Selected:
        <strong>{{ formSelectSelected }}</strong>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4 class="mt-2">multiple</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-select
          v-model="formSelectMultipleSelected"
          :options="formSelectOptions"
          class="mb-3"
          multiple
        >
          <template #first>
            <b-form-select-option :value="null" disabled
              >-- Please select an option --</b-form-select-option
            >
          </template>
          <b-form-select-option value="C">Option C</b-form-select-option>
          <b-form-select-option value="D">Option D</b-form-select-option>
        </b-form-select>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        Selected:
        <strong>{{ formSelectMultipleSelected }}</strong>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const formSelectSelected = ref({foo: 'item 6', baz: false})
const formSelectMultipleSelected = ref<string[]>([])
formSelectMultipleSelected.value = ['first', 'second']
const formSelectOptions = [
  {value: null, text: 'Please select an option'},
  {text: 'Item 1', value: 'first'},
  {text: 'Item 2', value: 'second'},
  {html: '<b>Item</b> 3', value: 'third', disabled: true},
  {text: 'Item 4'},
  {text: 'Item 5', value: {foo: 'item 5', baz: true}},
  {text: 'Item 6', value: {foo: 'item 6', baz: false}},
  {
    label: 'Grouped options',
    options: [
      {value: {C: '3PO'}, text: 'Option with object value'},
      {value: {R: '2D2'}, text: 'Another option with object value'},
    ],
  },
]
</script>
