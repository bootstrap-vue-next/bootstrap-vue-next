<template>
  <component :is="tag" class="sidebar-footer" :class="computedClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {BSidebarFooterProps} from '../../types'
import {useColorVariantClasses} from '../../composables'
const props = withDefaults(defineProps<BSidebarFooterProps>(), {
  tag: undefined,
  class: undefined,
  // ColorExtendables props
  bgVariant: undefined,
  textVariant: undefined,
  variant: undefined,
  // End ColorExtendables props
})

const resolvedBackgroundClasses = useColorVariantClasses(props)
const computedClasses = computed(() => [resolvedBackgroundClasses.value, props.class])

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()
</script>
