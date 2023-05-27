<template>
  <div :class="computedClasses" class="btn-toolbar" :role="role" :aria-label="ariaLabel">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type {Booleanish} from '../../types'
import {computed} from 'vue'
import {useBooleanish} from '../../composables'

interface BButtonToolbarProps {
  ariaLabel?: string
  justify?: Booleanish
  role?: string
  // keyNav?: Booleanish
}

const props = withDefaults(defineProps<BButtonToolbarProps>(), {
  role: 'toolbar',
  ariaLabel: 'Group',
  justify: false,
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const justifyBoolean = useBooleanish(() => props.justify)

const computedClasses = computed(() => ({
  'justify-content-between': justifyBoolean.value,
}))
</script>
