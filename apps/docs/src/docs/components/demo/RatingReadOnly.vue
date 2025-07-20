<template>
  <label for="rating-readonly">Readonly rating</label>
  <BFormRating
    id="rating-readonly"
    v-model="rating"
    readonly
    show-value
    :precision="3"
  />
</template>

<script setup lang="ts">
import {ref} from 'vue'
const rating = ref(3.6536)
</script>
