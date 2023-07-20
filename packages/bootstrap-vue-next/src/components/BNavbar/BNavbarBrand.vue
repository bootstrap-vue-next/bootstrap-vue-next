<template>
  <component :is="computedTag" class="navbar-brand" v-bind="computedLinkProps">
    <slot />
  </component>
</template>

<script setup lang="ts">
import {isLink, pick} from '../../utils'
import {computed} from 'vue'
import BLink from '../BLink/BLink.vue'
import type {BLinkProps} from '../../types/BLinkProps'

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const props = withDefaults(
  defineProps<
    {
      tag?: string
    } & Omit<BLinkProps, 'event' | 'routerTag'>
  >(),
  {
    tag: 'div',
    // Link props
    active: undefined,
    activeClass: 'router-link-active',
    append: false,
    disabled: false,
    href: undefined,
    // noPrefetch: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    // prefetch: {type: [Boolean, String] as PropType<Booleanish>, default: null},
    rel: undefined,
    replace: false,
    routerComponentName: 'router-link',
    target: '_self',
    to: undefined,
    variant: undefined,
    opacity: undefined,
    opacityHover: undefined,
    underlineVariant: null,
    underlineOffset: undefined,
    underlineOffsetHover: undefined,
    underlineOpacity: undefined,
    underlineOpacityHover: undefined,
    icon: false,
    // End link props
  }
)

const computedLink = computed<boolean>(() => isLink(props))
const computedTag = computed<string | typeof BLink>(() => (computedLink.value ? BLink : props.tag))

const computedLinkProps = computed(() =>
  computedLink.value
    ? pick(props, [
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
    : {}
)
</script>
