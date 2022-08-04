<template>
  <option :value="value ?? ''" :disabled="disabledBoolean">
    <slot />
  </option>
</template>

<script setup lang="ts">
// import type {BFormSelectOptionProps} from '../../types/components'
import {computed} from 'vue'
import type {Booleanish} from '../../types'
import {resolveBooleanish} from '../../utils'

interface BFormSelectOptionProps {
  value?: unknown
  disabled?: Booleanish
}

const props = withDefaults(defineProps<BFormSelectOptionProps>(), {
  disabled: false,
})

const disabledBoolean = computed(() => resolveBooleanish(props.disabled))
</script>
