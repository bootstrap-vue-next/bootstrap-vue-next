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
  get show() {
    return orchestratorRef.value?.show
  },
  get hide() {
    return orchestratorRef.value?.hide
  },
  get hideAll() {
    return orchestratorRef.value?.hideAll
  },
  get get() {
    return orchestratorRef.value?.get
  },
  get current() {
    return orchestratorRef.value?.current
  },
  get create() {
    return orchestratorRef.value?.create
  },
  get popover() {
    return orchestratorRef.value?.popover
  },
  get tooltip() {
    return orchestratorRef.value?.tooltip
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
