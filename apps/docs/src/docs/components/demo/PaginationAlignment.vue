<template>
  <div>
    <h6>Left alignment (default)</h6>
    <BPagination v-model="currentPage" :total-rows="rows" />
  </div>
  <div class="mt-3">
    <h6 class="text-center">Center alignment</h6>
    <BPagination v-model="currentPage" :total-rows="rows" align="center" />
  </div>
  <div class="mt-3">
    <h6 class="text-end">Right (end) alignment</h6>
    <BPagination v-model="currentPage" :total-rows="rows" align="end" />
  </div>
  <div class="mt-3">
    <h6 class="text-center">Fill alignment</h6>
    <BPagination v-model="currentPage" :total-rows="rows" align="fill" />
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'

const currentPage = ref(1)
const rows = ref(100)
</script>
