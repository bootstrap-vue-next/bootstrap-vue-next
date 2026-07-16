<template>
  <BButton @click="showReactiveExample">Click me</BButton>
</template>

<script setup lang="ts">
import {onMounted, onUnmounted, reactive, ref} from 'vue'
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

const myReactive = reactive({
  // This can be any reactive struct. But reactives are the easiest paths forward.
  // You need "modelValue" to be writable, so it "can't" be a standard computed. But reactive will keep outside refs reactive
  // If your inputs are static, then you could pass in a simple object and not reactive
  title,
  modelValue: false,
})
const showReactiveExample = async () => {
  // dispose the reference to keep modals from floating around
  await using _ = await create(myReactive).show()
}
</script>
