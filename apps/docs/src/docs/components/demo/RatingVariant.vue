<template>
  <BFormRating v-model="rating" variant="primary" />
  <BFormRating v-model="rating" variant="secondary" />
  <BFormRating v-model="rating" variant="success" />
  <BFormRating v-model="rating" variant="danger" />
  <BFormRating v-model="rating" variant="warning" />
  <BFormRating v-model="rating" variant="info" />
  <p>Current rating: {{ rating }}</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const rating = ref(3)
</script>
