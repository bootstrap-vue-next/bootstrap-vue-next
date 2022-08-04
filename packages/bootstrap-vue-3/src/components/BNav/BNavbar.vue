<template>
  <component :is="tag" class="navbar" :class="classes" :role="computedRole">
    <slot />
  </component>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {Booleanish, ColorVariant} from '../../types'
import {resolveBooleanish} from '../../utils'

interface Props {
  fixed?: string
  print?: Booleanish
  sticky?: Booleanish
  tag?: string
  toggleable?: false | 'sm' | 'md' | 'lg' | 'xl' // Type Omit<Breakpoint, 'xxl'>
  type?: string
  variant?: ColorVariant
}

const props = withDefaults(defineProps<Props>(), {
  print: false,
  sticky: false,
  tag: 'nav',
  toggleable: false, // navbar never collapses
  type: 'light',
})

const printBoolean = computed(() => resolveBooleanish(props.print))
const stickyBoolean = computed(() => resolveBooleanish(props.sticky))

const computedRole = computed<undefined | 'navigation'>(() =>
  props.tag === 'nav' ? undefined : 'navigation'
)

const computedNavbarExpand = computed<undefined | string>(() =>
  props.toggleable && typeof props.toggleable === 'string'
    ? `navbar-expand-${props.toggleable}`
    : props.toggleable === false
    ? 'navbar-expand'
    : undefined
)

const classes = computed(() => ({
  'd-print': printBoolean.value,
  'sticky-top': stickyBoolean.value,
  [`navbar-${props.type}`]: props.type,
  [`bg-${props.variant}`]: props.variant,
  [`fixed-${props.fixed}`]: props.fixed,
  'navbar-expand': props.toggleable === false, // for navbars that never collapse
  [computedNavbarExpand.value as string]: computedNavbarExpand.value !== undefined,
}))
</script>
