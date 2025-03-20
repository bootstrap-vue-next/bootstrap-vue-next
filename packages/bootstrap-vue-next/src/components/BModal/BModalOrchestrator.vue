<template>
  <ConditionalTeleport :to="props.teleportTo" :disabled="props.teleportDisabled">
    <div id="__BVID__modal-container" v-bind="$attrs">
      <component
        :is="_component ?? BModal"
        v-for="[key, {component: _component, promise, options, slots, ...val}] in tools.modals
          ?.value"
        :key="key"
        :ref="(ref: ComponentPublicInstance) => (promise.value.ref = ref)"
        v-bind="val"
        initial-animation
        :teleport-disabled="true"
        @hide="
          (e: BvTriggerableEvent) => {
            e.ok = e.trigger === 'ok' ? true : e.trigger === 'cancel' ? false : null
            val.onHide?.(e)
            if (e.defaultPrevented) {
              return
            }
            promise.stop?.()
            if (options?.resolveOnHide) {
              promise.resolve(options.returnBoolean ? e.ok : e)
            }
          }
        "
        @hidden="
          (e: BvTriggerableEvent) => {
            e.ok = e.trigger === 'ok' ? true : e.trigger === 'cancel' ? false : null
            val.onHidden?.(e)
            if (e.defaultPrevented) {
              return
            }
            if (!options?.resolveOnHide) {
              promise.resolve(options.returnBoolean ? e.ok : e)
            }
            if (!options?.keep) {
              promise.value.destroy?.()
            }
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
import type {ComponentPublicInstance} from 'vue'

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
