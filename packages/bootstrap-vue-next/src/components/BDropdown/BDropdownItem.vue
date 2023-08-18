<template>
  <li role="presentation">
    <component
      :is="tag"
      class="dropdown-item"
      :class="computedClasses"
      :disabled="disabledBoolean"
      :aria-disabled="disabledBoolean ? true : null"
      :aria-current="activeBoolean ? true : null"
      :href="tag === 'a' ? href : null"
      :rel="rel"
      :type="tag === 'button' ? 'button' : null"
      :target="target"
      v-bind="componentAttrs"
      @click="clicked"
    >
      <slot />
    </component>
  </li>
</template>

<script setup lang="ts">
import BLink from '../BLink/BLink.vue'
import {computed, inject, useAttrs} from 'vue'
import type {Booleanish, ClassValue, ColorVariant, LinkTarget} from '../../types'
import {useBooleanish} from '../../composables'
import {collapseInjectionKey, dropdownInjectionKey, navbarInjectionKey} from '../../utils'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    href?: string
    linkClass?: ClassValue
    active?: Booleanish
    disabled?: Booleanish
    rel?: string
    target?: LinkTarget
    variant?: ColorVariant | null
  }>(),
  {
    active: false,
    disabled: false,
    rel: undefined,
    target: '_self',
    variant: null,
    linkClass: undefined,
    href: undefined,
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

const attrs = useAttrs()

const computedClasses = computed(() => [
  props.linkClass,
  {
    active: activeBoolean.value,
    disabled: disabledBoolean.value,
    [`text-${props.variant}`]: props.variant !== null,
  },
])

const tag = computed<'button' | 'a' | typeof BLink>(() =>
  props.href ? 'a' : attrs.to ? BLink : 'button'
)

const componentAttrs = computed(() => ({
  ...(attrs.to ? {activeClass: 'active', ...attrs} : attrs),
}))

const collapseData = inject(collapseInjectionKey, null)
const dropdownData = inject(dropdownInjectionKey, null)
const navbarData = inject(navbarInjectionKey, null)

// Pretty sure this emits if tag is not button and is disabled
const clicked = (e: MouseEvent): void => {
  emit('click', e)
  if (navbarData !== null) {
    collapseData?.close?.()
  }
  dropdownData?.close?.()
}
</script>
