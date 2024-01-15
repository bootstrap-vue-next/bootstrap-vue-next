import {titleCase} from './stringUtils'
import type {TableFieldRaw} from '../types'

export default <T = Record<string, unknown>>(field: Readonly<TableFieldRaw<T>>) =>
  typeof field === 'string'
    ? titleCase(field)
    : field.label !== undefined
      ? field.label
      : typeof field.key === 'string'
        ? titleCase(field.key)
        : field.key
