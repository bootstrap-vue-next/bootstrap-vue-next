<template>
  <li class="nav-item">
    <BLink
      class="nav-link"
      :class="linkClass"
      v-bind="{...computedLinkProps, ...linkAttrs}"
      :active-class="activeClass ?? 'active'"
      :tabindex="disabledBoolean ? -1 : undefined"
      :aria-disabled="disabledBoolean ? true : undefined"
      @click.stop="emit('click', $event)"
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
      linkClass?: ClassValue
      linkAttrs?: Record<string, unknown>
    } & Omit<BLinkProps, 'event' | 'routerTag'>
  >(),
  {
    linkClass: undefined,
    // Link props
    active: undefined,
    activeClass: 'router-link-active',
    append: false,
    linkAttrs: undefined,
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
</script>
