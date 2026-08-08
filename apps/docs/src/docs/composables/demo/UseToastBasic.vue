<template>
  <BButton @click="showMe">Show</BButton>
</template>

<script setup lang="ts">
import {BButton, useToast} from 'bootstrap-vue-next'

const {create} = useToast()

const showMe = async () => {
  await using _ = await create({title: 'Hello', body: 'World'}).show()
}
</script>
