<template>
  <optgroup :label="props.label">
    <slot name="first" />
    <BFormSelectOption
      v-for="(option, index) in normalizedOptions"
      :key="index"
      :disabled="option.disabled"
      :value="option.value"
      :class="option.class"
      v-bind="option.attrs"
    >
      <slot name="option" v-bind="option">
        {{ option.text }}
      </slot>
    </BFormSelectOption>
    <slot />
  </optgroup>
</template>

<script
  setup
  lang="ts"
  generic="Item = Record<string, unknown>, ValueKey extends keyof Item = keyof Item"
>
import BFormSelectOption from './BFormSelectOption.vue'
import type {BFormSelectOptionGroupProps} from '../../types/ComponentProps'
import type {ComputedRef} from 'vue'
import {useFormSelect} from '../../composables/useFormSelect'
import type {SelectOption} from '../../types/SelectTypes'
import type {BFormSelectOptionGroupSlots} from '../../types'

const props = withDefaults(defineProps<BFormSelectOptionGroupProps<Item>>(), {
  disabledField: 'disabled' as keyof Item & string,
  label: undefined,
  options: () => [],
  textField: 'text' as keyof Item & string,
  valueField: 'value' as keyof Item & string,
})
defineSlots<BFormSelectOptionGroupSlots<Item[ValueKey]>>()

// The form select context is injected by BFormSelectOption components automatically
// We don't need to handle the selected value here since each BFormSelectOption
// will inject the context directly

const {normalizedOptions} = useFormSelect(() => props.options, props) as {
  normalizedOptions: ComputedRef<SelectOption<Item[ValueKey]>[]>
}
</script>
