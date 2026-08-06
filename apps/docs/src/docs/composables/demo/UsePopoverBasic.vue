<template>
  <BButton ref="popoverButton">Hover me</BButton>
</template>

<script setup lang="ts">
import {type ComponentPublicInstance, onMounted, ref} from 'vue'
import {usePopover} from 'bootstrap-vue-next'

const {popover} = usePopover()
const popoverButton = ref<ComponentPublicInstance>()

onMounted(async () => {
  await using _ = await popover({title: 'Hello World!', body: 'This is a popover.', target: popoverButton.value}).show()
})
</script>
