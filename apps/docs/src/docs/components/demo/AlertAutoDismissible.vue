<template>
  <BAlert
    v-model="autoDismissingAlert"
    :interval="autoDismissingAlertInterval"
    @close-countdown="autoDismissingAlertCountdown = $event"
  >
    Alert countdown: {{ autoDismissingAlertCountdown }} interval: {{ autoDismissingAlertInterval }}
  </BAlert>

  <BButtonGroup>
    <BButton @click="autoDismissingAlert += 1000">Adjust Alert Time +1000</BButton>
    <BButton @click="autoDismissingAlert -= 1000">Adjust Alert Time -1000</BButton>
    <BButton
      @click="
        autoDismissingAlertInterval =
          typeof autoDismissingAlertInterval === 'string'
            ? 'requestAnimationFrame'
            : autoDismissingAlertInterval + 100
      "
      >Adjust Alert interval +100</BButton
    >
    <BButton
      @click="
        autoDismissingAlertInterval =
          typeof autoDismissingAlertInterval === 'string'
            ? 'requestAnimationFrame'
            : autoDismissingAlertInterval - 100
      "
      >Adjust Alert interval -100</BButton
    >
    <BButton @click="autoDismissingAlertInterval = 'requestAnimationFrame'"
      >Use requestAnimationFrame</BButton
    >
  </BButtonGroup>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const autoDismissingAlert = ref(10000)
const autoDismissingAlertInterval = ref<number | 'requestAnimationFrame'>(1000)
const autoDismissingAlertCountdown = ref(0)
</script>
