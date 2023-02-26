import type {Alignment, InputSize} from '../..'
// Props
export interface Props {
  align?: Alignment.Horizontal
  ariaControls?: string
  ariaLabel?: string
  disabled?: boolean
  ellipsisClass?: unknown[] | string
  ellipsisText?: string
  firstClass?: unknown[] | string
  firstNumber?: boolean
  firstText?: string
  hideEllipsis?: boolean
  hideGotoEndButtons?: boolean
  labelFirstPage?: string
  labelLastPage?: string
  labelNextPage?: string
  labelPage?: string
  labelPrevPage?: string
  lastClass?: unknown[] | string
  lastNumber?: boolean
  lastText?: string
  limit?: number
  modelValue?: number // V-model prop
  nextClass?: unknown[] | string
  nextText?: string
  pageClass?: unknown[] | string
  perPage?: number
  pills?: boolean
  prevClass?: unknown[] | string
  prevText?: string
  size?: InputSize
  totalRows?: number
}
// Emits
export interface Emits {
  (e: 'update:modelValue', value: number): void
  (e: 'page-click', ...args: unknown[]): void
}
// Other
