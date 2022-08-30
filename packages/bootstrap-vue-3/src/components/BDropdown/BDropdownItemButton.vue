<template>
  <li role="presentation">
    <button class="dropdown-item" :class="[classes, buttonClass]" v-bind="attrs" @click="clicked">
      <slot />
    </button>
  </li>
</template>

<script setup lang="ts">
// import type {BDropdownItemButtonEmits, BDropdownItemButtonProps} from '../../types/components'
import type {Booleanish, ButtonType, ColorVariant} from '../../types'
import {computed, toRef} from 'vue'
import {useBooleanish} from '../../composables'

interface BDropdownItemButtonProps {
  buttonClass?: Array<string> | Record<string, boolean> | string
  active?: Booleanish
  activeClass?: string
  disabled?: Booleanish
  variant?: ColorVariant
}

const props = withDefaults(defineProps<BDropdownItemButtonProps>(), {
  active: false,
  activeClass: 'active',
  variant: undefined,
  disabled: false,
})

const activeBoolean = useBooleanish(toRef(props, 'active'))
const disabledBoolean = useBooleanish(toRef(props, 'disabled'))

interface BDropdownItemButtonEmits {
  (e: 'click', value: MouseEvent): void
}

const emit = defineEmits<BDropdownItemButtonEmits>()

const classes = computed(() => ({
  [props.activeClass]: activeBoolean.value,
  disabled: disabledBoolean.value,
  [`text-${props.variant}`]: !!props.variant,
}))

const attrs = computed(() => ({
  role: 'menuitem',
  type: 'button' as ButtonType,
  disabled: disabledBoolean.value,
}))

const clicked = (e: MouseEvent): void => emit('click', e)
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
