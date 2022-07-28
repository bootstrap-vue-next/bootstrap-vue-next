<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <h4 class="m-2">Simple</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
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
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4 class="m-2">array with uncheckedValue</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
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
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4 class="m-2">Individual</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-col>
          <b-form-checkbox v-model="checkedDefault">Default</b-form-checkbox>
        </b-col>
        <b-col> Checked: {{ checkedDefault }} </b-col>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-checkbox v-model="checkedButton" button>Button format</b-form-checkbox>
      </b-col>
      <b-col> Checked: {{ checkedButton }} </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-checkbox v-model="checkedRequired" required>Required</b-form-checkbox>
      </b-col>
      <b-col> Checked: {{ checkedRequired }} </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-checkbox disabled>Disabled</b-form-checkbox>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-checkbox v-model="checkedIndeterminate" indeterminate
          >Indeterminate</b-form-checkbox
        >
      </b-col>
      <b-col> Checked: {{ checkedIndeterminate }} </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-checkbox v-model="checkedPlain" plain>Plain</b-form-checkbox>
      </b-col>
      <b-col> Checked: {{ checkedPlain }} </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4>Checkbox bound to array</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <strong>Select some cars</strong>
      </b-col>
      <b-col>
        <strong>Selected cars</strong>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-col>
          <b-form-checkbox
            v-for="(car, index) in checkedAvailableCars"
            :key="index"
            v-model="checkedSelectedCars"
            :value="car"
            >{{ car }}</b-form-checkbox
          >
        </b-col>
        <b-col>
          <ul>
            <li v-for="(car, index) in checkedSelectedCars" :key="index">{{ car }}</li>
          </ul>
        </b-col>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <button class="btn btn-primary" @click="setCheckedSelectedCars">
          Set selected cars to Mercedes and Toyota
        </button>
      </b-col>
    </b-row>
  </b-container>
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
