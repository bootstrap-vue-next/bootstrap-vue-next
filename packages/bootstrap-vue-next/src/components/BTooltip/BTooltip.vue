<template>
  <BPopover
    ref="_popover"
    v-bind="computedProps"
    v-model="modelValue"
    tooltip
    @show="emit('show', $event)"
    @shown="emit('shown', $event)"
    @hide="emit('hide', $event)"
    @hidden="emit('hidden', $event)"
    @hide-prevented="emit('hide-prevented', $event)"
    @show-prevented="emit('show-prevented', $event)"
    @toggle-prevented="emit('toggle-prevented', $event)"
    @toggle="emit('toggle', $event)"
    @pointerleave="emit('pointerleave', $event)"
    @blur="emit('blur', $event)"
    @click-outside="emit('click-outside', $event)"
    @close-on-hide="emit('close-on-hide', $event)"
  >
    <template v-if="slots.default" #default="scope">
      <slot v-bind="scope" />
    </template>
    <template v-if="slots.target" #target="scope">
      <slot name="target" v-bind="scope" />
    </template>
    <template v-if="slots.title" #title="scope">
      <slot name="title" v-bind="scope" />
    </template>
  </BPopover>
</template>

<script setup lang="ts">
import {computed, useTemplateRef} from 'vue'
import BPopover from '../BPopover/BPopover.vue'
import type {BPopoverProps, BTooltipProps} from '../../types/ComponentProps'
import type {BTooltipSlots} from '../../types/ComponentSlots'
import type {BTooltipEmits} from '../../types/ComponentEmits'
import {useDefaults} from '../../composables/useDefaults'

const _props = withDefaults(defineProps<Omit<BTooltipProps, 'modelValue'>>(), {
  click: undefined,
  teleportDisabled: undefined,
  teleportTo: undefined,
  bodyClass: undefined,
  delay: 0,
  floatingMiddleware: undefined,
  hideMargin: 0,
  id: undefined,
  initialAnimation: false,
  inline: undefined,
  interactive: undefined,
  lazy: undefined,
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
  show: undefined,
  strategy: undefined,
  target: undefined,
  unmountLazy: undefined,
  title: undefined,
  titleClass: undefined,
  variant: undefined,
  visible: undefined,
})
const props = useDefaults(_props, 'BTooltip')
const emit = defineEmits<BTooltipEmits>()
const slots = defineSlots<BTooltipSlots>()

const modelValue = defineModel<Exclude<BTooltipProps['modelValue'], undefined>>({
  default: false,
})

const computedProps = computed<BPopoverProps>(() => {
  const {interactive, noninteractive, ...rest} = props
  return {noninteractive: noninteractive !== undefined ? noninteractive : !interactive, ...rest}
})

const popover = useTemplateRef('_popover')

defineExpose({
  hide: () => {
    popover.value?.hide()
  },
  show: () => {
    popover.value?.show()
  },
  toggle: () => {
    popover.value?.toggle()
  },
})
</script>
