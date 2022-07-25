<template>
  <h2>Form Radio</h2>
  <h4 class="m-2">Individual</h4>
  <div class="row mx-4 my-1">
    <b-form-radio v-model="radioDefault" class="col-4">Default</b-form-radio>
    <div class="col-6">Checked: {{ radioDefault }}</div>
  </div>
  <div class="row mx-4 my-1">
    <b-form-radio v-model="radioButton" button class="col-4">Button format</b-form-radio>
    <div class="col-6">Checked: {{ radioButton }}</div>
  </div>
  <div class="row mx-4 my-1">
    <b-form-radio v-model="radioRequired" required class="col-4">Required</b-form-radio>
    <div class="col-6">Checked: {{ radioRequired }}</div>
  </div>
  <div class="row mx-4 my-1">
    <b-form-radio disabled>Disabled</b-form-radio>
  </div>
  <div class="row mx-4 my-1">
    <b-form-radio v-model="radioIndeterminate" indeterminate class="col-4"
      >Indeterminate</b-form-radio
    >
    <div class="col-6">Checked: {{ radioIndeterminate }}</div>
  </div>
  <div class="row mx-4 my-1">
    <b-form-radio v-model="radioString" value="correct" unchecked-value="incorrect" class="col-4"
      >Bound to string</b-form-radio
    >
    <div class="col-6">Value: {{ radioString }}</div>
  </div>
  <div class="row mx-4 my-1">
    <b-form-radio v-model="radioPlain" plain class="col-4">Plain</b-form-radio>
    <div class="col-6">Checked: {{ radioPlain }}</div>
  </div>
  <h4>Individual radios grouped</h4>
  <div class="form-group mx-4 my-1">
    <b-form-radio v-model="radioSelected" name="some-radios" value="A">Option A</b-form-radio>
    <b-form-radio v-model="radioSelected" name="some-radios" value="B">Option B</b-form-radio>
  </div>
  <div class="mt-3 mx-4">
    Selected:
    <strong>{{ radioSelected }}</strong>
  </div>
  <div class="mx-4 my-1">
    <button class="btn btn-primary mx-1" @click="radioSelected = 'A'">Set value A</button>
    <button class="btn btn-primary mx-1" @click="radioSelected = 'B'">Set value B</button>
  </div>
  <p />
  <h4>Radio bound to array</h4>
  <div class="row mx-4 my-1">
    <div class="col-4">
      <strong>Select some cars</strong>
    </div>
    <div class="col-4">
      <strong>Selected cars</strong>
    </div>
  </div>
  <div class="row mx-4">
    <div class="col-4">
      <b-form-radio
        v-for="(car, index) in radioAvailableCars"
        :key="index"
        v-model="radioSelectedCars"
        :value="car"
        >{{ car }}</b-form-radio
      >
    </div>
    <div class="col-8">
      <ul>
        <li v-for="(car, index) in radioSelectedCars" :key="index">{{ car }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const radioDefault = ref(false)
const radioButton = ref(false)
const radioRequired = ref(false)
const radioIndeterminate = ref(false)
const radioString = ref('incorrect')
const radioPlain = ref(false)
const radioAvailableCars = ['BMW', 'Mercedes', 'Toyota']
const radioSelectedCars = ref([])
const radioSelected = ref()
</script>
