<template>
  <component :is="tag" :class="classes" role="group" :aria-role="ariaRole">
    <slot />
  </component>
</template>

<script setup lang="ts">
// import type {BButtonGroupProps} from '../../types/components'
import {computed} from 'vue'

interface BButtonGroupProps {
  ariaRole?: string
  size?: string
  tag?: string
  vertical?: boolean
}

const props = withDefaults(defineProps<BButtonGroupProps>(), {
  ariaRole: 'group',
  tag: 'div',
  vertical: false,
})

const classes = computed(() => ({
  'btn-group': !props.vertical,
  'btn-group-vertical': props.vertical,
  [`btn-group-${props.size}`]: props.size,
}))
</script>
