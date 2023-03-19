import type TableFieldObject from './TableFieldObject'

type TableField<T = Record<string, unknown>> = string | TableFieldObject<T>

export default TableField
