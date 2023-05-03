import type {TableFieldObject} from './TableFieldObject'

export type TableField<T = Record<string, unknown>> = string | TableFieldObject<T>
