<template>
  <optgroup :label="props.label">
    <slot name="first" />
    <BFormSelectOption
      v-for="(option, index) in normalizedOptions"
      :key="index"
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
