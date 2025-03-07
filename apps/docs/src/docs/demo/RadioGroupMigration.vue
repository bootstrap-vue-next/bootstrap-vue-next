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
import type {RadioValue} from 'bootstrap-vue-next'

enum MyColors {
  black = 'BLACK',
  red = 'RED',
  green = 'GREEN',
  blue = 'BLUE',
  purple = 'PURPLE',
}

const model = ref<RadioValue>(MyColors.black)
const options = [
  {
    props: {
      html: `<span style="color:black" /> Black`,
    },
    value: MyColors.black,
  },
  {
    props: {
      html: `<span style="color:red" /> Red`,
    },
    value: MyColors.red,
  },
  {
    props: {
      html: `<span style="color:green" /> Green`,
    },
    value: MyColors.green,
  },
  {
    props: {
      html: `<span style="color:blue" /> Blue`,
    },
    value: MyColors.blue,
  },
  {
    props: {
      html: `<span style="color:purple" /> Purple`,
    },
    value: MyColors.purple,
  },
]
</script>
