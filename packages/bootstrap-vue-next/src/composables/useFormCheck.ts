import type {AriaInvalid, ButtonVariant, InputSize} from '../types'
import {computed, type Ref, ref, watchEffect} from 'vue'
import {resolveUnref} from '@vueuse/core'
import {resolveAriaInvalid} from '../utils'

interface ClassesItemsInput {
  plain?: boolean
  button?: boolean
  inline?: boolean
  switch?: boolean
  size?: InputSize
}

/**
 * @param items must be a reactive object ex: reactive({ plain: toRef(plainBoolean, 'value')})
 * @returns
 */
const getClasses = (items: Ref<ClassesItemsInput> | ClassesItemsInput) => {
  const resolvedItems = ref<ClassesItemsInput>(resolveUnref(items))

  watchEffect(() => {
    const newVal = resolveUnref<ClassesItemsInput>(items)
    const oldVal = resolvedItems.value
    if (newVal === oldVal) return
    resolvedItems.value = newVal
  })

  return computed(() => ({
    'form-check': resolvedItems.value.plain === false && resolvedItems.value.button === false,
    'form-check-inline': resolvedItems.value.inline === true,
    'form-switch': resolvedItems.value.switch === true,
    [`form-control-${resolvedItems.value.size}`]:
      resolvedItems.value.size !== undefined && resolvedItems.value.size !== 'md',
  }))
}

interface InputClassesItemsInput {
  plain?: boolean
  button?: boolean
  state?: boolean
}

/**
 * @param items must be a reactive object ex: reactive({ plain: toRef(plainBoolean, 'value')})
 * @returns
 */
const getInputClasses = (items: Ref<InputClassesItemsInput> | InputClassesItemsInput) => {
  const resolvedItems = ref<InputClassesItemsInput>(resolveUnref(items))

  watchEffect(() => {
    const newVal = resolveUnref<InputClassesItemsInput>(items)
    const oldVal = resolvedItems.value
    if (newVal === oldVal) return
    resolvedItems.value = newVal
  })

  return computed(() => ({
    'form-check-input': resolvedItems.value.plain === false && resolvedItems.value.button === false,
    'is-valid': resolvedItems.value.state === true,
    'is-invalid': resolvedItems.value.state === false,
    'btn-check': resolvedItems.value.button === true,
  }))
}

interface LabelClasesItemsInput {
  plain?: boolean
  button?: boolean
  buttonVariant?: ButtonVariant
  size?: InputSize
}

/**
 * @param items must be a reactive object ex: reactive({ plain: toRef(plainBoolean, 'value')})
 * @returns
 */
const getLabelClasses = (items: Ref<LabelClasesItemsInput> | LabelClasesItemsInput) => {
  const resolvedItems = ref<LabelClasesItemsInput>(resolveUnref(items))

  watchEffect(() => {
    const newVal = resolveUnref<LabelClasesItemsInput>(items)
    const oldVal = resolvedItems.value
    if (newVal === oldVal) return
    resolvedItems.value = newVal
  })

  return computed(() => ({
    'form-check-label': resolvedItems.value.plain === false && resolvedItems.value.button === false,
    'btn': resolvedItems.value.button === true,
    [`btn-${resolvedItems.value.buttonVariant}`]:
      resolvedItems.value.button === true && resolvedItems.value.buttonVariant !== undefined,
    [`btn-${resolvedItems.value.size}`]:
      resolvedItems.value.button && resolvedItems.value.size && resolvedItems.value.size !== 'md',
  }))
}

interface GroupAttrItemsInput {
  required?: boolean
  ariaInvalid?: AriaInvalid
  state?: boolean
}

/**
 * @param items must be a reactive object ex: reactive({ plain: toRef(plainBoolean, 'value')})
 * @returns
 */
const getGroupAttr = (items: Ref<GroupAttrItemsInput> | GroupAttrItemsInput) => {
  const resolvedItems = ref<GroupAttrItemsInput>(resolveUnref(items))

  watchEffect(() => {
    const newVal = resolveUnref<GroupAttrItemsInput>(items)
    const oldVal = resolvedItems.value
    if (newVal === oldVal) return
    resolvedItems.value = newVal
  })

  return computed(() => ({
    'aria-invalid': resolveAriaInvalid(resolvedItems.value.ariaInvalid, resolvedItems.value.state),
    'aria-required': resolvedItems.value.required === true ? true : undefined,
  }))
}

interface GroupClassesItemsInput {
  validated?: boolean
  buttons?: boolean
  stacked?: boolean
  size?: InputSize
}

/**
 * @param items must be a reactive object ex: reactive({ plain: toRef(plainBoolean, 'value')})
 * @returns
 */
const getGroupClasses = (items: Ref<GroupClassesItemsInput> | GroupClassesItemsInput) => {
  const resolvedItems = ref<GroupClassesItemsInput>(resolveUnref(items))

  watchEffect(() => {
    const newVal = resolveUnref<GroupClassesItemsInput>(items)
    const oldVal = resolvedItems.value
    if (newVal === oldVal) return
    resolvedItems.value = newVal
  })

  return computed(() => ({
    'was-validated': resolvedItems.value.validated === true,
    'btn-group': resolvedItems.value.buttons === true && resolvedItems.value.stacked === false,
    'btn-group-vertical': resolvedItems.value.stacked === true, // Does this need items.buttons?
    [`btn-group-${resolvedItems.value.size}`]: resolvedItems.value.size !== undefined,
  }))
}

const slotsToElements = (slots: any[], nodeType: string, disabled: boolean) =>
  slots
    .reduce(
      (acc: any[], slot: any) =>
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
  computedName: Ref<string>,
  computedId: Ref<string>
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
