import {isPlainObject} from './inspect'

/**
 * @param target
 * @param args
 * @returns
 */
export const assign = (target: any, ...args: any[]) => Object.assign(target, ...args)

/**
 * @param obj
 * @param props
 * @returns
 */
export const defineProperties = (obj: any, props: PropertyDescriptorMap & ThisType<any>) =>
  Object.defineProperties(obj, props)

/**
 * @param obj
 * @param prop
 * @param descriptor
 * @returns
 */
export const defineProperty = (
  obj: any,
  prop: string | number | symbol,
  descriptor: PropertyDescriptor & ThisType<any>
): any => Object.defineProperty(obj, prop, descriptor)

/**
 * @param obj
 * @param props
 * @returns
 */
export const omit = (obj: any, props: any): any =>
  Object.keys(obj)
    .filter((key) => props.indexOf(key) === -1)
    .reduce((result, key) => ({...result, [key]: obj[key]}), {})

/**
 * Convenience method to create a read-only descriptor
 *
 * @returns
 */
export const readonlyDescriptor = () => ({enumerable: true, configurable: false, writable: false})

export const cloneDeep = (obj: any, defaultValue = obj): any => {
  if (Array.isArray(obj)) {
    return obj.reduce((result, val) => [...result, cloneDeep(val, val)], [])
  }
  if (isPlainObject(obj)) {
    return Object.keys(obj).reduce(
      (result, key) => ({...result, [key]: cloneDeep(obj[key], obj[key])}),
      {}
    )
  }
  return defaultValue
}
