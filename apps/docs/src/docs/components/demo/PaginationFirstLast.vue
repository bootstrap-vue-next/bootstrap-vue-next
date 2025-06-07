<template>
  <h6>Goto first button number</h6>
  <BPagination
    v-model="currentPage"
    :total-rows="rows"
    :per-page="perPage"
    first-number
  />

  <h6>Goto last button number</h6>
  <BPagination
    v-model="currentPage"
    :total-rows="rows"
    :per-page="perPage"
    last-number
  />

  <h6>Goto first and last button number</h6>
  <BPagination
    v-model="currentPage"
    :total-rows="rows"
    :per-page="perPage"
    first-number
    last-number
  />
</template>

<script setup lang="ts">
import {ref} from 'vue'

const currentPage = ref(5)
const perPage = ref(1)
const rows = ref(100)
</script>
