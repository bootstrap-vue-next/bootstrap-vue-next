import {Size} from '../types'
import {
  computed,
  ExtractPropTypes,
  nextTick,
  onActivated,
  onMounted,
  PropType,
  ref,
  watch,
} from 'vue'
import useId from './useId'

export const COMMON_INPUT_PROPS = {
  ariaInvalid: {
    type: [Boolean, String] as PropType<boolean | 'false' | 'true' | 'grammar' | 'spelling'>,
    default: false,
  },
  autocomplete: {type: String, required: false},
  autofocus: {type: Boolean, default: false},
  disabled: {type: Boolean, default: false},
  form: {type: String, required: false},
  formatter: {type: Function, required: false},
  id: {type: String, required: false},
  lazy: {type: Boolean, default: false},
  lazyFormatter: {type: Boolean, default: false},
  list: {type: String, required: false},
  modelValue: {type: [String, Number] as PropType<string | number>, default: ''},
  name: {type: String, required: false},
  number: {type: Boolean, default: false},
  placeholder: {type: String, required: false},
  plaintext: {type: Boolean, default: false},
  readonly: {type: Boolean, default: false},
  required: {type: Boolean, default: false},
  size: {type: String as PropType<Size>, required: false},
  state: {type: Boolean as PropType<boolean | null | undefined>, default: null},
  trim: {type: Boolean, default: false},
}

type InputProps = ExtractPropTypes<typeof COMMON_INPUT_PROPS>
type InputEmitType = (
  event: 'update:modelValue' | 'change' | 'blur' | 'input',
  ...args: any[]
) => void

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
function useFormInput(props: Readonly<InputProps>, emit: InputEmitType) {
  const input = ref<HTMLInputElement>()
  let inputValue: string | null = null
  let neverFormatted = true
  const computedId = useId(props.id, 'input')

  const _formatValue = (value: unknown, evt: any, force = false) => {
    value = String(value)
    if (typeof props.formatter === 'function' && (!props.lazyFormatter || force)) {
      neverFormatted = false
      return props.formatter(value, evt)
    }
    return value
  }

  const _getModelValue = (value: any) => {
    if (props.trim) return value.trim()
    if (props.number) return parseFloat(value)

    return value
  }

  const handleAutofocus = () => {
    nextTick(() => {
      if (props.autofocus) input.value?.focus()
    })
  }

  onMounted(handleAutofocus)
  onMounted(() => {
    if (input.value) {
      input.value.value = props.modelValue as string
    }
  })

  onActivated(handleAutofocus)

  const computedAriaInvalid = computed(() => {
    if (props.ariaInvalid) {
      return props.ariaInvalid.toString()
    }
    return props.state === false ? 'true' : undefined
  })

  const onInput = (evt: Event) => {
    const {value} = evt.target as HTMLInputElement
    const formattedValue = _formatValue(value, evt)
    if (formattedValue === false || evt.defaultPrevented) {
      evt.preventDefault()
      return
    }

    if (props.lazy) return
    emit('input', formattedValue)

    const nextModel = _getModelValue(formattedValue)

    if (props.modelValue !== nextModel) {
      inputValue = value
      emit('update:modelValue', nextModel)
    }
  }

  const onChange = (evt: Event) => {
    const {value} = evt.target as HTMLInputElement
    const formattedValue = _formatValue(value, evt)
    if (formattedValue === false || evt.defaultPrevented) {
      evt.preventDefault()
      return
    }

    if (!props.lazy) return
    inputValue = value
    emit('update:modelValue', formattedValue)

    const nextModel = _getModelValue(formattedValue)
    if (props.modelValue !== nextModel) {
      emit('change', formattedValue)
    }
  }

  const onBlur = (evt: FocusEvent) => {
    emit('blur', evt)
    if (!props.lazy && !props.lazyFormatter) return

    const {value} = evt.target as HTMLInputElement
    const formattedValue = _formatValue(value, evt, true)

    inputValue = value
    emit('update:modelValue', formattedValue)
  }

  const focus = () => {
    if (!props.disabled) input.value?.focus()
  }

  const blur = () => {
    if (!props.disabled) {
      input.value?.blur()
    }
  }

  watch(
    () => props.modelValue,
    (newValue) => {
      if (!input.value) return
      input.value.value = inputValue && neverFormatted ? inputValue : (newValue as string)
      inputValue = null
      neverFormatted = true
    }
  )

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

export default useFormInput
