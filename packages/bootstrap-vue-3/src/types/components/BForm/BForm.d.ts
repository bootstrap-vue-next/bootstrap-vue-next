// Props
export interface Props {
  id?: string
  floating?: boolean
  novalidate?: boolean
  validated?: boolean
}
// Emits
export interface Emits {
  (e: 'submit', value: Event): void
}
// Other
