<template>
  <!-- #region template -->
  <BInputGroup prepend="Rating:">
    <BFormRating v-model="rating" />
  </BInputGroup>

  <BInputGroup
    prepend="Quality:"
    class="mt-3"
  >
    <BFormRating
      v-model="quality"
      show-value
    />
  </BInputGroup>

  <BInputGroup class="mt-3">
    <BInputGroupText>Your Rating</BInputGroupText>
    <BFormRating
      v-model="userRating"
      show-value
      show-clear
    />
    <BInputGroupText>stars</BInputGroupText>
  </BInputGroup>
  <!-- #endregion template -->
</template>

<script setup lang="ts">
import {ref} from 'vue'

const rating = ref(3)
const quality = ref(4)
const userRating = ref(0)
</script>
