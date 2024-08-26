import {computed, type MaybeRefOrGetter, toValue} from 'vue'
import {get} from '../utils/object'
import type {ComplexSelectOptionRaw, SelectOption} from '../types/SelectTypes'

export const useFormSelect = (
  options: MaybeRefOrGetter<ReadonlyArray<unknown>>,
  props: MaybeRefOrGetter<Record<string, unknown>>
) => {
  const isComplex = (option: unknown): option is ComplexSelectOptionRaw =>
    typeof option === 'object' && option !== null && 'label' in option

  const normalizeOption = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    option: any
  ): ComplexSelectOptionRaw | SelectOption => {
    const propsValue = toValue(props)

    if (typeof option === 'string') {
      return {value: option, text: option}
    }
    if (typeof option === 'number') {
      return {value: option, text: `${option}`}
    }
    if (option instanceof Date) {
      return {value: option, text: option.toLocaleString()}
    }

    const value: unknown = get(option, propsValue.valueField as string)
    const text: string = get(option, propsValue.textField as string)
    const html: string = get(option, propsValue.htmlField as string)
    const disabled: boolean = get(option, propsValue.disabledField as string)

    const opts: undefined | unknown[] = propsValue.optionsField
      ? get(option, propsValue.optionsField as string)
      : undefined

    if (opts !== undefined) {
      return {
        label: get(option, propsValue.labelField as string) || text,
        options: opts,
      } as ComplexSelectOptionRaw
    }

    return {
      value,
      text,
      html,
      disabled,
    } as SelectOption
  }

  const normalizeOptions = (
    opts: ReadonlyArray<unknown>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): (ComplexSelectOptionRaw | SelectOption)[] => opts.map((option) => normalizeOption(option))

  const normalizedOptions = computed(() => normalizeOptions(toValue(options)))

  return {normalizedOptions, isComplex}
}
