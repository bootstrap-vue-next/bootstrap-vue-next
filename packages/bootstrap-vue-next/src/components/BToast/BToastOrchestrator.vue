<template>
  <BTeleport :to="props.teleportTo" :disabled="props.teleportDisabled">
    <div id="__BVID__toaster-container" v-bind="$attrs">
      <div
        v-for="(value, key) in positionClasses"
        :key="key"
        :class="value"
        class="toast-container position-fixed p-3"
      >
        <TransitionGroup name="b-list">
          <component
            :is="toast.component ?? BToast"
            v-for="toast in tools.toasts?.value.filter((el) => el.props.pos === key)"
            :key="toast.props._self"
            v-bind="toast.props"
            :model-value="toast.props._modelValue"
            :trans-props="{...toast.props.transProps, appear: true}"
            @update:model-value="tools.leave?.(toast.props._self)"
            @hide="tools.remove?.(toast.props._self)"
          />
          <!-- I think it's only coincidence that hide works, It's not tied to the lifecycle of a transition -->
          <!-- I think actually removes the el before the transition ends, But it's just not noticeable as it's "fading" -->
          <!-- It _should_ be @hidden -- as hidden is when the transition has ended. But transition in transition groups isn't "okay" -->
        </TransitionGroup>
      </div>
    </div>
  </BTeleport>
</template>

<script setup lang="ts">
import {watch} from 'vue'
import {useDefaults} from '../../composables/useDefaults'
import {positionClasses} from '../../utils/positionClasses'
import type {BToastOrchestratorProps} from '../../types/ComponentProps'
import BToast from './BToast.vue'
import BTeleport from '../BTeleport.vue'
import {useToast} from '../../composables/useToast'

defineOptions({
  inheritAttrs: false,
})

const _props = withDefaults(defineProps<BToastOrchestratorProps>(), {
  teleportDisabled: false,
  teleportTo: 'body',
  appendToast: false,
})
const props = useDefaults(_props, 'BToastOrchestrator')

const tools = useToast()

watch(
  () => props.appendToast,
  (value) => {
    tools._setIsAppend?.(value)
  },
  {immediate: true}
)

defineExpose({
  ...tools,
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
