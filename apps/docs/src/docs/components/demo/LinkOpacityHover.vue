<template>
  <p v-for="opacity in opacities" :key="opacity">
    <BLink :opacity-hover="opacity"> {{ opacity }} link </BLink>
  </p>
</template>

<script setup lang="ts">
import {type BvnComponentProps} from 'bootstrap-vue-next'
const opacities: BvnComponentProps['BLink']['opacity'][] = [10, 25, 50, 75, 100]
</script>
