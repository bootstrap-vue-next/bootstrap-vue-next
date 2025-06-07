<template>
  <BFormGroup
    label="Textarea with formatter (on input)"
    label-for="textarea-formatter"
    description="We will convert your text to lowercase instantly"
    class="mb-0"
  >
    <BFormTextarea
      id="textarea-formatter"
      v-model="textFormatter"
      placeholder="Enter your text"
      :formatter="formatter"
    />
  </BFormGroup>

  <p style="white-space: pre-line"><b>Value:</b> {{ textFormatter }}</p>

  <BFormGroup
    label="Textarea with lazy formatter (on blur)"
    label-for="textarea-lazy"
    description="This one is a little lazy!"
    class="mb-0"
  >
    <BFormTextarea
      id="textarea-lazy"
      v-model="textFormatter2"
      placeholder="Enter your text"
      lazy-formatter
      :formatter="formatter"
    />
  </BFormGroup>

  <p
    class="mb-0"
    style="white-space: pre-line"
  >
    <b>Value:</b> {{ textFormatter2 }}
  </p>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const textFormatter = ref('')
const textFormatter2 = ref('')

const formatter = (value: string) => value.toLowerCase()
</script>
