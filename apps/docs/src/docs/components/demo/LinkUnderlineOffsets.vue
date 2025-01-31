<template>
  <p v-for="offset in offsets" :key="offset">
    <BLink :underline-offset="offset"> {{ offset }} link </BLink>
  </p>
</template>

<script setup lang="ts">
import {type BvnComponentProps} from 'bootstrap-vue-next'
const offsets: BvnComponentProps['BLink']['underlineOffset'][] = [1, 2, 3]
</script>
