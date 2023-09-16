import type {RouteLocationRaw} from 'vue-router'
import type {Booleanish} from './Booleanish'
import type {Breakpoint} from './Breakpoint'
import type {ClassValue} from './ClassValue'
import type {ColorVariant} from './ColorVariant'
import type {LinkTarget} from './LinkTarget'
import type {TableField} from './TableField'
import type {TableFieldObject} from './TableFieldObject'
import type {TableItem} from './TableItem'
import type {VerticalAlign} from './VerticalAlign'
import type {Size} from './Size'
import type {ButtonVariant} from './ButtonVariant'
import type {ButtonType} from './ButtonType'
import type {Boundary, Middleware, RootBoundary, Strategy} from '@floating-ui/vue'
import type {ComponentPublicInstance} from 'vue'

export interface BLinkProps {
  active?: Booleanish
  activeClass?: string
  append?: Booleanish
  disabled?: Booleanish
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  event?: string | any[]
  href?: string
  // noPrefetch: {type: [Boolean, String] as PropType<Booleanish>, default: false},
  // prefetch: {type: [Boolean, String] as PropType<Booleanish>, default: null},
  rel?: string
  replace?: Booleanish
  routerComponentName?: string
  routerTag?: string
  target?: LinkTarget
  to?: RouteLocationRaw
  variant?: ColorVariant | null
  opacity?: 10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'
  opacityHover?: 10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'
  underlineVariant?: ColorVariant | null
  underlineOffset?: 1 | 2 | 3 | '1' | '2' | '3'
  underlineOffsetHover?: 1 | 2 | 3 | '1' | '2' | '3'
  underlineOpacity?: 0 | 10 | 25 | 50 | 75 | 100 | '0' | '10' | '25' | '50' | '75' | '100'
  underlineOpacityHover?: 0 | 10 | 25 | 50 | 75 | 100 | '0' | '10' | '25' | '50' | '75' | '100'
  icon?: Booleanish
}

export interface BImgProps {
  blank?: Booleanish
  blankColor?: string
  block?: Booleanish
  center?: Booleanish
  fluid?: Booleanish
  lazy?: Booleanish
  fluidGrow?: Booleanish
  height?: number | string
  start?: Booleanish
  end?: Booleanish
  rounded?: boolean | string
  sizes?: string | string[]
  src?: string
  srcset?: string | string[]
  thumbnail?: Booleanish
  width?: number | string
}

export interface BFormProps {
  id?: string
  floating?: Booleanish
  novalidate?: Booleanish
  validated?: Booleanish
}

export interface BTableSimpleProps {
  bordered?: Booleanish
  borderless?: Booleanish
  borderVariant?: ColorVariant | null
  captionTop?: Booleanish
  dark?: Booleanish
  hover?: Booleanish
  responsive?: boolean | Breakpoint
  stacked?: boolean | Breakpoint
  striped?: Booleanish
  small?: Booleanish
  tableClass?: ClassValue
  tableVariant?: ColorVariant | null
  stickyHeader?: Booleanish
}

export interface BTableLiteProps {
  align?: VerticalAlign
  caption?: string
  fields?: TableField[]
  footClone?: Booleanish
  items?: TableItem[]
  labelStacked?: boolean
  variant?: ColorVariant | null
  showEmpty?: Booleanish
  emptyText?: string
  emptyFilteredText?: string
  fieldColumnClass?: (field: TableFieldObject) => Record<string, any>[]
  tbodyTrClass?: (item: TableItem | null, type: string) => string | Array<any> | null | undefined
  virtualFields?: number | string
}

export interface BProgressBarProps {
  animated?: Booleanish
  label?: string
  labelHtml?: string
  max?: string | number
  precision?: string | number
  showProgress?: Booleanish
  showValue?: Booleanish
  striped?: Booleanish
  value?: string | number
  variant?: ColorVariant | null
}

export interface BInputGroupAddonProps {
  isText?: Booleanish
}

export interface BFormFeedbackSharedProps {
  ariaLive?: string
  forceShow?: Booleanish
  text?: string
  id?: string
  role?: string
  state?: Booleanish | null
  tag?: string
  tooltip?: Booleanish
}

export interface BDropdownProps {
  ariaLabel?: string
  id?: string
  menuClass?: ClassValue
  size?: Size
  splitClass?: ClassValue
  splitVariant?: ButtonVariant | null
  text?: string
  toggleClass?: ClassValue
  autoClose?: boolean | 'inside' | 'outside'
  block?: Booleanish
  disabled?: Booleanish
  isNav?: Booleanish
  dropup?: Booleanish
  dropend?: Booleanish
  dropstart?: Booleanish
  center?: Booleanish
  end?: Booleanish
  noFlip?: Booleanish
  noShift?: Booleanish
  offset?: number | string | {mainAxis?: number; crossAxis?: number; alignmentAxis?: number | null}
  role?: string
  split?: Booleanish
  splitButtonType?: ButtonType
  splitHref?: string
  splitDisabled?: Booleanish
  noCaret?: Booleanish
  toggleText?: string
  variant?: ButtonVariant | null
  modelValue?: Booleanish
  lazy?: Booleanish
  strategy?: Strategy
  floatingMiddleware?: Middleware[]
  splitTo?: RouteLocationRaw
  boundary?: Boundary | RootBoundary
  container?: string | ComponentPublicInstance<HTMLElement> | HTMLElement | undefined
}

interface BToastIntermediate {
  delay?: string | number
  bodyClass?: ClassValue
  body?: string
  headerClass?: ClassValue
  headerTag?: string
  animation?: Booleanish
  id?: string
  isStatus?: Booleanish
  autoHide?: Booleanish
  noCloseButton?: Booleanish
  noFade?: Booleanish
  noHoverPause?: Booleanish
  solid?: Booleanish
  title?: string
  modelValue?: boolean | number
  toastClass?: ClassValue
  showOnPause?: Booleanish
  interval?: number | string
  progressProps?: Omit<BProgressBarProps, 'label' | 'labelHtml' | 'max' | 'value'>
}

export type BToastProps = BToastIntermediate & Omit<BLinkProps, 'event' | 'routerTag'>
