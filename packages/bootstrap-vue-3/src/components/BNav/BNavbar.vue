<template>
  <component :is="tag" class="navbar" :class="classes" :role="computedRole">
    <slot />
  </component>
</template>

<script setup lang="ts">
import {computed, toRef} from 'vue'
import type {Booleanish, ColorVariant} from '../../types'
import {useBooleanish} from '../../composables'

interface Props {
  fixed?: 'top' | 'bottom'
  print?: Booleanish
  sticky?: 'top' | 'bottom'
  tag?: string
  toggleable?: false | 'sm' | 'md' | 'lg' | 'xl' // Type Omit<Breakpoint, 'xxl'>
  dark?: Booleanish
  variant?: ColorVariant
}

const props = withDefaults(defineProps<Props>(), {
  print: false,
  tag: 'nav',
  dark: false,
  toggleable: false, // navbar never collapses
})

const printBoolean = useBooleanish(toRef(props, 'print'))
const darkBoolean = useBooleanish(toRef(props, 'dark'))

const computedRole = computed<undefined | 'navigation'>(() =>
  props.tag === 'nav' ? undefined : 'navigation'
)

const computedNavbarExpand = computed<undefined | string>(() =>
  typeof props.toggleable === 'string'
    ? `navbar-expand-${props.toggleable}`
    : props.toggleable === false
    ? 'navbar-expand'
    : undefined
)

const classes = computed(() => ({
  'd-print': printBoolean.value,
  [`sticky-${props.sticky}`]: props.sticky !== undefined,
  'navbar-dark': darkBoolean.value,
  [`bg-${props.variant}`]: props.variant !== undefined,
  [`fixed-${props.fixed}`]: props.fixed !== undefined,
  [`${computedNavbarExpand.value}`]: computedNavbarExpand.value !== undefined,
}))
</script>
