/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// Quick object check
// This is primarily used to tell Objects from primitive values
// when we know the value is a JSON-compliant type
// Note object could be a complex type like array, Date, etc.
export const isObject = (obj: any): boolean => obj !== null && typeof obj === 'object'
export const isString = (value: any): boolean => typeof value === 'string'

export const isUndefined = (value: any) => value === undefined

export const isNull = (value: any) => value === null

export const isUndefinedOrNull = (value: any) => isUndefined(value) || isNull(value)
