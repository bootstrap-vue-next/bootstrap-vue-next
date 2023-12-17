import {titleCase} from './stringUtils'
import type {TableField} from '../types'

export default <T = Record<string, unknown>>(field: TableField<T>) =>
  typeof field === 'string'
    ? titleCase(field)
    : field.label !== undefined
      ? field.label
      : typeof field.key === 'string'
        ? titleCase(field.key)
        : field.key
