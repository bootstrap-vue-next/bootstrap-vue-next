import {computed, ComputedRef} from 'vue'

const _getComputedAriaInvalid = (props: any): ComputedRef => {
  return computed(() => {
    const {ariaInvalid, state} = props
    if (ariaInvalid === true || ariaInvalid === 'true' || ariaInvalid === '') {
      return 'true'
    }

    const computedState = typeof state === 'boolean' ? props.state : null
    return computedState === false ? 'true' : ariaInvalid
  })
}

const getClasses = (props: any): ComputedRef => {
  return computed(() => ({
    'form-check': !props.plain && !props.button,
    'form-check-inline': !props.plain && props.inline,
    'form-switch': props.switch,
    [`form-control-${props.size}`]: props.size && props.size !== 'md',
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

const getGroupAttr = (props: any): ComputedRef => {
  return computed(() => ({
    'aria-invalid': _getComputedAriaInvalid(props).value,
    'aria-required': props.required,
  }))
}

const getGroupClasses = (props: any): ComputedRef => {
  return computed(() => ({
    'was-validated': props.validated,
  }))
}

const slotsToElements = (slots: Array<any>, nodeType: String, disabled: Boolean) => {
  return slots
    .filter((e: any) => e.type.name === nodeType)
    .map((e: any) => {
      const txtChild = e.children.default().find((e: any) => e.type.toString() === 'Symbol(Text)')

      return {
        props: {
          disabled: disabled,
          ...e.props,
        },
        text: txtChild ? txtChild.children : '',
      }
    })
}

const optionToElement = (option: any, props: any) => {
  const {valueField, disabled, disabledField, textField, htmlField} = props
  return {
    props: {
      value: option[valueField],
      disabled: disabled || option[disabledField],
    },
    text: option[textField],
    html: option[htmlField],
  }
}

export {
  getClasses,
  getInputClasses,
  getLabelClasses,
  getGroupAttr,
  getGroupClasses,
  slotsToElements,
  optionToElement,
}
