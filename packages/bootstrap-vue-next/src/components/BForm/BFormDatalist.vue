<template>
  <datalist :id="computedId">
    <slot name="first" />
    <template v-for="(option, index) in normalizedOptsWrapper" :key="index">
      <BFormSelectOption :value="option.value" :disabled="option.disabled">
        {{ option.text }}
      </BFormSelectOption>
    </template>
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

const _props = withDefaults(defineProps<BFormDatalistProps>(), {
  disabled: false,
  disabledField: 'disabled',
  id: undefined,
  // eslint-disable-next-line vue/require-valid-default-prop
  options: () => [],
  textField: 'text',
  valueField: 'value',
})
const props = useDefaults(_props, 'BFormDatalist')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  first?: (props: Record<string, never>) => any
}>()

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
