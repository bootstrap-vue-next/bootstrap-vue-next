<template>
  <BPopover ref="popover" :tooltip="true" v-bind="$props">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </BPopover>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import BPopover from './BPopover.vue'
import type {BPopoverProps} from '../types'

withDefaults(defineProps<Omit<BPopoverProps, 'tooltip'>>(), {
  floatingMiddleware: undefined,
  title: undefined,
  id: undefined,
  content: undefined,
  modelValue: undefined,
  container: undefined,
  customClass: undefined,
  placement: undefined,
  strategy: undefined,
  delay: undefined,
  click: undefined,
  manual: undefined,
  variant: undefined,
  offset: undefined,
  noFlip: undefined,
  noShift: undefined,
  noFade: undefined,
  noAutoClose: undefined,
  hide: undefined,
  realtime: undefined,
  inline: undefined,
  html: undefined,
  reference: undefined,
  target: undefined,
  noninteractive: undefined,
})

const popover = ref<null | InstanceType<typeof BPopover>>(null)

defineExpose({
  hide: popover.value?.hideFn,
  show: popover.value?.show,
  toggle: popover.value?.toggle,
})
</script>
