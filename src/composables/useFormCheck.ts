import useId from '@/composables/useId'
import {attemptBlur, attemptFocus} from '@/utils/dom'
import {computed, ComputedRef, onMounted, ref, Ref} from 'vue'

export const computeLocalChecked = (
  isChecked: boolean | undefined,
  propsChecked: unknown,
  value: string | boolean,
  uncheckedValue: string | boolean
): CheckType => {
  if (isChecked === false) {
    if (propsChecked === null || propsChecked === undefined) {
      return null
    }

    if (Array.isArray(propsChecked)) {
      removeElementFromArray(propsChecked, value)
      return propsChecked
    }
    if (uncheckedValue) {
      return uncheckedValue
    }
    return false
  } else if (isChecked === true) {
    if (Array.isArray(propsChecked)) {
      if (propsChecked.indexOf(value) < 0) {
        propsChecked.push(value)
      }
      return propsChecked
    }
    if (value) {
      return value
    }
    return true
  }

  return isChecked
}

type CheckType = boolean | string | null | undefined | Array<unknown>
type EmitFn = (event: string, value: boolean | string | Array<any> | CheckType) => void
export const computeIsChecked = (
  checked: boolean | undefined,
  propsChecked: CheckType,
  value: CheckType
): boolean | undefined => {
  if (Array.isArray(propsChecked) && checked) return checked
  if (propsChecked === false) {
    return false
  }
  return propsChecked === true ? true : propsChecked !== null && value === propsChecked
}

interface UseFormCheck {
  computedId: ComputedRef<string>
  classes: ComputedRef<Record<string, boolean>>
  inputClasses: ComputedRef<Record<string, boolean | undefined>>
  labelClasses: ComputedRef<Record<string, boolean | undefined>>
  isChecked: Ref<boolean | undefined>
  isRequired: ComputedRef<boolean | undefined>
  focus: () => void
  blur: () => void
  onInput: (event: Event) => void
  localChecked: Ref<unknown>
  input: Ref<HTMLElement>
}

const removeElementFromArray = (array: Array<unknown>, value: unknown) => {
  const index = array.indexOf(value)
  if (index > -1) {
    array.splice(index, 1)
  }
}

export const handleUpdate = (
  isChecked: Ref<boolean | undefined>,
  checked: CheckType,
  value: string | boolean,
  uncheckedValue: string | boolean,
  localChecked: Ref<unknown>,
  emit: EmitFn
): void => {
  isChecked.value = computeIsChecked(isChecked.value, checked, value)

  if (localChecked.value !== checked) {
    emit('input', checked)
    // console.log('input emitted', checked);
    emit('update:modelValue', checked)
  }

  if (!Array.isArray(checked)) {
    localChecked.value = computeLocalChecked(isChecked.value, checked, value, uncheckedValue)
  } else {
    for (const value of localChecked.value as Array<unknown>) {
      if (checked.indexOf(value) < 0) {
        removeElementFromArray(localChecked.value as Array<unknown>, value)
      }
    }
    if (isChecked.value) {
      if ((localChecked.value as Array<string | boolean | null>).indexOf(value) < 0) {
        ;(localChecked.value as Array<string | boolean | null>).push(value)
      }
    } else {
      removeElementFromArray(localChecked.value as Array<string | boolean>, value)
    }
  }
}

export function useFormCheck(
  id: string | undefined,
  autofocus: boolean,
  plain: boolean,
  button: boolean,
  inline: boolean,
  switchCheck: boolean,
  state: boolean | null | undefined,
  checked: boolean | string | Array<any>,
  value: string | boolean,
  buttonVariant: string,
  uncheckedValue: string | boolean,
  formName: string | undefined,
  required: boolean | undefined,
  disabled: boolean,
  size: string | undefined,
  emit: EmitFn
): UseFormCheck {
  const input: Ref<HTMLElement> = ref(null as unknown as HTMLElement)
  const computedId = useId(id, 'form-check')

  if (autofocus) {
    onMounted(() => {
      attemptFocus(input.value)
    })
  }

  // computed
  const classes = computed(() => ({
    'form-check': !plain && !button,
    'form-check-inline': !plain && inline,
    'form-switch': switchCheck,
    [`form-control-${size}`]: size !== 'md',
  }))

  const inputClasses = computed(() => ({
    'form-check-input': !plain && !button,
    'is-valid': state === true,
    'is-invalid': state === false,
    'btn-check': button,
  }))

  const isChecked = ref(computeIsChecked(undefined, checked, value))
  const localChecked = ref(computeLocalChecked(isChecked.value, checked, value, uncheckedValue))
  const isFocused = ref(false)

  const labelClasses = computed((): Record<string, boolean | undefined> => {
    const classes: Record<string, boolean | undefined> = {
      'form-check-label': !plain && !button,
      'btn': button,
      'active': isChecked.value,
      'focus': isFocused.value,
    }
    classes[`btn-${buttonVariant}`] = button
    return classes
  })

  const isRequired = computed(() => {
    if (!formName) {
      return undefined
    }
    return required
  })

  const focus = () => {
    isFocused.value = true
    if (!disabled) {
      attemptFocus(input.value)
    }
  }
  const blur = () => {
    isFocused.value = false
    if (!disabled) {
      attemptBlur(input.value as unknown as HTMLElement)
    }
  }

  const onInput = (event: Event) => {
    if (event.target) isChecked.value = (event.target as HTMLInputElement).checked
    if (checked === null || checked === undefined) {
      if (isChecked.value) localChecked.value = value
      else localChecked.value = uncheckedValue
    } else {
      localChecked.value = computeLocalChecked(isChecked.value, checked, value, uncheckedValue)
    }
    emit('change', localChecked.value)
    // console.log('change emitted', localChecked.value);
    emit('update:modelValue', localChecked.value)
  }

  return {
    computedId,
    classes,
    inputClasses,
    labelClasses,
    isChecked,
    isRequired,
    focus,
    blur,
    onInput,
    localChecked,
    input,
  }
}

const getClasses = (props: any): ComputedRef => {
  return computed(() => ({
    'form-check': !props.plain && !props.button,
    'form-check-inline': !props.plain && props.inline,
    'form-switch': props.switchCheck,
    [`form-control-${props.size}`]: props.size !== 'md',
  }))
}

const getInputClasses = (props: any): ComputedRef => {
  return computed(() => ({
    'form-check-input': !props.plain && !props.button,
    'is-valid': props.state === true,
    'is-invalid': props.state === false,
    'btn-check': props.button,
  }))
}

const getLabelClasses = (props: any): ComputedRef => {
  return computed(() => ({
    'form-check-label': !props.plain && !props.button,
    'btn': props.button,
    [`btn-${props.buttonVariant}`]: props.button,
  }))
}

export {getClasses, getInputClasses, getLabelClasses}
