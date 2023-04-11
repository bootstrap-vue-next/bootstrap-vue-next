<template>
  <li role="presentation" :class="$attrs.class">
    <component
      :is="tag"
      class="dropdown-item"
      :class="computedClasses"
      v-bind="componentAttrs"
      @click="clicked"
    >
      <slot />
    </component>
  </li>
</template>

<script setup lang="ts">
import BLink from '../BLink/BLink.vue'
import {computed, inject, ref, toRef, useAttrs} from 'vue'
import type {Booleanish, ClassValue, ColorVariant, LinkTarget} from '../../types'
import {useBooleanish} from '../../composables'
import {collapseInjectionKey, dropdownInjectionKey} from '../../utils'

interface BDropdownItemProps {
  href?: string
  linkClass?: ClassValue
  active?: Booleanish
  disabled?: Booleanish
  rel?: string
  target?: LinkTarget
  variant?: ColorVariant
}

const props = withDefaults(defineProps<BDropdownItemProps>(), {
  active: false,
  disabled: false,
  rel: undefined,
  target: '_self',
  variant: undefined,
  linkClass: undefined,
  href: undefined,
})

const activeBoolean = useBooleanish(toRef(props, 'active'))
const disabledBoolean = useBooleanish(toRef(props, 'disabled'))

interface BDropdownItemEmits {
  (e: 'click', value: MouseEvent): void
}

const emit = defineEmits<BDropdownItemEmits>()

const attrs = useAttrs()

const computedClasses = computed(() => [
  props.linkClass,
  {
    active: activeBoolean.value,
    disabled: disabledBoolean.value,
    [`text-${props.variant}`]: props.variant !== undefined,
  },
])

const tag = computed<'button' | 'a' | typeof BLink>(() =>
  props.href ? 'a' : attrs.to ? BLink : 'button'
)

const componentAttrs = computed(() => ({
  'disabled': disabledBoolean.value,
  'aria-current': activeBoolean.value ? true : null,
  'href': tag.value === 'a' ? props.href : null,
  'rel': props.rel,
  'type': tag.value === 'button' ? 'button' : null,
  'target': props.target,
  ...(attrs.to ? {activeClass: 'active', ...attrs} : {}),
}))

const collapseData = inject(collapseInjectionKey, null)
const dropdownData = inject(dropdownInjectionKey, null)

// Pretty sure this emits if tag is not button and is disabled
const clicked = (e: MouseEvent): void => {
  emit('click', e)
  collapseData?.close?.()
  dropdownData?.close?.()
}
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
