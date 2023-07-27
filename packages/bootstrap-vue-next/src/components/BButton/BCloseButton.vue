<template>
  <button
    :type="type"
    class="btn-close"
    :disabled="disabledBoolean"
    :aria-label="ariaLabel"
    @click="emit('click', $event)"
  />
</template>

<script setup lang="ts">
import type {Booleanish, ButtonType} from '../../types'
import {useBooleanish} from '../../composables'

const props = withDefaults(
  defineProps<{
    ariaLabel?: string
    disabled?: Booleanish
    type?: ButtonType
  }>(),
  {
    ariaLabel: 'Close',
    disabled: false,
    type: 'button',
  }
)

const emit = defineEmits<{
  click: [value: MouseEvent]
}>()

const disabledBoolean = useBooleanish(() => props.disabled)
</script>
