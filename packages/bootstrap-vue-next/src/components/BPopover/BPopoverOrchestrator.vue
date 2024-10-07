<template>
  <component
    :is="popover.component ?? BPopover"
    v-for="[self, popover] in tools.popovers?.value"
    :key="self"
    v-bind="popover.props"
    :model-value="popover.props._modelValue"
    :reference="popover.props._reference"
    @update:model-value="tools.set?.(self, {...popover.props, _modelValue: $event})"
  />
</template>

<script setup lang="ts">
import {usePopoverController} from '../../composables/usePopoverController'
import BPopover from './BPopover.vue'

const tools = usePopoverController()

defineExpose({
  ...tools,
})
</script>
