<template>
  <BButtonGroup>
    <BButton variant="success" @click="showMe"> Show the Toast </BButton>
    <BButton variant="danger" @click="hideMe"> Hide the Toast </BButton>
  </BButtonGroup>
</template>

<script setup lang="ts">
import { BButton, BButtonGroup } from 'bootstrap-vue-next/components/BButton'
import { useToast } from 'bootstrap-vue-next/composables/useToast'

const { create } = useToast()

let toast: ReturnType<typeof create> | undefined

const getToast = () => {
  toast ??= create({
    title: 'Showing',
    body: 'Toast is now showing',
    variant: 'success',
    position: 'bottom-center',
  })
  return toast
}

const showMe = async () => {
  await getToast().show()
}

const hideMe = () => {
  if (toast === undefined) return
  toast.hide('programmatic-hide')
}
</script>
