<template>
  <BButton @click="showMeAdvancedExample">Click me</BButton>
</template>

<script setup lang="ts">
import { h, markRaw, onMounted, onUnmounted, ref } from 'vue'
import { BButton } from 'bootstrap-vue-next/components/BButton'
import { useModal } from 'bootstrap-vue-next/composables/useModal'

const { create } = useModal()

const firstRef = ref({
  body: 'foo',
})
let intervalId: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  intervalId = setInterval(() => {
    firstRef.value.body = firstRef.value.body === 'foo' ? 'bar' : 'foo'
  }, 1000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})

const showMeAdvancedExample = async () => {
  await using _ = await create({
    slots: {
      default: (scope) =>
        markRaw(h('div', null, `custom ${firstRef.value.body} - ${scope.visible}`)),
    },
  }).show()

  // Demonstration pseudocode, you can import a component and use it
  // const importedComponent = () => {
  //   create({
  //     component: markRaw((await import('./TestModal.vue')).default),
  //   })
  // }
}
</script>
