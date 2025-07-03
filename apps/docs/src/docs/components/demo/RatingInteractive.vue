<template>
  <BFormRating v-model="rating" />

  <p>Current rating: {{ rating }}</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const rating = ref(0)
</script>
