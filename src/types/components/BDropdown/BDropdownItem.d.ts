import type {ColorVariant, LinkTarget} from '@/types'

// Props
export interface Props {
  href: string
  linkClass: Array | Record<string, unknown> | string
  active?: boolean
  disabled?: boolean
  rel?: string
  target?: LinkTarget
  variant?: ColorVariant
}
// Emits
export interface Emits {
  (e: 'click', value: MouseEvent): void
}
// Other
