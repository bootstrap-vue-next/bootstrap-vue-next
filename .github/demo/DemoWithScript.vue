<template>
  <BButton @click="toggle">Toggle</BButton>
  <BCollapse v-model="visible">
    <BCard>Content</BCard>
  </BCollapse>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const visible = ref(false)
const toggle = () => {
  visible.value = !visible.value
}
</script>
