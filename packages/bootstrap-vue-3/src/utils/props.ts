// Suffix can be a falsey value so nothing is appended to string
// (helps when looping over props & some shouldn't change)

import {upperFirst} from './stringUtils'

/**
 * Use data last parameters to allow for currying
 *
 * @param suffix
 * @param value
 * @returns
 */
export const suffixPropName = (suffix: string, value: string): string =>
  value + (suffix ? upperFirst(suffix) : '')

/**
 * Given an array of properties or an object of property keys, plucks all the values off the target object, returning a new object that has props that reference the original prop values.
 * An object equivelent to TS Pick<>
 *
 * @param {ReadonlyArray<PropertyKey> | Record<PropertyKey, unknown>} keysToPluck
 * @param {Record<PropertyKey, unknown>} objToPluck
 * @returns
 */
export const pluckProps = <
  A extends Record<PropertyKey, unknown>,
  B extends ReadonlyArray<PropertyKey> | Record<PropertyKey, unknown>
>(
  objToPluck: A,
  keysToPluck: B
): B extends readonly PropertyKey[] ? Pick<A, B[number]> : Pick<A, keyof B> =>
  (Array.isArray(keysToPluck) ? keysToPluck.slice() : Object.keys(keysToPluck)).reduce(
    (memo, prop) => {
      memo[prop] = objToPluck[prop]
      return memo
    },
    {}
  )
