<template>
  <label for="sb-input">Spin button - input and change events</label>
  <BFormSpinbutton
    id="sb-input"
    v-model="value1"
    wrap
    @change="value2 = $event"
  />
  <p>Input event: {{ value1 }}</p>
  <p>Change event: {{ value2 }}</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const value1 = ref(0)
const value2 = ref<number | null>(null)
</script>
