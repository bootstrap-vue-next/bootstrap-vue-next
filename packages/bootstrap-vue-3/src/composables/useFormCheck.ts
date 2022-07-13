import {computed, ComputedRef} from 'vue'

const _getComputedAriaInvalid = (props: any): ComputedRef =>
  computed(() => {
    if (props.ariaInvalid === true || props.ariaInvalid === 'true' || props.ariaInvalid === '') {
      return 'true'
    }

    const computedState = typeof props.state === 'boolean' ? props.state : null
    return computedState === false ? 'true' : props.ariaInvalid
  })

const getClasses = (props: any): ComputedRef =>
  computed(() => ({
    'form-check': !props.plain && !props.button,
    'form-check-inline': props.inline,
    'form-switch': props.switch,
    [`form-control-${props.size}`]: props.size && props.size !== 'md',
  }))

const getInputClasses = (props: any): ComputedRef =>
  computed(() => ({
    'form-check-input': !props.plain && !props.button,
    'is-valid': props.state === true,
    'is-invalid': props.state === false,
    'btn-check': props.button,
  }))

const getLabelClasses = (props: any): ComputedRef =>
  computed(() => ({
    'form-check-label': !props.plain && !props.button,
    'btn': props.button,
    [`btn-${props.buttonVariant}`]: props.button,
    [`btn-${props.size}`]: props.button && props.size && props.size !== 'md',
  }))

const getGroupAttr = (props: any): ComputedRef =>
  computed(() => ({
    'aria-invalid': _getComputedAriaInvalid(props).value,
    'aria-required': props.required.toString() === 'true' ? 'true' : null,
  }))

const getGroupClasses = (props: any): ComputedRef =>
  computed(() => ({
    'was-validated': props.validated,
    'btn-group': props.buttons && !props.stacked,
    'btn-group-vertical': props.stacked,
    [`btn-group-${props.size}`]: props.size,
  }))

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const slotsToElements = (slots: Array<any>, nodeType: string, disabled: boolean) =>
  slots
    .filter((e: any) => e.type.name === nodeType)
    .map((e: any) => {
      const txtChild = (e.children.default ? e.children.default() : []).find(
        (e: any) => e.type.toString() === 'Symbol(Text)'
      )

      return {
        props: {
          disabled,
          ...e.props,
        },
        text: txtChild ? txtChild.children : '',
      }
    })

const optionToElement = (option: any, props: any): any => {
  if (typeof option === 'string') {
    return {
      props: {
        value: option,
        disabled: props.disabled,
      },
      text: option,
    }
  }

  return {
    props: {
      value: option[props.valueField],
      disabled: props.disabled || option[props.disabledField],
      ...option.props,
    },
    text: option[props.textField],
    html: option[props.htmlField],
  }
}

const bindGroupProps = (
  el: any,
  idx: number,
  props: any,
  computedName: ComputedRef,
  computedId: ComputedRef
): any => ({
  ...el,
  props: {
    'button-variant': props.buttonVariant,
    'form': props.form,
    'name': computedName.value,
    'id': `${computedId.value}_option_${idx}`,
    'button': props.buttons,
    'state': props.state,
    'plain': props.plain,
    'size': props.size,
    'inline': !props.stacked,
    'required': props.required,
    ...el.props,
  },
})

export {
  getClasses,
  getInputClasses,
  getLabelClasses,
  getGroupAttr,
  getGroupClasses,
  slotsToElements,
  optionToElement,
  bindGroupProps,
}
