<template>
  <BFormRating
    v-model="rating"
    variant="primary"
    aria-label="Primary rating"
  />
  <BFormRating
    v-model="rating"
    variant="secondary"
    aria-label="Secondary rating"
  />
  <BFormRating
    v-model="rating"
    variant="success"
    aria-label="Success rating"
  />
  <BFormRating
    v-model="rating"
    variant="danger"
    aria-label="Danger rating"
  />
  <BFormRating
    v-model="rating"
    variant="warning"
    aria-label="Warning rating"
  />
  <BFormRating
    v-model="rating"
    variant="info"
    aria-label="Info rating"
  />
  <p>Current rating: {{ rating }}</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const rating = ref(3)
</script>
