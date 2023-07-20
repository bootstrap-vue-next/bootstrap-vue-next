<template>
  <li class="nav-item">
    <BLink
      class="nav-link"
      :class="linkClasses"
      v-bind="{...linkProps, ...linkAttrs}"
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
import type {BLinkProps} from '../../types/BLinkProps'
import {pick} from '../../utils'

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const props = withDefaults(
  defineProps<
    {
      linkClasses?: string
      linkAttrs?: Record<string, unknown>
    } & Omit<BLinkProps, 'event' | 'routerTag'>
  >(),
  {
    linkClasses: undefined,
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

const linkProps = computed(() =>
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
