import type Alignment from 'src/types/Alignment'
import type {ColBreakpointProps, OffsetBreakpointProps, OrderBreakpointProps} from '@/types'

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
