<template>
  <BButton @click="showToast">Show Toast</BButton>
  <BButton @click="showModal">Show Modal</BButton>
</template>

<script>
import {BButton, useModal, useToast} from 'bootstrap-vue-next'

export default {
  components: {BButton},
  setup() {
    const toast = useToast()
    const modal = useModal()

    return {
      showToast() {
        toast
          .create({
            title: 'Hello',
            body: 'This is a toast message!',
          })
          .show()
      },
      showModal() {
        modal
          .create({
            title: 'Confirm Action',
            body: 'Are you sure you want to continue?',
          })
          .show()
      },
    }
  },
}
</script>
