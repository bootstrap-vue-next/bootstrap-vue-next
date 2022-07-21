// Quick object check
// This is primarily used to tell Objects from primitive values
// when we know the value is a JSON-compliant type
// Note object could be a complex type like array, Date, etc.
const RX_NUMBER = /^[0-9]*\.?[0-9]+$/
/**
 * @param value
 * @returns
 */
export const isBoolean = (value: any) => toType(value) === 'boolean'

/**
 * @param obj
 * @returns
 */
export const isObject = (obj: any): boolean => obj !== null && typeof obj === 'object'

/**
 * @param value
 * @returns
 */
export const isString = (value: any): boolean => typeof value === 'string'

/**
 * @param value
 * @returns
 */
export const isUndefined = (value: any) => value === undefined

/**
 * @param value
 * @returns
 */
export const isNull = (value: any) => value === null

/**
 * @param value
 * @returns
 */
export const isUndefinedOrNull = (value: any) => isUndefined(value) || isNull(value)

/**
 * @param value
 * @returns
 */
export const isNumeric = (value: any) => RX_NUMBER.test(String(value))

/**
 * @param value
 * @returns
 */
export const isNumber = (value: any) => typeof value === 'number'

/**
 * @param value
 * @returns
 */
export const toType = (value: any) => typeof value

/**
 * @param value
 * @returns
 */
export const isFunction = (value: any) => toType(value) === 'function'

/**
 * Strict object type check. Only returns true for plain JavaScript objects
 *
 * @param obj
 * @returns
 */
export const isPlainObject = (obj: any) => Object.prototype.toString.call(obj) === '[object Object]'

/**
 * @param value
 * @returns
 */
export const isArray = (value: any) => Array.isArray(value)
