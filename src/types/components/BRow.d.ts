import type Alignment from '@/types/Alignment'
import type {RowColsBreakpointProps} from '@/types'
// Props
export interface Props extends RowColsBreakpointProps {
  tag?: string
  gutterX?: string
  gutterY?: string
  alignV?: Alignment.Vertical
  alignH?: Alignment.Horizontal
  alignContent?: Alignment.Content
}
// Emits

// Other
