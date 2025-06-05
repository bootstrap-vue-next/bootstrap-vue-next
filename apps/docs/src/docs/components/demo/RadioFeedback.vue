<template>
  <BFormRadioGroup
    v-model="selected"
    :options="contextualOptions"
    :state="state"
    name="radio-validation"
  />

  <div
    v-if="!state"
    class="text-danger"
  >
    Please select one
  </div>
  <div
    v-if="state"
    class="text-success"
  >
    Thank you
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'

const contextualOptions = [
  {text: 'First radio', value: 'first'},
  {text: 'Second radio', value: 'second'},
  {text: 'Third radio', value: 'third'},
]

const selected = ref()

const state = computed(() => !!selected.value)
</script>
