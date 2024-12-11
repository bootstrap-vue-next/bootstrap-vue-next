<template>
  <BFormCheckbox :state="false">Checkbox state false</BFormCheckbox>
  <BFormCheckbox :state="true">Checkbox state true</BFormCheckbox>
  <BFormCheckbox>Checkbox state null</BFormCheckbox>

  <BFormCheckboxGroup
    v-model="selected"
    :options="options"
    :state="contextualState"
    name="checkbox-validation"
  />

  <div v-if="!contextualState">Please select two</div>
  <div v-if="contextualState">Thank you</div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'

const options = [
  {text: 'First Check', value: 'first'},
  {text: 'Second Check', value: 'second'},
  {text: 'Third Check', value: 'third'},
]

const selected = ref([])

const contextualState = computed(() => selected.value.length === 2)
</script>
