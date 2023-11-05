<template>
  <li class="nav-item">
    <BLink
      class="nav-link"
      :class="linkClass"
      :tabindex="disabledBoolean ? -1 : undefined"
      :aria-disabled="disabledBoolean ? true : undefined"
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
import {useBooleanish} from '../../composables'
import type {BLinkProps, ClassValue} from '../../types'
import {pick} from '../../utils'

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const props = withDefaults(
  defineProps<
    {
      linkAttrs?: Record<string, unknown>
      linkClass?: ClassValue
    } & Omit<BLinkProps, 'event' | 'routerTag'>
  >(),
  {
    // Link props
    active: undefined,
    activeClass: undefined,
    append: undefined,
    disabled: undefined,
    exactActiveClass: undefined,
    href: undefined,
    icon: undefined,
    linkAttrs: undefined,
    linkClass: undefined,
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
    variant: undefined,
    // End link props
  }
)

const emit = defineEmits<{
  click: [value: MouseEvent]
}>()

const disabledBoolean = useBooleanish(() => props.disabled)

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
