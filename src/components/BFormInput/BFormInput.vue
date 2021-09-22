<template>
  <input
    :id="computedId"
    ref="input"
    :class="classes"
    :name="name || null"
    :form="form || null"
    :type="localType"
    :disabled="disabled"
    :placeholder="placeholder"
    :required="required"
    :autocomplete="autocomplete || null"
    :readonly="readonly || plaintext"
    :min="min"
    :max="max"
    :step="step"
    :list="type !== 'password' ? list : null"
    :aria-required="required ? 'true' : null"
    :aria-invalid="computedAriaInvalid"
    v-bind="$attrs"
    @input="onInput($event)"
    @change="onChange($event)"
    @blur="onBlur($event)"
  />
</template>

<script lang="ts">
import {InputType, Size} from '../../types'
import {
  computed,
  defineComponent,
  nextTick,
  onActivated,
  onMounted,
  PropType,
  ref,
  watch,
} from 'vue'
import useId from '../../composables/useId'

const allowedTypes = [
  'text',
  'number',
  'email',
  'password',
  'search',
  'url',
  'tel',
  'date',
  'time',
  'range',
  'color',
]

export default defineComponent({
  name: 'BFormInput',
  props: {
    ariaInvalid: {
      type: [Boolean, String] as PropType<boolean | 'false' | 'true' | 'grammar' | 'spelling'>,
      default: false,
    },
    autocomplete: {type: String},
    autofocus: {type: Boolean, default: false},
    // debounce: {type: [String, Number], default: 0}, TODO: not implemented yet
    disabled: {type: Boolean, default: false},
    form: {type: String},
    formatter: {type: Function},
    id: {type: String},
    lazy: {type: Boolean, default: false},
    lazyFormatter: {type: Boolean, default: false},
    list: {type: String},
    max: {type: [String, Number]},
    min: {type: [String, Number]},
    modelValue: {type: [String, Number] as PropType<string | number>, default: ''},
    name: {type: String},
    // noWheel: {type: Boolean, default: false}, TODO: not implemented yet
    number: {type: Boolean, default: false},
    placeholder: {type: String},
    plaintext: {type: Boolean, default: false},
    readonly: {type: Boolean, default: false},
    required: {type: Boolean, default: false},
    size: {type: String as PropType<Size>},
    step: {type: [String, Number]},
    state: {type: Boolean as PropType<boolean | null | undefined>, default: null},
    trim: {type: Boolean, default: false},
    type: {
      type: String as PropType<InputType>,
      default: 'text',
      validator: (value: string) => allowedTypes.includes(value),
    },
  },
  emits: ['update:modelValue', 'change', 'blur', 'input'],
  setup(props, {emit}) {
    const input = ref<HTMLInputElement>()
    let inputValue: string | null = null
    const computedId = useId(props.id, 'input')

    const _formatValue = (value: unknown, evt: any, force = false) => {
      const {formatter, lazyFormatter} = props
      value = String(value)
      if (typeof formatter === 'function' && (!lazyFormatter || force)) {
        return formatter(value, evt)
      }
      return value
    }

    const _getModelValue = (value: any) => {
      const {trim, number} = props

      if (trim) return value.trim()
      if (number) return parseFloat(value)

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

    const classes = computed(() => {
      const {plaintext, size, state, type} = props
      const isRange = type === 'range'
      const isColor = type === 'color'
      return {
        'form-range': isRange,
        'form-control': isColor || (!plaintext && !isRange),
        'form-control-color': isColor,
        'form-control-plaintext': plaintext && !isRange && !isColor,
        [`form-control-${size}`]: size,
        'is-valid': state === true,
        'is-invalid': state === false,
      }
    })

    const computedAriaInvalid = computed(() => {
      const {ariaInvalid, state} = props

      if (ariaInvalid) {
        return ariaInvalid.toString()
      }
      return state === false ? 'true' : null
    })

    const localType = computed(() => (allowedTypes.includes(props.type) ? props.type : 'text'))

    const onInput = (evt: any) => {
      const {lazy, modelValue} = props
      const {value} = evt.target
      const formattedValue = _formatValue(value, evt)
      if (formattedValue === false || evt.defaultPrevented) {
        evt.preventDefault()
        return
      }

      if (lazy) return
      emit('input', formattedValue)

      const nextModel = _getModelValue(formattedValue)

      if (modelValue !== nextModel) {
        inputValue = value
        emit('update:modelValue', nextModel)
      }
    }

    const onChange = (evt: any) => {
      const {lazy, modelValue} = props
      const {value} = evt.target
      const formattedValue = _formatValue(value, evt)
      if (formattedValue === false || evt.defaultPrevented) {
        evt.preventDefault()
        return
      }

      if (!lazy) return
      inputValue = value
      emit('update:modelValue', formattedValue)

      const nextModel = _getModelValue(formattedValue)
      if (modelValue !== nextModel) {
        emit('change', formattedValue)
      }
    }

    const onBlur = (evt: any) => {
      const {lazy, lazyFormatter} = props
      emit('blur', evt)
      if (!lazy && !lazyFormatter) return

      const {value} = evt.target
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
        input.value.value = inputValue ? inputValue : (newValue as string)
        inputValue = null
      }
    )

    return {
      input,
      computedId,
      computedAriaInvalid,
      classes,
      localType,
      onInput,
      onChange,
      onBlur,
      focus,
      blur,
    }
  },
})
</script>
