<template>
  <BFormRating v-model="rating" :readonly="true" />

  <p>Current rating: {{ rating }}</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const rating = ref(2.567)
</script>
