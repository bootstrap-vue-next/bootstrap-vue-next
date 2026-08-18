<template>
  <label>Rating with length 10:</label>
  <BFormRating v-model="rating10" :length="10" />
  <p>Value: {{ rating10 }}</p>

  <label>Rating with length 7:</label>
  <BFormRating v-model="rating7" :length="7" />
  <p class="mt-2">Value: {{ rating7 }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const rating10 = ref(0)
const rating7 = ref(0)
</script>
