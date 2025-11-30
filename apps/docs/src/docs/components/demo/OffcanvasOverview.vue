<template>
  <BButton @click="click">Show OffCanvas</BButton>
  <BOffcanvas v-model="show" />
</template>

<script setup lang="ts">
import {ref} from 'vue'

const show = ref(false)

const click = () => {
  show.value = !show.value
}
</script>
