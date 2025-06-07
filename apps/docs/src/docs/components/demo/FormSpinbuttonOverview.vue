<template>
  <label for="demo-sb">Spin Button</label>
  <BFormSpinbutton
    id="demo-sb"
    v-model="value"
    min="1"
    max="100"
  />
  <p>Value: {{ value }}</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const value = ref(50)
</script>
