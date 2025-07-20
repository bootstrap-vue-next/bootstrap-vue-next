<template>
  <BFormRating
    v-model="rating"
    show-value
    :precision="2"
  />

  <p>Current rating: {{ rating }}</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const rating = ref(3.555)
</script>
