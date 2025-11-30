<template>
  <BAlert :model-value="true" fade>Default Alert</BAlert>

  <BAlert variant="success" :model-value="true" fade>Success Alert</BAlert>

  <BAlert v-model="showDismissibleAlert" variant="danger" dismissible fade>
    Dismissible Alert!
  </BAlert>

  <BAlert
    v-model="dismissCountDown"
    dismissible
    variant="warning"
    fade
    @close-countdown="countdown = $event"
  >
    <p>This alert will dismiss after {{ countdown / 1000 }} seconds...</p>
    <BProgress variant="warning" :max="dismissCountDown" :value="countdown" height="4px" />
  </BAlert>

  <BButton variant="info" class="m-1" @click="dismissCountDown = dismissCountDown + 5000">
    Add a five seconds to the alert with countdown timer
  </BButton>

  <BButton variant="info" class="m-1" @click="showDismissibleAlert = !showDismissibleAlert">
    {{ !showDismissibleAlert ? 'Show' : 'Hide' }} dismissible alert
  </BButton>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const showDismissibleAlert = ref(false)

const dismissCountDown = ref(10000)
const countdown = ref(0)
</script>
