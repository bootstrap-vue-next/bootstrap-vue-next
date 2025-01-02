<template>
  <optgroup :label="props.label">
    <slot name="first" />
    <BFormSelectOption
      v-for="(option, index) in normalizedOptsWrapper"
      :key="index"
      :disabled="option.disabled"
      :value="option.value"
      v-bind="$attrs"
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
import {computed} from 'vue'
import {useFormSelect} from '../../composables/useFormSelect'
import type {SelectOption} from '../../types/SelectTypes'

const _props = withDefaults(defineProps<BFormSelectOptionGroupProps>(), {
  disabledField: 'disabled',
  label: undefined,
  options: () => [],
  textField: 'text',
  valueField: 'value',
})
const props = useDefaults(_props, 'BFormSelectOptionGroup')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  first?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  option: (props: SelectOption<T>) => any
}>()

const {normalizedOptions} = useFormSelect(() => props.options, props)

const normalizedOptsWrapper = computed(() => normalizedOptions.value as SelectOption<T>[])
</script>
