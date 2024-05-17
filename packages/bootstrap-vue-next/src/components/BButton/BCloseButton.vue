<template>
  <button
    :type="props.type"
    class="btn-close"
    :disabled="props.disabled"
    :aria-label="props.ariaLabel"
    @click="emit('click', $event)"
  />
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables'
import type {BCloseButtonProps} from '../../types'

const _props = withDefaults(defineProps<BCloseButtonProps>(), {
  ariaLabel: 'Close',
  disabled: false,
  type: 'button',
})
const props = useDefaults(_props, 'BCloseButton')

const emit = defineEmits<{
  click: [value: MouseEvent]
}>()
</script>
