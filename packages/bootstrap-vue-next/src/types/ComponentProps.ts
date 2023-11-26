import type {Boundary, Middleware, Padding, RootBoundary, Strategy} from '@floating-ui/vue'
import type {ComponentPublicInstance, MaybeRef} from 'vue'
import type {RouteLocationRaw} from 'vue-router'
import type {PopoverPlacement} from './PopoverPlacement'
import type {Booleanish} from './Booleanish'
import type {Breakpoint} from './Breakpoint'
import type {ButtonType} from './ButtonType'
import type {ButtonVariant} from './ButtonVariant'
import type {ClassValue} from './AnyValuedAttributes'
import type {ColorExtendables} from './ColorExtendables'
import type {ColorVariant} from './ColorVariant'
import type {LinkTarget} from './LinkTarget'
import type {Size} from './Size'
import type {TableField} from './TableField'
import type {TableFieldObject} from './TableFieldObject'
import type {TableItem} from './TableItem'
import type {VerticalAlign} from './VerticalAlign'
import type {RadiusElementExtendables} from './RadiusElement'

export interface BLinkProps {
  active?: Booleanish
  activeClass?: string
  append?: Booleanish
  disabled?: Booleanish
  exactActiveClass?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  event?: string | any[]
  href?: string
  icon?: Booleanish
  // noPrefetch: {type: [Boolean, String] as PropType<Booleanish>, default: false},
  opacity?: 10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'
  opacityHover?: 10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'
  // prefetch: {type: [Boolean, String] as PropType<Booleanish>, default: null},
  rel?: string
  replace?: Booleanish
  routerComponentName?: string
  routerTag?: string
  target?: LinkTarget
  to?: RouteLocationRaw
  underlineOffset?: 1 | 2 | 3 | '1' | '2' | '3'
  underlineOffsetHover?: 1 | 2 | 3 | '1' | '2' | '3'
  underlineOpacity?: 0 | 10 | 25 | 50 | 75 | 100 | '0' | '10' | '25' | '50' | '75' | '100'
  underlineOpacityHover?: 0 | 10 | 25 | 50 | 75 | 100 | '0' | '10' | '25' | '50' | '75' | '100'
  underlineVariant?: ColorVariant | null
  variant?: ColorVariant | null
}

export interface BImgProps extends RadiusElementExtendables {
  blank?: Booleanish
  blankColor?: string
  block?: Booleanish
  center?: Booleanish
  end?: Booleanish
  fluid?: Booleanish
  fluidGrow?: Booleanish
  height?: number | string
  lazy?: Booleanish
  sizes?: string | string[]
  src?: string
  srcset?: string | string[]
  start?: Booleanish
  thumbnail?: Booleanish
  width?: number | string
}

export interface BFormProps {
  floating?: Booleanish
  id?: string
  novalidate?: Booleanish
  validated?: Booleanish
}

export interface BTableSimpleProps {
  bordered?: Booleanish
  borderless?: Booleanish
  borderVariant?: ColorVariant | null
  captionTop?: Booleanish
  dark?: Booleanish
  fixed?: Booleanish
  hover?: Booleanish
  id?: string
  noBorderCollapse?: Booleanish
  outlined?: Booleanish
  responsive?: Booleanish | Breakpoint
  small?: Booleanish
  stacked?: Booleanish | Breakpoint
  stickyHeader?: Booleanish
  striped?: Booleanish
  stripedColumns?: Booleanish
  tableClass?: ClassValue
  variant?: ColorVariant | null
}

export interface BTableLiteProps extends BTableSimpleProps {
  align?: VerticalAlign
  caption?: string
  captionHtml?: string
  detailsTdClass?: ClassValue
  emptyFilteredText?: string
  emptyText?: string
  fieldColumnClass?: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | ((field: TableFieldObject) => Record<string, any>[])
    | string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | Record<PropertyKey, any>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | any[]
  fields?: TableField[]
  footClone?: Booleanish
  footRowVariant?: ColorVariant | null
  footVariant?: ColorVariant | null
  headRowVariant?: ColorVariant | null
  headVariant?: ColorVariant | null
  items?: TableItem[]
  labelStacked?: Booleanish
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modelValue?: any
  primaryKey?: string
  showEmpty?: Booleanish
  tbodyClass?: ClassValue
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tbodyTrAttr?: any
  // tbodyTransitionHandlers
  // tbodyTransitionProps
  tbodyTrClass?: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | ((item: TableItem | null, type: string) => string | Array<any> | null | undefined)
    | string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | Record<PropertyKey, any>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | any[]
  tfootClass?: ClassValue
  tfootTrClass?: ClassValue
  theadClass?: ClassValue
  theadTrClass?: ClassValue
}
export interface BProgressBarProps extends ColorExtendables {
  animated?: Booleanish
  label?: string
  labelHtml?: string
  max?: string | number
  precision?: string | number
  showProgress?: Booleanish
  showValue?: Booleanish
  striped?: Booleanish
  value?: string | number
}

export interface BInputGroupAddonProps {
  isText?: Booleanish
}

export interface BFormFeedbackSharedProps {
  ariaLive?: string
  forceShow?: Booleanish
  id?: string
  role?: string
  state?: Booleanish | null
  tag?: string
  text?: string
  tooltip?: Booleanish
}

export interface BDropdownProps {
  ariaLabel?: string
  autoClose?: boolean | 'inside' | 'outside'
  boundary?: Boundary | RootBoundary
  boundaryPadding?: Padding
  center?: Booleanish
  container?: string | ComponentPublicInstance<HTMLElement> | HTMLElement | undefined
  disabled?: Booleanish
  dropend?: Booleanish
  dropstart?: Booleanish
  dropup?: Booleanish
  end?: Booleanish
  floatingMiddleware?: Middleware[]
  id?: string
  isNav?: Booleanish
  lazy?: Booleanish
  menuClass?: ClassValue
  modelValue?: Booleanish
  noCaret?: Booleanish
  noFlip?: Booleanish
  noShift?: Booleanish
  noSize?: Booleanish
  offset?: number | string | {mainAxis?: number; crossAxis?: number; alignmentAxis?: number | null}
  role?: string
  size?: Size
  split?: Booleanish
  splitButtonType?: ButtonType
  splitClass?: ClassValue
  splitDisabled?: Booleanish
  splitHref?: string
  splitTo?: RouteLocationRaw
  splitVariant?: ButtonVariant | null
  strategy?: Strategy
  text?: string
  toggleClass?: ClassValue
  toggleText?: string
  variant?: ButtonVariant | null
}

interface BToastIntermediate extends ColorExtendables {
  animation?: Booleanish
  autoHide?: Booleanish
  body?: string
  bodyClass?: ClassValue
  delay?: string | number
  headerClass?: ClassValue
  headerTag?: string
  id?: string
  interval?: number | string
  isStatus?: Booleanish
  modelValue?: boolean | number
  noCloseButton?: Booleanish
  noFade?: Booleanish
  noHoverPause?: Booleanish
  progressProps?: Omit<BProgressBarProps, 'label' | 'labelHtml' | 'max' | 'value'>
  showOnPause?: Booleanish
  solid?: Booleanish
  title?: string
  toastClass?: ClassValue
}

export type BToastProps = BToastIntermediate & Omit<BLinkProps, 'event' | 'routerTag'>

export interface BPopoverProps {
  boundary?: Boundary | RootBoundary
  boundaryPadding?: Padding
  click?: Booleanish
  container?: string | ComponentPublicInstance<HTMLElement> | HTMLElement | undefined
  content?: string
  customClass?: ClassValue
  delay?:
    | number
    | {
        show: number
        hide: number
      }
  floatingMiddleware?: Middleware[]
  hide?: Booleanish
  html?: Booleanish
  id?: string
  inline?: Booleanish
  manual?: Booleanish
  modelValue?: Booleanish
  noAutoClose?: Booleanish
  noFade?: Booleanish
  noFlip?: Booleanish
  noHide?: Booleanish
  noShift?: Booleanish
  noSize?: Booleanish
  noninteractive?: Booleanish
  offset?: number | string | null
  placement?: PopoverPlacement
  persistent?: Booleanish
  realtime?: Booleanish
  reference?: MaybeRef<
    string | ComponentPublicInstance<HTMLElement> | HTMLSpanElement | HTMLElement | null
  >
  strategy?: Strategy
  target?: MaybeRef<
    string | ComponentPublicInstance<HTMLElement> | HTMLSpanElement | HTMLElement | null
  >
  title?: string
  tooltip?: Booleanish
  variant?: ColorVariant | null
}

export interface BCardHeadFootProps extends ColorExtendables {
  borderVariant?: ColorVariant | null
  html?: string
  tag?: string
  text?: string
}
