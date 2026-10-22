<template>
  <BDatepicker v-model="value" inline />
  <p class="mt-2">Value: {{ value }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref<string | null>(null)
</script>
