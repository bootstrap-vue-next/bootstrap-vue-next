<template>
  <p v-for="offset in offsets" :key="offset">
    <BLink :underline-offset="offset"> {{ offset }} link </BLink>
  </p>
</template>

<script setup lang="ts">
import {type UnderlineOffset} from 'bootstrap-vue-next'
const offsets: UnderlineOffset[] = [1, 2, 3]
</script>
