import useAlignment from './useAlignment'
import useBooleanish from './useBooleanish'
import {createBreadcrumb, useBreadcrumb} from './useBreadcrumb'
import useEventListener from './useEventListener'
import {
  bindGroupProps,
  getClasses,
  getGroupAttr,
  getGroupClasses,
  getInputClasses,
  getLabelClasses,
  optionToElement,
  slotsToElements,
} from './useFormCheck'
import useFormInput, {COMMON_INPUT_PROPS} from './useFormInput'
import {normalizeOptions} from './useFormSelect'
import useId from './useId'

export {
  useAlignment,
  useBooleanish,
  createBreadcrumb,
  useBreadcrumb,
  useEventListener,
  bindGroupProps,
  getClasses,
  getGroupAttr,
  getGroupClasses,
  getInputClasses,
  getLabelClasses,
  optionToElement,
  slotsToElements,
  useFormInput,
  COMMON_INPUT_PROPS,
  normalizeOptions,
  useId,
}

export default {
  useAlignment,
  useBooleanish,
  createBreadcrumb,
  useBreadcrumb,
  useEventListener,
  bindGroupProps,
  getClasses,
  getGroupAttr,
  getGroupClasses,
  getInputClasses,
  getLabelClasses,
  optionToElement,
  slotsToElements,
  useFormInput,
  COMMON_INPUT_PROPS,
  normalizeOptions,
  useId,
}

// Export only the types that are classified by props. Export that the type even if it's complex counterpart uses inline type
// Finally, for props, add booleanish as an option, and create a util that resolves it. Or possibly a composable with computed to cache it?
