<!-- eslint-disable vue/no-unused-vars -->
<template>
  <component
    :is="_component ?? BPopover"
    v-for="[
      key,
      {component: _component, promise, slots, stop, ...val},
    ] in tools.popovers?.value.entries() ?? []"
    :key="key"
    v-bind="val"
    initial-animation
    :teleport-disabled="true"
    @hide="
      (e: BvTriggerableEvent) => {
        val.onHide?.(e)
        if (e.defaultPrevented) {
          return
        }
        promise.resolve(true)
      }
    "
  >
    <template v-for="(comp, slot) in slots" #[slot]="scope" :key="slot">
      <component :is="comp" v-bind="scope" />
    </template>
  </component>
  <component
    :is="_component ?? BTooltip"
    v-for="[
      key,
      {component: _component, promise, slots, stop, ...val},
    ] in tools.tooltips?.value.entries() ?? []"
    :key="key"
    v-bind="val"
    initial-animation
    :teleport-disabled="true"
    @hide="
      (e: BvTriggerableEvent) => {
        val.onHide?.(e)
        if (e.defaultPrevented) {
          return
        }
        promise.resolve(true)
      }
    "
  >
    <template v-for="(comp, slot) in slots" #[slot]="scope" :key="slot">
      <component :is="comp" v-bind="scope" />
    </template>
  </component>
</template>

<script setup lang="ts">
import type {BvTriggerableEvent} from '../../utils'
import {usePopoverController} from '../../composables/usePopoverController'
import BPopover from './BPopover.vue'
import BTooltip from '../BTooltip/BTooltip.vue'

const tools = usePopoverController()
tools._isOrchestratorInstalled.value = true

defineExpose({
  ...tools,
})
</script>
