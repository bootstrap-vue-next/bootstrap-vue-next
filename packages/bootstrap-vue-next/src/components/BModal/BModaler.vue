<template>
  <Teleport :to="teleportTo" :disabled="teleportDisabledBoolean">
    <div id="__BVID__modal-container">
      <!-- TODO the animation when entering doesn't work. -->
      <!-- I tried to use <Transition appear> to have the animation work, but it didn't -->
      <BModal
        v-for="modal in modals"
        :key="modal.self"
        v-model="modal._modelValue"
        teleport-disabled="true"
        v-bind="pluckModalItem(modal)"
        @hide="
          (e) => {
            // These following are confirm rules, otherwise we always resolve true
            if (modal._isConfirm === true) {
              if (e.trigger === 'ok') {
                modal._promise.resolve(true)
                return
              }
              if (e.trigger === 'cancel') {
                modal._promise.resolve(false)
                return
              }
              modal._promise.resolve(null)
            }
            modal._promise.resolve(true)
          }
        "
        @hidden="
          () => {
            const ind = modals.findIndex((el) => el.self === modal.self)
            if (ind === -1) return
            modals.splice(ind, 1)
          }
        "
      />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import {omit} from '../../utils'
import {useBooleanish, useModalController} from '../../composables'
import type {Booleanish} from '../../types'
import type {RendererElement} from 'vue'
import BModal from './BModal.vue'

const props = withDefaults(
  defineProps<{
    teleportDisabled?: Booleanish
    teleportTo?: string | RendererElement | null | undefined
    // TODO this
    // appendToast?: Booleanish
  }>(),
  {
    teleportDisabled: false,
    teleportTo: 'body',
  }
)

const teleportDisabledBoolean = useBooleanish(() => props.teleportDisabled)

const {modals, show, confirm} = useModalController()

const pluckModalItem = (payload: (typeof modals)['value'][number]) =>
  omit(payload, ['_promise', 'self', '_isConfirm', '_modelValue'])

defineExpose({
  show,
  confirm,
})
</script>
