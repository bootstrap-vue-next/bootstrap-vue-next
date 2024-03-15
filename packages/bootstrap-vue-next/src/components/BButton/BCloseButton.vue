<template>
  <button
    :type="type"
    class="btn-close"
    :disabled="props.disabled"
    :aria-label="ariaLabel"
    @click="emit('click', $event)"
  />
</template>

<script setup lang="ts">
import type {ButtonType} from '../../types'

const props = withDefaults(
  defineProps<{
    ariaLabel?: string
    disabled?: boolean
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
</script>
