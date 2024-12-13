<template>
  <div class="my-2">
    <label>Plain inline radios</label>
  </div>

  <div>
    <BFormRadioGroup v-model="selected" :options="plainOptions" name="plain-inline" plain />
  </div>

  <div class="my-2">
    <label>Plain stacked radios</label>
  </div>

  <div>
    <BFormRadioGroup v-model="selected" :options="plainOptions" name="plain-stacked" plain />
  </div>

  <div class="mt-3">
    Selected: <strong>{{ selected }}</strong>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const plainOptions = [
  {text: 'First radio', value: 'first'},
  {text: 'Second radio', value: 'second'},
  {text: 'Third radio', value: 'third'},
]

const selected = ref('first')
</script>
