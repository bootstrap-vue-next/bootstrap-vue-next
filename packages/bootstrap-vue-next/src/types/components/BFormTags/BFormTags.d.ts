import type {ButtonVariant, ColorVariant, InputSize, InputType} from '../..'
// Props
export interface Props {
  addButtonText?: string
  addButtonVariant?: ButtonVariant
  addOnChange?: boolean
  autofocus?: boolean
  disabled?: boolean
  duplicateTagText?: string
  inputAttrs?: Record<string, unknown>
  inputClass?: Array<unknown> | Record<string, unknown> | string
  inputId?: string
  inputType?: InputType
  invalidTagText?: string
  form?: string
  limit?: number
  limitTagsText?: string
  modelValue?: Array<string>
  name?: string
  noAddOnEnter?: boolean
  noOuterFocus?: boolean
  noTagRemove?: boolean
  placeholder?: string
  removeOnDelete?: boolean
  required?: boolean
  separator?: string | Array<unknown>
  state?: boolean
  size?: InputSize
  tagClass?: string | Array<unknown> | Record<string, unknown>
  tagPills?: boolean
  tagRemoveLabel?: string
  tagRemovedLabel?: string
  tagValidator?: (t: string) => boolean
  tagVariant?: ColorVariant
}
// Emits
export interface Emits {
  (e: 'update:modelValue', value: Array<unknown>): void
  (e: 'input', value: Array<unknown>): void
  (e: 'tag-state', ...args: Array<unknown>): void
  (e: 'focus', value: FocusEvent): void
  (e: 'focusin', value: FocusEvent): void
  (e: 'focusout', value: FocusEvent): void
  (e: 'blur', value: FocusEvent): void
}
// Other
