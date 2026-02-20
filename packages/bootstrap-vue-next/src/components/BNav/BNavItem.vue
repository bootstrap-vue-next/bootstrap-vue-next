<template>
  <li class="nav-item">
    <BLink
      class="nav-link"
      :class="linkClass"
      :tabindex="props.disabled ? -1 : undefined"
      :aria-disabled="props.disabled ? true : undefined"
      v-bind="{...computedLinkProps, ...linkAttrs}"
      @click="emit('click', $event)"
    >
      <slot />
    </BLink>
    <slot name="after" />
  </li>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import BLink from '../BLink/BLink.vue'
import type {BNavItemProps} from '../../types/ComponentProps'
import {pick} from '../../utils/object'
import {useDefaults} from '../../composables/useDefaults'
import type {BNavItemEmits, BNavItemSlots} from '../../types'

const _props = withDefaults(defineProps<BNavItemProps>(), {
  // Link props
  active: undefined,
  activeClass: undefined,
  disabled: undefined,
  exactActiveClass: 'router-link-exact-active active',
  href: undefined,
  icon: undefined,
  linkAttrs: undefined,
  linkClass: undefined,
  noPrefetch: undefined,
  noRel: undefined,
  opacity: undefined,
  opacityHover: undefined,
  prefetch: undefined,
  prefetchedClass: undefined,
  prefetchOn: undefined,
  rel: undefined,
  replace: undefined,
  routerComponentName: undefined,
  stretched: false,
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
const props = useDefaults(_props, 'BNavItem')
const emit = defineEmits<BNavItemEmits>()
defineSlots<BNavItemSlots>()

const computedLinkProps = computed(() =>
  pick(props, [
    'active',
    'activeClass',
    'exactActiveClass',
    'disabled',
    'href',
    'icon',
    'noPrefetch',
    'noRel',
    'opacity',
    'opacityHover',
    'prefetch',
    'prefetchedClass',
    'prefetchOn',
    'rel',
    'replace',
    'routerComponentName',
    'stretched',
    'target',
    'to',
    'underlineOffset',
    'underlineOffsetHover',
    'underlineOpacity',
    'underlineOpacityHover',
    'underlineVariant',
    'variant',
    'noPrefetch',
    'prefetch',
    'prefetchOn',
    'prefetchedClass',
  ])
)
</script>
