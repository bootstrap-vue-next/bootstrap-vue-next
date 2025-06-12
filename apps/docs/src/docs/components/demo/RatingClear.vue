<template>
  <BFormRating v-model="rating" show-value :precision="2" show-clear />

  <p>Current rating: {{ rating }}</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const rating = ref(2.5)
</script>
