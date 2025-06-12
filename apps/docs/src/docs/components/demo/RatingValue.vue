<template>
  <BFormRating v-model="rating" show-value />

  <p>Current rating: {{ rating }}</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const rating = ref(4)
</script>
