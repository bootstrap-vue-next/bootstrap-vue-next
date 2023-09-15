<template>
  <component :is="tag" class="navbar" :class="computedClasses" :role="computedRole">
    <div v-if="container !== false" :class="containerClass">
      <slot />
    </div>
    <slot v-else />
  </component>
</template>

<script setup lang="ts">
import {computed, provide, toRef} from 'vue'
import type {Booleanish, Breakpoint, ColorVariant} from '../../types'
import {useBooleanish} from '../../composables'
import {navbarInjectionKey} from '../../utils'

const props = withDefaults(
  defineProps<{
    fixed?: 'top' | 'bottom'
    print?: Booleanish
    sticky?: 'top' | 'bottom'
    tag?: string
    toggleable?: boolean | Breakpoint
    variant?: ColorVariant | null
    container?: 'fluid' | boolean
    autoClose?: boolean
  }>(),
  {
    variant: null,
    sticky: undefined,
    fixed: undefined,
    print: false,
    tag: 'nav',
    toggleable: false,
    container: 'fluid',
    autoClose: true,
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const printBoolean = useBooleanish(() => props.print)

const computedRole = computed(() => (props.tag === 'nav' ? undefined : 'navigation'))

const computedNavbarExpand = computed(() =>
  typeof props.toggleable === 'string'
    ? `navbar-expand-${props.toggleable}`
    : props.toggleable === false
    ? 'navbar-expand'
    : undefined
)

const containerClass = computed(() => (props.container === true ? 'container' : `container-fluid`))

const computedClasses = computed(() => ({
  'd-print': printBoolean.value,
  [`sticky-${props.sticky}`]: props.sticky !== undefined,
  [`bg-${props.variant}`]: props.variant !== null,
  [`fixed-${props.fixed}`]: props.fixed !== undefined,
  [`${computedNavbarExpand.value}`]: computedNavbarExpand.value !== undefined,
}))

provide(navbarInjectionKey, {
  tag: toRef(() => props.tag),
  autoClose: toRef(() => props.autoClose),
})
</script>
