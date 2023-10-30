<template>
  <div style="min-height: 1000vh">
    <BModal v-model="show"> Nuxt module playground! </BModal>
    <BButton @click="show = !show"> Click me </BButton>
    <img src="@/assets/logo.png" width="50" alt="Bootstrap logo" />
    <BImg src="@/assets/logo.png" width="50" alt="Bootstrap logo" />
    {{ f }}
  </div>
</template>

<script setup>
const show = ref(false)

const f = useBreadcrumb()
</script>
