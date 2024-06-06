<template>
  <Teleport :to="props.teleportTo" :disabled="props.teleportDisabled">
    <div id="__BVID__toaster-container">
      <div
        v-for="(value, key) in positionClasses"
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
            :model-value="toast.value.props._modelValue"
            :trans-props="{...toast.value.props.transProps, appear: true}"
            @update:model-value="leave?.(toast.value.props._self)"
            @hide="remove?.(toast.value.props._self)"
          />
          <!-- I think it's only coincidence that hide works, It's not tied to the lifecycle of a transition -->
          <!-- I think actually removes the el before the transition ends, But it's just not noticeable as it's "fading" -->
          <!-- It _should_ be @hidden -- as hidden is when the transition has ended. But transition in transition groups isn't "okay" -->
        </TransitionGroup>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import {watch} from 'vue'
import {useDefaults, useToast} from '../../composables'
import {omit, positionClasses} from '../../utils'

import type {BToastOrchestratorProps} from '../../types'

const _props = withDefaults(defineProps<BToastOrchestratorProps>(), {
  teleportDisabled: false,
  teleportTo: 'body',
  appendToast: false,
})
const props = useDefaults(_props, 'BToastOrchestrator')

const {remove, toasts, show, _setIsAppend, leave} = useToast()

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
