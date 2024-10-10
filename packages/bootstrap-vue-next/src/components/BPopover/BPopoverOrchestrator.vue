<template>
  <component
    :is="popover.component ?? BPopover"
    v-for="[self, popover] in tools.popovers?.value"
    :key="self"
    v-bind="popover.props"
    :model-value="popover.props._modelValue"
    :target="popover.props._target"
    @update:model-value="tools.setPopover?.(self, {...popover.props, _modelValue: $event})"
  />
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

const tools = usePopoverController()

defineExpose({
  ...tools,
})
</script>
