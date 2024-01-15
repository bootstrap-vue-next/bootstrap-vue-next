import {computed, type MaybeRefOrGetter, toValue} from 'vue'
import type {ComplexSelectOptionRaw, SelectOption, SelectOptionRaw} from '../types'

export default <
  T extends readonly SelectOptionRaw[] | readonly (ComplexSelectOptionRaw | SelectOptionRaw)[],
>(
  options: MaybeRefOrGetter<T>
) => {
  const isComplex = (option: unknown): option is ComplexSelectOptionRaw =>
    typeof option === 'object' && option !== null && 'label' in option

  const normalizeOption = (option: SelectOptionRaw): SelectOption => {
    if (typeof option === 'string') {
      return {value: option, text: option}
    }

    return {
      value: option.value,
      text: option.text,
      html: option.html,
      disabled: option.disabled,
    }
  }

  const normalizeOptions = (
    options: T
  ): T extends readonly SelectOptionRaw[]
    ? SelectOption[]
    : (SelectOption | ComplexSelectOptionRaw)[] =>
    options.map((option) =>
      isComplex(option) ? option : normalizeOption(option)
    ) as T extends readonly SelectOptionRaw[]
      ? SelectOption[]
      : (SelectOption | ComplexSelectOptionRaw)[]

  const normalizedOptions = computed(() => normalizeOptions(toValue(options)))

  return {normalizedOptions, isComplex}
}
