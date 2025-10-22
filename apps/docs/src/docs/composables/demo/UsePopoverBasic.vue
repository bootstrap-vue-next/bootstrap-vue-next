<template>
  <BButton ref="popoverButton">Hover me</BButton>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {BButton, usePopover} from 'bootstrap-vue-next'

const {popover} = usePopover()
const popoverButton = ref<HTMLElement>()

onMounted(() => {
  popover({title: 'Hello World!', body: 'This is a popover.', target: popoverButton.value})
})
</script>
