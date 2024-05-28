<template>
  <li class="breadcrumb-item" :class="computedClasses">
    <component
      :is="computedTag"
      :aria-current="computedAriaCurrent"
      v-bind="computedLinkProps"
      @click="clicked"
    >
      <slot>
        {{ props.text }}
      </slot>
    </component>
  </li>
</template>

<script setup lang="ts">
import {pick} from '../../utils'
import {computed, toRef} from 'vue'
import BLink from '../BLink/BLink.vue'
import type {BBreadcrumbItemProps} from '../../types'
import {useDefaults} from '../../composables'

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const _props = withDefaults(defineProps<BBreadcrumbItemProps>(), {
  ariaCurrent: 'location',
  text: undefined,
  // Link props
  active: false, // Why is this active: false?
  // All others use defaults
  activeClass: undefined,
  disabled: undefined,
  exactActiveClass: undefined,
  href: undefined,
  icon: undefined,
  opacity: undefined,
  opacityHover: undefined,
  stretched: false,
  rel: undefined,
  replace: undefined,
  routerComponentName: undefined,
  routerTag: undefined,
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
const props = useDefaults(_props, 'BBreadcrumbItem')

const emit = defineEmits<{
  click: [value: MouseEvent]
}>()

const computedClasses = computed(() => ({
  active: props.active,
}))

const computedTag = toRef(() => (props.active ? 'span' : BLink))

const computedAriaCurrent = toRef(() => (props.active ? props.ariaCurrent : undefined))

const computedLinkProps = computed(() =>
  computedTag.value !== 'span'
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

const clicked = (e: Readonly<MouseEvent>): void => {
  if (props.disabled || props.active) {
    e.preventDefault()
    e.stopImmediatePropagation()
    return
  }
  if (!props.disabled) emit('click', e)
}
</script>
