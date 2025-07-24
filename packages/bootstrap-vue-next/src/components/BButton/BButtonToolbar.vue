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
import type {BButtonToolbarSlots} from '../../types'
import {useDefaults} from '../../composables/useDefaults'
import type {BButtonToolbarProps} from '../../types/ComponentProps'
import {computed} from 'vue'

const _props = withDefaults(defineProps<BButtonToolbarProps>(), {
  ariaLabel: 'Group',
  justify: false,
  role: 'toolbar',
})
const props = useDefaults(_props, 'BButtonToolbar')
defineSlots<BButtonToolbarSlots>()

const computedClasses = computed(() => ({
  'justify-content-between': props.justify,
}))
</script>
