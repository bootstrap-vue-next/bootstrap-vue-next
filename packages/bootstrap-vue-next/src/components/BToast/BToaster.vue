<template>
  <Teleport :to="teleportTo" :disabled="teleportDisabledBoolean">
    <div id="__BVID__toaster-container">
      <div
        v-for="(value, key) in toastPositions"
        :key="key"
        :class="value"
        class="toast-container position-fixed p-3"
      >
        <BToast
          v-for="toast in toasts.filter((el) => el.pos === key)"
          :key="toast.self"
          v-model="toast.value"
          v-bind="pluckToastItem(toast)"
          @destroyed="hide(toast.self)"
        />
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import type {RendererElement} from 'vue'
import {useBooleanish, useToast} from '../../composables'
import type {Booleanish, Toast} from '../../types'
import BToast from './BToast.vue'
import {omit} from '../../utils'

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

const toastPositions = {
  'top-left': 'top-0 start-0',
  'top-center': 'top-0 start-50 translate-middle-x',
  'top-right': 'top-0 end-0',
  'middle-left': 'top-50 start-0 translate-middle-y',
  'middle-center': 'top-50 start-50 translate-middle',
  'middle-right': 'top-50 end-0 translate-middle-y',
  'bottom-left': 'bottom-0 start-0',
  'bottom-center': 'bottom-0 start-50 translate-middle-x',
  'bottom-right': 'bottom-0 end-0',
} as const

const {hide, toasts, show} = useToast()

const pluckToastItem = (payload: Toast & {self: symbol}) => omit(payload, ['value', 'self', 'pos'])

defineExpose({
  hide,
  show,
})
</script>
