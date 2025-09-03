<template>
  <BOverlay
    :show="loadingBuzy"
    rounded
    opacity="0.6"
    spinner-small
    spinner-variant="primary"
    class="d-inline-block"
    @hidden="onBuzyHidden"
  >
    <BButton
      ref="buzyButton"
      :disabled="loadingBuzy"
      variant="primary"
      @click="setBuzyClick"
    >
      Do something
    </BButton>
  </BOverlay>
</template>

<script setup lang="ts">
import {ref, useTemplateRef} from 'vue'
import {BButton} from 'bootstrap-vue-next/components/BButton'

let timeout: ReturnType<typeof setTimeout> | null = null

const loadingBuzy = ref(false)
const buzyButton = useTemplateRef<typeof BButton>('buzyButton')

const clearTimer = () => {
  if (timeout) {
    clearTimeout(timeout)
    timeout = null
  }
}
const setTimer = (callback: () => void) => {
  clearTimer()
  timeout = setTimeout(() => {
    clearTimer()
    callback()
  }, 5000)
}
const setBuzyClick = () => {
  loadingBuzy.value = true
  // Simulate an async request
  setTimer(() => {
    loadingBuzy.value = false
  })
}

const onBuzyHidden = () => {
  // Return focus to the button once hidden
  buzyButton.value?.$el.focus()
}
</script>
