<template>
  <BButtonGroup>
    <BButton
      variant="success"
      @click="showMe"
    >
      Show the Toast
    </BButton>
    <BButton
      variant="danger"
      @click="hideMe"
    >
      Hide the Toast
    </BButton>
  </BButtonGroup>
</template>

<script setup lang="ts">
import {BButton, BButtonGroup, useToast} from 'bootstrap-vue-next'

const {create} = useToast()

let toast: undefined | ReturnType<typeof create>

const showMe = () => {
  if (toast !== undefined) return
  // `create` returns a symbol
  toast = create({
    title: 'Showing',
    body: 'Toast is now showing',
    variant: 'success',
    pos: 'bottom-center',
  })
}

const hideMe = () => {
  if (toast === undefined) return
  toast.destroy()
  toast = undefined // Reset to allow creating new toast
}
</script>
