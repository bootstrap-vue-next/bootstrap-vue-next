<template>
  <component :is="tag" class="navbar" :class="computedClasses" :role="computedRole">
    <div v-if="container !== false" :class="containerClass">
      <slot />
    </div>
    <slot v-else />
  </component>
</template>

<script setup lang="ts">
import {computed, provide, readonly, toRef} from 'vue'
import type {Booleanish, Breakpoint, ColorVariant} from '../../types'
import {useBooleanish} from '../../composables'
import {navbarInjectionKey} from '../../utils'

interface Props {
  fixed?: 'top' | 'bottom'
  print?: Booleanish
  sticky?: 'top' | 'bottom'
  tag?: string
  toggleable?: boolean | Breakpoint
  dark?: Booleanish
  variant?: ColorVariant | null
  container?: 'fluid' | boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: null,
  sticky: undefined,
  fixed: undefined,
  print: false,
  tag: 'nav',
  dark: false,
  toggleable: false,
  container: 'fluid',
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const printBoolean = useBooleanish(() => props.print)
const darkBoolean = useBooleanish(() => props.dark)

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

const containerClass = computed<'container' | 'container-fluid'>(() =>
  props.container === true ? 'container' : `container-fluid`
)

const computedClasses = computed(() => ({
  'd-print': printBoolean.value,
  [`sticky-${props.sticky}`]: props.sticky !== undefined,
  'navbar-dark': darkBoolean.value,
  [`bg-${props.variant}`]: props.variant !== null,
  [`fixed-${props.fixed}`]: props.fixed !== undefined,
  [`${computedNavbarExpand.value}`]: computedNavbarExpand.value !== undefined,
}))

provide(navbarInjectionKey, {
  tag: readonly(toRef(props, 'tag')),
})
</script>
