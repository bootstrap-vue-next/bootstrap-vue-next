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
import {computed, toRef, useAttrs} from 'vue'
import type {Booleanish, ColorVariant, LinkTarget} from '../../types'
import {useBooleanish} from '../../composables'

interface BDropdownItemProps {
  href?: string
  linkClass?: Array<unknown> | Record<string, unknown> | string
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
  variant: undefined,
  target: '_self',
})

const activeBoolean = useBooleanish(toRef(props, 'active'))
const disabledBoolean = useBooleanish(toRef(props, 'disabled'))

interface BDropdownItemEmits {
  (e: 'click', value: MouseEvent): void
}

const emit = defineEmits<BDropdownItemEmits>()

const attrs = useAttrs()

const classes = computed(() => ({
  active: activeBoolean.value,
  disabled: disabledBoolean.value,
  [`text-${props.variant}`]: props.variant,
}))

const tag = computed<'button' | 'a' | 'b-link'>(() =>
  props.href ? 'a' : attrs.to ? 'b-link' : 'button'
)

const componentAttrs = computed(() => ({
  'aria-current': activeBoolean.value ? 'true' : null,
  'href': tag.value === 'a' ? props.href : null,
  'rel': props.rel,
  'type': tag.value === 'button' ? 'button' : null,
  'target': props.target,
  ...(attrs.to ? {activeClass: 'active', ...attrs} : {}),
}))

const clicked = (e: MouseEvent): void => emit('click', e)
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
