<template>
  <b-card :body-text="description">
    <template #header>
      <b-link :to="route">
        <h3 class="m-0">
          {{ name }}
        </h3>
      </b-link>
    </template>
  </b-card>
</template>

<script setup lang="ts">
import {BCard, BLink} from 'bootstrap-vue-next'

defineProps<{
  name: string
  description: string
  route: string
}>()
</script>
