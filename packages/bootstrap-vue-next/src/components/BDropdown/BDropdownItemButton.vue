<template>
  <li role="presentation">
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
import type {Booleanish, ClassValue, ColorVariant} from '../../types'
import {computed} from 'vue'
import {useBooleanish} from '../../composables'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    buttonClass?: ClassValue
    active?: Booleanish
    activeClass?: ClassValue
    disabled?: Booleanish
    variant?: ColorVariant | null
  }>(),
  {
    active: false,
    activeClass: 'active',
    disabled: false,
    variant: null,
    buttonClass: undefined,
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

const computedClasses = computed(() => [
  props.buttonClass,
  {
    [props.activeClass]: activeBoolean.value,
    disabled: disabledBoolean.value,
    [`text-${props.variant}`]: props.variant !== null,
  },
])

const clicked = (e: MouseEvent) => {
  emit('click', e)
}
</script>
