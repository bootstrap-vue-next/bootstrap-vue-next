<template>
  <Transition v-bind="computedAttrs">
    <slot />
  </Transition>
</template>

<script setup lang="ts">
import type {Booleanish, TransitionMode} from '../../types'
import {computed, toRef, TransitionProps} from 'vue'
import {useBooleanish} from '../../composables'

interface Props {
  appear?: Booleanish
  mode?: TransitionMode
  noFade?: Booleanish
  transProps?: TransitionProps
}

const props = withDefaults(defineProps<Props>(), {
  appear: false,
  noFade: false,
})

const appearBoolean = useBooleanish(toRef(props, 'appear'))
const noFadeBoolean = useBooleanish(toRef(props, 'noFade'))

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
