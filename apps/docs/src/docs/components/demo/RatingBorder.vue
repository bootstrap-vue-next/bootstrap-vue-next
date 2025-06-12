<template>
  <label for="rating-sm">Small rating with no border </label>
  <BFormRating id="rating-sm" v-model="rating" size="sm" no-border />

  <label for="rating-md">Default rating (medium) with no border </label>
  <BFormRating id="rating-md" v-model="rating" no-border />

  <label for="rating-lg">Large rating with no border </label>
  <BFormRating id="rating-lg" v-model="rating" size="lg" no-border />

  <p>Current rating: {{ rating }}</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const rating = ref(4)
</script>
