<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <h4 class="m-2">Individual</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-radio v-model="radioDefault">Default</b-form-radio>
      </b-col>
      <b-col>Checked: {{ radioDefault }}</b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-form-radio v-model="radioButton" button>Button format</b-form-radio>
      </b-col>
      <b-col> Checked: {{ radioButton }} </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-radio v-model="radioRequired" required>Required</b-form-radio>
      </b-col>
      <b-col>Checked: {{ radioRequired }}</b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-radio disabled>Disabled</b-form-radio>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-radio v-model="radioIndeterminate" indeterminate>Indeterminate</b-form-radio>
      </b-col>
      <b-col>Checked: {{ radioIndeterminate }}</b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-radio v-model="radioString" value="correct" unchecked-value="incorrect"
          >Bound to string</b-form-radio
        >
      </b-col>
      <b-col>Value: {{ radioString }}</b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-radio v-model="radioPlain" plain>Plain</b-form-radio>
      </b-col>
      <b-col>Checked: {{ radioPlain }}</b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4>Individual radios grouped</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-radio v-model="radioSelected" name="some-radios" value="A">Option A</b-form-radio>
      </b-col>
      <b-col>
        <b-form-radio v-model="radioSelected" name="some-radios" value="B">Option B</b-form-radio>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        Selected:
        <strong>{{ radioSelected }}</strong>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <button class="btn btn-primary mx-1" @click="radioSelected = 'A'">Set value A</button>
      </b-col>
      <b-col>
        <button class="btn btn-primary mx-1" @click="radioSelected = 'B'">Set value B</button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4>Radio bound to array</h4>
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
        <b-form-radio
          v-for="(car, index) in radioAvailableCars"
          :key="index"
          v-model="radioSelectedCars"
          :value="car"
          >{{ car }}</b-form-radio
        >
      </b-col>
      <b-col>
        <ul>
          <li v-for="(car, index) in radioSelectedCars" :key="index">{{ car }}</li>
        </ul>
      </b-col>
    </b-row>
  </b-container>
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
