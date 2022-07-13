<template>
  <li role="presentation">
    <button class="dropdown-item" :class="[classes, buttonClass]" v-bind="attrs" @click="clicked">
      <slot />
    </button>
  </li>
</template>

<script setup lang="ts">
// import type {BDropdownItemButtonEmits, BDropdownItemButtonProps} from '../../types/components'
import type {ButtonType, ColorVariant} from '../../types'

interface BDropdownItemButtonProps {
  buttonClass?: string | Array<unknown> | Record<string, unknown>
  active?: boolean
  activeClass?: string
  disabled?: boolean
  variant?: ColorVariant
}

const props = withDefaults(defineProps<BDropdownItemButtonProps>(), {
  active: false,
  activeClass: 'active',
  disabled: false,
  variant: undefined,
})

interface BDropdownItemButtonEmits {
  (e: 'click', value: MouseEvent): void
}

const emit = defineEmits<BDropdownItemButtonEmits>()

const classes = computed(() => ({
  [props.activeClass]: props.active,
  disabled: props.disabled,
  [`text-${props.variant}`]: props.variant,
}))

const attrs = computed(() => ({
  role: 'menuitem',
  type: 'button' as ButtonType,
  disabled: props.disabled,
}))

const clicked = (e: MouseEvent): void => emit('click', e)
</script>

<script lang="ts">
import {computed, defineComponent} from 'vue'
export default defineComponent({
  inheritAttrs: false,
})
</script>
