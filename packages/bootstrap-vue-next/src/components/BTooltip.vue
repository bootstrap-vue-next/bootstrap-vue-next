<template>
  <BPopover ref="popover" tooltip v-bind="$props">
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
  click: undefined,
  container: undefined,
  content: undefined,
  customClass: undefined,
  delay: undefined,
  floatingMiddleware: undefined,
  hide: undefined,
  html: undefined,
  id: undefined,
  inline: undefined,
  manual: undefined,
  modelValue: undefined,
  noAutoClose: undefined,
  noFade: undefined,
  noFlip: undefined,
  noHide: undefined,
  noShift: undefined,
  noninteractive: true,
  offset: undefined,
  placement: undefined,
  realtime: undefined,
  reference: undefined,
  strategy: undefined,
  target: undefined,
  title: undefined,
  variant: undefined,
})

const popover = ref<null | InstanceType<typeof BPopover>>(null)

defineExpose({
  hide: popover.value?.hide,
  show: popover.value?.show,
  toggle: popover.value?.toggle,
})
</script>
