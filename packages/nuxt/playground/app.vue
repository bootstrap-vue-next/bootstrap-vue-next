<template>
  <div>
    <BModal v-model="show"> Nuxt module playground! </BModal>
    <BButton @click="show = !show"> Click me </BButton>
    {{ a }}
    {{ f }}
  </div>
</template>

<script setup>
const show = ref(false)

const a = useColorMode()

const f = useBreadcrumb()
</script>
