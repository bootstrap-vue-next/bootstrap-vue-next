<template>
  <component :is="computedTag" class="navbar-brand" v-bind="computedLinkProps">
    <slot />
  </component>
</template>

<script setup lang="ts">
import {isLink, pluckProps} from '../../utils'
import {computed} from 'vue'
import BLink, {type BLinkProps} from '../BLink/BLink.vue'

defineSlots<{
  default?: Record<string, never>
}>()

interface BNavbarBrandProps {
  tag?: string
}

const props = withDefaults(
  defineProps<BNavbarBrandProps & Omit<BLinkProps, 'event' | 'routerTag'>>(),
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
    // End link props
  }
)

const computedLink = computed<boolean>(() => isLink(props))
const computedTag = computed<string | typeof BLink>(() => (computedLink.value ? BLink : props.tag))

const computedLinkProps = computed(() =>
  computedLink.value
    ? pluckProps(props, {
        active: true,
        activeClass: true,
        append: true,
        disabled: true,
        href: true,
        rel: true,
        replace: true,
        routerComponentName: true,
        target: true,
        to: true,
        variant: true,
      } as Record<keyof Omit<BLinkProps, 'event' | 'routerTag'>, true>)
    : {}
)
</script>
