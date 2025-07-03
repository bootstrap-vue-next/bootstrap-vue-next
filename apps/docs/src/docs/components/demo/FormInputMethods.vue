<template>
  <div role="group">
    <BFormInput
      ref="inputRef"
      v-model="value"
      placeholder="Enter your name"
    />
  </div>
  <div class="mt-2">
    <BButton
      primary
      @click="selectAllText"
      >Select all text</BButton
    >
  </div>
  <div class="mt-2">
    <BButton
      primary
      @click="inputRef?.focus"
      >Set Focus</BButton
    >
  </div>
</template>

<script setup lang="ts">
import {ref, useTemplateRef} from 'vue'
import {BFormInput} from 'bootstrap-vue-next'

// refs are unified in vue3. We need a ref variable with the same name as used in the template.
// The variable will be filled up during mount with the reference to custom component.
// inputRef will become the reference to the b-form-input component.
const inputRef = useTemplateRef('inputRef')
const value = ref('sample text')

// The inner native input is exposed as ref with name "element"
const selectAllText = () => inputRef?.value?.element?.select()
</script>
