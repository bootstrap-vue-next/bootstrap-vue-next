<template>
  <div>
    <b-modal v-model="show"> Nuxt module playground! </b-modal>
    <b-button @click="show = !show"> Click me </b-button>
    {{ a }}
    {{ f }}
  </div>
</template>

<script setup>
const show = ref(false)

const a = useColorMode()

const f = useBreadcrumb()
</script>
