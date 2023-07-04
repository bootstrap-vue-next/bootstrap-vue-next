<template>
  <BPopover ref="popover" tooltip>
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </BPopover>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import BPopover from './BPopover.vue'

const popover = ref()

/* Extend the hide, show and toggle functions of the BPopover component
 to allow the user to programmatically control the tooltip. */
const hideFn = (event: Event) => popover.value.hideFn(event)
const show = () => popover.value.show()
const toggle = (event: Event) => popover.value.toggle(event)

defineExpose({
  hideFn,
  show,
  toggle,
})
</script>
