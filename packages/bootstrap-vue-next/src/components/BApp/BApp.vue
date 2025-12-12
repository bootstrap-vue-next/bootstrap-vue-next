<template>
  <BOrchestrator
    v-if="!noOrchestrator"
    ref="orchestratorRef"
    :append-toast="appendToast"
    :teleport-to="teleportTo"
  />
  <slot v-bind="$attrs" />
</template>

<script setup lang="ts">
import type {BAppProps} from '../../types/ComponentProps'
import BOrchestrator from './BOrchestrator.vue'
import {useProvideDefaults} from '../../composables/useProvideDefaults'
import {useRegistry} from '../../composables/useRegistry'
import {useOrchestratorRegistry} from '../../composables/orchestratorShared'
import {ref, toRef} from 'vue'

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

const orchestratorRef = ref<InstanceType<typeof BOrchestrator>>()

// Re-expose orchestrator methods
defineExpose({
  get modal() {
    return orchestratorRef.value?.modal
  },
  get toast() {
    return orchestratorRef.value?.toast
  },
  get popover() {
    return orchestratorRef.value?.popover
  },
  get _isOrchestratorInstalled() {
    return orchestratorRef.value?._isOrchestratorInstalled
  },
  get _isToastAppend() {
    return orchestratorRef.value?._isToastAppend
  },
  get store() {
    return orchestratorRef.value?.store
  },
})
</script>
