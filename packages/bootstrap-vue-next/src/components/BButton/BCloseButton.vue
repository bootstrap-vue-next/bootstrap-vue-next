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
import type {ButtonType} from '../../types'
import {computed} from 'vue'

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

const disabledBoolean = computed(() => props.disabled)
</script>
