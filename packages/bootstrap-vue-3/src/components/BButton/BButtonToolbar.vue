<template>
  <div :class="classes" class="btn-toolbar" role="toolbar" :aria-label="ariaLabel">
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
  // keyNav?: Booleanish
}

const props = withDefaults(defineProps<BButtonToolbarProps>(), {
  ariaLabel: 'Group',
  justify: false,
})

const justifyBoolean = useBooleanish(toRef(props, 'justify'))

const classes = computed(() => ({
  'justify-content-between': justifyBoolean.value,
}))
</script>
