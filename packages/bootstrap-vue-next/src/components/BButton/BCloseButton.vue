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
import type {BCloseButtonEmits} from '../../types'
import {useDefaults} from '../../composables/useDefaults'
import type {BCloseButtonProps} from '../../types/ComponentProps'

const _props = withDefaults(defineProps<BCloseButtonProps>(), {
  ariaLabel: 'Close',
  disabled: false,
  type: 'button',
})
const props = useDefaults(_props, 'BCloseButton')
const emit = defineEmits<BCloseButtonEmits>()
</script>
