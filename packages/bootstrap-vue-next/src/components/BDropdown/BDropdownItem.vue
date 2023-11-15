<template>
  <li role="presentation" :class="wrapperClass" v-bind="wrapperAttrs">
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
      v-bind="{...computedLinkProps, ...attrs}"
      @click="clicked"
    >
      <slot />
    </component>
  </li>
</template>

<script setup lang="ts">
import BLink from '../BLink/BLink.vue'
import {computed, inject, toRef, useAttrs} from 'vue'
import type {AttrsValue, BLinkProps, ClassValue} from '../../types'
import {useBLinkHelper, useBooleanish} from '../../composables'
import {collapseInjectionKey, dropdownInjectionKey, navbarInjectionKey} from '../../utils'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<
    {
      linkClass?: ClassValue
      wrapperAttrs?: AttrsValue
    } & Omit<BLinkProps, 'event' | 'routerTag'>
  >(),
  {
    wrapperAttrs: undefined,
    // Link props
    linkClass: undefined,
    variant: 'secondary',
    // All others use defaults
    active: undefined,
    activeClass: undefined,
    append: undefined,
    disabled: undefined,
    exactActiveClass: undefined,
    href: undefined,
    icon: undefined,
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
    // End link props
  }
)

const emit = defineEmits<{
  click: [value: MouseEvent]
}>()

const {class: wrapperClass, ...attrs} = useAttrs()

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
