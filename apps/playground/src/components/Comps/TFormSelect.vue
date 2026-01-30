<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <BFormSelect v-model="formSelectSelected" :options="formSelectOptions" />
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4 class="mt-2">plain</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormSelect v-model="formSelectSelected" :options="formSelectOptions" size="sm" plain />
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        Selected:
        <strong>{{ formSelectSelected }}</strong>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4 class="mt-2">multiple</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormSelect
          v-model="formSelectMultipleSelected"
          :options="formSelectOptions"
          class="mb-3"
          multiple
        >
          <template #first>
            <BFormSelectOption :value="null" disabled
              >-- Please select an option --</BFormSelectOption
            >
          </template>
          <BFormSelectOption value="C">Option C</BFormSelectOption>
          <BFormSelectOption value="D">Option D</BFormSelectOption>
        </BFormSelect>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        Selected:
        <strong>{{ formSelectMultipleSelected }}</strong>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4 class="mt-2">styled options with class and attrs</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormSelect v-model="styledSelectSelected" :options="styledSelectOptions" />
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        Selected:
        <strong>{{ styledSelectSelected }}</strong>
      </BCol>
    </BRow>
  </BContainer>
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

const styledSelectSelected = ref('pharmacist')
const styledSelectOptions = [
  {
    value: 'physician',
    text: 'Physician',
    class: 'bg-light',
    attrs: {'data-role': 'medical'},
  },
  {
    value: 'pharmacist',
    text: 'Pharmacist',
    class: 'bg-primary text-white fw-bold',
    attrs: {'data-role': 'medical'},
  },
  {
    value: 'patient',
    text: 'Patient',
    class: 'text-muted',
    attrs: {'data-role': 'user'},
  },
  {
    value: 'nurse',
    text: 'Nurse',
    class: 'text-success',
    attrs: {'data-role': 'medical'},
  },
  {
    value: 'carer',
    text: 'Carer',
    class: 'text-info',
    attrs: {'data-role': 'support'},
  },
]
</script>
