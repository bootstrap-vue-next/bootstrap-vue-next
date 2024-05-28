<template>
  <div
    :class="computedClasses"
    class="btn-toolbar"
    :role="props.role"
    :aria-label="props.ariaLabel"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables'
import type {BButtonToolbarProps} from '../../types'
import {computed} from 'vue'

const _props = withDefaults(defineProps<BButtonToolbarProps>(), {
  ariaLabel: 'Group',
  justify: false,
  role: 'toolbar',
})
const props = useDefaults(_props, 'BButtonToolbar')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const computedClasses = computed(() => ({
  'justify-content-between': props.justify,
}))
</script>
