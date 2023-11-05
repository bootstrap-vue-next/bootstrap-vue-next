import type {Boundary, Middleware, RootBoundary, Strategy} from '@floating-ui/vue'
import type {ComponentPublicInstance, MaybeRef} from 'vue'
import type {RouteLocationRaw} from 'vue-router'
import type {BPopoverPlacement} from './BPopoverPlacement'
import type {Booleanish} from './Booleanish'
import type {Breakpoint} from './Breakpoint'
import type {ButtonType} from './ButtonType'
import type {ButtonVariant} from './ButtonVariant'
import type {ClassValue} from './ClassValue'
import type {ColorExtendables} from './ColorExtendables'
import type {ColorVariant} from './ColorVariant'
import type {LinkTarget} from './LinkTarget'
import type {Size} from './Size'
import type {TableField} from './TableField'
import type {TableFieldObject} from './TableFieldObject'
import type {TableItem} from './TableItem'
import type {VerticalAlign} from './VerticalAlign'

export interface BLinkProps {
  active?: Booleanish
  activeClass?: string
  exactActiveClass?: string
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
  tableClass?: ClassValue
  variant?: ColorVariant | null
  stripedColumns?: Booleanish
  role?: string
  responsiveClass?: ClassValue
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  responsiveAttrs?: any
}

export interface BTableLiteProps {
  align?: VerticalAlign
  caption?: string
  captionHtml?: string
  detailsTdClass?: ClassValue
  fields?: TableField[]
  footClone?: Booleanish
  footRowVariant?: ColorVariant | null
  footVariant?: ColorVariant | null
  headRowVariant?: ColorVariant | null
  headVariant?: ColorVariant | null
  items?: TableItem[]
  primaryKey?: string
  tbodyClass?: ClassValue
  tbodyTrAttr?: any
  // tbodyTransitionHandlers
  // tbodyTransitionProps
  tfootClass?: ClassValue
  tfootTrClass?: ClassValue
  theadClass?: ClassValue
  theadTrClass?: ClassValue
  modelValue?: any
  labelStacked?: Booleanish
  showEmpty?: Booleanish
  emptyText?: string
  emptyFilteredText?: string
  fieldColumnClass?: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | ((field: TableFieldObject) => Record<string, any>[])
    | string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | Record<PropertyKey, any>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | any[]
  tbodyTrClass?: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | ((item: TableItem | null, type: string) => string | Array<any> | null | undefined)
    | string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | Record<PropertyKey, any>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | any[]
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

interface BToastIntermediate extends ColorExtendables {
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

export interface BPopoverProps {
  modelValue?: Booleanish
  container?: string | ComponentPublicInstance<HTMLElement> | HTMLElement | undefined
  target?: MaybeRef<
    string | ComponentPublicInstance<HTMLElement> | HTMLSpanElement | HTMLElement | null
  >
  reference?: MaybeRef<
    string | ComponentPublicInstance<HTMLElement> | HTMLSpanElement | HTMLElement | null
  >
  content?: string
  id?: string
  title?: string
  delay?:
    | number
    | {
        show: number
        hide: number
      }
  click?: Booleanish
  manual?: Booleanish
  variant?: ColorVariant | null
  offset?: number | string | null
  customClass?: ClassValue
  placement?: BPopoverPlacement
  strategy?: Strategy
  floatingMiddleware?: Middleware[]
  noFlip?: Booleanish
  noShift?: Booleanish
  noFade?: Booleanish
  noAutoClose?: Booleanish
  hide?: Booleanish
  realtime?: Booleanish
  inline?: Booleanish
  tooltip?: Booleanish
  html?: Booleanish
  noninteractive?: Booleanish
}
