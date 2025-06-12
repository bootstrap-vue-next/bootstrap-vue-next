<template>
  <BFormSelect v-model="selected">
    <BFormSelectOption :value="null">Please select an option</BFormSelectOption>
    <BFormSelectOption value="a">Option A</BFormSelectOption>
    <BFormSelectOption
      value="b"
      disabled
      >Option B (disabled)</BFormSelectOption
    >
    <BFormSelectOptionGroup label="Grouped options">
      <BFormSelectOption :value="{C: '3PO'}">Option with object value</BFormSelectOption>
      <BFormSelectOption :value="{R: '2D2'}">Another option with object value</BFormSelectOption>
    </BFormSelectOptionGroup>
  </BFormSelect>

  <div class="mt-3">
    Selected: <strong>{{ selected }}</strong>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const selected = ref(null)
</script>
