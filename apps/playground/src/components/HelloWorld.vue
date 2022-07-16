<template>
  <div>
    <h1>Hello</h1>
    <b-accordion />
    <b-container />
    {{ a }}
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const a = ref(1)
</script>
