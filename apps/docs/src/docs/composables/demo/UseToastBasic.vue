<template>
  <BButton @click="create({title: 'Hello', body: 'World'})">Show</BButton>
</template>

<script setup lang="ts">
import {BButton, useToast} from 'bootstrap-vue-next'

const {create} = useToast()
</script>
