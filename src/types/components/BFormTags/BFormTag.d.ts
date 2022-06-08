// Props
export interface Props {
  id: string
  title: string
  disabled?: boolean
  noRemove?: boolean
  pill?: boolean
  removeLabel?: string
  tag?: string
  variant?: string
}
// Emits
export interface Emits {
  (e: 'remove', value?: string | VNodeArrayChildren | RawSlots): void
}
// Other
