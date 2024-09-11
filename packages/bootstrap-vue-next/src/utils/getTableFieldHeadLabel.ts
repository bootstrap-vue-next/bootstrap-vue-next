import {titleCase} from './stringUtils'
import type {TableFieldRaw} from '../types/TableTypes'

export const getTableFieldHeadLabel = (field: Readonly<TableFieldRaw<unknown>>) =>
  typeof field === 'string'
    ? titleCase(field)
    : field.label !== undefined
      ? field.label
      : typeof field.key === 'string'
        ? titleCase(field.key)
        : field.key
