<template>
  <label for="range-1">Example range with min and max</label>
  <BFormInput id="range-1" v-model="value" type="range" min="0" max="5" />
  <div class="mt-2">Value: {{ value }}</div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const value = ref('2')
</script>
