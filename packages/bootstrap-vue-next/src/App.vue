<template>
  <BContainer>
    <BRow>
      <BCol>
        <BModaler ref="foo" />
        <BButton @click="a">Click me</BButton>
        <!-- <BModal v-model="bar" /> -->
        <BButton @click="bar = !bar">Click me bar</BButton>
        <BToaster ref="toaster" />
        <BButton @click="b">Click me toaster</BButton>
        {{ bar }}
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
// You can use this file as a development spot to test your changes
// Please do not commit this file
import {ref} from 'vue'
import BModaler from './components/BModal/BModaler.vue'
import type BToasterVue from './components/BToast/BToaster.vue'

const foo = ref<null | InstanceType<typeof BModaler>>(null)
const bar = ref(true)
const toaster = ref<null | InstanceType<typeof BToasterVue>>(null)

const a = async () => {
  const promise = foo.value?.confirm()
  console.log(promise)
  console.log(await promise)
}

const b = () => {
  toaster.value?.show('Hello world')
}
</script>
