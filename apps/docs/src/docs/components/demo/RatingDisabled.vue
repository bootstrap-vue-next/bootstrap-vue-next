<template>
  <label for="rating-disabled">Disabled rating</label>
  <BFormRating
    id="rating-disabled"
    v-model="rating"
    disabled
  />
</template>

<script setup lang="ts">
import {ref} from 'vue'
const rating = ref(2.75)
</script>
