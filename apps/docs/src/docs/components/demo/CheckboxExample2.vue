<template>
  <div>
    <b-form-group
      v-slot="{ariaDescribedby}"
      label="Using options array:"
    >
      <b-form-checkbox-group
        id="checkbox-group-1"
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="flavour-1"
      />
    </b-form-group>

    <b-form-group
      v-slot="{ariaDescribedby}"
      label="Using sub-components:"
    >
      <b-form-checkbox-group
        id="checkbox-group-2"
        v-model="selected"
        :aria-describedby="ariaDescribedby"
        name="flavour-2"
      >
        <b-form-checkbox value="orange">Orange</b-form-checkbox>
        <b-form-checkbox value="apple">Apple</b-form-checkbox>
        <b-form-checkbox value="pineapple">Pineapple</b-form-checkbox>
        <b-form-checkbox value="grape">Grape</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>

    <div>
      Selected: <strong>{{ selected }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const selected = ref([])

const options = [
  {text: 'Orange', value: 'orange'},
  {text: 'Apple', value: 'apple'},
  {text: 'Pineapple', value: 'pineapple'},
  {text: 'Grape', value: 'grape'},
]
</script>
