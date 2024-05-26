<template>
  <component :is="computedTag" class="navbar-brand" v-bind="computedLinkProps">
    <slot />
  </component>
</template>

<script setup lang="ts">
import {toRef} from 'vue'
import BLink from '../BLink/BLink.vue'
import type {BNavbarBrandProps} from '../../types'
import {useBLinkHelper, useDefaults} from '../../composables'

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const _props = withDefaults(defineProps<BNavbarBrandProps>(), {
  tag: 'div',
  // Link props
  active: undefined,
  activeClass: undefined,
  disabled: undefined,
  exactActiveClass: undefined,
  href: undefined,
  stretched: false,
  icon: undefined,
  opacity: undefined,
  opacityHover: undefined,
  rel: undefined,
  replace: undefined,
  routerComponentName: undefined,
  target: undefined,
  to: undefined,
  underlineOffset: undefined,
  underlineOffsetHover: undefined,
  underlineOpacity: undefined,
  underlineOpacityHover: undefined,
  underlineVariant: undefined,
  variant: undefined,
  // End link props
})
const props = useDefaults(_props, 'BNavbarBrand')

const {computedLink, computedLinkProps} = useBLinkHelper(props, [
  'active',
  'activeClass',
  'append',
  'disabled',
  'href',
  'rel',
  'replace',
  'routerComponentName',
  'target',
  'to',
  'variant',
  'opacity',
  'opacityHover',
  'underlineVariant',
  'underlineOffset',
  'underlineOffsetHover',
  'underlineOpacity',
  'underlineOpacityHover',
  'icon',
])

const computedTag = toRef(() => (computedLink.value ? BLink : props.tag))
</script>
