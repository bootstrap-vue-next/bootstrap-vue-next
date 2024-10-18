export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
export type ColsBaseNumbers = 1 | 2 | 3 | 4 | 5 | '1' | '2' | '3' | '4' | '5'

export type ColsNumbers =
  | ColsBaseNumbers
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'

export type GutterNumbers = ColsBaseNumbers | 0 | '0'
export type ColsOrderNumbers = ColsBaseNumbers | 'first' | 'last'
export type ColsOffsetNumbers = ColsNumbers | 0 | '0'

// Vue bug. Cant do this https://github.com/vuejs/core/issues/10962
// type BreakpointFactory<V, P extends string = ''> = {
//   [K in Breakpoint as `${P}${Capitalize<K>}`]: V
// }

// export type OffsetBreakpointProps = BreakpointFactory<Numberish, 'offset'>

// export type OrderBreakpointProps = BreakpointFactory<Numberish, 'order'>

// export type ColBreakpointProps = BreakpointFactory<boolean | Numberish, 'col'>

// export type RowColsBreakpointProps = BreakpointFactory<Numberish, 'cols'>

export interface OffsetBreakpointProps {
  offsetSm?: ColsOffsetNumbers
  offsetMd?: ColsOffsetNumbers
  offsetLg?: ColsOffsetNumbers
  offsetXl?: ColsOffsetNumbers
  offsetXxl?: ColsOffsetNumbers
}

export interface OrderBreakpointProps {
  orderSm?: ColsOrderNumbers
  orderMd?: ColsOrderNumbers
  orderLg?: ColsOrderNumbers
  orderXl?: ColsOrderNumbers
  orderXxl?: ColsOrderNumbers
}

export interface ColBreakpointProps {
  sm?: boolean | ColsNumbers | 'auto'
  md?: boolean | ColsNumbers | 'auto'
  lg?: boolean | ColsNumbers | 'auto'
  xl?: boolean | ColsNumbers | 'auto'
  xxl?: boolean | ColsNumbers | 'auto'
}

export interface RowColsBreakpointProps {
  colsSm?: ColsNumbers
  colsMd?: ColsNumbers
  colsLg?: ColsNumbers
  colsXl?: ColsNumbers
  colsXxl?: ColsNumbers
}
