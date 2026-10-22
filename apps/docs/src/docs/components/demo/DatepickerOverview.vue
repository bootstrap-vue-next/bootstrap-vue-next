<template>
  <BFormGroup label="Single date" label-for="datepicker-single">
    <BDatepicker id="datepicker-single" v-model="value" placeholder="Pick a date" />
  </BFormGroup>
  <p class="mt-2">Value: {{ value }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref<string | null>(null)
</script>
