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

  watchEffect(() => (resolvedItems.value = resolveUnref<ClassesItemsInput>(items)))

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

/**
 * @param items must be a reactive object ex: reactive({ plain: toRef(plainBoolean, 'value')})
 * @returns
 */
const getInputClasses = (items: Ref<InputClassesItemsInput> | InputClassesItemsInput) => {
  const resolvedItems = ref<InputClassesItemsInput>(resolveUnref(items))

  watchEffect(() => (resolvedItems.value = resolveUnref<InputClassesItemsInput>(items)))

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

  watchEffect(() => (resolvedItems.value = resolveUnref<LabelClasesItemsInput>(items)))

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
  state?: boolean | null
}

/**
 * @param items must be a reactive object ex: reactive({ plain: toRef(plainBoolean, 'value')})
 * @returns
 */
const getGroupAttr = (items: Ref<GroupAttrItemsInput> | GroupAttrItemsInput) => {
  const resolvedItems = ref<GroupAttrItemsInput>(resolveUnref(items))

  watchEffect(() => (resolvedItems.value = resolveUnref<GroupAttrItemsInput>(items)))

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

  watchEffect(() => (resolvedItems.value = resolveUnref<GroupClassesItemsInput>(items)))

  return computed(() => ({
    'was-validated': resolvedItems.value.validated === true,
    'btn-group': resolvedItems.value.buttons === true && resolvedItems.value.stacked === false,
    'btn-group-vertical':
      resolvedItems.value.stacked === true && resolvedItems.value.buttons === true,
    [`btn-group-${resolvedItems.value.size}`]: resolvedItems.value.size !== undefined,
  }))
}

export {getClasses, getInputClasses, getLabelClasses, getGroupAttr, getGroupClasses}
