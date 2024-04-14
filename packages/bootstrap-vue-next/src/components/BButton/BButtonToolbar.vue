<template>
  <div :class="computedClasses" class="btn-toolbar" :role="role" :aria-label="ariaLabel">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type {BButtonToolbarProps} from '../../types'
import {computed} from 'vue'

const props = withDefaults(defineProps<BButtonToolbarProps>(), {
  ariaLabel: 'Group',
  justify: false,
  role: 'toolbar',
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const computedClasses = computed(() => ({
  'justify-content-between': props.justify,
}))
</script>
