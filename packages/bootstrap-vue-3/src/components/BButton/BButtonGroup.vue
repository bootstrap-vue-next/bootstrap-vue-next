<template>
  <component :is="tag" :class="classes" role="group" :aria-label="ariaLabel">
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
  size?: string
  tag?: string
  vertical?: Booleanish
}

const props = withDefaults(defineProps<BButtonGroupProps>(), {
  ariaLabel: 'Group',
  tag: 'div',
  vertical: false,
})

const verticalBoolean = useBooleanish(toRef(props, 'vertical'))

const classes = computed(() => ({
  'btn-group': !verticalBoolean.value,
  'btn-group-vertical': verticalBoolean.value,
  [`btn-group-${props.size}`]: props.size,
}))
</script>
