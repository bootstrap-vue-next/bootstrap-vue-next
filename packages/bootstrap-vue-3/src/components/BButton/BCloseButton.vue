<template>
  <button
    :type="type"
    class="btn-close"
    :disabled="disabledBoolean"
    :class="classes"
    :aria-label="ariaLabel"
  />
</template>

<script setup lang="ts">
// import type {BCloseButtonProps} from '../../types/components'
import {computed, toRef} from 'vue'
import type {Booleanish, ButtonType} from '../../types'
import {useBooleanish} from '../../composables'

interface BCloseButtonProps {
  disabled?: Booleanish
  white?: Booleanish
  ariaLabel?: string
  type?: ButtonType
}

const props = withDefaults(defineProps<BCloseButtonProps>(), {
  ariaLabel: 'Close',
  disabled: false,
  white: false,
  type: 'button',
})

const disabledBoolean = useBooleanish(toRef(props, 'disabled'))
const whiteBoolean = useBooleanish(toRef(props, 'white'))

const classes = computed(() => ({
  'btn-close-white': whiteBoolean.value,
}))
</script>
