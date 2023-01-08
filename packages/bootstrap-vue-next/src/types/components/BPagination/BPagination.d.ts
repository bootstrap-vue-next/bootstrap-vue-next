import type {Alignment, InputSize} from '../..'
// Props
export interface Props {
  align?: Alignment.Horizontal
  ariaControls?: string
  ariaLabel?: string
  disabled?: boolean
  ellipsisClass?: Array<unknown> | string
  ellipsisText?: string
  firstClass?: Array<unknown> | string
  firstNumber?: boolean
  firstText?: string
  hideEllipsis?: boolean
  hideGotoEndButtons?: boolean
  labelFirstPage?: string
  labelLastPage?: string
  labelNextPage?: string
  labelPage?: string
  labelPrevPage?: string
  lastClass?: Array<unknown> | string
  lastNumber?: boolean
  lastText?: string
  limit?: number
  modelValue?: number // V-model prop
  nextClass?: Array<unknown> | string
  nextText?: string
  pageClass?: Array<unknown> | string
  perPage?: number
  pills?: boolean
  prevClass?: Array<unknown> | string
  prevText?: string
  size?: InputSize
  totalRows?: number
}
// Emits
export interface Emits {
  (e: 'update:modelValue', value: number): void
  (e: 'page-click', ...args: Array<unknown>): void
}
// Other
