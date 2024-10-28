import type {Numberish} from '../types/CommonTypes'
import {nextTick, onActivated, onMounted, ref, type Ref, type ShallowRef} from 'vue'
import {useAriaInvalid} from './useAriaInvalid'
import {useId} from './useId'
import {useDebounceFn, useFocus, useToNumber} from '@vueuse/core'
import type {CommonInputProps} from '../types/FormCommonInputProps'

export const useFormInput = (
  props: Readonly<CommonInputProps>,
  input:
    | Readonly<ShallowRef<HTMLInputElement | null>>
    | Readonly<ShallowRef<HTMLTextAreaElement | null>>,
  modelValue: Ref<Numberish | null>,
  modelModifiers: Record<'number' | 'lazy' | 'trim', true | undefined>
) => {
  const forceUpdateKey = ref(0)

  const computedId = useId(() => props.id, 'input')
  const debounceNumber = useToNumber(() => props.debounce ?? 0)
  const debounceMaxWaitNumber = useToNumber(() => props.debounceMaxWait ?? NaN)

  const internalUpdateModelValue = useDebounceFn(
    (value: Numberish) => {
      modelValue.value = value
    },
    () => (modelModifiers.lazy === true ? 0 : debounceNumber.value),
    {maxWait: () => (modelModifiers.lazy === true ? NaN : debounceMaxWaitNumber.value)}
  )

  const updateModelValue = (value: Numberish, force = false) => {
    if (modelModifiers.lazy === true && force === false) return
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

    const nextModel = formattedValue

    updateModelValue(nextModel)
  }

  const onChange = (evt: Readonly<Event>) => {
    const {value} = evt.target as HTMLInputElement
    const formattedValue = _formatValue(value, evt)
    if (evt.defaultPrevented) {
      evt.preventDefault()
      return
    }

    const nextModel = formattedValue
    if (modelValue.value !== nextModel) {
      updateModelValue(formattedValue, true)
    }
  }

  const onBlur = (evt: Readonly<FocusEvent>) => {
    if (!modelModifiers.lazy && !props.lazyFormatter && !modelModifiers.trim) return

    const {value} = evt.target as HTMLInputElement
    const formattedValue = _formatValue(value, evt, true)

    const nextModel = modelModifiers.trim ? formattedValue.trim() : formattedValue
    const needsForceUpdate = nextModel.length !== formattedValue.length
    if (modelValue.value !== nextModel) {
      updateModelValue(formattedValue, true)
    }
    if (modelModifiers.trim && needsForceUpdate) {
      // The value is trimmed but there would still exist some white space
      // So, force update the value. You need to bind this to :key on the input element
      forceUpdateKey.value = forceUpdateKey.value + 1
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
    forceUpdateKey,
  }
}
