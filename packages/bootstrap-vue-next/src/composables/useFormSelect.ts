import {computed, type MaybeRefOrGetter, readonly, toRef} from 'vue'
import {get} from '../utils'
import type {ComplexSelectOptionRaw, SelectOption} from '../types'

export default (
  options: MaybeRefOrGetter<ReadonlyArray<unknown>>,
  props: MaybeRefOrGetter<Record<string, unknown>>
) => {
  const propsValue = readonly(toRef(props)) // as Readonly<Record<string, unknown>>
  const optionsValue = readonly(toRef(options))

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

    const value: unknown = get(option, propsValue.value.valueField as string)
    const text: string = get(option, propsValue.value.textField as string)
    const html: string = get(option, propsValue.value.htmlField as string)
    const disabled: boolean = get(option, propsValue.value.disabledField as string)

    const opts: undefined | unknown[] = propsValue.value.optionsField
      ? get(option, propsValue.value.optionsField as string)
      : undefined

    if (opts !== undefined) {
      return {
        label: get(option, propsValue.value.labelField as string) || text,
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
    opts: Readonly<unknown[]>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): (ComplexSelectOptionRaw | SelectOption)[] => opts.map((option) => normalizeOption(option))

  const normalizedOptions = computed(() => normalizeOptions(optionsValue.value))

  return {normalizedOptions, isComplex}
}
