<template>
  <BButton @click="showMe">Show</BButton>
</template>

<script setup lang="ts">
import {h, onMounted, onUnmounted, ref} from 'vue'
import {BButton, type OrchestratedToast, useToast} from 'bootstrap-vue-next'

const {create} = useToast()

const firstRef = ref<OrchestratedToast>({
  body: `${Math.random()}`,
})

let intervalId: number | undefined

onMounted(() => {
  intervalId = setInterval(() => {
    firstRef.value.body = `${Math.random()}`
  }, 1000)
})

onUnmounted(() => {
  if (intervalId !== undefined) {
    clearInterval(intervalId)
  }
})

const showMe = () => {
  create({
    body: firstRef.value.body,
    slots: {default: () => h('div', null, `custom! ${firstRef.value.body}`)},
  })
  // Demonstration pseudocode, you can also import a component and use it
  // const importedComponent () => {
  //   create({
  //     component: import('./MyToastComponent.vue'),
  //   })
  // }
}
</script>
