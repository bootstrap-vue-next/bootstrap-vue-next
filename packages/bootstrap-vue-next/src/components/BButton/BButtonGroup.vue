<template>
  <component :is="tag" :class="computedClasses" role="group" :aria-label="ariaLabel">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type {Booleanish, Size} from '../../types'
import {computed, toRef} from 'vue'
import {useBooleanish} from '../../composables'

interface BButtonGroupProps {
  ariaLabel?: string
  size?: Size
  tag?: string
  vertical?: Booleanish
}

const props = withDefaults(defineProps<BButtonGroupProps>(), {
  ariaLabel: 'Group',
  tag: 'div',
  vertical: false,
  size: 'md',
})

const verticalBoolean = useBooleanish(toRef(props, 'vertical'))

const computedClasses = computed(() => ({
  'btn-group': !verticalBoolean.value,
  [`btn-group-${props.size}`]: props.size !== 'md',
  'btn-group-vertical': verticalBoolean.value,
}))
</script>
