<template>
  <ConditionalTeleport :to="props.teleportTo" :disabled="props.teleportDisabled">
    <div id="__BVID__toaster-container" v-bind="$attrs">
      <div
        v-for="(value, key) in positionClasses"
        :key
        :class="value"
        class="toast-container position-fixed p-3"
        style="width: calc(var(--bs-toast-max-width, 350px) + 2 * 1rem)"
      >
        <TransitionGroup name="b-list">
          <span
            v-for="{
              _self,
              slots,
              promise,
              options,
              component: _component,
              ...val
            } in tools.toasts?.value.filter((el) => el.position === key) || []"
            :key="_self"
          >
            <component
              :is="_component ?? BToast"
              v-bind="val"
              :ref="(ref: ComponentPublicInstance) => (promise.value.ref = ref)"
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
                    promise.resolve(e)
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
                    promise.resolve(e)
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
          </span>
        </TransitionGroup>
      </div>
    </div>
  </ConditionalTeleport>
</template>

<script setup lang="ts">
import type {BvTriggerableEvent} from '../../utils'

import {type ComponentPublicInstance, watch} from 'vue'
import {useDefaults} from '../../composables/useDefaults'
import {positionClasses} from '../../utils/positionClasses'
import type {BToastOrchestratorProps} from '../../types/ComponentProps'
import BToast from './BToast.vue'
import ConditionalTeleport from '../ConditionalTeleport.vue'
import {useToastController} from '../../composables/useToastController'

defineOptions({
  inheritAttrs: false,
})

const _props = withDefaults(defineProps<BToastOrchestratorProps>(), {
  teleportDisabled: false,
  teleportTo: 'body',
  appendToast: false,
})
const props = useDefaults(_props, 'BToastOrchestrator')

const tools = useToastController()
tools._isOrchestratorInstalled.value = true

watch(
  () => props.appendToast,
  (value) => {
    tools._isAppend.value = value
  },
  {immediate: true}
)

defineExpose({
  ...tools,
})
</script>

<style lang="scss">
.b-list-move,
.b-list-enter-active,
.b-list-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.b-list-enter-from,
.b-list-leave-to {
  opacity: 0; // TODO this should be the responsibility of the child
}
.b-list-leave-active {
  position: fixed;
}
</style>
