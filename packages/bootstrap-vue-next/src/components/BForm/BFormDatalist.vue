<template>
  <datalist :id="computedId">
    <slot name="first" />
    <BFormSelectOption
      v-for="(option, index) in normalizedOptsWrapper"
      :key="index"
      v-bind="option"
    >
      <slot name="option" v-bind="option">
        {{ option.text }}
      </slot>
    </BFormSelectOption>
    <slot />
  </datalist>
</template>

<script setup lang="ts" generic="T">
import type {BFormDatalistProps} from '../../types/ComponentProps'
import {computed} from 'vue'
import BFormSelectOption from '../BFormSelect/BFormSelectOption.vue'
import {useDefaults} from '../../composables/useDefaults'
import {useId} from '../../composables/useId'
import {useFormSelect} from '../../composables/useFormSelect'
import type {SelectOption} from '../../types/SelectTypes'
import type {BFormDatalistSlots} from '../../types'

const _props = withDefaults(defineProps<BFormDatalistProps>(), {
  disabled: false,
  disabledField: 'disabled',
  id: undefined,
  options: () => [],
  textField: 'text',
  valueField: 'value',
})
const props = useDefaults(_props, 'BFormDatalist')
defineSlots<BFormDatalistSlots>()

const computedId = useId(() => props.id, 'datalist')

const {normalizedOptions, isComplex} = useFormSelect(
  () => props.options,
  computed(() => ({...props, optionsField: 'options', labelField: 'label'}))
)

const normalizedOptsWrapper = computed(
  () =>
    // Datalist doesn't support complex options
    normalizedOptions.value.filter((opt) => !isComplex(opt)) as readonly SelectOption<T>[]
)
</script>
