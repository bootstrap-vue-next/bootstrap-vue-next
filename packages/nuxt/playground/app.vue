<template>
  <div style="min-height: 1000vh">
    <BModal v-model="show"> Nuxt module playground! </BModal>
    <BButton @click="show = !show"> Click me </BButton>
    {{ f }}
  </div>
</template>

<script setup>
const show = ref(true)

const f = useBreadcrumb()
</script>
