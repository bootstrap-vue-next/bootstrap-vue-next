<template>
  <BFormOtp v-model="value" aria-label="Verification code" />
  <p class="mt-2">Value: {{ value }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>
