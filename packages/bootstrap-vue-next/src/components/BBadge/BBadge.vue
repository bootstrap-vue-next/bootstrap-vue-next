<template>
  <component :is="computedTag" class="badge" :class="computedClasses" v-bind="computedLinkProps">
    <slot />
  </component>
</template>

<script setup lang="ts">
import {useBLinkHelper, useBooleanish} from '../../composables'
import {computed} from 'vue'
import type {BLinkProps, Booleanish} from '../../types'
import BLink from '../BLink/BLink.vue'

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const props = withDefaults(
  defineProps<
    {
      pill?: Booleanish
      tag?: string
      textIndicator?: Booleanish
      dotIndicator?: Booleanish
    } & Omit<BLinkProps, 'event' | 'routerTag'>
  >(),
  {
    pill: false,
    tag: 'span',
    textIndicator: false,
    dotIndicator: false,
    // Link props
    variant: 'secondary',
    active: undefined,
    activeClass: undefined,
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

const pillBoolean = useBooleanish(() => props.pill)
const textIndicatorBoolean = useBooleanish(() => props.textIndicator)
const dotIndicatorBoolean = useBooleanish(() => props.dotIndicator)
const activeBoolean = useBooleanish(() => props.active)
const disabledBoolean = useBooleanish(() => props.disabled)

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

const computedTag = computed(() => (computedLink.value ? BLink : props.tag))

const computedClasses = computed(() => ({
  [`text-bg-${props.variant}`]: props.variant !== null,
  'active': activeBoolean.value,
  'disabled': disabledBoolean.value,
  'rounded-pill': pillBoolean.value,
  'position-absolute top-0 start-100 translate-middle':
    textIndicatorBoolean.value || dotIndicatorBoolean.value,
  'p-2 border border-light rounded-circle': dotIndicatorBoolean.value,
  'text-decoration-none': computedLink.value,
}))
</script>
