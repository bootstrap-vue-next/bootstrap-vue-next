<template>
  <Teleport :to="teleportTo" :disabled="teleportDisabledBoolean">
    <div id="__BVID__modal-container">
      <!-- TODO the animation when entering doesn't work. -->
      <!-- I tried to use <Transition appear> to have the animation work, but it didn't -->
      <BModal
        v-for="modal in modals"
        :key="modal.value._self"
        v-model="modal.value._modelValue"
        teleport-disabled="true"
        v-bind="pluckModalItem(modal.value)"
        @hide="
          (e) => {
            // These following are confirm rules, otherwise we always resolve true
            if (modal.value._isConfirm === true) {
              if (e.trigger === 'ok') {
                modal.value._promise.resolve(true)
                return
              }
              if (e.trigger === 'cancel') {
                modal.value._promise.resolve(false)
                return
              }
              modal.value._promise.resolve(null)
            }
            modal.value._promise.resolve(true)
          }
        "
        @hidden="
          () => {
            const ind = modals.findIndex((el) => el.value._self === modal.value._self)
            if (ind === -1) return
            modals.splice(ind, 1)
          }
        "
      >
        <!-- <template v-for="(_, name) in modal" #[name]="slotData">
          <slot :name="name" v-bind="slotData" />
        </template> -->
      </BModal>
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
    teleportTo?: string | Readonly<RendererElement> | null | undefined
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

const pluckModalItem = (payload: Readonly<(typeof modals)['value'][number]['value']>) =>
  omit(payload, ['_promise', '_self', '_isConfirm', '_modelValue'])

defineExpose({
  show,
  confirm,
})
</script>
