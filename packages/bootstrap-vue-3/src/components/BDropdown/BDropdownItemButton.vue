<template>
  <li role="presentation" :class="$attrs.class">
    <!-- Should click be click.prevent ? -->
    <button
      role="menu"
      type="button"
      class="dropdown-item"
      :class="computedClasses"
      :disabled="disabledBoolean"
      @click="clicked"
    >
      <slot />
    </button>
  </li>
</template>

<script setup lang="ts">
// import type {BDropdownItemButtonEmits, BDropdownItemButtonProps} from '../../types/components'
import type {Booleanish, ClassValue, ColorVariant} from '../../types'
import {computed, toRef} from 'vue'
import {useBooleanish} from '../../composables'

interface BDropdownItemButtonProps {
  buttonClass?: ClassValue
  active?: Booleanish
  activeClass?: string
  disabled?: Booleanish
  variant?: ColorVariant
}

const props = withDefaults(defineProps<BDropdownItemButtonProps>(), {
  active: false,
  activeClass: 'active',
  disabled: false,
})

const activeBoolean = useBooleanish(toRef(props, 'active'))
const disabledBoolean = useBooleanish(toRef(props, 'disabled'))

interface BDropdownItemButtonEmits {
  (e: 'click', value: MouseEvent): void
}

const emit = defineEmits<BDropdownItemButtonEmits>()

const computedClasses = computed(() => [
  props.buttonClass,
  {
    [props.activeClass]: activeBoolean.value,
    disabled: disabledBoolean.value,
    [`text-${props.variant}`]: props.variant !== undefined,
  },
])

const clicked = (e: MouseEvent): void => emit('click', e)
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
