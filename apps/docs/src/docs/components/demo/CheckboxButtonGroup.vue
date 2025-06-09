<template>
  <div class="my-2">
    <label>Form-checkbox-group inline checkboxes (default)</label>
  </div>

  <BFormCheckboxGroup
    v-model="selected"
    :options="options"
    name="buttons-1"
    buttons
  />

  <div class="my-2">
    <label>Button-group style checkboxes with variant primary and large buttons</label>
  </div>

  <BFormCheckboxGroup
    v-model="selected"
    :options="options"
    buttons
    button-variant="primary"
    size="lg"
    name="buttons-2"
  />

  <div class="my-2">
    <label>Stacked (vertical) button-group style checkboxes</label>
  </div>

  <BFormCheckboxGroup
    v-model="selected"
    :options="options"
    stacked
    buttons
  />
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
