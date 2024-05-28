<template>
  <component
    :is="tagComputed"
    class="list-group-item"
    :class="computedClasses"
    :aria-current="props.active ? true : undefined"
    :aria-disabled="props.disabled ? true : undefined"
    :target="isLink ? props.target : undefined"
    :href="!props.button ? props.href : undefined"
    :to="!props.button ? props.to : undefined"
    v-bind="computedAttrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import {computed, inject, toRef, useAttrs} from 'vue'
import type {BListGroupItemProps} from '../../types'
import {useBLinkHelper, useDefaults} from '../../composables'
import BLink from '../BLink/BLink.vue'
import {listGroupInjectionKey} from '../../utils'

const _props = withDefaults(defineProps<BListGroupItemProps>(), {
  action: false,
  button: false,
  tag: 'div',
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
const props = useDefaults(_props, 'BListGroupItem')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const attrs = useAttrs()

const parentData = inject(listGroupInjectionKey, null)

const {computedLink} = useBLinkHelper(props)

const isLink = toRef(() => !props.button && computedLink.value)
const tagComputed = toRef(() =>
  parentData?.numbered.value ? 'li' : props.button ? 'button' : !isLink.value ? props.tag : BLink
)

const isAction = computed(
  () =>
    props.action ||
    isLink.value ||
    props.button ||
    ['a', 'router-link', 'button', 'b-link'].includes(props.tag)
)

const computedClasses = computed(() => ({
  [`list-group-item-${props.variant}`]: props.variant !== null && props.variant !== undefined,
  'list-group-item-action': isAction.value,
  'active': props.active,
  'disabled': props.disabled,
}))

const computedAttrs = computed(() => {
  const localAttrs = {} as {type?: string; disabled?: boolean}
  if (props.button) {
    if (!attrs || !attrs.type) {
      // Add a type for button is one not provided in passed attributes
      localAttrs.type = 'button'
    }
    if (props.disabled) {
      // Set disabled attribute if button and disabled
      localAttrs.disabled = true
    }
  }
  return localAttrs
})
</script>
