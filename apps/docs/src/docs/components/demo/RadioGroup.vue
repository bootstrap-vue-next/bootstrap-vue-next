<template>
  <div class="my-2">
    <label>Radios using options</label>
  </div>

  <div>
    <BFormRadioGroup
      id="radio-group-1"
      v-model="selected"
      :options="options"
      name="radio-options"
    />
  </div>

  <div class="my-2">
    <label>Radios using sub-components</label>
  </div>

  <div>
    <BFormRadioGroup id="radio-group-2" v-model="selected" name="radio-sub-component">
      <BFormRadio value="first">Toggle this custom radio</BFormRadio>
      <BFormRadio value="second">Or toggle this other custom radio</BFormRadio>
      <BFormRadio value="third" disabled>This one is Disabled</BFormRadio>
      <BFormRadio :value="{fourth: 4}">This is the 4th radio</BFormRadio>
    </BFormRadioGroup>
  </div>

  <div class="mt-3">
    Selected: <strong>{{ selected }}</strong>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const options = [
  {text: 'Toggle this custom radio', value: 'first'},
  {text: 'Or toggle this other custom radio', value: 'second'},
  {text: 'This one is Disabled', value: 'third', disabled: true},
  {text: 'This is the 4th radio', value: {fourth: 4}},
]

const selected = ref('first')
</script>
