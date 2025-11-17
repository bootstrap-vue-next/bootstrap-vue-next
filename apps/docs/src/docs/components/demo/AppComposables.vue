<template>
  <BApp>
    <BButton @click="showToast">Show Toast</BButton>
    <BButton @click="showModal">Show Modal</BButton>
  </BApp>
</template>

<script setup lang="ts">
import {BApp, BButton, useModal, useToast} from 'bootstrap-vue-next'

const toast = useToast()
const modal = useModal()

const showToast = () => {
  toast
    .create({
      title: 'Hello',
      body: 'This is a toast message!',
    })
    .show()
}

const showModal = () => {
  modal
    .create({
      title: 'Confirm Action',
      body: 'Are you sure you want to continue?',
    })
    .show()
}
</script>
