<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <h2 class="m-2">Form Checkbox Group</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <span>
          <b>With options</b>
        </span>
        <b-form-checkbox-group
          id="checkbox-group-1"
          v-model="checkboxes.selected"
          :options="checkboxes.options"
        />
        <br />
        <span>
          <b>With slots</b>
        </span>
        <b-form-checkbox-group id="checkbox-group-2" v-model="checkboxes.selected">
          <b-form-checkbox value="orange">Orange</b-form-checkbox>
          <b-form-checkbox value="apple">Apple</b-form-checkbox>
          <b-form-checkbox value="pineapple">Pineapple</b-form-checkbox>
          <b-form-checkbox :value="{foo: 1}">Object</b-form-checkbox>
          <b-form-checkbox value="grape">Grapess</b-form-checkbox>
        </b-form-checkbox-group>
        <br />
        <div>
          Selected:
          <strong>{{ checkboxes.selected }}</strong>
        </div>
        <b-button class="me-2" @click="checkboxes.selected = ['orange']">Orange only</b-button>
        <b-button class="me-2" @click="checkboxes.selected = ['grape']">Grape only</b-button>
      </b-col>
      <b-col>
        <b-form-checkbox-group id="checkbox-group-1" v-model="foo" :options="[1, 2, 3]" />
        {{ foo }}
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue'

const foo = ref()

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
