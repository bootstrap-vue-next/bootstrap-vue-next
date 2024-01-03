<template>
  <Teleport :to="teleportTo" :disabled="teleportDisabledBoolean">
    <div id="__BVID__toaster-container">
      <TransitionGroup name="list" tag="ul">
        <div
          v-for="(value, key) in toastPositions"
          :key="key"
          :class="value"
          class="toast-container position-fixed p-3"
        >
          <component
            :is="toast.value.component"
            v-for="toast in toasts.filter((el) => el.value.props.pos === key)"
            :key="toast.value.props._self"
            v-model="toast.value.props.value"
            :transition-props="{appear: true}"
            :append="appendToast"
            v-bind="pluckToastItem(toast.value.props)"
            @destroyed="remove(toast.value.props._self)"
          />
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import type {RendererElement} from 'vue'
import {useBooleanish, useToast} from '../../composables'
import type {Booleanish} from '../../types'
import {omit} from '../../utils'

const props = withDefaults(
  defineProps<{
    teleportDisabled?: Booleanish
    teleportTo: string | Readonly<RendererElement> | null | undefined
    appendToast?: Booleanish
  }>(),
  {
    teleportDisabled: false,
    teleportTo: 'body',
    appendToast: true,
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

const {remove, toasts, show} = useToast()

const pluckToastItem = (payload: Readonly<(typeof toasts)['value'][number]['value']['props']>) =>
  omit(payload, ['value', '_self', 'pos'])

defineExpose({
  remove,
  show,
  toasts,
})
</script>

<style lang="scss" scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
