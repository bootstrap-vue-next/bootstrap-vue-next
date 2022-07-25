<template>
  <b-button @click="loading = !loading">Toggle loading</b-button>
  <b-card>
    <b-skeleton-wrapper :loading="loading">
      <template #loading>
        <b-skeleton width="85%"></b-skeleton>
        <b-skeleton width="55%"></b-skeleton>
        <b-skeleton width="70%"></b-skeleton>
      </template>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra nunc sapien, non
      rhoncus elit tincidunt vitae. Vestibulum maximus, ligula eu feugiat molestie, massa diam
      imperdiet odio, vitae viverra ligula est id nisi. Aliquam ut molestie est. Pellentesque
      habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus at
      consequat dui. Aenean tristique sagittis quam, sit amet sollicitudin neque sodales in.
    </b-skeleton-wrapper>
  </b-card>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const loading = ref(true)
</script>
