<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <BFormGroup class="form-group" label="Color" label-for="color-group" label-class="mb-1">
      <BFormRadioGroup
        id="color-group"
        v-model="model"
        name="color-group"
        button-variant="outline-secondary"
        :options="options"
        buttons
      >
        <template #option="val"> <div v-html="val.html" /> </template>
      </BFormRadioGroup>
    </BFormGroup>
    <b>model = </b>{{ model }}
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'

const myColors = ['Black', 'Red', 'Green', 'Blue', 'Purple']

const model = ref(myColors[0])
const options = myColors.map((e) => ({
  value: e,
  html: `<span style="color:${e.toLowerCase()}" /> ${e}`,
}))
</script>
