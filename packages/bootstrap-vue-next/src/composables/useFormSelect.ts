import {computed, type MaybeRefOrGetter, toValue} from 'vue'
import {get} from '../utils/object'
import type {ComplexSelectOptionRaw, SelectOption} from '../types'

export const useFormSelect = (
  options: MaybeRefOrGetter<ReadonlyArray<unknown>>,
  props: MaybeRefOrGetter<{
    valueField: string
    textField: string
    disabledField: string
    optionsField?: string
    labelField?: string
  }>
) => {
  const isComplex = (option: unknown): option is ComplexSelectOptionRaw =>
    typeof option === 'object' &&
    option !== null &&
    'options' in option &&
    Array.isArray((option as Record<string, unknown>).options)

  const normalizeOption = (option: unknown): ComplexSelectOptionRaw | SelectOption => {
    const propsValue = toValue(props)

    if (typeof option === 'string') {
      return {value: option, text: option} satisfies SelectOption
    }
    if (typeof option === 'number' || typeof option === 'boolean') {
      return {value: option, text: `${option}`} satisfies SelectOption
    }
    if (option instanceof Date) {
      return {value: option, text: option.toLocaleString()} satisfies SelectOption
    }

    const value: unknown = get(option, propsValue.valueField)
    const text: string = get(option, propsValue.textField)
    const disabled: boolean = get(option, propsValue.disabledField)

    const opts: undefined | unknown[] = propsValue.optionsField
      ? get(option, propsValue.optionsField)
      : undefined
    const label: string | undefined =
      (propsValue.labelField ? get(option, propsValue.labelField) : undefined) || text

    if (opts !== undefined && Array.isArray(opts)) {
      return {
        label,
        options: opts,
      } as ComplexSelectOptionRaw
    }

    return {
      ...(typeof option === 'object' ? option : undefined),
      value,
      text,
      disabled,
    } satisfies SelectOption
  }

  const normalizeOptions = (
    opts: ReadonlyArray<unknown>
  ): (ComplexSelectOptionRaw | SelectOption)[] => opts.map((option) => normalizeOption(option))

  const normalizedOptions = computed(() => normalizeOptions(toValue(options)))

  return {normalizedOptions, isComplex}
}
