<template>
  <BCard :body-text="description">
    <template #header>
      <BLink :to="route">
        <h3 :id="route" class="m-0">
          {{ name }}
        </h3>
      </BLink>
    </template>
  </BCard>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  description: string
  route: string
}>()
</script>
