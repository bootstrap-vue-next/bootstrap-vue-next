/**
 * You need this because fundamentally isArray can't make the assumption that a readonly array is of type array
 * Only that `readonly T[]` has array like properties. So it breaks a bit when making things "readonly"
 */
export const isReadOnlyArray = <T>(arr: unknown): arr is readonly T[] => Array.isArray(arr)

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
): Omit<A, B[number]> =>
  Object.keys(objToPluck)
    .filter((key) => !keysToPluck.map((el) => el.toString()).includes(key))
    .reduce((result, key) => ({...result, [key]: objToPluck[key]}), {} as Omit<A, B[number]>)

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

/**
 * Dynamically get a nested value from an array or
 * object with a string.
 *
 * @example get(person, 'friends[0].name')
 *
 * Thanks to
 * @link https://github.com/rayepps/radash/blob/master/src/object.ts#L214
 *
 * @deprecated The purpose of this function is to allow one to use "dot notation" to pick nested properties from an object.
 * Usually for props, it would be better to use a function that picks the property you want instead of relying on weak string paths
 * Using a function allows for better type safety.
 */
export const get = <TDefault = unknown>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any,
  path: string,
  defaultValue?: Readonly<TDefault>
): TDefault => {
  const segments = path.split(/[.[\]]/g)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let current: any = value
  for (const key of segments) {
    if (current === null) return defaultValue as TDefault
    if (current === undefined) return defaultValue as TDefault
    if (key.trim() === '') continue
    current = current[key]
  }
  if (current === undefined) return defaultValue as TDefault
  return current
}

/**
 * Opposite of get, dynamically set a nested value into
 * an object using a key path. Does not modify the given
 * initial object.
 *
 * @example
 * set({}, 'name', 'ra') // => { name: 'ra' }
 * set({}, 'cards[0].value', 2) // => { cards: [{ value: 2 }] }
 *
 * Thanks to
 * @link https://github.com/rayepps/radash/blob/master/src/object.ts#L214
 */
export const set = <T extends object, K>(initial: T, path: string, value: K): T => {
  const clone = <T>(obj: T): T => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isPrimitive = (value: any): boolean =>
      value === undefined ||
      value === null ||
      (typeof value !== 'object' && typeof value !== 'function')
    // Primitive values do not need cloning.
    if (isPrimitive(obj)) {
      return obj
    }

    if (typeof obj === 'function') {
      return obj.bind({})
    }

    const newObj = new ((obj as object).constructor as {new (): T})()

    // Assign the props.
    Object.getOwnPropertyNames(obj).forEach((prop) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(newObj as any)[prop] = (obj as any)[prop]
    })

    return newObj
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toInt = <T extends number | null = number>(value: any, defaultValue?: T): number | T => {
    const def = defaultValue === undefined ? 0 : defaultValue
    if (value === null || value === undefined) {
      return def
    }
    const result = Number.parseInt(value)
    return Number.isNaN(result) ? def : result
  }

  if (!initial) return {} as T
  if (!path || value === undefined) return initial
  const segments = path.split(/[.[\]]/g).filter((x) => !!x.trim())
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const _set = (node: any) => {
    if (segments.length > 1) {
      const key = segments.shift() as string
      const nextIsNum = toInt(segments[0], null) === null ? false : true
      node[key] = node[key] === undefined ? (nextIsNum ? [] : {}) : node[key]
      _set(node[key])
    } else if (segments[0]) {
      node[segments[0]] = value
    }
  }
  const cloned = clone(initial)
  _set(cloned)
  return cloned
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const deepEqual = (a: any, b: any): boolean => {
  if (a === b) {
    return true
  }

  if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) {
    return false
  }

  const keysA = Object.keys(a),
    keysB = Object.keys(b)

  if (keysA.length !== keysB.length) {
    return false
  }

  for (const key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false
    }
  }

  return true
}
