<template>
  <BButton @click="showMe">Show</BButton>
</template>

<script setup lang="ts">
import {h, markRaw, onMounted, onUnmounted, ref, watchEffect} from 'vue'
import {BButton, type ToastOrchestratorCreateParamBase, useToast} from 'bootstrap-vue-next'

const {create} = useToast()

const body = ref(`${Math.random()}`)

let intervalId: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  intervalId = setInterval(() => {
    body.value = `${Math.random()}`
  }, 1000)
})

onUnmounted(() => {
  if (intervalId !== undefined) {
    clearInterval(intervalId)
  }
})

const item = ref<ToastOrchestratorCreateParamBase>({
  body: body.value,
  slots: {default: markRaw(() => h('div', null, `custom! ${body.value}`))},
})

watchEffect(() => {
  item.value = {
    ...item.value,
    body: body.value,
    slots: {default: markRaw(() => h('div', null, `custom! ${body.value}`))},
  }
})

const showMe = async () => {
  await using _ = await create(item).show()
  // Demonstration pseudocode, you can also import a component and use it
  // const importedComponent = () => {
  //   create({
  //     component: import('./MyToastComponent.vue'),
  //   })
  // }
}
</script>
