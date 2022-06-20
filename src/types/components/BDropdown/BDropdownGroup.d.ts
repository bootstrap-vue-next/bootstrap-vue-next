import type {ColorVariant} from '@/types'
// Props
export interface Props {
  id: string
  ariaDescribedby: string
  header: string
  headerClasses?: string | Array | Record<string, unknown>
  headerTag?: string
  headerVariant?: ColorVariant
}
// Emits

// Other
