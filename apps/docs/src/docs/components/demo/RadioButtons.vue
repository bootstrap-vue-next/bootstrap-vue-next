<template>
  <div class="my-2">
    <label>Button style radios</label>
  </div>

  <div>
    <BFormRadioGroup v-model="selected" :options="options" name="radios-btn-default" buttons />
  </div>

  <div class="my-2">
    <label>Button style radios with outline-primary variant and size lg</label>
  </div>

  <div>
    <BFormRadioGroup
      v-model="selected"
      :options="options"
      button-variant="outline-primary"
      size="lg"
      name="radios-btn-outline"
      buttons
    />
  </div>

  <div class="my-2">
    <label>Stacked button style radios</label>
  </div>

  <div>
    <BFormRadioGroup
      v-model="selected"
      :options="options"
      name="radios-btn-stacked"
      buttons
      stacked
    />
  </div>

  <div class="mt-3">
    Selected: <strong>{{ selected }}</strong>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const options = [
  {text: 'Radio 1', value: 'radio1'},
  {text: 'Radio 3', value: 'radio2'},
  {text: 'Radio 3 (disabled)', value: 'radio3', disabled: true},
  {text: 'Radio 4', value: 'radio4'},
]

const selected = ref('radio1')
</script>
