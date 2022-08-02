<template>
  <component :is="tag" class="navbar" :class="classes" :role="computedRole">
    <slot />
  </component>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {ColorVariant} from '../../types'

interface Props {
  fixed?: string
  print?: boolean
  sticky?: boolean
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
  'd-print': props.print,
  'sticky-top': props.sticky,
  [`navbar-${props.type}`]: props.type,
  [`bg-${props.variant}`]: props.variant,
  [`fixed-${props.fixed}`]: props.fixed,
  'navbar-expand': props.toggleable === false, // for navbars that never collapse
  [computedNavbarExpand.value as string]: computedNavbarExpand.value !== undefined,
}))
</script>
