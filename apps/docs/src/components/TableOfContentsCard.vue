<template>
  <BCard :body-text="description">
    <template #header>
      <BLink :href="route">
        <h3 class="m-0">
          {{ name }}
        </h3>
      </BLink>
    </template>
  </BCard>
</template>

<script setup lang="ts">
import {BCard, BLink} from 'bootstrap-vue-next'

defineProps<{
  name: string
  description: string
  route: string
}>()
</script>
