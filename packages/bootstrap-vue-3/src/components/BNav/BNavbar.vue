<template>
  <component :is="tag" class="navbar" :class="classes" :role="computedRole">
    <slot />
  </component>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {ColorVariant, NavbarBreakpoint} from '../../types'

interface Props {
  variant?: ColorVariant
  toggleable?: NavbarBreakpoint
  tag?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'light',
  toggleable: false, // navbar never collapses
  tag: 'nav',
})

const computedRole = computed<undefined | 'navigation'>(() =>
  props.tag === 'nav' ? undefined : 'navigation'
)

const classes = computed(() => ({
  'navbar-light': props.variant === 'light',
  'navbar-dark': props.variant !== 'light',
  'navbar-expand': props.toggleable === false, // for navbars that never collapse
  [`bg-${props.variant}`]: props.variant,
  [`navbar-expand-${props.toggleable}`]: typeof props.toggleable === 'string',
}))
</script>
