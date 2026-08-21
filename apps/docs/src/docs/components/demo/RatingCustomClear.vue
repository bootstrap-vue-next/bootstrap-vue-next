<template>
  <div>
    <BFormRating
      v-model="rating"
      show-clear
    >
      <template #icon-clear>
        <BButton variant="dark"> Clear </BButton>
      </template>
    </BFormRating>
    <p>Current rating: {{ rating }}</p>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const rating = ref(2.5)
</script>
