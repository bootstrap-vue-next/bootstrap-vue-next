<template>
  <div class="my-2">
    <div class="mb-2">
      <h2>Form Checkbox</h2>
      <h4 class="m-2">Simple</h4>
      <div class="m-4">
        <b-form-checkbox
          id="checkbox-1"
          v-model="checkboxes.status"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
          >I accept the terms and use</b-form-checkbox
        >
        <div>
          State:
          <strong>{{ checkboxes.status }}</strong>
        </div>
      </div>
      <h4 class="m-2">array with uncheckedValue</h4>
      <div class="m-4">
        <b-form-checkbox
          id="checkbox-2"
          v-model="checkboxes.statusArray"
          name="checkbox-2"
          value="accepted"
          unchecked-value="not_accepted"
          >I accept the terms and use</b-form-checkbox
        >
        <b-form-checkbox
          id="checkbox-3"
          v-model="checkboxes.statusArray"
          name="checkbox-3"
          value="accepted2"
          unchecked-value="not_accepted2"
          >I accept the terms and use</b-form-checkbox
        >
        <div>
          State:
          <strong>{{ checkboxes.statusArray }}</strong>
        </div>
      </div>
      <h4 class="m-2">Individual</h4>
      <div class="row mx-4">
        <b-form-checkbox v-model="checkedDefault" class="col-4">Default</b-form-checkbox>
        <div class="col-6">Checked: {{ checkedDefault }}</div>
      </div>
      <div class="row mx-4 my-1">
        <b-form-checkbox v-model="checkedButton" button class="col-4"
          >Button format</b-form-checkbox
        >
        <div class="col-6">Checked: {{ checkedButton }}</div>
      </div>
      <div class="row mx-4 my-1">
        <b-form-checkbox v-model="checkedRequired" required class="col-4">Required</b-form-checkbox>
        <div class="col-6">Checked: {{ checkedRequired }}</div>
      </div>
      <div class="row mx-4 my-1">
        <b-form-checkbox disabled>Disabled</b-form-checkbox>
      </div>
      <div class="row mx-4 my-1">
        <b-form-checkbox v-model="checkedIndeterminate" indeterminate class="col-4"
          >Indeterminate</b-form-checkbox
        >
        <div class="col-6">Checked: {{ checkedIndeterminate }}</div>
      </div>
      <div class="row mx-4 my-1">
        <b-form-checkbox v-model="checkedPlain" class="col-4" plain>Plain</b-form-checkbox>
        <div class="col-6 ml-2">Checked: {{ checkedPlain }}</div>
      </div>
      <h4>Checkbox bound to array</h4>
      <div class="row mx-4 my-1">
        <div class="col-4">
          <strong>Select some cars</strong>
        </div>
        <div class="col-4">
          <strong>Selected cars</strong>
        </div>
      </div>
      <div class="row mx-4 my-1">
        <div class="col-4">
          <b-form-checkbox
            v-for="(car, index) in checkedAvailableCars"
            :key="index"
            v-model="checkedSelectedCars"
            :value="car"
            >{{ car }}</b-form-checkbox
          >
        </div>
        <div class="col-8">
          <ul>
            <li v-for="(car, index) in checkedSelectedCars" :key="index">{{ car }}</li>
          </ul>
        </div>
      </div>
      <div class="row mx-4">
        <button class="btn btn-primary col-4" @click="setCheckedSelectedCars">
          Set selected cars to Mercedes and Toyota
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue'

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

const checkedDefault = ref(false)
const checkedButton = ref(false)
const checkedRequired = ref(false)
const checkedPlain = ref(false)
const checkedSelectedCars = ref<string[]>([])
const checkedIndeterminate = ref(false)

const checkedAvailableCars = ['BMW', 'Mercedes', 'Toyota']

const setCheckedSelectedCars = () => {
  checkedSelectedCars.value = ['Mercedes', 'Toyota']
}
</script>
