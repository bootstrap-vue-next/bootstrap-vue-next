<template>
  <h6>Small Pills</h6>
  <BPagination v-model="currentPage" pills :total-rows="rows" size="sm" />

  <h6>Default Pills</h6>
  <BPagination v-model="currentPage" pills :total-rows="rows" />

  <h6>Large Pills</h6>
  <BPagination v-model="currentPage" pills :total-rows="rows" size="lg" />
</template>

<script setup lang="ts">
import {ref} from 'vue'

const currentPage = ref(1)
const rows = ref(100)
</script>
