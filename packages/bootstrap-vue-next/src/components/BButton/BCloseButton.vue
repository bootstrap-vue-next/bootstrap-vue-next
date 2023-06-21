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

const props = withDefaults(
  defineProps<{
    ariaLabel?: string
    disabled?: Booleanish
    white?: Booleanish
    type?: ButtonType
  }>(),
  {
    ariaLabel: 'Close',
    disabled: false,
    white: false,
    type: 'button',
  }
)

const emit = defineEmits<{
  click: [value: MouseEvent]
}>()

const disabledBoolean = useBooleanish(() => props.disabled)
const whiteBoolean = useBooleanish(() => props.white)

const computedClasses = computed(() => ({
  'btn-close-white': whiteBoolean.value,
}))
</script>
