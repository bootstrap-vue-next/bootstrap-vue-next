import type {PropertyReference} from '../types'
import {commonProps} from './common-props'

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
