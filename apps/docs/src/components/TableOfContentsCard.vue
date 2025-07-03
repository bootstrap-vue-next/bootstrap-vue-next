<template>
  <BCard :body-text="description">
    <template #header>
      <BLink :to="route">
        <h3 class="m-0">
          {{ name }}
        </h3>
      </BLink>
    </template>
  </BCard>
</template>

<script setup lang="ts">
import {BCard} from 'bootstrap-vue-next/components/BCard'
import {BLink} from 'bootstrap-vue-next/components/BLink'

defineProps<{
  name: string
  description: string
  route: string
}>()
</script>
