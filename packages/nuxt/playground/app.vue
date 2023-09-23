<template>
  <div style="min-height: 1000vh">
    <BImg src="@/assets/0-circle.svg" fluid alt="Responsive image" />
    <BModal v-model="show"> Nuxt module playground! </BModal>
    <BButton @click="show = !show"> Click me </BButton>
    {{ f }}
  </div>
</template>

<script setup>
const show = ref(true)

const f = useBreadcrumb()
</script>
