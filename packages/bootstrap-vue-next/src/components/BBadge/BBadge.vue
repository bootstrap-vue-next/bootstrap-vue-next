<template>
  <component :is="computedTag" class="badge" :class="computedClasses" v-bind="computedLinkProps">
    <RenderComponentOrSkip
      :skip="props.dotIndicator !== true"
      tag="span"
      v-bind="props.dotIndicator ? {class: 'visually-hidden'} : {}"
    >
      <slot />
    </RenderComponentOrSkip>
  </component>
</template>

<script setup lang="ts">
import {useBLinkHelper, useColorVariantClasses, useDefaults} from '../../composables'
import {computed, toRef} from 'vue'
import type {BBadgeProps} from '../../types'
import BLink from '../BLink/BLink.vue'
import RenderComponentOrSkip from '../RenderComponentOrSkip.vue'

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const _props = withDefaults(defineProps<BBadgeProps>(), {
  dotIndicator: false,
  pill: false,
  tag: 'span',
  placement: undefined,
  // Link props
  variant: 'secondary',
  // All others use defaults
  active: undefined,
  activeClass: undefined,
  disabled: undefined,
  exactActiveClass: undefined,
  href: undefined,
  icon: undefined,
  opacity: undefined,
  opacityHover: undefined,
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
  // End link props
  // ColorExtendables props
  // Variant is here as well
  textVariant: null,
  bgVariant: null,
  // End ColorExtendables props
})
const props = useDefaults(_props, 'BBadge')

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

const placementClasses = computed(() => {
  // dotindicator is implicitly top-end if no placement is set
  const pos = props.placement ?? (props.dotIndicator ? 'top-end' : undefined)
  return [
    'position-absolute',
    'translate-middle',
    {
      'start-0 top-0': pos === 'top-start',
      'start-0 top-50': pos === 'start',
      'start-0 top-100': pos === 'bottom-start',
      'start-50 top-0': pos === 'top',
      'start-50 top-100': pos === 'bottom',
      'start-100 top-0': pos === 'top-end',
      'start-100 top-50': pos === 'end',
      'start-100 top-100': pos === 'bottom-end',
    },
  ]
})

const computedClasses = computed(() => [
  resolvedBackgroundClasses.value,
  props.placement !== undefined || props.dotIndicator === true ? placementClasses.value : undefined,
  {
    'active': props.active,
    'disabled': props.disabled,
    'rounded-pill': props.pill,
    'p-2 border border-light rounded-circle': props.dotIndicator,
    'text-decoration-none': computedLink.value,
  },
])
</script>
