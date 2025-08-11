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
import {useRegistry} from '../../composables/useRegistry'
import {useOrchestratorRegistry} from '../../composables/orchestratorShared'
import {toRef} from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BAppProps>(), {
  appendToast: false,
  teleportTo: undefined,
  defaults: undefined,
  mergeDefaults: false,
  noOrchestrator: false,
  rtl: false,
})

useProvideDefaults(
  toRef(() => props.defaults),
  props.mergeDefaults
)
useRegistry(props.rtl)
if (!props.noOrchestrator) {
  useOrchestratorRegistry()
}
</script>
