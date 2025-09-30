<template>
  <BButton @click="modal = !modal"> Toggle modal via Model </BButton>
  <BModal
    v-model="modal"
    title="Hello, World!"
  >
    Foobar?
  </BModal>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const modal = ref(false)
</script>
