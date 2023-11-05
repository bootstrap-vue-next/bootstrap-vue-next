<template>
  <component :is="computedTag" class="badge" :class="computedClasses" v-bind="computedLinkProps">
    <slot />
  </component>
</template>

<script setup lang="ts">
import {useBLinkHelper, useBooleanish, useColorVariantClasses} from '../../composables'
import {computed, toRef} from 'vue'
import type {BLinkProps, Booleanish, ColorExtendables} from '../../types'
import BLink from '../BLink/BLink.vue'

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const props = withDefaults(
  defineProps<
    {
      dotIndicator?: Booleanish
      pill?: Booleanish
      tag?: string
      textIndicator?: Booleanish
    } & Omit<BLinkProps, 'event' | 'routerTag'> &
      ColorExtendables
  >(),
  {
    dotIndicator: false,
    pill: false,
    tag: 'span',
    textIndicator: false,
    // Link props
    variant: 'secondary',
    // All others use defaults
    active: undefined,
    activeClass: undefined,
    append: undefined,
    disabled: undefined,
    exactActiveClass: undefined,
    href: undefined,
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
    // End link props
    // ColorExtendables props
    // Variant is here as well
    textVariant: null,
    bgVariant: null,
    // End ColorExtendables props
  }
)

const pillBoolean = useBooleanish(() => props.pill)
const textIndicatorBoolean = useBooleanish(() => props.textIndicator)
const dotIndicatorBoolean = useBooleanish(() => props.dotIndicator)
const activeBoolean = useBooleanish(() => props.active)
const disabledBoolean = useBooleanish(() => props.disabled)
const resolvedBackgroundClasses = useColorVariantClasses(props)

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

const computedClasses = computed(() => [
  resolvedBackgroundClasses.value,
  {
    'active': activeBoolean.value,
    'disabled': disabledBoolean.value,
    'rounded-pill': pillBoolean.value,
    'position-absolute top-0 start-100 translate-middle':
      textIndicatorBoolean.value || dotIndicatorBoolean.value,
    'p-2 border border-light rounded-circle': dotIndicatorBoolean.value,
    'text-decoration-none': computedLink.value,
  },
])
</script>
