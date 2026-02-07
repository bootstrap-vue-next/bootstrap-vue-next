<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <h2 class="m-2">Form Checkbox Group</h2>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <span>
          <b>With options</b>
        </span>
        <BFormCheckboxGroup
          id="checkbox-group-1"
          v-model="checkboxes.selected"
          :options="checkboxes.options"
        />
        <br />
        <span>
          <b>Buttons</b>
        </span>
        <BFormCheckboxGroup
          id="checkbox-group-1"
          v-model="checkboxes.selected"
          :options="checkboxes.options"
          buttons
        />
        <br />
        <span>
          <b>With slots</b>
        </span>
        <BFormCheckboxGroup id="checkbox-group-2" v-model="checkboxes.selected">
          <BFormCheckbox value="orange">Orange</BFormCheckbox>
          <BFormCheckbox value="apple">Apple</BFormCheckbox>
          <BFormCheckbox value="pineapple">Pineapple</BFormCheckbox>
          <BFormCheckbox value="grape">Grape</BFormCheckbox>
        </BFormCheckboxGroup>
        <br />
        <div>
          Selected:
          <strong>{{ checkboxes.selected }}</strong>
        </div>
        <BButton class="me-2" @click="checkboxes.selected = ['orange']">Orange only</BButton>
        <BButton class="me-2" @click="checkboxes.selected = ['grape']">Grape only</BButton>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4 class="mt-3">Simple types: String values</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormCheckboxGroup v-model="simpleStringCheckboxes">
          <BFormCheckbox value="red">Red</BFormCheckbox>
          <BFormCheckbox value="green">Green</BFormCheckbox>
          <BFormCheckbox value="blue">Blue</BFormCheckbox>
        </BFormCheckboxGroup>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        Selected:
        <strong>{{ simpleStringCheckboxes }}</strong>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4 class="mt-3">Simple types: Number values</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormCheckboxGroup v-model="simpleNumberCheckboxes">
          <BFormCheckbox :value="1">One</BFormCheckbox>
          <BFormCheckbox :value="2">Two</BFormCheckbox>
          <BFormCheckbox :value="3">Three</BFormCheckbox>
        </BFormCheckboxGroup>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        Selected:
        <strong>{{ simpleNumberCheckboxes }}</strong>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4 class="mt-3">Simple types: Boolean values</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormCheckboxGroup v-model="simpleBooleanCheckboxes">
          <BFormCheckbox :value="true">True</BFormCheckbox>
          <BFormCheckbox :value="false">False</BFormCheckbox>
        </BFormCheckboxGroup>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        Selected:
        <strong>{{ simpleBooleanCheckboxes }}</strong>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue'

// Mixed type for checkbox values (strings and objects)
type MixedCheckboxValue = string | {foo: number}

const checkboxes = reactive({
  status: true,
  statusArray: ['accepted'],
  selected: ['pineapple', {foo: 1}] as MixedCheckboxValue[],
  options: [
    {text: 'Orange', value: 'orange'},
    {text: 'Apple', value: 'apple'},
    {text: 'Pineapple', value: 'pineapple'},
    {text: 'Object', value: {foo: 1} as MixedCheckboxValue},
  ],
})

// Simple type examples
const simpleStringCheckboxes = ref(['red', 'blue'])
const simpleNumberCheckboxes = ref([1, 3])
const simpleBooleanCheckboxes = ref([true])
</script>
