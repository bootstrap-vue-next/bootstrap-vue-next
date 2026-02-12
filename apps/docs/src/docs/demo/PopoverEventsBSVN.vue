<template>
  <BPopover ref="popover" />
</template>

<script setup lang="ts">
import {ref} from 'vue'

const popover = ref()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const showPopover = () => {
  popover.value?.show()
}
</script>
