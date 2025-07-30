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
import type {BNavbarProps} from '../../types/ComponentProps'
import {useDefaults} from '../../composables/useDefaults'
import {useContainerClasses} from '../../composables/useContainerClasses'
import {navInjectionKey} from '../../utils/keys'
import {useColorVariantClasses} from '../../composables/useColorVariantClasses'

const _props = withDefaults(defineProps<BNavbarProps>(), {
  autoCloseDropdowns: true,
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

const computedRole = computed(() => (props.tag === 'nav' ? undefined : 'navigation'))

const containerClass = useContainerClasses(() => props.container)

const colorClasses = useColorVariantClasses(
  computed(() => ({
    bgVariant: props.variant,
  }))
)
const computedClasses = computed(() => [
  colorClasses.value,
  {
    'd-print': props.print,
    [`sticky-${props.sticky}`]: props.sticky !== undefined,
    [`fixed-${props.fixed}`]: props.fixed !== undefined,
    'navbar-expand': props.toggleable === false,
    [`navbar-expand-${props.toggleable}`]: typeof props.toggleable === 'string',
  },
])

provide(navInjectionKey, {
  autoClose: toRef(() => props.autoCloseDropdowns),
})
</script>
