<template>
  <BDatepicker v-model="value" trigger="button">Choose a date</BDatepicker>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref<string | null>(null)
</script>
