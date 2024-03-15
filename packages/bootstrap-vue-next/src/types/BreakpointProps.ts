import type {Numberish} from '.'

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export interface OffsetBreakpointProps {
  offsetSm?: Numberish
  offsetMd?: Numberish
  offsetLg?: Numberish
  offsetXl?: Numberish
  offsetXxl?: Numberish
}

export interface OrderBreakpointProps {
  OrderSm?: Numberish
  OrderMd?: Numberish
  OrderLg?: Numberish
  OrderXl?: Numberish
  OrderXxl?: Numberish
}

export interface ColBreakpointProps {
  sm?: boolean | Numberish
  md?: boolean | Numberish
  lg?: boolean | Numberish
  xl?: boolean | Numberish
  xxl?: boolean | Numberish
}

export interface RowColsBreakpointProps {
  colsSm?: Numberish
  colsMd?: Numberish
  colsLg?: Numberish
  colsXl?: Numberish
  colsXxl?: Numberish
}
