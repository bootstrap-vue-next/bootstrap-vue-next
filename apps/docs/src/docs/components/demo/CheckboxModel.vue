<template>
  <BFormCheckbox
    v-for="(car, index) in availableCars"
    :key="index"
    v-model="selectedCars"
    :value="car"
  >
    {{ car }}
  </BFormCheckbox>

  Selected: <strong>{{ concatSelectedCars }}</strong>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'

const availableCars = ['BMW', 'Mercedes', 'Toyota']
const selectedCars = ref([])

const concatSelectedCars = computed(() => selectedCars.value.join(', '))
</script>
