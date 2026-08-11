<template>
  <BButton @click="showMe">Show</BButton>
</template>

<script setup lang="ts">
import { h, markRaw, onMounted, onUnmounted, ref } from 'vue'
import type { OrchestratedToast } from 'bootstrap-vue-next'
import { BButton } from 'bootstrap-vue-next/components/BButton'
import { useToast } from 'bootstrap-vue-next/composables/useToast'

const { create } = useToast()

const firstRef = ref<OrchestratedToast>({
  body: 'foo',
})

let intervalId: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  intervalId = setInterval(() => {
    firstRef.value.body = firstRef.value.body === 'foo' ? 'bar' : 'foo'
  }, 1000)
})

onUnmounted(() => {
  if (intervalId !== undefined) {
    clearInterval(intervalId)
  }
})

const showMe = async () => {
  await using _ = await create({
    body: firstRef.value.body,
    slots: { default: () => markRaw(h('div', null, `custom! ${firstRef.value.body}`)) },
  }).show()
  // Demonstration pseudocode, you can also import a component and use it
  // const importedComponent = () => {
  //   create({
  //     component: markRaw((await import('./MyToastComponent.vue')).default),
  //   })
  // }
}
</script>
