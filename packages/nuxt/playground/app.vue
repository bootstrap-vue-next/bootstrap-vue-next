<template>
  <div>
    <b-modal v-model="show"> Nuxt module playground! </b-modal>
    <b-button @click="show = !show"> Click me </b-button>
  </div>
</template>

<script setup>
const show = ref(false)

useColorMode()

useBreadcrumb()
</script>
