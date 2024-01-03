<template>
  <Teleport :to="teleportTo" :disabled="teleportDisabledBoolean">
    <div id="__BVID__modal-container">
      <!-- TODO the animation when entering doesn't work. -->
      <!-- I tried to use <Transition appear> to have the animation work, but it didn't -->
      <component
        :is="modal.value.component"
        v-for="(modal, index) in modals"
        :key="index"
        v-bind="pluckModalItem(modal.value.props)"
        v-model="modal.value.props._modelValue"
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
        @hidden="
          () => {
            remove(modal.value.props._self)
          }
        "
      />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import {BvTriggerableEvent, omit} from '../../utils'
import {useBooleanish, useModalController} from '../../composables'
import type {Booleanish} from '../../types'
import type {RendererElement} from 'vue'

const props = withDefaults(
  defineProps<{
    teleportDisabled?: Booleanish
    teleportTo?: string | Readonly<RendererElement> | null | undefined
  }>(),
  {
    teleportDisabled: false,
    teleportTo: 'body',
  }
)

const teleportDisabledBoolean = useBooleanish(() => props.teleportDisabled)

const {modals, remove, show, confirm} = useModalController()

const pluckModalItem = (payload: Readonly<(typeof modals)['value'][number]['value']['props']>) =>
  omit(payload, ['_promise', '_self', '_isConfirm', '_modelValue'])

defineExpose({
  modals,
  show,
  confirm,
})
</script>
