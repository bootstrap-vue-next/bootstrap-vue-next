<template>
  <label for="rating-inline">Inline rating:</label>
  <BFormRating v-model="rating" inline />
</template>

<script setup lang="ts">
import {ref} from 'vue'
const rating = ref(4)
</script>
