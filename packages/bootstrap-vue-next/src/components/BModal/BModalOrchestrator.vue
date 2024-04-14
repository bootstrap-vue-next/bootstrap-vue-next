<template>
  <Teleport :to="teleportTo" :disabled="props.teleportDisabled">
    <!-- This wrapper div is used for specific targetting by the user -->
    <!-- Even though it serves no direct purpose itself -->
    <div id="__BVID__modal-container">
      <!-- TODO the animation when entering doesn't work. -->
      <!-- I tried to use <Transition appear> to have the animation work, but it didn't -->
      <component
        :is="modal.value.component"
        v-for="(modal, index) in modals"
        :key="index"
        v-model="modal.value.props._modelValue"
        v-bind="pluckModalItem(modal.value.props)"
        :teleport-disabled="true"
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
import {useModalController} from '../../composables'
import type {BModalOrchestratorProps} from '../../types'

const props = withDefaults(defineProps<BModalOrchestratorProps>(), {
  teleportDisabled: false,
  teleportTo: 'body',
})

const {modals, remove, show, confirm} = useModalController()

const pluckModalItem = (
  payload: Readonly<Exclude<typeof modals, undefined>['value'][number]['value']['props']>
) => omit(payload, ['_promise', '_self', '_isConfirm', '_modelValue'])

defineExpose({
  modals,
  show,
  confirm,
})
</script>
