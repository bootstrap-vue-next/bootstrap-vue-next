<!-- eslint-disable vue/no-unused-vars -->
<template>
  <ConditionalTeleport :to="props.teleportTo" :disabled="props.teleportDisabled">
    <BOrchestrator v-if="renderOrchestrator" v-bind="$attrs" />
  </ConditionalTeleport>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables/useDefaults'
import type {BToastOrchestratorProps} from '../../types/ComponentProps'
import ConditionalTeleport from '../ConditionalTeleport.vue'
import {useToast} from '../../composables/useToast'
import {watch} from 'vue'
import BOrchestrator from '../BApp/BOrchestrator.vue'
import {deprecatedNote} from '../../utils/deprecatedTools.ts'

defineOptions({
  inheritAttrs: false,
})

const _props = withDefaults(defineProps<BToastOrchestratorProps>(), {
  teleportDisabled: false,
  teleportTo: 'body',
  appendToast: false,
})
const props = useDefaults(_props, 'BToastOrchestrator')

const tools = useToast()
let renderOrchestrator = false
if (!tools._isOrchestratorInstalled.value) {
  renderOrchestrator = true
}

deprecatedNote('BToastOrchestrator is deprecated, use BOrchestrator instead')

watch(
  () => props.appendToast,
  (value) => {
    tools._isToastAppend.value = value
  },
  {immediate: true}
)

defineExpose({
  ...tools,
})
</script>
