<template>
  <div role="group">
    <label for="input-formatter">Text input with formatter (on input)</label>
    <BFormInput
      id="input-formatter"
      v-model="text"
      placeholder="Enter your name"
      :formatter="toLowerCaseFormatter"
    />
    <p><b>Value:</b> {{ text }}</p>
  </div>

  <div role="group">
    <label for="input-formatter">Text input with lazy formatter (on blur)</label>
    <BFormInput
      id="input-lazy"
      v-model="lazyText"
      placeholder="Enter your name"
      lazy-formatter
      :formatter="toLowerCaseFormatter"
    />
    <p><b>Value:</b> {{ lazyText }}</p>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const text = ref('')
const lazyText = ref('')

const toLowerCaseFormatter = (value: string) => value.toLowerCase()
</script>
