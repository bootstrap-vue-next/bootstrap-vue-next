<template>
  <ConditionalTeleport :to="props.teleportTo" :disabled="props.teleportDisabled">
    <div id="__BVID__popover-container" v-bind="$attrs">
      <component
        :is="_component"
        v-for="{_self, component: _component, promise, slots, ...val} in tools.popovers?.value ??
        []"
        :key="_self"
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

const tools = usePopoverController()
if (!tools._isOrchestratorInstalled.value) {
  tools._isOrchestratorInstalled.value = true
} else {
  console.warn(
    'BPopoverOrchestrator Or BApp is already installed, only one can be installed at a time'
  )
}

const _props = withDefaults(defineProps<BPopoverOrchestratorProps>(), {
  teleportDisabled: false,
  teleportTo: 'body',
})
const props = useDefaults(_props, 'BPopoverOrchestrator')

defineExpose({
  ...tools,
})
</script>
