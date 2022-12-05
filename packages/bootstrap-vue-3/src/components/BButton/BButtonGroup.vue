<template>
  <component :is="tag" :class="computedClasses" role="group" :aria-label="ariaLabel">
    <slot />
  </component>
</template>

<script setup lang="ts">
// import type {BButtonGroupProps} from '../../types/components'
import type {Booleanish} from '../../types'
import {computed, toRef} from 'vue'
import {useBooleanish} from '../../composables'

interface BButtonGroupProps {
  ariaLabel?: string
  size?: 'sm' | 'lg' // Exclude<InputSize, 'md'>
  tag?: string
  vertical?: Booleanish
}

const props = withDefaults(defineProps<BButtonGroupProps>(), {
  ariaLabel: 'Group',
  tag: 'div',
  vertical: false,
})

const verticalBoolean = useBooleanish(toRef(props, 'vertical'))

const computedClasses = computed(() => ({
  'btn-group': !verticalBoolean.value,
  [`btn-group-${props.size}`]: props.size !== undefined,
  'btn-group-vertical': verticalBoolean.value,
}))
</script>
