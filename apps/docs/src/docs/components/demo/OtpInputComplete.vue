<template>
  <BOtpInput v-model="value" :length="4" @complete="onComplete" />
  <p class="mt-2">Value: {{ value }}</p>
  <p class="mt-2">Completed: {{ completed ?? 'null' }}</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const value = ref<string[]>([])
const completed = ref<string[] | null>(null)

function onComplete(val: string[]) {
  completed.value = val
}
</script>
