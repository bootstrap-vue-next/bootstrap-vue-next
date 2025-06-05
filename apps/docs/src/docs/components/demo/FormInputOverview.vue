<template>
  <BFormInput
    v-model="text"
    placeholder="Enter your name"
  />
  <div class="mt-2">Value: {{ text }}</div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const text = ref('')
</script>
