import type {Import} from '../types'

export default <T>(input: Record<string, unknown>): Record<keyof T, Import> =>
  Object.keys(input).reduce(
    (acc, key) => ({
      ...acc,
      [key]: {from: 'bootstrap-vue-3', name: key} as Import,
    }),
    {} as Record<keyof T, Import>
  )
