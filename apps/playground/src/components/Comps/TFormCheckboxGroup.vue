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
          <BFormCheckbox :value="{foo: 1}">Object</BFormCheckbox>
          <BFormCheckbox value="grape">Grapess</BFormCheckbox>
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
  </BContainer>
</template>

<script setup lang="ts">
import {reactive} from 'vue'

const checkboxes = reactive({
  status: true,
  statusArray: ['accepted'],
  selected: ['pineapple', {foo: 1}],
  options: [
    {text: 'Orange', value: 'orange'},
    {text: 'Apple', value: 'apple'},
    {text: 'Pineapple', value: 'pineapple'},
    {text: 'Object', value: {foo: 1}},
    {html: '<b>Grape</b> (html content)', value: 'grape'},
  ],
})
</script>
