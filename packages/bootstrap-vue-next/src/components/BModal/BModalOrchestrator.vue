<template>
  <Teleport :to="props.teleportTo" :disabled="props.teleportDisabled">
    <div id="__BVID__modal-container" v-bind="$attrs">
      <component
        :is="modal.component ?? BModal"
        v-for="[self, modal] in tools.modals?.value"
        :key="self"
        v-bind="modal.props"
        v-model="modal.props._modelValue"
        :teleport-disabled="true"
        @update:model-value="tools.leave?.(self)"
        @hide="
          (e: BvTriggerableEvent) => {
            // These following are confirm rules, otherwise we always resolve true
            if (modal.props._isConfirm === true) {
              if (e.trigger === 'ok') {
                modal.props._promise.resolve(true)
                return
              }
              if (e.trigger === 'cancel') {
                modal.props._promise.resolve(false)
                return
              }
              modal.props._promise.resolve(null)
            }
            modal.props._promise.resolve(true)
          }
        "
        @hidden="tools.remove?.(self)"
      />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import type {BvTriggerableEvent} from '../../utils'
import {useDefaults} from '../../composables/useDefaults'
import type {BModalOrchestratorProps} from '../../types/ComponentProps'
import BModal from './BModal.vue'
import {useModalController} from '../../composables/useModalController/useModalController'

defineOptions({
  inheritAttrs: false,
})

const _props = withDefaults(defineProps<BModalOrchestratorProps>(), {
  teleportDisabled: false,
  teleportTo: 'body',
})
const props = useDefaults(_props, 'BModalOrchestrator')

const tools = useModalController()

defineExpose({
  ...tools,
})
</script>
