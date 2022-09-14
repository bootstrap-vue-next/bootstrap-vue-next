/**
 * @param obj
 * @returns
 */
export const isObject = (obj: unknown): boolean => obj !== null && typeof obj === 'object'

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
export const isPlainObject = (obj: unknown): boolean =>
  Object.prototype.toString.call(obj) === '[object Object]'
