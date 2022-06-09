import type {Breakpoint, Position} from 'src/types'
// Props
export interface Props {
  gutterX?: string
  gutterY?: string
  fluid?: boolean | Breakpoint
  toast: Record<string, unknown>
  position: Position
}
// Emits

// Other
