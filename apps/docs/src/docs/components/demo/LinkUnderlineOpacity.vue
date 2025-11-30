<template>
  <p v-for="opacity in opacities" :key="opacity">
    <BLink :underline-opacity="opacity"> {{ opacity }} link </BLink>
  </p>
</template>

<script setup lang="ts">
import {type UnderlineOpacity} from 'bootstrap-vue-next'
const opacities: UnderlineOpacity[] = [10, 25, 50, 75, 100]
</script>
