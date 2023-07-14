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
