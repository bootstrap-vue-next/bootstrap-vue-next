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
// import type {BDropdownItemButtonEmits, BDropdownItemProps} from '../../types/components'
import BLink from '../BLink/BLink.vue'
import {computed, toRef, useAttrs} from 'vue'
import type {Booleanish, ClassValue, ColorVariant, LinkTarget} from '../../types'
import {useBooleanish} from '../../composables'

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
  'aria-current': activeBoolean.value ? 'true' : null,
  'href': tag.value === 'a' ? props.href : null,
  'rel': props.rel,
  'type': tag.value === 'button' ? 'button' : null,
  'target': props.target,
  ...(attrs.to ? {activeClass: 'active', ...attrs} : {}),
}))

// Pretty sure this emits if tag is not button and is disabled
const clicked = (e: MouseEvent): void => emit('click', e)
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
