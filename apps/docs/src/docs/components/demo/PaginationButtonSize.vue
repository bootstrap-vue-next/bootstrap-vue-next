<template>
  <h6>Small</h6>
  <BPagination v-model="currentPage" :total-rows="rows" size="sm" />

  <h6>Default</h6>
  <BPagination v-model="currentPage" :total-rows="rows" />

  <h6>Large</h6>
  <BPagination v-model="currentPage" :total-rows="rows" size="lg" />
</template>

<script setup lang="ts">
import {ref} from 'vue'

const currentPage = ref(1)
const rows = ref(100)
</script>
