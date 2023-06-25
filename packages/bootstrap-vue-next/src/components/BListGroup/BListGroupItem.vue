<template>
  <component
    :is="tagComputed"
    class="list-group-item"
    :class="computedClasses"
    :aria-current="activeBoolean ? true : undefined"
    :aria-disabled="disabledBoolean ? true : undefined"
    :target="link ? target : undefined"
    :href="!buttonBoolean ? href : undefined"
    :to="!buttonBoolean ? to : undefined"
    v-bind="computedAttrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import {computed, inject, useAttrs} from 'vue'
import type {RouteLocationRaw} from 'vue-router'
import type {Booleanish, ColorVariant, LinkTarget} from '../../types'
import {useBooleanish} from '../../composables'
import BLink from '../BLink/BLink.vue'
import {listGroupInjectionKey} from '../../utils'

const props = withDefaults(
  defineProps<{
    action?: Booleanish
    active?: Booleanish
    // activeClass?: string
    // append?: Booleanish
    button?: Booleanish
    disabled?: Booleanish
    href?: string
    // noPrefetch?: Booleanish
    // prefetch?: Booleanish
    // rel?: String
    // replace?: Booleanish
    // routerComponentName?: String
    tag?: string
    target?: LinkTarget
    to?: RouteLocationRaw
    variant?: ColorVariant | null
  }>(),
  {
    to: undefined,
    variant: null,
    href: undefined,
    action: false,
    active: false,
    button: false,
    disabled: false,
    tag: 'div',
    target: '_self',
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const attrs = useAttrs()

const parentData = inject(listGroupInjectionKey, null)

const actionBoolean = useBooleanish(() => props.action)
const activeBoolean = useBooleanish(() => props.active)
const buttonBoolean = useBooleanish(() => props.button)
const disabledBoolean = useBooleanish(() => props.disabled)

const link = computed<boolean>(() => !buttonBoolean.value && (!!props.href || !!props.to))

const tagComputed = computed<string | typeof BLink>(() =>
  parentData?.numbered.value
    ? 'li'
    : buttonBoolean.value
    ? 'button'
    : !link.value
    ? props.tag
    : BLink
)

const isAction = computed(
  () =>
    actionBoolean.value ||
    link.value ||
    buttonBoolean.value ||
    ['a', 'router-link', 'button', 'b-link'].includes(props.tag)
)

const computedClasses = computed(() => ({
  [`list-group-item-${props.variant}`]: props.variant !== null,
  'list-group-item-action': isAction.value,
  'active': activeBoolean.value,
  'disabled': disabledBoolean.value,
}))

const computedAttrs = computed(() => {
  const localAttrs = {} as {type?: string; disabled?: boolean}
  if (buttonBoolean.value) {
    if (!attrs || !attrs.type) {
      // Add a type for button is one not provided in passed attributes
      localAttrs.type = 'button'
    }
    if (disabledBoolean.value) {
      // Set disabled attribute if button and disabled
      localAttrs.disabled = true
    }
  }
  return localAttrs
})
</script>
