<template>
  <li role="presentation">
    <component
      :is="tag"
      class="dropdown-item"
      :class="[classes, linkClass]"
      v-bind="componentAttrs"
      @click="clicked"
    >
      <slot />
    </component>
  </li>
</template>

<script setup lang="ts">
// import type {BDropdownItemButtonEmits, BDropdownItemProps} from '../../types/components'
import type {ColorVariant, LinkTarget} from '../../types'

interface BDropdownItemProps {
  href?: string
  linkClass?: Array<unknown> | Record<string, unknown> | string
  active?: boolean
  disabled?: boolean
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
})

interface BDropdownItemEmits {
  (e: 'click', value: MouseEvent): void
}

const emit = defineEmits<BDropdownItemEmits>()

const attrs = useAttrs()

const classes = computed(() => ({
  active: props.active,
  disabled: props.disabled,
  [`text-${props.variant}`]: props.variant,
}))

const tag = computed<'button' | 'a' | 'b-link'>(() =>
  props.href ? 'a' : attrs.to ? 'b-link' : 'button'
)

const componentAttrs = computed(() => ({
  'aria-current': props.active ? 'true' : null,
  'href': tag.value === 'a' ? props.href : null,
  'rel': props.rel,
  'type': tag.value === 'button' ? 'button' : null,
  'target': props.target,
  ...(attrs.to ? {activeClass: 'active', ...attrs} : {}),
}))

const clicked = (e: MouseEvent): void => emit('click', e)
</script>

<script lang="ts">
import {computed, defineComponent, useAttrs} from 'vue'
export default defineComponent({
  inheritAttrs: false,
})
</script>
