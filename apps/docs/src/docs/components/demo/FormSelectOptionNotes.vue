<template>
  <!-- #region template -->
  <BFormSelect
    v-model="selected"
    :options="options"
  >
    <template #first>
      <BFormSelectOption
        value=""
        disabled
        >-- Please select an option --</BFormSelectOption
      >
    </template>
  </BFormSelect>
  <!-- #endregion template -->
</template>

<script setup lang="ts">
import {ref} from 'vue'

const selected = ref('')
const options = [
  {value: 'a', text: 'Option A'},
  {value: 'b', text: 'Option B'},
  {value: 'c', text: 'Option C'},
]
</script>
