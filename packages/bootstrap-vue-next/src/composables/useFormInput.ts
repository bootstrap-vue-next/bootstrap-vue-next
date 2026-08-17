import type {Numberish} from '../types/CommonTypes'
import {
  computed,
  inject,
  nextTick,
  onActivated,
  onMounted,
  ref,
  watch,
  type Ref,
  type ShallowRef,
} from 'vue'
import {useAriaInvalid} from './useAriaInvalid'
import {useId} from './useId'
import {useFocus, useToNumber} from '@vueuse/core'
import type {CommonInputProps} from '../types/FormCommonInputProps'
import {formGroupKey} from '../utils/keys'
import {useDebounceFn} from '../utils/debounce'
import {useStateClass} from './useStateClass'

export const useFormInput = (
  props: Readonly<CommonInputProps>,
  input:
    | Readonly<ShallowRef<HTMLInputElement | null>>
    | Readonly<ShallowRef<HTMLTextAreaElement | null>>,
  modelValue: Ref<Numberish | null>,
  modelModifiers: Record<'number' | 'lazy' | 'trim', true | undefined>
) => {
  const computedId = useId(() => props.id, 'input')
  const debounceNumber = useToNumber(() => props.debounce ?? 0, {nanToZero: true})
  const debounceMaxWaitNumber = useToNumber(() => props.debounceMaxWait ?? Number.NaN)

  // This automatically adds the appropriate "for" attribute to a BFormGroup label
  const formGroupData = inject(formGroupKey, null)?.()
  formGroupData?.track(computedId)
  const computedState = computed(() =>
    props.state !== undefined ? props.state : (formGroupData?.state.value ?? null)
  )
  const isDisabled = computed(() => props.disabled || (formGroupData?.disabled.value ?? false))
  const computedAriaInvalid = useAriaInvalid(() => props.ariaInvalid, computedState)
  const stateClass = useStateClass(computedState)

  // Holds what the user has typed while a debounced model update is still in
  // flight, during which the model itself still has the previous value. Vue
  // re-patches the `value` DOM prop on every re-render, so an unrelated
  // re-render inside that window resets the field to the stale model and
  // swallows the keystroke. BFormTextarea's auto-resize does exactly that: it
  // writes an inline height on each input, so `debounce` + `max-rows` together
  // dropped characters as you typed.
  const pendingValue = ref<Numberish | null>(null)

  const internalUpdateModelValue = useDebounceFn(
    (value: Numberish) => {
      modelValue.value = value
      pendingValue.value = null
    },
    () => (modelModifiers.lazy === true ? 0 : debounceNumber.value),
    {maxWait: () => (modelModifiers.lazy === true ? Number.NaN : debounceMaxWaitNumber.value)}
  )

  const updateModelValue = (value: Numberish, force = false, immediate = false) => {
    if (modelModifiers.lazy === true && force === false) return
    if (immediate) {
      pendingValue.value = null
      modelValue.value = value
    } else {
      pendingValue.value = value
      internalUpdateModelValue(value)
    }
  }

  // A model change from anywhere else (most often the parent assigning a new
  // value) takes precedence over an in-flight edit. Dropping the pending value
  // is not enough on its own: the debounced write is still scheduled, and left
  // alone it would fire later and push the superseded edit back onto the model.
  watch(modelValue, () => {
    internalUpdateModelValue.cancel()
    pendingValue.value = null
  })

  // What the control should actually display: the in-flight value when there is
  // one, otherwise the model.
  const computedValue = computed(() => pendingValue.value ?? modelValue.value ?? undefined)

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

  const syncDisplayedValue = (nextValue: string) => {
    if (input.value && input.value.value !== nextValue) {
      input.value.value = nextValue
    }
  }

  const onInput = (evt: Readonly<Event>) => {
    const {value} = evt.target as HTMLInputElement
    const formattedValue = _formatValue(value, evt)
    if (evt.defaultPrevented) {
      evt.preventDefault()
      return
    }

    const nextModel = formattedValue

    updateModelValue(nextModel)
    // If the formatter changed the value, directly update the input's visual value
    // to keep the displayed text in sync with the model. Without this, if the
    // formatted value equals the previous model value, Vue's reactivity won't
    // re-render the input and the raw (unformatted) text remains visible.
    if (formattedValue !== value) {
      syncDisplayedValue(formattedValue)
    }
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
    if (
      !modelModifiers.lazy &&
      !props.lazyFormatter &&
      !modelModifiers.trim &&
      debounceNumber.value <= 0
    )
      return

    const {value} = evt.target as HTMLInputElement
    const formattedValue = _formatValue(value, evt, true)

    const nextModel = modelModifiers.trim ? formattedValue.trim() : formattedValue

    // Cancel before modelValue.value comparison and update. The cancelled
    // update will never land, so the in-flight value must be dropped too --
    // otherwise it would keep shadowing the model after blur.
    internalUpdateModelValue.cancel()
    pendingValue.value = null
    if (modelValue.value !== nextModel) {
      updateModelValue(nextModel, true, true)
    }

    // If the formatter or trim changed the displayed text, directly sync the DOM.
    // This handles the case where lazyFormatter defers formatting to blur and the
    // formatted value equals the current model (so Vue's reactivity won't re-render).
    if (nextModel !== value) {
      syncDisplayedValue(nextModel)
    }
  }

  const focus = () => {
    if (!isDisabled.value) {
      focused.value = true
    }
  }

  const blur = () => {
    if (!isDisabled.value) {
      focused.value = false
    }
  }

  return {
    input,
    computedId,
    computedAriaInvalid,
    computedValue,
    onInput,
    onChange,
    onBlur,
    focus,
    blur,
    stateClass,
    isDisabled,
  }
}
