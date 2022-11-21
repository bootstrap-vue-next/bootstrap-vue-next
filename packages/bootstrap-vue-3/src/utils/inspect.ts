/**
 * @param obj
 * @returns
 */
export const isObject = (obj: unknown): obj is Record<PropertyKey, unknown> =>
  obj !== null && typeof obj === 'object'

/**
 * @param value
 * @returns
 */
export const isNumeric = (value: unknown): boolean => /^[0-9]*\.?[0-9]+$/.test(String(value))

/**
 * Strict object type check. Only returns true for plain JavaScript objects
 *
 * @param obj
 * @returns
 */
export const isPlainObject = (obj: unknown): obj is Record<PropertyKey, unknown> =>
  Object.prototype.toString.call(obj) === '[object Object]'

/**
 * Strict object type check. Only returns true for plain JavaScript objects
 *
 * @param obj
 * @returns
 */
export const isNull = (value: unknown): value is null => value === null
