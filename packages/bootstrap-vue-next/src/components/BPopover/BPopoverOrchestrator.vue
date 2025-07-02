<template>
  <ConditionalTeleport :to="props.teleportTo" :disabled="props.teleportDisabled">
    <BOrchestrator v-if="renderOrchestrator" v-bind="$attrs" />
  </ConditionalTeleport>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables/useDefaults'
import type {BPopoverOrchestratorProps} from '../../types/ComponentProps'
import BOrchestrator from '../BApp/BOrchestrator.vue'
import ConditionalTeleport from '../ConditionalTeleport.vue'

import {usePopover} from '../../composables'

const _props = withDefaults(defineProps<BPopoverOrchestratorProps>(), {
  teleportDisabled: false,
  teleportTo: 'body',
})
const props = useDefaults(_props, 'BPopoverOrchestrator')

const tools = usePopover()
let renderOrchestrator = false
if (!tools._isOrchestratorInstalled.value) {
  renderOrchestrator = true
}

if (process.env.NODE_ENV === 'development') {
  console.warn('BPopoverOrchestrator is deprecated, use BOrchestrator instead')
}

defineExpose({
  ...tools,
})
</script>
