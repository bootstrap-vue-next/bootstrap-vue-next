import type {Boundary, Middleware, Padding, RootBoundary, Strategy} from '@floating-ui/vue'
import type {ComponentPublicInstance, RendererElement, TransitionProps} from 'vue'
import type {RouteLocationRaw} from 'vue-router'
import type {
  Breakpoint,
  ButtonType,
  ButtonVariant,
  ClassValue,
  ColorExtendables,
  ColorVariant,
  LinkTarget,
  Numberish,
  PopoverPlacement,
  RadiusElementExtendables,
  Size,
  TableField,
  TableFieldRaw,
  TableItem,
  TextColorVariant,
  TransitionMode,
  VerticalAlign,
} from '.'

export interface BLinkProps {
  active?: boolean
  activeClass?: string
  append?: boolean
  disabled?: boolean
  exactActiveClass?: string
  href?: string
  icon?: boolean
  // noPrefetch: {type: [Boolean, String] as PropType<boolean>, default: false},
  opacity?: 10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'
  opacityHover?: 10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'
  // prefetch: {type: [Boolean, String] as PropType<boolean>, default: null},
  rel?: string
  replace?: boolean
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

export interface BTransitionProps {
  appear?: boolean
  mode?: TransitionMode
  noFade?: boolean
  transProps?: Readonly<TransitionProps>
}

export interface BImgProps extends RadiusElementExtendables {
  blank?: boolean
  blankColor?: string
  block?: boolean
  center?: boolean
  end?: boolean
  fluid?: boolean
  fluidGrow?: boolean
  height?: Numberish
  lazy?: boolean
  sizes?: string | readonly string[]
  src?: string
  srcset?: string | readonly string[]
  start?: boolean
  thumbnail?: boolean
  width?: Numberish
}

export interface BFormProps {
  floating?: boolean
  id?: string
  novalidate?: boolean
  validated?: boolean
}

export interface BTableSimpleProps {
  bordered?: boolean
  borderless?: boolean
  borderVariant?: ColorVariant | null
  captionTop?: boolean
  dark?: boolean
  fixed?: boolean
  hover?: boolean
  id?: string
  noBorderCollapse?: boolean
  outlined?: boolean
  responsive?: boolean | Breakpoint
  small?: boolean
  stacked?: boolean | Breakpoint
  stickyHeader?: boolean
  striped?: boolean
  stripedColumns?: boolean
  tableClass?: ClassValue
  variant?: ColorVariant | null
}

export interface BTableLiteProps<T = Record<string, unknown>> extends BTableSimpleProps {
  align?: VerticalAlign
  caption?: string
  captionHtml?: string
  detailsTdClass?: ClassValue
  emptyFilteredText?: string
  emptyText?: string
  fieldColumnClass?: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | ((field: TableField<T>) => readonly Record<string, any>[])
    | string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | Readonly<Record<PropertyKey, any>>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | readonly any[]
  fields?: TableFieldRaw<T>[]
  footClone?: boolean
  footRowVariant?: ColorVariant | null
  footVariant?: ColorVariant | null
  headRowVariant?: ColorVariant | null
  headVariant?: ColorVariant | null
  items?: readonly TableItem<T>[]
  labelStacked?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modelValue?: any
  primaryKey?: string
  showEmpty?: boolean
  tbodyClass?: ClassValue
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tbodyTrAttr?: any
  // tbodyTransitionHandlers
  // tbodyTransitionProps
  tbodyTrClass?: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | ((item: TableItem | null, type: string) => string | readonly any[] | null | undefined)
    | string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | Readonly<Record<PropertyKey, any>>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | readonly any[]
  tfootClass?: ClassValue
  tfootTrClass?: ClassValue
  theadClass?: ClassValue
  theadTrClass?: ClassValue
}
export interface BProgressBarProps extends ColorExtendables {
  animated?: boolean
  label?: string
  labelHtml?: string
  max?: Numberish
  precision?: Numberish
  showProgress?: boolean
  showValue?: boolean
  striped?: boolean
  value?: Numberish
}

export interface BInputGroupAddonProps {
  isText?: boolean
}

export interface BFormFeedbackSharedProps {
  ariaLive?: string
  forceShow?: boolean
  id?: string
  role?: string
  state?: boolean | null
  tag?: string
  text?: string
  tooltip?: boolean
}

export interface BDropdownProps {
  ariaLabel?: string
  autoClose?: boolean | 'inside' | 'outside'
  boundary?: Boundary | RootBoundary
  boundaryPadding?: Padding
  center?: boolean
  container?: string | ComponentPublicInstance<HTMLElement> | HTMLElement | undefined
  disabled?: boolean
  dropend?: boolean
  dropstart?: boolean
  dropup?: boolean
  end?: boolean
  floatingMiddleware?: Middleware[]
  id?: string
  isNav?: boolean
  lazy?: boolean
  menuClass?: ClassValue
  modelValue?: boolean
  noCaret?: boolean
  noFlip?: boolean
  noShift?: boolean
  noSize?: boolean
  offset?:
    | number
    | string
    | Readonly<{mainAxis?: number; crossAxis?: number; alignmentAxis?: number | null}>
  role?: string
  size?: Size
  split?: boolean
  splitButtonType?: ButtonType
  splitClass?: ClassValue
  splitDisabled?: boolean
  splitHref?: string
  splitTo?: RouteLocationRaw
  splitVariant?: ButtonVariant | null
  strategy?: Strategy
  text?: string
  toggleClass?: ClassValue
  toggleText?: string
  variant?: ButtonVariant | null
}

export interface BToastProps extends ColorExtendables, Omit<BLinkProps, 'routerTag'> {
  body?: string
  bodyClass?: ClassValue
  headerClass?: ClassValue
  headerTag?: string
  id?: string
  interval?: Numberish
  isStatus?: boolean
  modelValue?: boolean | number
  noCloseButton?: boolean
  noFade?: boolean
  noHoverPause?: boolean
  progressProps?: Omit<BProgressBarProps, 'label' | 'labelHtml' | 'max' | 'value'>
  showOnPause?: boolean
  solid?: boolean
  title?: string
  toastClass?: ClassValue
  transProps?: Readonly<BTransitionProps>
}

export interface BPopoverProps {
  boundary?: Boundary | RootBoundary
  boundaryPadding?: Padding
  click?: boolean
  container?: string | Readonly<ComponentPublicInstance> | Readonly<HTMLElement> | undefined
  content?: string
  customClass?: ClassValue
  delay?:
    | number
    | Readonly<{
        show: number
        hide: number
      }>
  floatingMiddleware?: Middleware[]
  hide?: boolean
  html?: boolean
  id?: string
  inline?: boolean
  manual?: boolean
  modelValue?: boolean
  noAutoClose?: boolean
  noFade?: boolean
  noFlip?: boolean
  noHide?: boolean
  noShift?: boolean
  noSize?: boolean
  noninteractive?: boolean
  offset?: Numberish | null
  placement?: PopoverPlacement
  persistent?: boolean
  realtime?: boolean
  reference?: string | Readonly<ComponentPublicInstance> | Readonly<HTMLElement> | null
  strategy?: Strategy
  target?: string | Readonly<ComponentPublicInstance> | Readonly<HTMLElement> | null
  title?: string
  tooltip?: boolean
  variant?: ColorVariant | null
}

export interface BTooltipProps extends Omit<BPopoverProps, 'tooltip'> {
  interactive?: boolean
}

export interface BCardHeadFootProps extends ColorExtendables {
  borderVariant?: ColorVariant | null
  html?: string
  tag?: string
  text?: string
}

export interface BModalProps {
  autoFocus?: boolean
  autoFocusButton?: 'ok' | 'cancel' | 'close'
  body?: string
  backdropVariant?: ColorVariant | null
  bodyBgVariant?: ColorVariant | null
  bodyClass?: ClassValue
  bodyScrolling?: boolean
  bodyTextVariant?: TextColorVariant | null
  bodyVariant?: ColorVariant | null
  busy?: boolean
  buttonSize?: Size
  cancelDisabled?: boolean
  cancelTitle?: string
  cancelVariant?: ButtonVariant | null
  centered?: boolean
  contentClass?: ClassValue
  dialogClass?: ClassValue
  footerBgVariant?: ColorVariant | null
  footerBorderVariant?: ColorVariant | null
  footerClass?: ClassValue
  footerTextVariant?: TextColorVariant | null
  footerVariant?: ColorVariant | null
  fullscreen?: boolean | Breakpoint
  headerBgVariant?: ColorVariant | null
  headerBorderVariant?: ColorVariant | null
  headerClass?: ClassValue
  headerCloseClass?: ClassValue
  headerCloseLabel?: string
  headerCloseVariant?: ButtonVariant | null
  headerTextVariant?: TextColorVariant | null
  headerVariant?: ColorVariant | null
  hideBackdrop?: boolean
  hideFooter?: boolean
  hideHeader?: boolean
  hideHeaderClose?: boolean
  id?: string
  lazy?: boolean
  modalClass?: ClassValue
  modelValue?: boolean
  noCloseOnBackdrop?: boolean
  noCloseOnEsc?: boolean
  noFade?: boolean
  okDisabled?: boolean
  okOnly?: boolean
  okTitle?: string
  okVariant?: ButtonVariant | null
  scrollable?: boolean
  size?: Size | 'xl'
  teleportDisabled?: boolean
  teleportTo?: string | Readonly<RendererElement> | null | undefined
  title?: string
  titleClass?: ClassValue
  titleSrOnly?: boolean
  titleTag?: string
  transProps?: Readonly<BTransitionProps>
}
