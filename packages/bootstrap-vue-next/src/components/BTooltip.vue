<template>
  <BPopover ref="popover" v-bind="computedProps" v-model="modelValue" tooltip>
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </BPopover>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'
import BPopover from './BPopover.vue'
import type {BPopoverProps, BTooltipProps} from '../types'
import {useDefaults} from '../composables'

const _props = withDefaults(defineProps<BTooltipProps>(), {
  click: undefined,
  teleportDisabled: undefined,
  teleportTo: undefined,
  content: undefined,
  customClass: undefined,
  delay: undefined,
  floatingMiddleware: undefined,
  hide: undefined,
  html: undefined,
  id: undefined,
  inline: undefined,
  interactive: undefined,
  manual: undefined,
  noAutoClose: undefined,
  noFade: undefined,
  noFlip: undefined,
  noHide: undefined,
  noShift: undefined,
  noninteractive: undefined,
  offset: undefined,
  placement: undefined,
  realtime: undefined,
  reference: undefined,
  strategy: undefined,
  target: undefined,
  title: undefined,
  variant: undefined,
})

const props = useDefaults(_props, 'BTooltip')

const modelValue = defineModel<boolean | undefined>({default: undefined})

const computedProps = computed<BPopoverProps>(() => {
  const {interactive, noninteractive, ...rest} = props
  return {noninteractive: noninteractive !== undefined ? noninteractive : !interactive, ...rest}
})

const popover = ref<null | InstanceType<typeof BPopover>>(null)

defineExpose({
  hide: popover.value?.hide,
  show: popover.value?.show,
  toggle: popover.value?.toggle,
})
</script>
