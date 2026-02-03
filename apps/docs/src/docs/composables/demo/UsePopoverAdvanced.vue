<template>
  <BButton ref="advancedExample">Hover me</BButton>
</template>

<script setup lang="ts">
import {h, onMounted, ref} from 'vue'
import {BButton, usePopover} from 'bootstrap-vue-next'

const {popover} = usePopover()
const advancedExample = ref<HTMLElement>()

onMounted(() => {
  popover({
    slots: {
      default: (scope) => h('div', null, `Custom content - Visible: ${scope.visible}`),
    },
    target: advancedExample.value,
    title: 'Advanced Popover',
  })
})
</script>
