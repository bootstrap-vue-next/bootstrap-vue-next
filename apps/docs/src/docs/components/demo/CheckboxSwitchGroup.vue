<template>
  <div class="my-2">
    <label>Inline switch style checkboxes</label>
  </div>

  <BFormCheckboxGroup
    v-model="selected"
    :options="options"
    switches
  />

  <div class="my-2">
    <label>Stacked (vertical) switch style checkboxes</label>
  </div>

  <BFormCheckboxGroup
    v-model="selected"
    :options="options"
    switches
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
