export const isObject = (obj: unknown): obj is Record<PropertyKey, unknown> =>
  obj !== null && typeof obj === 'object'

export const isNumeric = (value: unknown): boolean => /^[0-9]*\.?[0-9]+$/.test(String(value))

export const isPlainObject = (obj: unknown): obj is Record<PropertyKey, unknown> =>
  Object.prototype.toString.call(obj) === '[object Object]'
