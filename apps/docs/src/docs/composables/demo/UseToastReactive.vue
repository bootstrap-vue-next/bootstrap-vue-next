<template>
  <BButton @click="showMe">Show</BButton>
</template>

<script setup lang="ts">
import {computed, onMounted, onUnmounted, ref} from 'vue'
import {BButton, type ColorVariant, type OrchestratedToast, useToast} from 'bootstrap-vue-next'

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
  create(
    computed(() => ({
      ...firstRef.value,
      variant: (Number.parseInt(firstRef.value.body?.charAt(2) ?? '0') % 2 === 0
        ? 'danger'
        : 'info') as ColorVariant,
    }))
  )
}
</script>
