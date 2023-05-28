import type {AriaInvalid, ButtonVariant, Size} from '../types'
import {computed, type MaybeRefOrGetter, toRef} from 'vue'
import {resolveAriaInvalid} from '../utils'

interface ClassesItemsInput {
  plain?: boolean
  button?: boolean
  inline?: boolean
  switch?: boolean
  size?: Size
}

const getClasses = (items: MaybeRefOrGetter<ClassesItemsInput>) => {
  const resolvedItems = toRef(items)

  return computed(() => ({
    'form-check': resolvedItems.value.plain === false && resolvedItems.value.button === false,
    'form-check-inline': resolvedItems.value.inline === true,
    'form-switch': resolvedItems.value.switch === true,
    [`form-control-${resolvedItems.value.size}`]:
      resolvedItems.value.size !== undefined &&
      resolvedItems.value.size !== 'md' &&
      resolvedItems.value.button === false,
  }))
}

interface InputClassesItemsInput {
  plain?: boolean
  button?: boolean
  state?: boolean | null
}

const getInputClasses = (items: MaybeRefOrGetter<InputClassesItemsInput>) => {
  const resolvedItems = toRef(items)

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
  buttonVariant?: ButtonVariant | null
  size?: Size
}

const getLabelClasses = (items: MaybeRefOrGetter<LabelClasesItemsInput>) => {
  const resolvedItems = toRef(items)

  return computed(() => ({
    'form-check-label': resolvedItems.value.plain === false && resolvedItems.value.button === false,
    'btn': resolvedItems.value.button === true,
    [`btn-${resolvedItems.value.buttonVariant}`]:
      resolvedItems.value.button === true &&
      resolvedItems.value.buttonVariant !== undefined &&
      resolvedItems.value.buttonVariant !== null,
    [`btn-${resolvedItems.value.size}`]:
      resolvedItems.value.button && resolvedItems.value.size && resolvedItems.value.size !== 'md',
  }))
}

interface GroupAttrItemsInput {
  required?: boolean
  ariaInvalid?: AriaInvalid
  state?: boolean | null
}

const getGroupAttr = (items: MaybeRefOrGetter<GroupAttrItemsInput>) => {
  const resolvedItems = toRef(items)

  return computed(() => ({
    'aria-invalid': resolveAriaInvalid(resolvedItems.value.ariaInvalid, resolvedItems.value.state),
    'aria-required': resolvedItems.value.required === true ? true : undefined,
  }))
}

interface GroupClassesItemsInput {
  validated?: boolean
  buttons?: boolean
  stacked?: boolean
  size?: Size
}

const getGroupClasses = (items: MaybeRefOrGetter<GroupClassesItemsInput>) => {
  const resolvedItems = toRef(items)

  return computed(() => ({
    'was-validated': resolvedItems.value.validated === true,
    'btn-group': resolvedItems.value.buttons === true && resolvedItems.value.stacked === false,
    'btn-group-vertical':
      resolvedItems.value.stacked === true && resolvedItems.value.buttons === true,
    [`btn-group-${resolvedItems.value.size}`]: resolvedItems.value.size !== undefined,
  }))
}

export {getClasses, getInputClasses, getLabelClasses, getGroupAttr, getGroupClasses}
