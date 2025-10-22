<template>
  <BButton @click="showReactiveExample">Click me</BButton>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {BButton, useModal} from 'bootstrap-vue-next'

const {create} = useModal()

const title = ref('Hello')
onMounted(() => {
  setInterval(() => {
    title.value = title.value === 'Hello' ? 'World' : 'Hello'
  }, 2500)
})

const showReactiveExample = () => {
  create({
    title,
  }).show()
}
</script>
