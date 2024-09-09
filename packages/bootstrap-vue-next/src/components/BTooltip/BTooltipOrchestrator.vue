<template>
  <component
    :is="tooltip.component ?? BTooltip"
    v-for="[self, tooltip] in tools.tooltips?.value"
    :key="self"
    v-bind="tooltip.props"
    :model-value="tooltip.props._modelValue"
    :reference="tooltip.props._reference"
    @update:model-value="tools.set?.(self, {...tooltip.props, _modelValue: $event})"
  />
</template>

<script setup lang="ts">
import {useTooltip} from '../../composables/useTooltip/useTooltip'
import BTooltip from './BTooltip.vue'

const tools = useTooltip()

defineExpose({
  ...tools,
})
</script>
