<template>
  <li role="presentation" :class="wrapperClass" v-bind="props.wrapperAttrs">
    <component
      :is="computedTag"
      class="dropdown-item"
      :class="computedClasses"
      :disabled="props.disabled"
      :aria-disabled="props.disabled ? true : null"
      :aria-current="props.active ? true : null"
      :href="computedTag === 'a' ? props.href : null"
      :rel="props.rel"
      role="menuitem"
      :type="computedTag === 'button' ? 'button' : null"
      :target="props.target"
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
import type {BDropdownItemProps} from '../../types'
import {useBLinkHelper, useDefaults} from '../../composables'
import {collapseInjectionKey, dropdownInjectionKey, navbarInjectionKey} from '../../utils'

defineOptions({
  inheritAttrs: false,
})

const _props = withDefaults(defineProps<BDropdownItemProps>(), {
  wrapperAttrs: undefined,
  // Link props
  linkClass: undefined,
  variant: null,
  // All others use defaults
  active: undefined,
  activeClass: undefined,
  disabled: undefined,
  exactActiveClass: undefined,
  href: undefined,
  icon: undefined,
  opacity: undefined,
  stretched: false,
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
})
const props = useDefaults(_props, 'BDropdownItem')

const emit = defineEmits<{
  click: [value: MouseEvent]
}>()

const {class: wrapperClass, ...attrs} = useAttrs()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const {computedLink, computedLinkProps} = useBLinkHelper(props)

const computedClasses = computed(() => [
  props.linkClass,
  {
    active: props.active,
    disabled: props.disabled,
    [`text-${props.variant}`]: props.variant !== null,
  },
])

const computedTag = toRef(() => (computedLink.value ? BLink : props.href ? 'a' : 'button'))

const collapseData = inject(collapseInjectionKey, null)
const dropdownData = inject(dropdownInjectionKey, null)
const navbarData = inject(navbarInjectionKey, null)

// Pretty sure this emits if computedTag is not button and is disabled
const clicked = (e: Readonly<MouseEvent>): void => {
  emit('click', e)
  if (navbarData !== null && navbarData?.autoClose?.value === true) {
    collapseData?.hide?.()
  }
  dropdownData?.hide?.()
}
</script>
