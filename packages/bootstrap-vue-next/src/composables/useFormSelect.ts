import {computed, type MaybeRefOrGetter, toValue} from 'vue'
import {get} from '../utils'
import type {ComplexSelectOptionRaw, SelectOption} from '../types'

export default (options: MaybeRefOrGetter, props: Record<string, unknown>) => {
  const isComplex = (option: unknown): option is ComplexSelectOptionRaw =>
    typeof option === 'object' && option !== null && 'label' in option

  const normalizeOption = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    option: any
  ): ComplexSelectOptionRaw | SelectOption => {
    if (typeof option === 'string') {
      return {value: option, text: option}
    }
    if (typeof option === 'number') {
      return {value: option, text: `${option}`}
    }
    if (option instanceof Date) {
      return {value: option, text: option.toLocaleString()}
    }

    const value: unknown = get(option, props.valueField as string)
    const text: string = get(option, props.textField as string)
    const html: string = get(option, props.htmlField as string)
    const disabled: boolean = get(option, props.disabledField as string)

    const opts: undefined | (unknown | Record<string, unknown>)[] = props.optionsField
      ? get(option, props.optionsField as string)
      : undefined

    if (opts !== undefined) {
      return {
        label: get(option, props.labelField as string) || text,
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
    options: (unknown | Record<string, unknown>)[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): (ComplexSelectOptionRaw | SelectOption)[] => options.map((option) => normalizeOption(option))

  const normalizedOptions = computed(() => normalizeOptions(toValue(options)))

  return {normalizedOptions, isComplex}
}
