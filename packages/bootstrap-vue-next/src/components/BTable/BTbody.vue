<template>
  <tbody v-if="!hasTransition" :class="computedClasses">
    <slot />
  </tbody>
  <TransitionGroup
    v-else
    tag="tbody"
    :class="computedClasses"
    v-bind="props.tbodyTransitionProps"
    v-on="props.tbodyTransitionHandlers || {}"
  >
    <slot />
  </TransitionGroup>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {computed, TransitionGroup} from 'vue'
import type {BTbodySlots} from '../../types'
import {useDefaults} from '../../composables/useDefaults'
import type {BTbodyProps} from '../../types/ComponentProps'

const _props = withDefaults(defineProps<BTbodyProps>(), {
  variant: null,
  tbodyTransitionHandlers: undefined,
  tbodyTransitionProps: undefined,
})
const props = useDefaults(_props, 'BTbody')
defineSlots<BTbodySlots>()

const computedClasses = computed(() => ({
  [`thead-${props.variant}`]: props.variant !== null,
}))

const hasTransition = computed(
  () => props.tbodyTransitionProps !== undefined || props.tbodyTransitionHandlers !== undefined
)
</script>
