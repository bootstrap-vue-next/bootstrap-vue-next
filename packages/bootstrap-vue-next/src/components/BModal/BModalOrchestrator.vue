<template>
  <ConditionalTeleport :to="props.teleportTo" :disabled="props.teleportDisabled">
    <div id="__BVID__modal-container" v-bind="$attrs">
      <component
        :is="_component ?? BModal"
        v-for="[key, {component: _component, promise, isConfirm, slots, ...val}] in tools.modals
          ?.value"
        :key="key"
        v-bind="val"
        initial-animation
        :teleport-disabled="true"
        @hide="
          (e: BvTriggerableEvent) => {
            val.onHide?.(e)
            if (e.defaultPrevented) {
              return
            }
            // These following are confirm rules, otherwise we always resolve true
            if (isConfirm === true) {
              if (e.trigger === 'ok') {
                promise.resolve(true)
                return
              }
              if (e.trigger === 'cancel') {
                promise.resolve(false)
                return
              }
              promise.resolve(null)
            }
            promise.resolve(true)
          }
        "
        @hidden="
          (e: BvTriggerableEvent) => {
            val.onHidden?.(e)
            if (e.defaultPrevented) {
              return
            }
            tools.remove?.(key)
          }
        "
      >
        <template v-for="(comp, slot) in slots" #[slot]="scope" :key="slot">
          <component :is="comp" v-bind="scope" />
        </template>
      </component>
    </div>
  </ConditionalTeleport>
</template>

<script setup lang="ts">
import type {BvTriggerableEvent} from '../../utils'
import {useDefaults} from '../../composables/useDefaults'
import type {BModalOrchestratorProps} from '../../types/ComponentProps'
import BModal from './BModal.vue'
import ConditionalTeleport from '../ConditionalTeleport.vue'
import {useModalController} from '../../composables/useModalController'

defineOptions({
  inheritAttrs: false,
})

const _props = withDefaults(defineProps<BModalOrchestratorProps>(), {
  teleportDisabled: false,
  teleportTo: 'body',
})
const props = useDefaults(_props, 'BModalOrchestrator')

const tools = useModalController()
tools._isOrchestratorInstalled.value = true

defineExpose({
  ...tools,
})
</script>
