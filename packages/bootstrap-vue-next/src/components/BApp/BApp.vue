<template>
  <BOrchestrator v-if="!noOrchestrator" :append-toast="appendToast" :teleport-to="teleportTo" />
  <slot v-bind="$attrs" />
</template>

<script setup lang="ts">
import type {BAppProps} from '../../types/ComponentProps'
import BOrchestrator from './BOrchestrator.vue'
import {useProvideDefaults} from '../../composables/useProvideDefaults'
import {useRegistry} from '../../composables/useRegistry'
import {useOrchestratorRegistry} from '../../composables/orchestratorShared'
import {useToast} from '../../composables/useToast'
import {useModal} from '../../composables/useModal'
import {usePopover} from '../../composables/usePopover'
import {useBreadcrumb} from '../../composables/useBreadcrumb'
import {inject, toRef} from 'vue'
import {rtlRegistryKey} from '../../utils/keys'

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

// Conditionally set up orchestrator registry
const hasOrchestrator = !props.noOrchestrator
if (hasOrchestrator) {
  useOrchestratorRegistry()
}

// Expose composables via defineExpose so they can be accessed via template ref
// This allows users to access composables in the same component where BApp is registered
const rtlRegistry = inject(rtlRegistryKey, null)

// Initialize composables after provides are set up
const breadcrumbComposable = useBreadcrumb()
const rtlExpose = rtlRegistry
  ? {
      isRtl: rtlRegistry.isRtl,
      locale: rtlRegistry.locale,
    }
  : undefined

// Build exposed object conditionally using spread
const orchestratorExpose = hasOrchestrator
  ? {
      toast: useToast(),
      modal: useModal(),
      popover: usePopover(),
    }
  : {}

defineExpose({
  ...orchestratorExpose,
  breadcrumb: breadcrumbComposable,
  rtl: rtlExpose,
})
</script>
