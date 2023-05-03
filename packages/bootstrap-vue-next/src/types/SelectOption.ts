import type {SelectOptionObject} from './SelectOptionObject'

export type SelectOption<T = unknown> = string | SelectOptionObject<T>
