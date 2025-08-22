<template>
  <BCard :body-text="description">
    <template #header>
      <BLink :to="route">
        <h3 :id="toKebabCase(name)" class="m-0">
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

const toKebabCase = (str = '') =>
  str
    .replace(/[^a-z]/gi, '-')
    .replace(/\B([A-Z])/g, '-$1')
    .toLowerCase()
</script>
