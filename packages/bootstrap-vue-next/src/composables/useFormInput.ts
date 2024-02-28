import type {Numberish} from '../types'
import {nextTick, onActivated, onMounted, ref} from 'vue'
import useAriaInvalid from './useAriaInvalid'
import useId from './useId'
import {useDebounceFn, useFocus, useToNumber, useVModel} from '@vueuse/core'
import type {CommonInputProps} from '../types/FormCommonInputProps'

export default (
  props: Readonly<CommonInputProps>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  emit: (evt: 'update:modelValue', val: any) => void
) => {
  const input = ref<HTMLInputElement | null>(null)

  const modelValue = useVModel(props, 'modelValue', emit, {passive: true})

  const computedId = useId(() => props.id, 'input')
  const debounceNumber = useToNumber(() => props.debounce ?? 0)
  const debounceMaxWaitNumber = useToNumber(() => props.debounceMaxWait ?? NaN)

  const internalUpdateModelValue = useDebounceFn(
    (value: Numberish | undefined) => {
      modelValue.value = value
    },
    () => (props.lazy === true ? 0 : debounceNumber.value),
    {maxWait: () => (props.lazy === true ? NaN : debounceMaxWaitNumber.value)}
  )

  const updateModelValue = (value: Numberish | undefined, force = false) => {
    if (props.lazy === true && force === false) return
    internalUpdateModelValue(value)
  }

  const {focused} = useFocus(input, {
    initialValue: props.autofocus,
  })

  const _formatValue = (value: string, evt: Readonly<Event>, force = false) => {
    if (props.formatter !== undefined && (!props.lazyFormatter || force)) {
      return props.formatter(value, evt)
    }
    return value
  }

  const _getModelValue = (value: string) => {
    if (props.trim) return value.trim()
    if (props.number) return Number.parseFloat(value)

    return value
  }

  onMounted(() => {
    if (input.value) {
      input.value.value = modelValue.value?.toString() ?? ''
    }
  })

  onActivated(() => {
    nextTick(() => {
      if (props.autofocus) {
        focused.value = true
      }
    })
  })

  const computedAriaInvalid = useAriaInvalid(
    () => props.ariaInvalid,
    () => props.state
  )

  const onInput = (evt: Readonly<Event>) => {
    const {value} = evt.target as HTMLInputElement
    const formattedValue = _formatValue(value, evt)
    if (evt.defaultPrevented) {
      evt.preventDefault()
      return
    }

    const nextModel = _getModelValue(formattedValue)

    updateModelValue(nextModel)
  }

  const onChange = (evt: Readonly<Event>) => {
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
  }

  const onBlur = (evt: Readonly<FocusEvent>) => {
    if (!props.lazy && !props.lazyFormatter) return

    const {value} = evt.target as HTMLInputElement
    const formattedValue = _formatValue(value, evt, true)

    const nextModel = _getModelValue(formattedValue)
    if (modelValue.value !== nextModel) {
      updateModelValue(formattedValue, true)
    }
  }

  const focus = () => {
    if (!props.disabled) {
      focused.value = true
    }
  }

  const blur = () => {
    if (!props.disabled) {
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
