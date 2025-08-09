<template>
  <BAlert
    ref="myAlert"
    v-model="secondAutoDismissingAlert"
    @close-countdown="secondAutoDismissingAlertCountdown = $event"
  >
    Alert countdown: {{ secondAutoDismissingAlertCountdown }}
  </BAlert>

  <BButtonGroup>
    <BButton @click="pause">pause</BButton>
    <BButton @click="resume">resume</BButton>
    <BButton @click="restart">restart</BButton>
    <BButton @click="stop">stop</BButton>
  </BButtonGroup>
</template>

<script setup lang="ts">
import {BAlert} from 'bootstrap-vue-next/components/BAlert'
import {ref, useTemplateRef} from 'vue'

const secondAutoDismissingAlert = ref(10000)
const secondAutoDismissingAlertCountdown = ref(0)
const myAlert = useTemplateRef('myAlert')

// Where 'myAlert' is the **ref** of the BAlert
const pause = () => myAlert.value?.pause()
const resume = () => myAlert.value?.resume()
const restart = () => myAlert.value?.restart()
const stop = () => myAlert.value?.stop()
</script>
