import type {Boundary, Middleware, Padding, RootBoundary, Strategy} from '@floating-ui/vue'
import type {ComponentPublicInstance, RendererElement, TransitionProps} from 'vue'
import type {RouteLocationRaw} from 'vue-router'
import type {
  Booleanish,
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
  active?: Booleanish
  activeClass?: string
  append?: Booleanish
  disabled?: Booleanish
  exactActiveClass?: string
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

export interface BTransitionProps {
  appear?: Booleanish
  mode?: TransitionMode
  noFade?: Booleanish
  transProps?: Readonly<TransitionProps>
}

export interface BImgProps extends RadiusElementExtendables {
  blank?: Booleanish
  blankColor?: string
  block?: Booleanish
  center?: Booleanish
  end?: Booleanish
  fluid?: Booleanish
  fluidGrow?: Booleanish
  height?: Numberish
  lazy?: Booleanish
  sizes?: string | readonly string[]
  src?: string
  srcset?: string | readonly string[]
  start?: Booleanish
  thumbnail?: Booleanish
  width?: Numberish
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
  footClone?: Booleanish
  footRowVariant?: ColorVariant | null
  footVariant?: ColorVariant | null
  headRowVariant?: ColorVariant | null
  headVariant?: ColorVariant | null
  items?: readonly TableItem<T>[]
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
  animated?: Booleanish
  label?: string
  labelHtml?: string
  max?: Numberish
  precision?: Numberish
  showProgress?: Booleanish
  showValue?: Booleanish
  striped?: Booleanish
  value?: Numberish
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
  offset?:
    | number
    | string
    | Readonly<{mainAxis?: number; crossAxis?: number; alignmentAxis?: number | null}>
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

export interface BToastProps extends ColorExtendables, Omit<BLinkProps, 'routerTag'> {
  body?: string
  bodyClass?: ClassValue
  headerClass?: ClassValue
  headerTag?: string
  id?: string
  interval?: Numberish
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
  transProps?: Readonly<BTransitionProps>
}

export interface BPopoverProps {
  boundary?: Boundary | RootBoundary
  boundaryPadding?: Padding
  click?: Booleanish
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
  offset?: Numberish | null
  placement?: PopoverPlacement
  persistent?: Booleanish
  realtime?: Booleanish
  reference?: string | Readonly<ComponentPublicInstance> | Readonly<HTMLElement> | null
  strategy?: Strategy
  target?: string | Readonly<ComponentPublicInstance> | Readonly<HTMLElement> | null
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

export interface BModalProps {
  autoFocus?: Booleanish
  autoFocusButton?: 'ok' | 'cancel' | 'close'
  body?: string
  backdropVariant?: ColorVariant | null
  bodyBgVariant?: ColorVariant | null
  bodyClass?: ClassValue
  bodyScrolling?: Booleanish
  bodyTextVariant?: TextColorVariant | null
  bodyVariant?: ColorVariant | null
  busy?: Booleanish
  buttonSize?: Size
  cancelDisabled?: Booleanish
  cancelTitle?: string
  cancelVariant?: ButtonVariant | null
  centered?: Booleanish
  contentClass?: ClassValue
  dialogClass?: ClassValue
  footerBgVariant?: ColorVariant | null
  footerBorderVariant?: ColorVariant | null
  footerClass?: ClassValue
  footerTextVariant?: TextColorVariant | null
  footerVariant?: ColorVariant | null
  fullscreen?: Booleanish | Breakpoint
  headerBgVariant?: ColorVariant | null
  headerBorderVariant?: ColorVariant | null
  headerClass?: ClassValue
  headerCloseClass?: ClassValue
  headerCloseLabel?: string
  headerCloseVariant?: ButtonVariant | null
  headerTextVariant?: TextColorVariant | null
  headerVariant?: ColorVariant | null
  hideBackdrop?: Booleanish
  hideFooter?: Booleanish
  hideHeader?: Booleanish
  hideHeaderClose?: Booleanish
  id?: string
  lazy?: Booleanish
  modalClass?: ClassValue
  modelValue?: Booleanish
  noCloseOnBackdrop?: Booleanish
  noCloseOnEsc?: Booleanish
  noFade?: Booleanish
  okDisabled?: Booleanish
  okOnly?: Booleanish
  okTitle?: string
  okVariant?: ButtonVariant | null
  scrollable?: Booleanish
  size?: Size | 'xl'
  teleportDisabled?: Booleanish
  teleportTo?: string | Readonly<RendererElement> | null | undefined
  title?: string
  titleClass?: ClassValue
  titleSrOnly?: Booleanish
  titleTag?: string
  transProps?: Readonly<BTransitionProps>
}
