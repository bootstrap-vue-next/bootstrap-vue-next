<template>
  <label for="rating-sm">Small rating</label>
  <BFormRating v-model="rating" size="sm" />

  <label for="rating-md">Default rating (medium)</label>
  <BFormRating id="rating-md" v-model="rating" />

  <label for="rating-lg">Large rating</label>
  <BFormRating v-model="rating" size="lg" />

  <p>Current rating: {{ rating }}</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const rating = ref(4)
</script>
