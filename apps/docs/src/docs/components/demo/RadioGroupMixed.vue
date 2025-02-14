<template>
  <div class="my-2">
    <label>Radios using options and slots</label>
  </div>

  <div>
    <BFormRadioGroup
      id="radio-slots"
      v-model="selected"
      :options="options"
      name="radio-options-slots"
    >
      <template #first>
        <BFormRadio value="first">Toggle this custom radio from slot first</BFormRadio>
      </template>

      <BFormRadio :value="{fourth: 4}">This is the 4th radio</BFormRadio>
      <BFormRadio value="fifth">This is the 5th radio</BFormRadio>
    </BFormRadioGroup>
  </div>

  <div class="mt-3">
    Selected: <strong>{{ selected }}</strong>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const options = [
  {text: 'Or toggle this other custom radio', value: 'second'},
  {text: 'Third radio', value: 'third'},
]

const selected = ref('first')
</script>
