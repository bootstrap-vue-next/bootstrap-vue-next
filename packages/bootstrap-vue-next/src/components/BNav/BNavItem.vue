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
  </li>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import BLink from '../BLink/BLink.vue'
import type {BNavItemProps} from '../../types'
import {pick} from '../../utils'
import {useDefaults} from '../../composables'

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const _props = withDefaults(defineProps<BNavItemProps>(), {
  // Link props
  active: undefined,
  activeClass: undefined,
  disabled: undefined,
  exactActiveClass: undefined,
  href: undefined,
  icon: undefined,
  linkAttrs: undefined,
  linkClass: undefined,
  opacity: undefined,
  stretched: false,
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
const props = useDefaults(_props, 'BNavItem')

const emit = defineEmits<{
  click: [value: MouseEvent]
}>()

const computedLinkProps = computed(() =>
  pick(props, [
    'active',
    'activeClass',
    'append',
    'disabled',
    'href',
    'icon',
    'opacity',
    'opacityHover',
    'rel',
    'replace',
    'routerComponentName',
    'target',
    'to',
    'underlineOffset',
    'underlineOffsetHover',
    'underlineOpacity',
    'underlineOpacityHover',
    'underlineVariant',
    'variant',
  ])
)
computedLinkProps.value.activeClass
</script>
