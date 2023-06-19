<template>
  <button
    :type="type"
    class="btn-close"
    :disabled="disabledBoolean"
    :class="computedClasses"
    :aria-label="ariaLabel"
    @click="emit('click', $event)"
  />
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {Booleanish, ButtonType} from '../../types'
import {useBooleanish} from '../../composables'

interface BCloseButtonProps {
  ariaLabel?: string
  disabled?: Booleanish
  white?: Booleanish
  type?: ButtonType
}

interface BCloseButtonEmits {
  (e: 'click', value: MouseEvent): void
}

const props = withDefaults(defineProps<BCloseButtonProps>(), {
  ariaLabel: 'Close',
  disabled: false,
  white: false,
  type: 'button',
})

const emit = defineEmits<BCloseButtonEmits>()

const disabledBoolean = useBooleanish(() => props.disabled)
const whiteBoolean = useBooleanish(() => props.white)

const computedClasses = computed(() => ({
  'btn-close-white': whiteBoolean.value,
}))
</script>
