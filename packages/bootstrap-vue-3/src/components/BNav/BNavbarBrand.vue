<template>
  <component :is="computedTag" v-bind="attrs">
    <slot />
  </component>
</template>

<script setup lang="ts">
// TODO refactor this to use old setup containing BLINKPROPS and pluckprops utility
import type {LinkTarget} from '../../types'
import {computed} from 'vue'
import type {RouteLocationRaw} from 'vue-router'
// TODO this components is not done
interface Props {
  active?: boolean
  activeClass?: string
  append?: boolean
  disabled?: boolean
  exact?: boolean
  exactActiveClass?: string
  exactPath?: boolean
  exactPathActiveClass?: string
  href?: string
  noPrefetch?: boolean
  prefetch?: boolean
  rel?: string
  replace?: boolean
  routerComponentName?: string
  tag?: string
  target?: LinkTarget
  to?: RouteLocationRaw
}

const props = withDefaults(defineProps<Props>(), {
  active: false,
  append: false,
  disabled: false,
  exact: false,
  exactPath: false,
  noPrefetch: false,
  replace: false,
  target: '_self',
  tag: 'div',
})

const computedTag = computed<string>(() => (props.to ? 'b-link' : props.href ? 'a' : props.tag))

const attrs = computed(() => ({target: props.target, href: props.href, to: props.to}))
</script>
