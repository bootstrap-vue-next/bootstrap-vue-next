import type {PropertyReference} from '../types'

const commonProps = () =>
  ({
    id: {
      type: 'string',
      default: undefined,
      description:
        'Used to set the `id` attribute on the rendered content, and used as the base to generate any additional element IDs as needed',
    },
    disabled: {
      type: 'boolean',
      default: false,
      description: 'Disabled',
    },
  }) satisfies Record<string, PropertyReference>

export const buildCommonProps = (
  obj: Partial<Record<keyof ReturnType<typeof commonProps>, Partial<PropertyReference>>> = {}
) => {
  const myObject = commonProps()

  Object.entries(obj).forEach(([key, value]) => {
    myObject[key] = {
      ...myObject[key],
      ...value,
    }
  })

  return myObject
}

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
