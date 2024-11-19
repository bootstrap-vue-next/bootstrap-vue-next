<template>
  <PopoverList />
  <TooltipList />
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

const TooltipList = () =>
  Array.from(tools.tooltips?.value?.entries() ?? []).map(([self, {content, title, ...popover}]) => {
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
    return h(BTooltip, {key: self, ...props, ...popover}, slots)
  })

defineExpose({
  ...tools,
})
</script>
