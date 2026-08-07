/**
 * Removes properties from an object, based on the values in an array, and returns the new object.
 * Equivalent to an object version of TS Omit<>
 */
export const omit = <
  A extends Record<PropertyKey, unknown>,
  const B extends ReadonlyArray<PropertyKey>,
>(
  objToPluck: Readonly<A>,
  keysToPluck: Readonly<B> | readonly (keyof A)[]
): Omit<A, B[number]> => {
  const keysToOmit = new Set(keysToPluck)
  return Reflect.ownKeys(objToPluck)
    .filter((key) => !keysToOmit.has(key))
    .reduce((result, key) => ({...result, [key]: objToPluck[key as keyof A]}), {} as Omit<A, B[number]>)
}
/**
 * Picks properties from an object, base on the values in an array, and returns the new object.
 * Equivalent to an object version of TS Pick<>
 */
export const pick = <
  A extends Record<PropertyKey, unknown>,
  const B extends ReadonlyArray<PropertyKey>,
>(
  objToPluck: Readonly<A>,
  keysToPluck: Readonly<B> | readonly (keyof A)[]
): Pick<A, B[number]> =>
  [...keysToPluck].reduce(
    (memo, prop) => {
      memo[prop] = objToPluck[prop]
      return memo
    },
    {} as Record<PropertyKey, unknown>
  ) as Pick<A, B[number]>

// Converts PascalCase or camelCase to kebab-case
export const kebabCase = (str: string) => str.replace(/\B([A-Z])/g, '-$1').toLowerCase()
