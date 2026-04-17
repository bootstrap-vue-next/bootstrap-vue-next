<template>
  <BOtpInput v-model="value" mask />
  <p class="mt-2">Value: {{ value }}</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const value = ref<string[]>([])
</script>
