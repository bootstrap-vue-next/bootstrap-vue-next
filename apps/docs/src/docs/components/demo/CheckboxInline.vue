<template>
  <div class="my-2">
    <label>Form-checkbox-group inline checkboxes (default)</label>
  </div>

  <BFormCheckboxGroup v-model="selected" :options="options" name="flavour-1a" />

  <div class="my-2">
    <label>Form-checkbox-group stacked checkboxes</label>
  </div>

  <BFormCheckboxGroup v-model="selected" :options="options" name="flavour-2a" stacked />

  <div class="my-2">
    <label>Individual stacked checkboxes (default)</label>
  </div>

  <BFormCheckbox
    v-for="option in options"
    :key="option.value"
    v-model="selected"
    :value="option.value"
    name="flavour-3a"
  >
    {{ option.text }}
  </BFormCheckbox>

  <div class="my-2">
    <label>Individual inline checkboxes</label>
  </div>

  <BFormCheckbox
    v-for="option in options"
    :key="option.value"
    v-model="selected"
    :value="option.value"
    name="flavour-4a"
    inline
  >
    {{ option.text }}
  </BFormCheckbox>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const selected = ref(['A'])

const options = [
  {text: 'Orange', value: 'orange'},
  {text: 'Apple', value: 'apple'},
  {text: 'Pineapple', value: 'pineapple'},
  {text: 'Grape', value: 'grape'},
]
</script>
