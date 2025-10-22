<template>
  <BToast
    v-model="active"
    variant="info"
  >
    <template #title> Title </template>
    Body
  </BToast>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const active = ref(true)
</script>
