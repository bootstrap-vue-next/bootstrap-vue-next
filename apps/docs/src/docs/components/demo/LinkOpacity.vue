<template>
  <p
    v-for="opacity in opacities"
    :key="opacity"
  >
    <BLink :opacity="opacity"> {{ opacity }} link </BLink>
  </p>
</template>

<script setup lang="ts">
import type {LinkOpacity} from 'bootstrap-vue-next'
const opacities: LinkOpacity[] = [10, 25, 50, 75, 100]
</script>
