import type {AriaInvalid, ButtonVariant, InputSize} from '../types'
import {computed, type ComputedRef} from 'vue'
import {resolveAriaInvalid} from '../utils'

/**
 * @param items must be a reactive object ex: reactive({ plain: toRef(plainBoolean, 'value')})
 * @returns
 */
const getClasses = (items: {
  plain?: boolean
  button?: boolean
  inline?: boolean
  switch?: boolean
  size?: InputSize
}) =>
  computed(() => ({
    'form-check': items.plain === false && items.button === false,
    'form-check-inline': items.inline === true,
    'form-switch': items.switch === true,
    [`form-control-${items.size}`]: items.size !== undefined && items.size !== 'md',
  }))

/**
 * @param items must be a reactive object ex: reactive({ plain: toRef(plainBoolean, 'value')})
 * @returns
 */
const getInputClasses = (items: {plain?: boolean; button?: boolean; state?: boolean}) =>
  computed(() => ({
    'form-check-input': items.plain === false && items.button === false,
    'is-valid': items.state === true,
    'is-invalid': items.state === false,
    'btn-check': items.button === true,
  }))

/**
 * @param items must be a reactive object ex: reactive({ plain: toRef(plainBoolean, 'value')})
 * @returns
 */
const getLabelClasses = (items: {
  plain?: boolean
  button?: boolean
  buttonVariant?: ButtonVariant
  size?: InputSize
}) =>
  computed(() => ({
    'form-check-label': items.plain === false && items.button === false,
    'btn': items.button === true,
    [`btn-${items.buttonVariant}`]: items.button === true && items.buttonVariant !== undefined,
    [`btn-${items.size}`]: items.button && items.size && items.size !== 'md',
  }))

/**
 * @param items must be a reactive object ex: reactive({ plain: toRef(plainBoolean, 'value')})
 * @returns
 */
const getGroupAttr = (items: {required?: boolean; ariaInvalid?: AriaInvalid; state?: boolean}) =>
  computed(() => ({
    'aria-invalid': resolveAriaInvalid(items.ariaInvalid, items.state),
    'aria-required': items.required === true ? true : undefined,
  }))

/**
 * @param items must be a reactive object ex: reactive({ plain: toRef(plainBoolean, 'value')})
 * @returns
 */
const getGroupClasses = (items: {
  validated?: boolean
  buttons?: boolean
  stacked?: boolean
  size?: InputSize
}) =>
  computed(() => ({
    'was-validated': items.validated === true,
    'btn-group': items.buttons === true && items.stacked === false,
    'btn-group-vertical': items.stacked === true, // Does this need items.buttons?
    [`btn-group-${items.size}`]: items.size !== undefined,
  }))

// TODO this function is similarly used in BTabs and may be capable of being a util function
// Investigate if it can be done to reduce complexity
/**
 * @param slots
 * @param nodeType
 * @param disabled
 * @returns
 */
const slotsToElements = (slots: Array<any>, nodeType: string, disabled: boolean) =>
  slots
    .reduce(
      (acc: Array<any>, slot: any) =>
        slot.type.toString() === 'Symbol(Fragment)'
          ? acc.concat(slot.children)
          : acc.concat([slot]),
      []
    )
    .filter((e: any) => e.type.__name === nodeType || e.type.name === nodeType)
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

/**
 * @param option
 * @param props
 * @returns
 */
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

/**
 * @param el
 * @param idx
 * @param props
 * @param computedName
 * @param computedId
 * @returns
 */
const bindGroupProps = (
  el: any,
  idx: number,
  props: any,
  computedName: ComputedRef<string>,
  computedId: ComputedRef<string>
) => ({
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
