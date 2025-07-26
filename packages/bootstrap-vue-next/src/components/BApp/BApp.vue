<template>
  <ConditionalTeleport :to="teleportTo" :disabled="!teleportTo">
    <BOrchestrator v-if="!noOrchestrator" :append-toast="appendToast" />
  </ConditionalTeleport>
  <slot v-bind="$attrs" />
</template>

<script setup lang="ts">
import type {BAppProps} from '../../types/ComponentProps'
import BOrchestrator from './BOrchestrator.vue'
import ConditionalTeleport from '../ConditionalTeleport.vue'
import {useProvideDefaults} from '../../composables/useProvideDefaults'
import {useRoot} from '../../composables/useRoot'
import {useOrchestratorRegistry} from '../../composables/orchestratorShared'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BAppProps>(), {
  inherit: true,
  appendToast: false,
  teleportTo: undefined,
  defaults: undefined,
  mergeDefaults: false,
  noOrchestrator: false,
  rtl: false,
})

useProvideDefaults(props.defaults, props.mergeDefaults)
useRoot(props.rtl)
if (!props.noOrchestrator) {
  useOrchestratorRegistry(props.inherit)
}
</script>
