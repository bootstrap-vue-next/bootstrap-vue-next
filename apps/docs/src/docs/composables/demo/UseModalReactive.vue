<template>
  <BButton @click="showReactiveExample">Click me</BButton>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watchEffect } from 'vue'
import { BButton } from 'bootstrap-vue-next/components/BButton'
import { useModal } from 'bootstrap-vue-next/composables/useModal'

const { create } = useModal()

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

// `create()` needs a writable ref/plain object (it needs to control `modelValue` itself),
// so `reactive()` is not used here. Instead, derive the reactive pieces with `computed()`,
// then sync them onto a plain ref via `watchEffect()`.
const derivedTitle = computed(() => title.value)
const myModal = ref({
  title: derivedTitle.value,
  modelValue: false,
})
watchEffect(() => {
  myModal.value.title = derivedTitle.value
})

const showReactiveExample = async () => {
  // dispose the reference to keep modals from floating around
  await using _ = await create(myModal).show()
}
</script>
