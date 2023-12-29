import type {Booleanish, LiteralUnion, Numberish} from '.'

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
  sm?: LiteralUnion<Booleanish, Numberish>
  md?: LiteralUnion<Booleanish, Numberish>
  lg?: LiteralUnion<Booleanish, Numberish>
  xl?: LiteralUnion<Booleanish, Numberish>
  xxl?: LiteralUnion<Booleanish, Numberish>
}

export interface RowColsBreakpointProps {
  colsSm?: Numberish
  colsMd?: Numberish
  colsLg?: Numberish
  colsXl?: Numberish
  colsXxl?: Numberish
}
