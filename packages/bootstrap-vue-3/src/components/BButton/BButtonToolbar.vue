<template>
  <div :class="classes" class="btn-toolbar" role="toolbar" :aria-label="ariaRole">
    <slot />
  </div>
</template>

<script setup lang="ts">
// import type {BButtonToolbarProps} from '../../types/components'
import {computed} from 'vue'

interface BButtonToolbarProps {
  ariaRole?: string
  justify?: boolean
  // keyNav?: boolean
}

const props = withDefaults(defineProps<BButtonToolbarProps>(), {
  ariaRole: 'group',
  justify: false,
})

const classes = computed(() => ({
  'justify-content-between': props.justify,
}))
</script>
