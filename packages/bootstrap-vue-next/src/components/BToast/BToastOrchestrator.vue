<template>
  <Teleport :to="teleportTo" :disabled="props.teleportDisabled">
    <!-- This wrapper div is used for specific targetting by the user -->
    <!-- Even though it serves no direct purpose itself -->
    <div id="__BVID__toaster-container">
      <div
        v-for="(value, key) in toastPositions"
        :key="key"
        :class="value"
        class="toast-container position-fixed p-3"
      >
        <TransitionGroup name="b-list">
          <component
            :is="toast.value.component"
            v-for="toast in toasts?.filter((el) => el.value.props.pos === key)"
            :key="toast.value.props._self"
            v-bind="pluckToastItem(toast.value.props)"
            v-model="toast.value.props._modelValue"
            :trans-props="{...toast.value.props.transProps, appear: true}"
            @hide.prevent="remove?.(toast.value.props._self)"
          />
        </TransitionGroup>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import {watch} from 'vue'
import {useToast} from '../../composables'
import {omit} from '../../utils'
import type {BToastOrchestratorProps} from '../../types'

const props = withDefaults(defineProps<BToastOrchestratorProps>(), {
  teleportDisabled: false,
  teleportTo: 'body',
  appendToast: false,
})

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

const {remove, toasts, show, _setIsAppend} = useToast()

watch(
  () => props.appendToast,
  (value) => {
    _setIsAppend?.(value)
  },
  {immediate: true}
)

const pluckToastItem = (
  payload: Readonly<Exclude<typeof toasts, undefined>['value'][number]['value']['props']>
) => omit(payload, ['_modelValue', '_self', 'pos'])

defineExpose({
  remove,
  show,
  toasts,
})
</script>

<style lang="scss">
/*
If you remove the last element in the list, the animation goes farther to the right then normal.
I don't know why
I kind of like it though, and even if I didn't, I don't know how to get rid of it.
Getting the transitions to work here was basically all trial and error.
I think it's because it's "moving", but I don't know where it's moving to
*/
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
