import {titleCase} from './stringUtils'
import type {TableField} from '../types'

export default (field: TableField) =>
  typeof field === 'string'
    ? titleCase(field)
    : field.label !== undefined
    ? field.label
    : typeof field.key === 'string'
    ? titleCase(field.key)
    : field.key
