import type Alignment from '../Alignment'
import type {RowColsBreakpointProps} from '..'
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
