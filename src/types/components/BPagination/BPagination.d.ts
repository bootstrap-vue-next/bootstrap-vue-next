// Props
export interface Props {
  align?: Alignment
  ariaControls?: string
  ariaLabel?: string
  disabled?: boolean
  ellipsisClass?: Array | string
  ellipsisText?: string
  firstClass?: Array | string
  firstNumber?: boolean
  firstText?: string
  hideEllipsis?: boolean
  hideGotoEndButtons?: boolean
  labelFirstPage?: string
  labelLastPage?: string
  labelNextPage?: string
  labelPage?: string
  labelPrevPage?: string
  lastClass?: Array | string
  lastNumber?: boolean
  lastText?: string
  limit?: number
  modelValue?: number // V-model prop
  nextClass?: Array | string
  nextText?: string
  pageClass?: Array | string
  perPage?: number
  pills?: boolean
  prevClass?: Array | string
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
