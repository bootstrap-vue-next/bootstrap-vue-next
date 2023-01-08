export {BvEvent, BvModalEvent} from './classes'
export {default as cssEscape} from './cssEscape'
export {HAS_DOCUMENT_SUPPORT, HAS_NAVIGATOR_SUPPORT, HAS_WINDOW_SUPPORT, IS_BROWSER} from './env'
// For some reason the order of this matters. Moving ./env lower than ./dom, causes it to have cannot use before init errors
// Perhaps someone in the future could solve the issue better, than my solution of just moving the export up
export {
  attemptBlur,
  attemptFocus,
  contains,
  getActiveElement,
  getAttr,
  getBCR,
  getStyle,
  isActiveElement,
  isElement,
  isEmptySlot,
  isTag,
  isVisible,
  offset,
  removeAttr,
  requestAF,
  select,
  selectAll,
  setAttr,
} from './dom'
export {default as getBreakpointProps} from './getBreakpointProps'
export {default as getClasses} from './getClasses'
export {default as getId} from './getId'
export {default as resolveAriaInvalid} from './resolveAriaInvalid'
export {isNumeric, isObject, isPlainObject} from './inspect'
export {default as mergeDeep} from './mergeDeep'
export {default as normalizeSlot} from './normalizeSlot'
export {stringToInteger, toFloat, toInteger, toPercison} from './number'
export {cloneDeep, omit, readonlyDescriptor} from './object'
export {pluckProps, suffixPropName} from './props'
export {isBooleanish, resolveBooleanish} from './booleanish'
export {default as isLink} from './isLink'
export {startCase, titleCase, toString, upperFirst} from './stringUtils'
