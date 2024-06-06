<template>
  <Teleport :to="props.teleportTo" :disabled="props.teleportDisabled">
    <div id="__BVID__modal-container">
      <component
        :is="modal.value.component"
        v-for="(modal, index) in modals"
        :key="index"
        v-model="modal.value.props._modelValue"
        v-bind="pluckModalItem(modal.value.props)"
        :teleport-disabled="true"
        @update:model-value="leave?.(modal.value.props._self)"
        @hide="
          (e: BvTriggerableEvent) => {
            // These following are confirm rules, otherwise we always resolve true
            if (modal.value.props._isConfirm === true) {
              if (e.trigger === 'ok') {
                modal.value.props._promise.resolve(true)
                return
              }
              if (e.trigger === 'cancel') {
                modal.value.props._promise.resolve(false)
                return
              }
              modal.value.props._promise.resolve(null)
            }
            modal.value.props._promise.resolve(true)
          }
        "
        @hidden="remove?.(modal.value.props._self)"
      />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import {BvTriggerableEvent, omit} from '../../utils'
import {useDefaults, useModalController} from '../../composables'
import type {BModalOrchestratorProps} from '../../types'

const _props = withDefaults(defineProps<BModalOrchestratorProps>(), {
  teleportDisabled: false,
  teleportTo: 'body',
})
const props = useDefaults(_props, 'BModalOrchestrator')

const {modals, remove, show, confirm, leave} = useModalController()

const pluckModalItem = (
  payload: Readonly<Exclude<typeof modals, undefined>['value'][number]['value']['props']>
) => omit(payload, ['_promise', '_self', '_isConfirm', '_modelValue'])

defineExpose({
  modals,
  show,
  confirm,
})
</script>
