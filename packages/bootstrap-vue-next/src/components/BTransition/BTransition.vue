<template>
  <Transition v-bind="{...baseProperties, ...transProps}" :appear="appearBoolean">
    <slot />
  </Transition>
</template>

<script setup lang="ts">
import type {BTransitionProps} from '../../types'
import {computed} from 'vue'
import {useBooleanish} from '../../composables'

const props = withDefaults(defineProps<BTransitionProps>(), {
  appear: false,
  mode: undefined,
  noFade: false,
  transProps: undefined,
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const appearBoolean = useBooleanish(() => props.appear)
const noFadeBoolean = useBooleanish(() => props.noFade)

const fadeProperties = computed(() => {
  const NO_FADE_PROPS = {
    name: '',
    enterActiveClass: '',
    enterToClass: '',
    leaveActiveClass: '',
    leaveToClass: 'showing',
    enterFromClass: 'showing',
    leaveFromClass: '',
  }
  const FADE_PROPS = {
    ...NO_FADE_PROPS,
    enterActiveClass: 'fade showing',
    leaveActiveClass: 'fade showing',
  }
  return noFadeBoolean.value ? NO_FADE_PROPS : FADE_PROPS
})

const baseProperties = computed(() => ({mode: props.mode, css: true, ...fadeProperties.value}))
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
