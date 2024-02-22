import type {LiteralUnion, Numberish} from '.'

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
  sm?: LiteralUnion<boolean, Numberish>
  md?: LiteralUnion<boolean, Numberish>
  lg?: LiteralUnion<boolean, Numberish>
  xl?: LiteralUnion<boolean, Numberish>
  xxl?: LiteralUnion<boolean, Numberish>
}

export interface RowColsBreakpointProps {
  colsSm?: Numberish
  colsMd?: Numberish
  colsLg?: Numberish
  colsXl?: Numberish
  colsXxl?: Numberish
}
