<template>
  <div class="my-2">
    <label>Plain inline checkboxes</label>
  </div>

  <BFormCheckboxGroup
    v-model="selected"
    :options="options"
    plain
  />

  <div class="my-2">
    <label>Plain stacked checkboxes</label>
  </div>

  <BFormCheckboxGroup
    v-model="selected"
    :options="options"
    plain
    stacked
  />
</template>

<script setup lang="ts">
import {ref} from 'vue'

const selected = ref([])
const options = [
  {text: 'Red', value: 'red'},
  {text: 'Green', value: 'green'},
  {text: 'Yellow (disabled)', value: 'yellow', disabled: true},
  {text: 'Blue', value: 'blue'},
]
</script>
