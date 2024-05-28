<template>
  <component :is="props.tag" class="navbar" :class="computedClasses" :role="computedRole">
    <div v-if="props.container !== false" :class="containerClass">
      <slot />
    </div>
    <slot v-else />
  </component>
</template>

<script setup lang="ts">
import {computed, provide, toRef} from 'vue'
import type {BNavbarProps} from '../../types'
import {useContainerClasses, useDefaults} from '../../composables'
import {navbarInjectionKey} from '../../utils'

const _props = withDefaults(defineProps<BNavbarProps>(), {
  autoClose: true,
  container: 'fluid',
  fixed: undefined,
  print: false,
  sticky: undefined,
  tag: 'nav',
  toggleable: false,
  variant: null,
})
const props = useDefaults(_props, 'BNavbar')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const computedRole = toRef(() => (props.tag === 'nav' ? undefined : 'navigation'))

const containerClass = useContainerClasses(() => props.container)

const computedClasses = computed(() => ({
  'd-print': props.print,
  [`sticky-${props.sticky}`]: props.sticky !== undefined,
  [`bg-${props.variant}`]: props.variant !== null,
  [`fixed-${props.fixed}`]: props.fixed !== undefined,
  'navbar-expand': props.toggleable === false,
  [`navbar-expand-${props.toggleable}`]: typeof props.toggleable === 'string',
}))

provide(navbarInjectionKey, {
  tag: toRef(() => props.tag),
  autoClose: toRef(() => props.autoClose),
})
</script>
