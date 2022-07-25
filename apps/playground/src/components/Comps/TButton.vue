<template>
  <b-button v-model:pressed="buttonIsPressed" variant="primary" class="mt-3">Toggle Me</b-button>
  <p>
    Pressed State:
    <strong>{{ buttonIsPressed }}</strong>
  </p>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const buttonIsPressed = ref(false)
</script>
