import type {AriaInvalid, Booleanish, Size} from '../types'
import {computed, nextTick, onActivated, onMounted, ref, watch} from 'vue'
import {useBooleanish, useId} from '.'
import {resolveAriaInvalid} from '../utils'
import {useFocus} from '@vueuse/core'

export interface CommonInputProps {
  ariaInvalid?: AriaInvalid
  autocomplete?: string
  autofocus?: Booleanish
  disabled?: Booleanish
  form?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formatter?: (val: any, evt: any) => any
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

// export const COMMON_INPUT_PROPS = {
//   ariaInvalid: {
//     type: [Boolean, String] as PropType<AriaInvalid>,
//     default: undefined,
//   },
//   autocomplete: {type: String, required: false},
//   autofocus: {type: Boolean, default: false},
//   disabled: {type: Boolean, default: false},
//   form: {type: String, required: false},
//   formatter: {type: Function, required: false},
//   id: {type: String, required: false},
//   lazy: {type: Boolean, default: false},
//   lazyFormatter: {type: Boolean, default: false},
//   list: {type: String, required: false},
//   modelValue: {type: [String, Number] as PropType<string | number>, default: ''},
//   name: {type: String, required: false},
//   number: {type: Boolean, default: false},
//   placeholder: {type: String, required: false},
//   plaintext: {type: Boolean, default: false},
//   readonly: {type: Boolean, default: false},
//   required: {type: Boolean, default: false},
//   size: {type: String as PropType<Size>, required: false},
//   state: {type: Boolean as PropType<Booleanish | null | undefined>, default: null},
//   trim: {type: Boolean, default: false},
// }

export default (props: Readonly<CommonInputProps>, emit: any) => {
  const input = ref<HTMLInputElement | null>(null)
  let inputValue: string | null = null
  let neverFormatted = true
  const computedId = useId(() => props.id, 'input')
  const autofocusBoolean = useBooleanish(() => props.autofocus)
  const disabledBoolean = useBooleanish(() => props.disabled)
  const lazyBoolean = useBooleanish(() => props.lazy)
  const lazyFormatterBoolean = useBooleanish(() => props.lazyFormatter)
  const numberBoolean = useBooleanish(() => props.number)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const plaintextBoolean = useBooleanish(() => props.plaintext)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const readonlyBoolean = useBooleanish(() => props.readonly)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const requiredBoolean = useBooleanish(() => props.required)
  const stateBoolean = useBooleanish(() => props.state)
  const trimBoolean = useBooleanish(() => props.trim)

  const {focused} = useFocus(input, {
    initialValue: autofocusBoolean.value,
  })

  const _formatValue = (value: unknown, evt: Event, force = false) => {
    value = String(value)
    if (typeof props.formatter === 'function' && (!lazyFormatterBoolean.value || force)) {
      neverFormatted = false
      return props.formatter(value, evt)
    }
    return value
  }

  const _getModelValue = (value: any) => {
    if (trimBoolean.value) return value.trim()
    if (numberBoolean.value) return Number.parseFloat(value)

    return value
  }

  const handleAutofocus = () => {
    if (autofocusBoolean.value) {
      focused.value = true
    }
  }

  onMounted(() => {
    if (input.value) {
      input.value.value = props.modelValue as string
    }
  })

  onActivated(() => {
    nextTick(() => {
      handleAutofocus()
    })
  })

  const computedAriaInvalid = computed(() =>
    resolveAriaInvalid(props.ariaInvalid, stateBoolean.value)
  )

  const onInput = (evt: Event) => {
    const {value} = evt.target as HTMLInputElement
    const formattedValue = _formatValue(value, evt)
    if (formattedValue === false || evt.defaultPrevented) {
      evt.preventDefault()
      return
    }

    if (lazyBoolean.value) return

    const nextModel = _getModelValue(formattedValue)

    if (props.modelValue !== nextModel) {
      inputValue = value
      emit('update:modelValue', nextModel)
    }

    emit('input', formattedValue)
  }

  const onChange = (evt: Event) => {
    const {value} = evt.target as HTMLInputElement
    const formattedValue = _formatValue(value, evt)
    if (formattedValue === false || evt.defaultPrevented) {
      evt.preventDefault()
      return
    }

    if (!lazyBoolean.value) return
    inputValue = value
    emit('update:modelValue', formattedValue)

    const nextModel = _getModelValue(formattedValue)
    if (props.modelValue !== nextModel) {
      emit('change', formattedValue)
    }
  }

  const onBlur = (evt: FocusEvent) => {
    emit('blur', evt)
    if (!lazyBoolean.value && !lazyFormatterBoolean.value) return

    const {value} = evt.target as HTMLInputElement
    const formattedValue = _formatValue(value, evt, true)

    inputValue = value
    emit('update:modelValue', formattedValue)
  }

  const focus = () => {
    if (!disabledBoolean.value) {
      focused.value = true
    }
  }

  const blur = () => {
    if (!disabledBoolean.value) {
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
