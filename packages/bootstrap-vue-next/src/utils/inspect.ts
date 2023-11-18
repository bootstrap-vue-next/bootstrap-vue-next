/**
 * @deprecated
 */
export const isObject = (obj: unknown): obj is Record<PropertyKey, unknown> =>
  obj !== null && typeof obj === 'object'

/**
 * @deprecated
 */
export const isNumeric = (value: unknown): boolean => /^[0-9]*\.?[0-9]+$/.test(String(value))
