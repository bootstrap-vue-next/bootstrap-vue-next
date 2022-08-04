<template>
  <button
    type="button"
    class="btn-close"
    :disabled="disabledBoolean"
    :class="classes"
    aria-label="Close"
  />
</template>

<script setup lang="ts">
// import type {BCloseButtonProps} from '../../types/components'
import {computed} from 'vue'
import type {Booleanish} from '../../types'
import {resolveBooleanish} from '../../utils'

interface BCloseButtonProps {
  disabled?: Booleanish
  white?: Booleanish
}

const props = withDefaults(defineProps<BCloseButtonProps>(), {
  disabled: false,
  white: false,
})

const disabledBoolean = computed<boolean>(() => resolveBooleanish(props.disabled))
const whiteBoolean = computed<boolean>(() => resolveBooleanish(props.white))

const classes = computed(() => ({
  'btn-close-white': whiteBoolean.value,
}))
</script>
