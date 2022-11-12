<template>
  <b-container>
    <b-row>
      <b-form-spin-button size="lg" :v-model="cow" min="1," max="100" step="1" />
      <b-form-spin-button
        id="sb-days"
        v-model="exDaysValue"
        :formatter-fn="dayFormatter"
        min="0"
        max="6"
        wrap
      />
      <p>Value: {{ exDaysValue }}</p>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import {ref} from 'vue'
// You can use this file as a development spot to test your changes
// Please do not commit this file
const days = ref(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
const exDaysValue = ref(0)

const ex1Value = ref(50)
const dayFormatter = (value: any) => {
  console.log(days.value[value])
  return days.value[value]
}

const cow = ref(1)
</script>
