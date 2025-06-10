<template>
  <BFormRating v-model="rating" color="indigo" />
  <BFormRating v-model="rating" color="#ff00ff" />
  <BFormRating v-model="rating" color="rgb(64, 192, 128)" />
  <BFormRating v-model="rating" color="rgba(64, 192, 128, 0.75)" />

  <p>Current rating: {{ rating }}</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const rating = ref(3)
</script>
