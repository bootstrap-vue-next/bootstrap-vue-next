<template>
  <BDatepicker v-model="value" selection-mode="multiple" placeholder="Pick dates" />
  <p class="mt-2">Value: {{ value }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref<string[]>([])
</script>
