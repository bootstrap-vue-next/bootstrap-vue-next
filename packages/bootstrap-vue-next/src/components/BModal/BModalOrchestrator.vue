<template>
  <ConditionalTeleport :to="props.teleportTo" :disabled="props.teleportDisabled">
    <BOrchestrator v-if="renderOrchestrator" v-bind="$attrs" />
  </ConditionalTeleport>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables/useDefaults'
import type {BModalOrchestratorProps} from '../../types/ComponentProps'
import {useModal} from '../../composables/useModal'
import ConditionalTeleport from '../ConditionalTeleport.vue'
import BOrchestrator from '../BApp/BOrchestrator.vue'

defineOptions({
  inheritAttrs: false,
})

const _props = withDefaults(defineProps<BModalOrchestratorProps>(), {
  teleportDisabled: false,
  teleportTo: 'body',
})
const props = useDefaults(_props, 'BModalOrchestrator')

const tools = useModal()
let renderOrchestrator = false
if (!tools._isOrchestratorInstalled.value) {
  renderOrchestrator = true
}

if (process.env.NODE_ENV === 'development') {
  console.warn('BModalOrchestrator is deprecated, use BOrchestrator instead')
}

defineExpose({
  ...tools,
})
</script>
