<template>
  <BButton @click="showReactiveExample">Click me</BButton>
</template>

<script setup lang="ts">
import {onMounted, onUnmounted, ref} from 'vue'
import {BButton, useModal} from 'bootstrap-vue-next'

const {create} = useModal()

const title = ref('Hello')
let intervalId: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  intervalId = setInterval(() => {
    title.value = title.value === 'Hello' ? 'World' : 'Hello'
  }, 2500)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})

const showReactiveExample = () => {
  create({
    title,
  }).show()
}
</script>
