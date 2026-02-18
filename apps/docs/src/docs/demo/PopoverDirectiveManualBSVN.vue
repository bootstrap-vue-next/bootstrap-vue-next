<template>
  <BButton v-b-popover.manual.show="isShown && popoverConfig">Manual</BButton>
</template>
<script setup lang="ts">
import {ref} from 'vue'

const isShown = ref(false)
const popoverConfig = {
  title: 'Title',
  body: 'Content',
}
</script>
