<template>
  <BToast
    v-model="active"
    variant="info"
  >
    <template #title> Title </template>
    Body
  </BToast>
  <BButton @click="active = !active">Toggle</BButton>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const active = ref(false)
</script>
