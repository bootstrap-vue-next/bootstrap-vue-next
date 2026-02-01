<template>
  <datalist :id="computedId">
    <slot name="first" />
    <BFormSelectOption
      v-for="(option, index) in normalizedOptsWrapper"
      :key="index"
      v-bind="option"
    >
      <slot name="option" v-bind="option">
        {{ 'text' in option ? option.text : '' }}
      </slot>
    </BFormSelectOption>
    <slot />
  </datalist>
</template>

<script setup lang="ts">
import type {BFormDatalistBaseProps} from '../../types/ComponentProps'
import {computed} from 'vue'
import BFormSelectOption from '../BFormSelect/BFormSelectOption.vue'
import {useDefaults} from '../../composables/useDefaults'
import {useId} from '../../composables/useId'
import {useFormSelect} from '../../composables/useFormSelect'

/**
 * Base component for BFormDatalist - non-generic implementation using useDefaults.
 * Renders a datalist element with normalized options.
 * Filters out complex/grouped options as datalist doesn't support them.
 */
const _props = withDefaults(defineProps<BFormDatalistBaseProps>(), {
  disabled: false,
  disabledField: 'disabled',
  id: undefined,
  options: () => [],
  textField: 'text',
  valueField: 'value',
})
const props = useDefaults(_props, 'BFormDatalist')

const computedId = useId(() => props.id, 'datalist')

const {normalizedOptions, isComplex} = useFormSelect(
  () => props.options,
  computed(() => ({...props, optionsField: 'options', labelField: 'label'}))
)

const normalizedOptsWrapper = computed(() =>
  // Datalist doesn't support complex options
  normalizedOptions.value.filter((opt) => !isComplex(opt))
)
</script>
