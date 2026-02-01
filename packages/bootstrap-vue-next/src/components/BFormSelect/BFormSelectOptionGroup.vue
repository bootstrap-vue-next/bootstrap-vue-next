<template>
  <optgroup :label="props.label">
    <slot name="first" />
    <BFormSelectOption
      v-for="(option, index) in normalizedOptions"
      :key="getOptionKey(option, index)"
      v-bind="{...$attrs, ...option}"
    >
      <slot name="option" v-bind="option">
        {{ option.text }}
      </slot>
    </BFormSelectOption>
    <slot />
  </optgroup>
</template>

<script setup lang="ts" generic="T">
import BFormSelectOption from './BFormSelectOption.vue'
import {useDefaults} from '../../composables/useDefaults'
import type {BFormSelectOptionGroupProps} from '../../types/ComponentProps'
import type {ComputedRef} from 'vue'
import {useFormSelect} from '../../composables/useFormSelect'
import type {SelectOption} from '../../types/SelectTypes'
import type {BFormSelectOptionGroupSlots} from '../../types'

const _props = withDefaults(defineProps<BFormSelectOptionGroupProps>(), {
  disabledField: 'disabled',
  label: undefined,
  options: () => [],
  textField: 'text',
  valueField: 'value',
})
const props = useDefaults(_props, 'BFormSelectOptionGroup')
defineSlots<BFormSelectOptionGroupSlots<T>>()

// Helper function to determine if a value is a primitive type suitable for use as a key
const isPrimitive = (value: unknown): value is string | number | boolean | symbol | bigint => {
  const type = typeof value
  return (
    type === 'string' ||
    type === 'number' ||
    type === 'boolean' ||
    type === 'symbol' ||
    type === 'bigint'
  )
}

// Generate appropriate key for v-for: use option.value if it's a primitive, otherwise fall back to index
const getOptionKey = (option: SelectOption<T>, index: number): string | number => {
  if (option.value !== null && isPrimitive(option.value)) {
    // Convert primitives to string or number for key
    return typeof option.value === 'string' || typeof option.value === 'number'
      ? option.value
      : String(option.value)
  }
  return index
}

// The form select context is injected by BFormSelectOption components automatically
// We don't need to handle the selected value here since each BFormSelectOption
// will inject the context directly

// Type assertion is needed because useFormSelect is not generic-aware.
// This is acceptable in the wrapper/base pattern where the wrapper (BFormSelect)
// handles type-safe normalization before passing to base components.
const {normalizedOptions} = useFormSelect(() => props.options, props) as {
  normalizedOptions: ComputedRef<SelectOption<T>[]>
}
</script>
