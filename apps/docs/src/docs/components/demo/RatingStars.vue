<template>
  <label>Rating with 10 stars:</label>
  <BFormRating v-model="rating10" :stars="10" />
  <p>Value: {{ rating10 }}</p>

  <label>Rating with 7 stars:</label>
  <BFormRating v-model="rating7" :stars="7" />
  <p class="mt-2">Value: {{ rating7 }}</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const rating10 = ref(0)
const rating7 = ref(0)
</script>
