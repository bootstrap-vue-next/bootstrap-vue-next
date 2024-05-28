<template>
  <Transition
    v-bind="{...baseProperties, ...props.transProps}"
    :appear="props.appear"
    @after-appear="emit('after-appear', $event)"
    @after-enter="emit('after-enter', $event)"
    @after-leave="emit('after-leave', $event)"
    @appear="emit('appear', $event)"
    @before-appear="emit('before-appear', $event)"
    @before-enter="emit('before-enter', $event)"
    @before-leave="emit('before-leave', $event)"
    @enter="emit('enter', $event)"
    @appear-cancelled="emit('appear-cancelled', $event)"
    @enter-cancelled="emit('enter-cancelled', $event)"
    @leave="emit('leave', $event)"
    @leave-cancelled="emit('leave-cancelled', $event)"
  >
    <slot />
  </Transition>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables'
import type {BTransitionProps} from '../../types'
import {computed} from 'vue'

const _props = withDefaults(defineProps<BTransitionProps>(), {
  appear: false,
  mode: undefined,
  noFade: false,
  transProps: undefined,
})
const props = useDefaults(_props, 'BTransition')

const emit = defineEmits<{
  'after-appear': [value: Element]
  'after-enter': [value: Element]
  'after-leave': [value: Element]
  'appear': [value: Element]
  'before-appear': [value: Element]
  'before-enter': [value: Element]
  'before-leave': [value: Element]
  'enter': [value: Element]
  'appear-cancelled': [value: Element]
  'enter-cancelled': [value: Element]
  'leave': [value: Element]
  'leave-cancelled': [value: Element]
}>()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

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
  return props.noFade ? NO_FADE_PROPS : FADE_PROPS
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
