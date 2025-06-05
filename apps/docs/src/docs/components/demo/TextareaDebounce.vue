<template>
  <BFormTextarea
    id="textarea-debounce"
    v-model="textDebounce"
    rows="3"
    debounce="500"
  />

  <pre class="mt-3 mb-0">{{ textDebounce }}</pre>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const textDebounce = ref()
</script>
