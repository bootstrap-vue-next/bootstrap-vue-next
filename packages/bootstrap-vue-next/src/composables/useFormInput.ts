import type {AriaInvalid, Booleanish, Size} from '../types'
import {nextTick, onActivated, onMounted, ref} from 'vue'
import useAriaInvalid from './useAriaInvalid'
import useBooleanish from './useBooleanish'
import useId from './useId'
import {useDebounceFn, useFocus, useToNumber, useVModel} from '@vueuse/core'

export interface CommonInputProps {
  ariaInvalid?: AriaInvalid
  autocomplete?: string
  autofocus?: Booleanish
  disabled?: Booleanish
  form?: string
  debounce?: string | number
  debounceMaxWait?: string | number
  formatter?: (val: string, evt: Event) => string
  id?: string
  lazy?: Booleanish
  lazyFormatter?: Booleanish
  list?: string
  modelValue?: string | number
  name?: string
  number?: Booleanish
  placeholder?: string
  plaintext?: Booleanish
  readonly?: Booleanish
  required?: Booleanish
  size?: Size
  state?: Booleanish | null | undefined
  trim?: Booleanish
}

export default (
  props: Readonly<CommonInputProps>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  emit: ((evt: 'update:modelValue', val: any) => void) &
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ((evt: 'change', val: any) => void) &
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ((evt: 'blur', val: any) => void) &
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ((evt: 'input', val: any) => void)
) => {
  const input = ref<HTMLInputElement | null>(null)

  const modelValue = useVModel(props, 'modelValue', emit)

  const computedId = useId(() => props.id, 'input')
  const autofocusBoolean = useBooleanish(() => props.autofocus)
  const disabledBoolean = useBooleanish(() => props.disabled)
  const lazyBoolean = useBooleanish(() => props.lazy)
  const lazyFormatterBoolean = useBooleanish(() => props.lazyFormatter)
  const numberBoolean = useBooleanish(() => props.number)
  const stateBoolean = useBooleanish(() => props.state)
  const trimBoolean = useBooleanish(() => props.trim)
  const debounceNumber = useToNumber(() => props.debounce ?? 0)
  const debounceMaxWaitNumber = useToNumber(() => props.debounceMaxWait ?? NaN)

  const internalUpdateModelValue = useDebounceFn(
    (value: string | number | undefined) => {
      modelValue.value = value
    },
    () => (lazyBoolean.value === true ? 0 : debounceNumber.value),
    {maxWait: () => (lazyBoolean.value === true ? NaN : debounceMaxWaitNumber.value)}
  )

  const updateModelValue = (value: string | number | undefined, force = false) => {
    if (lazyBoolean.value === true && force === false) return
    internalUpdateModelValue(value)
  }

  const {focused} = useFocus(input, {
    initialValue: autofocusBoolean.value,
  })

  const _formatValue = (value: string, evt: Event, force = false) => {
    if (props.formatter !== undefined && (!lazyFormatterBoolean.value || force)) {
      return props.formatter(value, evt)
    }
    return value
  }

  const _getModelValue = (value: string) => {
    if (trimBoolean.value) return value.trim()
    if (numberBoolean.value) return Number.parseFloat(value)

    return value
  }

  onMounted(() => {
    if (input.value) {
      input.value.value = modelValue.value?.toString() ?? ''
    }
  })

  onActivated(() => {
    nextTick(() => {
      if (autofocusBoolean.value) {
        focused.value = true
      }
    })
  })

  const computedAriaInvalid = useAriaInvalid(() => props.ariaInvalid, stateBoolean)

  const onInput = (evt: Event) => {
    const {value} = evt.target as HTMLInputElement
    const formattedValue = _formatValue(value, evt)
    if (evt.defaultPrevented) {
      evt.preventDefault()
      return
    }

    const nextModel = _getModelValue(formattedValue)

    updateModelValue(nextModel)

    emit('input', formattedValue)
  }

  const onChange = (evt: Event) => {
    const {value} = evt.target as HTMLInputElement
    const formattedValue = _formatValue(value, evt)
    if (evt.defaultPrevented) {
      evt.preventDefault()
      return
    }

    const nextModel = _getModelValue(formattedValue)
    if (modelValue.value !== nextModel) {
      updateModelValue(formattedValue, true)
    }

    emit('change', formattedValue)
  }

  const onBlur = (evt: FocusEvent) => {
    emit('blur', evt)
    if (!lazyBoolean.value && !lazyFormatterBoolean.value) return

    const {value} = evt.target as HTMLInputElement
    const formattedValue = _formatValue(value, evt, true)

    const nextModel = _getModelValue(formattedValue)
    if (modelValue.value !== nextModel) {
      updateModelValue(formattedValue, true)
    }
  }

  const focus = () => {
    if (!disabledBoolean.value) {
      focused.value = true
    }
  }

  const blur = () => {
    if (!disabledBoolean.value) {
      focused.value = false
    }
  }

  return {
    input,
    computedId,
    computedAriaInvalid,
    onInput,
    onChange,
    onBlur,
    focus,
    blur,
  }
}
