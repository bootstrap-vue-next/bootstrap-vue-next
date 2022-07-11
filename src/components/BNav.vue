<template>
  <ul class="nav" :class="classes">
    <slot />
  </ul>
</template>

<script setup lang="ts">
// import type {BNavProps} from '../types/components'
import {computed} from 'vue'

interface BNavProps {
  align?: string
  fill?: boolean
  justified?: boolean
  pills?: boolean
  tabs?: boolean
  vertical?: boolean
}

const props = withDefaults(defineProps<BNavProps>(), {
  fill: false,
  justified: false,
  pills: false,
  tabs: false,
  vertical: false,
})

const classes = computed(() => ({
  'flex-column': props.vertical,
  [`justify-content-${props.align}`]: props.align,
  'nav-tabs': props.tabs,
  'nav-pills': props.pills,
  'nav-fill': props.fill,
  'nav-justified': props.justified,
}))
</script>
