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
import {useBooleanish, useContainerClasses} from '../../composables'
import {navbarInjectionKey} from '../../utils'

const props = withDefaults(
  defineProps<{
    autoClose?: Booleanish
    container?: 'fluid' | Booleanish | Breakpoint
    fixed?: 'top' | 'bottom'
    print?: Booleanish
    sticky?: 'top' | 'bottom'
    tag?: string
    toggleable?: Booleanish | Breakpoint
    variant?: ColorVariant | null
  }>(),
  {
    autoClose: true,
    container: 'fluid',
    fixed: undefined,
    print: false,
    sticky: undefined,
    tag: 'nav',
    toggleable: false,
    variant: null,
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const containerBoolean = useBooleanish(() => props.container)
const autoCloseBoolean = useBooleanish(() => props.autoClose)
const printBoolean = useBooleanish(() => props.print)
const computedNavbarExpand = useBooleanish(() => props.toggleable)

const computedRole = toRef(() => (props.tag === 'nav' ? undefined : 'navigation'))

const containerClass = useContainerClasses(containerBoolean)

const computedClasses = computed(() => ({
  'd-print': printBoolean.value,
  [`sticky-${props.sticky}`]: props.sticky !== undefined,
  [`bg-${props.variant}`]: props.variant !== null,
  [`fixed-${props.fixed}`]: props.fixed !== undefined,
  'navbar-expand': computedNavbarExpand.value === false,
  [`navbar-expand-${computedNavbarExpand.value}`]: typeof computedNavbarExpand.value === 'string',
}))

provide(navbarInjectionKey, {
  tag: toRef(() => props.tag),
  autoClose: autoCloseBoolean,
})
</script>
