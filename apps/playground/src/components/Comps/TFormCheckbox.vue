<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <h4 class="m-2">Simple</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormCheckbox
          id="checkbox-1"
          v-model="checkboxes.status"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
          >I accept the terms and use</BFormCheckbox
        >
        <div>
          State:
          <strong>{{ checkboxes.status }}</strong>
        </div>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4 class="m-2">array with uncheckedValue</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormCheckbox
          id="checkbox-2"
          v-model="checkboxes.statusArray"
          name="checkbox-2"
          value="accepted"
          unchecked-value="not_accepted"
          >I accept the terms and use</BFormCheckbox
        >
        <BFormCheckbox
          id="checkbox-3"
          v-model="checkboxes.statusArray"
          name="checkbox-3"
          value="accepted2"
          unchecked-value="not_accepted2"
          >I accept the terms and use</BFormCheckbox
        >
        <div>
          State:
          <strong>{{ checkboxes.statusArray }}</strong>
        </div>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4 class="m-2">Individual</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BCol>
          <BFormCheckbox v-model="checkedDefault">Default</BFormCheckbox>
        </BCol>
        <BCol> Checked: {{ checkedDefault }} </BCol>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormCheckbox v-model="checkedButton" button>Button format</BFormCheckbox>
      </BCol>
      <BCol> Checked: {{ checkedButton }} </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormCheckbox v-model="checkedRequired" required>Required</BFormCheckbox>
      </BCol>
      <BCol> Checked: {{ checkedRequired }} </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormCheckbox disabled>Disabled</BFormCheckbox>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormCheckbox v-model="checkedIndeterminate" indeterminate>Indeterminate</BFormCheckbox>
      </BCol>
      <BCol> Checked: {{ checkedIndeterminate }} </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormCheckbox v-model="checkedPlain" plain>Plain</BFormCheckbox>
      </BCol>
      <BCol> Checked: {{ checkedPlain }} </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4>Checkbox bound to array</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <strong>Select some cars</strong>
      </BCol>
      <BCol>
        <strong>Selected cars</strong>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BCol>
          <BFormCheckbox
            v-for="(car, index) in checkedAvailableCars"
            :key="index"
            v-model="checkedSelectedCars"
            :value="car"
            >{{ car }}</BFormCheckbox
          >
        </BCol>
        <BCol>
          <ul>
            <li v-for="(car, index) in checkedSelectedCars" :key="index">{{ car }}</li>
          </ul>
        </BCol>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <button class="btn btn-primary" @click="setCheckedSelectedCars">
          Set selected cars to Mercedes and Toyota
        </button>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4 class="m-2">Contextual</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormCheckbox :state="false">Checkbox state false</BFormCheckbox>
        <BFormCheckbox :state="true">Checkbox state true</BFormCheckbox>
        <BFormCheckbox>Checkbox state null</BFormCheckbox>

        <BFormCheckboxGroup
          v-model="contextualSelected"
          :options="contextualStateOptions"
          :state="contextualState"
          name="checkbox-validation"
        />

        <div v-if="!contextualState">Please select two</div>
        <div v-if="contextualState">Thank you</div>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {computed, reactive, ref} from 'vue'

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

const contextualStateOptions = [
  {text: 'First Check', value: 'first'},
  {text: 'Second Check', value: 'second'},
  {text: 'Third Check', value: 'third'},
]

const contextualSelected = ref([])

const contextualState = computed(() => contextualSelected.value.length === 2)
</script>
