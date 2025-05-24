<template>
  <ConditionalTeleport :to="props.teleportTo" :disabled="props.teleportDisabled">
    <div id="__BVID__popover-container" v-bind="$attrs">
      <component
        :is="_component ?? (val.tooltip ? BTooltip : BPopover)"
        v-for="[
          key,
          {component: _component, promise, slots, ...val},
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
            promise.resolve(e)
          }
        "
      >
        <template v-for="(comp, slot) in slots" #[slot]="scope" :key="slot">
          <component :is="comp" v-bind="scope" />
        </template>
      </component>
    </div>
  </ConditionalTeleport>
</template>

<script setup lang="ts">
import type {BvTriggerableEvent} from '../../utils'
import {useDefaults} from '../../composables/useDefaults'
import type {BPopoverOrchestratorProps} from '../../types/ComponentProps'

import {usePopoverController} from '../../composables/usePopoverController'
import BPopover from './BPopover.vue'
import BTooltip from '../BTooltip/BTooltip.vue'

const tools = usePopoverController()
tools._isOrchestratorInstalled.value = true

const _props = withDefaults(defineProps<BPopoverOrchestratorProps>(), {
  teleportDisabled: false,
  teleportTo: 'body',
})
const props = useDefaults(_props, 'BPopoverOrchestrator')

defineExpose({
  ...tools,
})
</script>
