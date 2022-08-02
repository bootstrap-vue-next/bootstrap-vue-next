<template>
  <component :is="tag" class="nav" :class="classes">
    <slot />
  </component>
</template>

<script setup lang="ts">
// import type {BNavProps} from '../types/components'
import {computed} from 'vue'

interface BNavProps {
  align?: string
  cardHeader?: boolean
  fill?: boolean
  justified?: boolean
  pills?: boolean
  small?: boolean
  tabs?: boolean
  tag?: string
  vertical?: boolean
}

const props = withDefaults(defineProps<BNavProps>(), {
  cardHeader: false,
  fill: false,
  justified: false,
  pills: false,
  small: false,
  tabs: false,
  tag: 'ul',
  vertical: false,
})

const classes = computed(() => ({
  'nav-tabs': props.tabs,
  'nav-pills': props.pills && !props.tabs,
  'card-header-tabs': !props.vertical && props.cardHeader && props.tabs,
  'card-header-pills': !props.vertical && props.cardHeader && !props.tabs,
  'flex-column': props.vertical,
  'nav-fill': props.fill,
  'nav-justified': props.justified,
  [`justify-content-${props.align}`]: props.align,
  'small': props.small,
}))
</script>
