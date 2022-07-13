<template>
  <component
    :is="tagComputed"
    class="list-group-item"
    :class="classes"
    :aria-current="active ? true : null"
    :aria-disabled="disabled ? true : null"
    :target="link ? target : null"
    :href="!button ? href : null"
    :to="!button ? to : null"
    v-bind="computedAttrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
// import type {BListGroupItemProps} from '../../types/components'
import {computed, inject, useAttrs} from 'vue'
import type {RouteLocationRaw} from 'vue-router'
import type {ColorVariant, LinkTarget} from '../../types'
import BLink from '../BLink/BLink.vue'
import {injectionKey} from './BListGroup.vue'

interface BListGroupItemProps {
  action?: boolean
  active?: boolean
  // activeClass?: string
  // append?: boolean
  button?: boolean
  disabled?: boolean
  // exact?: boolean
  // exactActiveClass?: string
  href?: string
  // noPrefetch?: Boolean
  // prefetch?: Boolean
  // rel?: String
  // replace?: Boolean
  // routerComponentName?: String
  tag?: string
  target?: LinkTarget
  to?: RouteLocationRaw
  variant?: ColorVariant
}

const props = withDefaults(defineProps<BListGroupItemProps>(), {
  action: false,
  active: false,
  button: false,
  disabled: false,
  tag: 'div',
  target: '_self',
})

const attrs = useAttrs()

const parentData = inject(injectionKey, null)

const link = computed<boolean>(() => !props.button && (!!props.href || !!props.to))

const tagComputed = computed<string | typeof BLink>(() =>
  parentData?.numbered ? 'li' : props.button ? 'button' : !link.value ? props.tag : BLink
)

const classes = computed(() => {
  const action =
    props.action ||
    link.value ||
    props.button ||
    ['a', 'router-link', 'button', 'b-link'].includes(props.tag)
  return {
    [`list-group-item-${props.variant}`]: props.variant,
    'list-group-item-action': action,
    'active': props.active,
    'disabled': props.disabled,
  }
})

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
