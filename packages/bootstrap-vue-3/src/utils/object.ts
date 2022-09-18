/**
 * Removes properties from an object, based on the values in an array, and returns the new object.
 * Equivalent to an object version of TS Omit<>
 *
 * @param {Record<PropertyKey, unknown>} objToPluck
 * @param {ReadonlyArray<PropertyKey>} keysToPluck
 * @returns
 */
export const omit = <A extends Record<PropertyKey, unknown>, B extends ReadonlyArray<PropertyKey>>(
  objToPluck: A,
  keysToPluck: B
): Omit<A, B[number]> =>
  Object.keys(objToPluck)
    .filter((key) => !keysToPluck.includes(key))
    .reduce((result, key) => ({...result, [key]: objToPluck[key]}), {} as Omit<A, B[number]>)

/**
 * Convenience method to create a read-only descriptor
 *
 * @returns
 */
export const readonlyDescriptor = () => ({enumerable: true, configurable: false, writable: false})

/**
 * Deeply clones an item
 *
 * @param {T} source
 * @returns
 */
export const cloneDeep = <T>(source: T): T =>
  Array.isArray(source)
    ? source.map((item) => cloneDeep(item))
    : source instanceof Date
    ? new Date(source.getTime())
    : source && typeof source === 'object'
    ? Object.getOwnPropertyNames(source).reduce((o, prop) => {
        Object.defineProperty(o, prop, Object.getOwnPropertyDescriptor(source, prop) ?? {})
        o[prop] = cloneDeep((source as unknown as {[key: string]: unknown})[prop])
        return o
      }, Object.create(Object.getPrototypeOf(source)))
    : source

export const cloneDeepAsync = <T>(source: T): Promise<T> =>
  new Promise((resolve) => resolve(cloneDeep(source)))
