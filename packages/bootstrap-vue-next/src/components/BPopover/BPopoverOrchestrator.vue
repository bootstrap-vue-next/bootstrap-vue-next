<template>
  <PopoverList />
  <component
    :is="tooltip.component ?? BTooltip"
    v-for="[self, tooltip] in tools.tooltips?.value"
    :key="self"
    v-bind="tooltip.props"
    :model-value="tooltip.props._modelValue"
    :target="tooltip.props._target"
    @update:model-value="tools.setTooltip?.(self, {...tooltip.props, _modelValue: $event})"
  />
</template>

<script setup lang="ts">
import {usePopoverController} from '../../composables/usePopoverController'
import BPopover from './BPopover.vue'
import BTooltip from '../BTooltip/BTooltip.vue'
import {h} from 'vue'

const tools = usePopoverController()

const PopoverList = () =>
  Array.from(tools.popovers?.value?.entries() ?? []).map(([self, {content, title, ...popover}]) => {
    const props: Record<string, string> = {}
    const slots: Record<string, unknown> = {}
    if (typeof content === 'string') {
      props.content = content
    } else {
      slots.default = content
    }
    if (typeof title === 'string') {
      props.title = title
    } else {
      slots.title = title
    }
    return h(BPopover, {key: self, ...props, ...popover}, slots)
  })

defineExpose({
  ...tools,
})
</script>
