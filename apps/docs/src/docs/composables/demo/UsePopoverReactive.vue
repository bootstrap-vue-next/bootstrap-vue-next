<template>
  <BButton ref="reactiveExample">Hover me</BButton>
</template>

<script setup lang="ts">
import {onMounted, onUnmounted, ref} from 'vue'
import {BButton, usePopover} from 'bootstrap-vue-next'

const {tooltip} = usePopover()

const title = ref('Hello')
const reactiveExample = ref<HTMLElement>()
let intervalId: NodeJS.Timeout | undefined

onMounted(() => {
  intervalId = setInterval(() => {
    title.value = title.value === 'Hello' ? 'World' : 'Hello'
  }, 2500)

  tooltip({
    title,
    target: reactiveExample.value,
  })
})

onUnmounted(() => {
  if (intervalId !== undefined) {
    clearInterval(intervalId)
  }
})
</script>
