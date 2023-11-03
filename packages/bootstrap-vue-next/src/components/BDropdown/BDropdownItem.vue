<template>
  <li role="presentation">
    <component
      :is="computedTag"
      class="dropdown-item"
      :class="computedClasses"
      :disabled="disabledBoolean"
      :aria-disabled="disabledBoolean ? true : null"
      :aria-current="activeBoolean ? true : null"
      :href="computedTag === 'a' ? href : null"
      :rel="rel"
      role="menuitem"
      :type="computedTag === 'button' ? 'button' : null"
      :target="target"
      v-bind="computedLinkProps"
      @click="clicked"
    >
      <slot />
    </component>
  </li>
</template>

<script setup lang="ts">
import BLink from '../BLink/BLink.vue'
import {computed, inject, toRef} from 'vue'
import type {BLinkProps, ClassValue} from '../../types'
import {useBLinkHelper, useBooleanish} from '../../composables'
import {collapseInjectionKey, dropdownInjectionKey, navbarInjectionKey} from '../../utils'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<
    {
      linkClass?: ClassValue
    } & Omit<BLinkProps, 'event' | 'routerTag'>
  >(),
  {
    linkClass: undefined,
    // Link props
    active: undefined,
    activeClass: undefined,
    exactActiveClass: undefined,
    append: false,
    href: undefined,
    disabled: false,
    icon: false,
    variant: 'secondary',
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
  }
)

const emit = defineEmits<{
  click: [value: MouseEvent]
}>()

const activeBoolean = useBooleanish(() => props.active)
const disabledBoolean = useBooleanish(() => props.disabled)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const {computedLink, computedLinkProps} = useBLinkHelper(props)

const computedClasses = computed(() => [
  props.linkClass,
  {
    active: activeBoolean.value,
    disabled: disabledBoolean.value,
    [`text-${props.variant}`]: props.variant !== null,
  },
])

const computedTag = toRef(() => (computedLink.value ? BLink : props.href ? 'a' : 'button'))

const collapseData = inject(collapseInjectionKey, null)
const dropdownData = inject(dropdownInjectionKey, null)
const navbarData = inject(navbarInjectionKey, null)

// Pretty sure this emits if computedTag is not button and is disabled
const clicked = (e: MouseEvent): void => {
  emit('click', e)
  if (navbarData !== null && navbarData?.autoClose?.value === true) {
    collapseData?.close?.()
  }
  dropdownData?.close?.()
}
</script>
