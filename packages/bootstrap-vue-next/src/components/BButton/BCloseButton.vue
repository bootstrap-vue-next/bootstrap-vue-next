<template>
  <button
    :type="type"
    :disabled="disabledBoolean"
    :class="computedClasses"
    :aria-label="ariaLabel"
    @click="emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import {computed, useSlots} from 'vue'
import type {Booleanish, ButtonType} from '../../types'
import {useBooleanish} from '../../composables'
import {isEmptySlot} from '../../utils'

interface BCloseButtonProps {
  ariaLabel?: string
  disabled?: Booleanish
  white?: Booleanish
  type?: ButtonType
}

const props = withDefaults(defineProps<BCloseButtonProps>(), {
  ariaLabel: 'Close',
  disabled: false,
  white: false,
  type: 'button',
})

interface BCloseButtonEmits {
  (e: 'click', value: MouseEvent): void
}

const emit = defineEmits<BCloseButtonEmits>()

const slots = useSlots()

const disabledBoolean = useBooleanish(() => props.disabled)
const whiteBoolean = useBooleanish(() => props.white)

const hasDefaultSlot = computed<boolean>(() => !isEmptySlot(slots.default))

const computedClasses = computed(() => ({
  'btn-close-custom': hasDefaultSlot.value,
  'btn-close': !hasDefaultSlot.value,
  'btn-close-white': whiteBoolean.value,
}))
</script>
