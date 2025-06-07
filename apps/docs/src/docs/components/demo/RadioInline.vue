<template>
  <div class="my-2">
    <label>Inline radios (default)</label>
  </div>

  <div>
    <BFormRadioGroup
      v-model="selected"
      :options="options"
      name="radio-inline"
    />
  </div>

  <div class="my-2">
    <label>Stacked radios</label>
  </div>

  <div>
    <BFormRadioGroup
      v-model="selected"
      :options="options"
      name="radio-stacked"
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
  {text: 'First radio', value: 'first'},
  {text: 'Second radio', value: 'second'},
  {text: 'Third radio', value: 'third'},
]

const selected = ref('first')
</script>
