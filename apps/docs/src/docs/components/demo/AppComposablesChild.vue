<template>
  <BButton @click="showToast">Show Toast</BButton>
  <BButton @click="showModal">Show Modal</BButton>
</template>

<script setup lang="ts">
import { BButton } from 'bootstrap-vue-next/components/BButton'
import { useModal } from 'bootstrap-vue-next/composables/useModal'
import { useToast } from 'bootstrap-vue-next/composables/useToast'

const { create: createToast } = useToast()
const { create: createModal } = useModal()

const showToast = async () => {
  await using _ = await createToast({
    title: 'Hello',
    body: 'This is a toast message!',
  }).show()
}

const showModal = async () => {
  await using _ = await createModal({
    title: 'Confirm Action',
    body: 'Are you sure you want to continue?',
  }).show()
}
</script>
