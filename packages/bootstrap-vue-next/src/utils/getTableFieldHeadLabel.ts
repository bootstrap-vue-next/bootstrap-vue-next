import {titleCase} from './stringUtils'
import type {TableFieldRaw} from '../types'

export default (field: Readonly<TableFieldRaw<unknown>>) =>
  typeof field === 'string'
    ? titleCase(field)
    : field.label !== undefined
      ? field.label
      : typeof field.key === 'string'
        ? titleCase(field.key)
        : field.key
