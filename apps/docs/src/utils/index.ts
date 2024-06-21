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

type CommonPropsKeys = keyof ReturnType<typeof commonProps>

export const buildCommonProps = (
  obj: Partial<Record<CommonPropsKeys, Partial<PropertyReference>>> = {}
) => {
  const myObject = commonProps()

  Object.entries(obj).forEach(([key, value]) => {
    myObject[key as CommonPropsKeys] = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
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
