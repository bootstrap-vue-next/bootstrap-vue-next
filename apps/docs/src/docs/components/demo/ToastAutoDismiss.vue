<template>
  <BButton @click="showToast"> Show </BButton>
</template>

<script setup lang="ts">
import { useToast } from 'bootstrap-vue-next/composables/useToast'

const { create } = useToast()

const showToast = async () => {
  await using _ = await create({
    title: 'Counting down!',
    variant: 'info',
    position: 'middle-center',
    modelValue: 10000,
    progressProps: {
      variant: 'danger',
    },
    body: 'Watch me!',
  }).show()
}
</script>
