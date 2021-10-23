<template>
  <textarea
    :id="computedId"
    ref="textarea"
    :class="classes"
    :name="name || undefined"
    :form="form || undefined"
    :disabled="disabled"
    :placeholder="placeholder"
    :required="required"
    :autocomplete="autocomplete || undefined"
    :readonly="readonly || plaintext"
    :aria-required="required ? 'true' : undefined"
    :aria-invalid="computedAriaInvalid"
    :rows="rows"
    v-bind="$attrs"
    @input="onInput($event)"
    @change="onChange($event)"
    @blur="onBlur($event)"
  ></textarea>
</template>

<script lang="ts">
import {Size} from '../../types'
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

export default defineComponent({
  name: 'BFormTextarea',
  props: {
    ariaInvalid: {
      type: [Boolean, String] as PropType<boolean | 'false' | 'true' | 'grammar' | 'spelling'>,
      default: false,
    },
    autocomplete: {type: String, required: false},
    autofocus: {type: Boolean, default: false},
    rows: {type: [String, Number], default: 2},
    // debounce: {type: [String, Number], default: 0}, TODO: not implemented yet
    disabled: {type: Boolean, default: false},
    form: {type: String, required: false},
    formatter: {type: Function, required: false},
    id: {type: String, required: false},
    lazy: {type: Boolean, default: false},
    lazyFormatter: {type: Boolean, default: false},
    modelValue: {type: [String, Number] as PropType<string | number>, default: ''},
    name: {type: String, required: false},
    // noWheel: {type: Boolean, default: false}, TODO: not implemented yet
    placeholder: {type: String, required: false},
    plaintext: {type: Boolean, default: false},
    readonly: {type: Boolean, default: false},
    required: {type: Boolean, default: false},
    size: {type: String as PropType<Size>, required: false},
    state: {type: Boolean as PropType<boolean | null | undefined>, default: null},
    trim: {type: Boolean, default: false},
  },
  emits: ['update:modelValue', 'change', 'blur', 'input'],
  setup(props, {emit}) {
    const textarea = ref<HTMLInputElement>()
    let inputValue: string | null = null
    let neverFormatted = true
    const computedId = useId(props.id, 'textarea')

    const _formatValue = (value: unknown, evt: any, force = false) => {
      const {formatter, lazyFormatter} = props
      value = String(value)
      if (typeof formatter === 'function' && (!lazyFormatter || force)) {
        neverFormatted = false
        return formatter(value, evt)
      }
      return value
    }

    const _getModelValue = (value: any) => {
      const {trim} = props

      if (trim) return value.trim()

      return value
    }

    const handleAutofocus = () => {
      nextTick(() => {
        if (props.autofocus) textarea.value?.focus()
      })
    }

    onMounted(handleAutofocus)
    onMounted(() => {
      if (textarea.value) {
        textarea.value.value = props.modelValue as string
      }
    })

    onActivated(handleAutofocus)

    const classes = computed(() => {
      const {plaintext, size, state} = props
      return {
        'form-control': !plaintext,
        'form-control-plaintext': plaintext,
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
      return state === false ? 'true' : undefined
    })

    const onInput = (evt: Event) => {
      const {lazy, modelValue} = props
      const {value} = evt.target as HTMLTextAreaElement
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

    const onChange = (evt: Event) => {
      const {lazy, modelValue} = props
      const {value} = evt.target as HTMLTextAreaElement
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

    const onBlur = (evt: Event) => {
      const {lazy, lazyFormatter} = props
      emit('blur', evt)
      if (!lazy && !lazyFormatter) return

      const {value} = evt.target as HTMLTextAreaElement
      const formattedValue = _formatValue(value, evt, true)

      inputValue = value
      emit('update:modelValue', formattedValue)
    }

    const focus = () => {
      if (!props.disabled) textarea.value?.focus()
    }

    const blur = () => {
      if (!props.disabled) {
        textarea.value?.blur()
      }
    }

    watch(
      () => props.modelValue,
      (newValue) => {
        if (!textarea.value) return
        textarea.value.value = inputValue && neverFormatted ? inputValue : (newValue as string)
        inputValue = null
        neverFormatted = true
      }
    )

    return {
      textarea,
      computedId,
      computedAriaInvalid,
      classes,
      onInput,
      onChange,
      onBlur,
      focus,
      blur,
    }
  },
})
</script>
