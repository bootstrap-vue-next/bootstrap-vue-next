<template>
  <Transition v-bind="computedAttrs">
    <slot />
  </Transition>
</template>

<script setup lang="ts">
import type {Booleanish, TransitionMode} from '../../types'
import {computed, type TransitionProps} from 'vue'
import {useBooleanish} from '../../composables'

const props = withDefaults(
  defineProps<{
    appear?: Booleanish
    mode?: TransitionMode
    noFade?: Booleanish
    transProps?: TransitionProps
  }>(),
  {
    appear: false,
    mode: undefined,
    noFade: false,
    transProps: undefined,
  }
)

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

const computedAttrs = computed(() =>
  props.transProps !== undefined
    ? {
        // Order matters here since the props.transProps would get overwritten if it came first
        // But the goal of props.transProps is to overwrite base properties
        ...baseProperties.value,
        ...props.transProps,
      }
    : appearBoolean.value
    ? {
        ...baseProperties.value,
        appear: true,
        appearActiveClass: fadeProperties.value.enterActiveClass,
        appearToClass: fadeProperties.value.enterToClass,
      }
    : baseProperties.value
)
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
