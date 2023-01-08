<template>
  <div :class="computedClasses" class="btn-toolbar" :role="role" :aria-label="ariaLabel">
    <slot />
  </div>
</template>

<script setup lang="ts">
// import type {BButtonToolbarProps} from '../../types/components'
import type {Booleanish} from '../../types'
import {computed, toRef} from 'vue'
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

const justifyBoolean = useBooleanish(toRef(props, 'justify'))

const computedClasses = computed(() => ({
  'justify-content-between': justifyBoolean.value,
}))
</script>
