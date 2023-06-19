<template>
  <li class="nav-item">
    <b-link
      :class="computedLinkClasses"
      v-bind="$props"
      active-class="active"
      :tabindex="disabledBoolean ? -1 : undefined"
      :aria-disabled="disabledBoolean ? true : undefined"
    >
      <slot />
    </b-link>
  </li>
</template>

<script setup lang="ts">
import BLink, {type BLinkProps} from '../BLink/BLink.vue'
import {useBooleanish} from '../../composables'
import {computed} from 'vue'

defineSlots<{
  default?: Record<string, never>
}>()

interface BNavItemProps {
  linkClasses?: string
}

const props = withDefaults(defineProps<BNavItemProps & Omit<BLinkProps, 'event' | 'routerTag'>>(), {
  linkClasses: undefined,
  // Link props
  active: undefined,
  activeClass: 'router-link-active',
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
  variant: undefined,
  // End link props
})

const disabledBoolean = useBooleanish(() => props.disabled)

const computedLinkClasses = computed(() => ['nav-link', props.linkClasses])
</script>
