import type Alignment from '../Alignment'
import type {ColBreakpointProps, OffsetBreakpointProps, OrderBreakpointProps} from '..'

// Props
export interface Props extends ColBreakpointProps, OffsetBreakpointProps, OrderBreakpointProps {
  col?: boolean
  cols?: string | number
  offset?: string | number
  order?: string | number
  alignSelf?: Alignment.Vertical | 'auto'
  tag?: string
}
// Emits

// Other
