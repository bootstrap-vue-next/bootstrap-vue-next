<template>
  <!-- Use text in props -->
  <BPagination
    v-model="currentPage"
    :total-rows="rows"
    :per-page="perPage"
    first-text="First"
    prev-text="Prev"
    next-text="Next"
    last-text="Last"
  />

  <!-- Use emojis in props -->
  <BPagination
    v-model="currentPage"
    :total-rows="rows"
    :per-page="perPage"
    first-text="⏮"
    prev-text="⏪"
    next-text="⏩"
    last-text="⏭"
    class="mt-4"
  />

  <!-- Use HTML and sub-components in slots -->
  <BPagination
    v-model="currentPage"
    :total-rows="rows"
    :per-page="perPage"
    class="mt-4"
  >
    <template #first-text><span class="text-success">First</span></template>
    <template #prev-text><span class="text-danger">Prev</span></template>
    <template #next-text><span class="text-warning">Next</span></template>
    <template #last-text><span class="text-info">Last</span></template>
    <template #ellipsis-text>
      <BSpinner
        small
        type="grow"
      />
      <BSpinner
        small
        type="grow"
      />
      <BSpinner
        small
        type="grow"
      />
    </template>
    <template #page="{page, active}">
      <b v-if="active">{{ page }}</b>
      <i v-else>{{ page }}</i>
    </template>
  </BPagination>
  Current page : {{ currentPage }}
</template>

<script setup lang="ts">
import {ref} from 'vue'

const currentPage = ref(1)
const perPage = ref(10)
const rows = ref(100)
</script>
