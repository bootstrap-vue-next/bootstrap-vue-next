import type {Breakpoint} from '../..'
// Props
export interface Props {
  flush?: boolean
  horizontal?: boolean | Breakpoint
  numbered?: boolean
  tag?: string
}
// Emits

// Other
export interface ParentData {
  numbered: boolean
}
