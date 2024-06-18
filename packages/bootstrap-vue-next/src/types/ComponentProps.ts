import type {Boundary, Middleware, Padding, RootBoundary, Strategy} from '@floating-ui/vue'
import type {ComponentPublicInstance, TransitionProps} from 'vue'
import type {RouteLocationRaw} from 'vue-router'
import type {
  AlignmentContent,
  AlignmentJustifyContent,
  AlignmentTextHorizontal,
  AlignmentVertical,
  AriaInvalid,
  AttrsValue,
  BreadcrumbItemRaw,
  Breakpoint,
  BTableProvider,
  BTableSortBy,
  ButtonType,
  ButtonVariant,
  CheckboxOptionRaw,
  CheckboxValue,
  ClassValue,
  ColBreakpointProps,
  ColorExtendables,
  ColorVariant,
  ColsNumbers,
  CombinedPlacement,
  CommonInputProps,
  InputType,
  LinkTarget,
  LiteralUnion,
  NoProviderTypes,
  Numberish,
  OffsetBreakpointProps,
  OrderBreakpointProps,
  PlaceholderAnimation,
  PlaceholderSize,
  Placement,
  PopoverPlacement,
  RadioOptionRaw,
  RadioValue,
  RadiusElementExtendables,
  RowColsBreakpointProps,
  SelectValue,
  Size,
  SpinnerType,
  TableField,
  TableFieldRaw,
  TeleporterProps,
  TextColorVariant,
  TransitionMode,
  VerticalAlign,
} from '.'
import type * as Components from '../components'

export interface BLinkProps {
  active?: boolean
  activeClass?: string
  disabled?: boolean
  exactActiveClass?: string
  href?: string
  icon?: boolean
  stretched?: boolean
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
  prefetch?: boolean
  noPrefetch?: boolean
  prefetchedClass?: ClassValue
  noRel?: boolean
}

export interface BAccordionProps {
  flush?: boolean
  free?: boolean
  id?: string
  modelValue?: string
}

export interface BDropdownDividerProps {
  tag?: string
}

export interface BDropdownGroupProps {
  ariaDescribedby?: string
  header?: string
  headerClass?: ClassValue
  headerTag?: string
  headerVariant?: ColorVariant | null
  id?: string
}

export interface BDropdownItemProps extends Omit<BLinkProps, 'routerTag'> {
  linkClass?: ClassValue
  wrapperAttrs?: Readonly<AttrsValue>
}

export interface BDropdownItemButtonProps {
  active?: boolean
  activeClass?: ClassValue
  buttonClass?: ClassValue
  disabled?: boolean
  variant?: ColorVariant | null
}

export interface BDropdownTextProps {
  text?: string
}

export interface BFormFloatingLabelProps {
  label?: string
  labelFor?: string
  text?: string
}

export interface BFormRowProps {
  tag?: string
}

export interface BFormTextProps {
  id?: string
  inline?: boolean
  tag?: string
  text?: string
  textVariant?: TextColorVariant | null
}

export interface BFormCheckboxProps {
  ariaLabel?: string
  ariaLabelledby?: string
  autofocus?: boolean
  button?: boolean
  buttonGroup?: boolean
  buttonVariant?: ButtonVariant | null
  disabled?: boolean
  form?: string
  id?: string
  indeterminate?: boolean
  inline?: boolean
  modelValue?: CheckboxValue | readonly CheckboxValue[]
  name?: string
  plain?: boolean
  required?: boolean
  reverse?: boolean
  size?: Size
  state?: boolean | null
  switch?: boolean
  uncheckedValue?: CheckboxValue
  // Since the compiler-sfc doesn't crawl external filed, the redundant string/boolean union is
  // necessary to tell it that we don't want it to follow Boolean casting rules
  // https://vuejs.org/guide/components/props.html#boolean-casting which would cast the empty
  // string to true
  value?: string | boolean | CheckboxValue
}

export interface BFormCheckboxGroupProps {
  ariaInvalid?: AriaInvalid
  autofocus?: boolean
  buttonVariant?: ButtonVariant | null
  buttons?: boolean
  disabled?: boolean
  disabledField?: string
  form?: string
  htmlField?: string
  id?: string
  modelValue?: readonly CheckboxValue[]
  name?: string
  options?: readonly CheckboxOptionRaw[]
  plain?: boolean
  required?: boolean
  reverse?: boolean
  size?: Size
  stacked?: boolean
  state?: boolean | null
  switches?: boolean
  textField?: string
  validated?: boolean
  valueField?: string
}

export interface BFormFileProps {
  ariaLabel?: string
  ariaLabelledby?: string
  accept?: string | readonly string[]
  autofocus?: boolean
  capture?: boolean | 'user' | 'environment'
  directory?: boolean
  disabled?: boolean
  form?: string
  id?: string
  label?: string
  labelClass?: ClassValue
  modelValue?: readonly File[] | File | null
  multiple?: boolean
  name?: string
  noButton?: boolean
  noDrop?: boolean
  noTraverse?: boolean
  plain?: boolean
  required?: boolean
  size?: Size
  state?: boolean | null
}

export interface BFormInputProps extends CommonInputProps {
  max?: Numberish
  min?: Numberish
  // noWheel: {type: Boolean, default: false}, TODO: not implemented yet
  step?: Numberish
  type?: InputType
}

export interface BFormRadioProps {
  ariaLabel?: string
  ariaLabelledby?: string
  autofocus?: boolean
  button?: boolean
  buttonGroup?: boolean
  buttonVariant?: ButtonVariant | null
  disabled?: boolean
  form?: string
  id?: string
  inline?: boolean
  modelValue?: RadioValue
  name?: string
  plain?: boolean
  required?: boolean
  reverse?: boolean
  size?: Size
  state?: boolean | null
  value?: RadioValue
}

export interface BFormRadioGroupProps {
  ariaInvalid?: AriaInvalid
  autofocus?: boolean
  buttonVariant?: ButtonVariant | null
  buttons?: boolean
  disabled?: boolean
  disabledField?: string
  form?: string
  htmlField?: string
  id?: string
  modelValue?: RadioValue
  name?: string
  options?: readonly RadioOptionRaw[]
  plain?: boolean
  required?: boolean
  reverse?: boolean
  size?: Size
  stacked?: boolean
  state?: boolean | null
  textField?: string
  validated?: boolean
  valueField?: string
}

export interface BFormSelectProps {
  ariaInvalid?: AriaInvalid
  autofocus?: boolean
  disabled?: boolean
  disabledField?: string
  form?: string
  htmlField?: string
  id?: string
  labelField?: string
  modelValue?: SelectValue
  multiple?: boolean
  name?: string
  options?: readonly (unknown | Record<string, unknown>)[]
  optionsField?: string
  plain?: boolean
  required?: boolean
  selectSize?: Numberish
  size?: Size
  state?: boolean | null
  textField?: string
  valueField?: string
}

export interface BFormSelectOptionProps<T> {
  disabled?: boolean
  value?: T
}

export interface BFormSelectOptionGroupProps {
  disabledField?: string
  htmlField?: string
  label?: string
  options?: readonly (unknown | Record<string, unknown>)[]
  textField?: string
  valueField?: string
}

export interface BFormSpinbuttonProps {
  ariaControls?: string
  ariaLabel?: string
  disabled?: boolean
  form?: string
  formatterFn?: (value: number) => string
  id?: string
  inline?: boolean
  labelDecrement?: string
  labelIncrement?: string
  locale?: string
  max?: Numberish
  min?: Numberish
  modelValue?: number | null
  name?: string
  placeholder?: string
  readonly?: boolean
  repeatDelay?: Numberish
  repeatInterval?: Numberish
  repeatStepMultiplier?: Numberish
  repeatThreshold?: Numberish
  required?: boolean
  size?: Size
  state?: boolean | null
  step?: Numberish
  vertical?: boolean
  wrap?: boolean
}

export interface BFormTagProps {
  disabled?: boolean
  id?: string
  noRemove?: boolean
  pill?: boolean
  removeLabel?: string
  tag?: string
  title?: string
  variant?: ColorVariant | null
}

export interface BFormTagsProps {
  addButtonText?: string
  addButtonVariant?: ButtonVariant | null
  addOnChange?: boolean
  autofocus?: boolean
  disabled?: boolean
  duplicateTagText?: string
  form?: string
  inputAttrs?: Readonly<AttrsValue>
  inputClass?: ClassValue
  inputId?: string
  inputType?: InputType
  invalidTagText?: string
  limit?: Numberish
  limitTagsText?: string
  modelValue?: readonly string[]
  name?: string
  noAddOnEnter?: boolean
  noOuterFocus?: boolean
  noTagRemove?: boolean
  placeholder?: string
  removeOnDelete?: boolean
  required?: boolean
  separator?: string | readonly string[]
  size?: Size
  state?: boolean | null
  tagClass?: ClassValue
  tagPills?: boolean
  tagRemoveLabel?: string
  tagRemovedLabel?: string
  tagValidator?: (t: string) => boolean
  tagVariant?: ColorVariant | null
}

export interface BFormTextareaProps extends CommonInputProps {
  noResize?: boolean
  rows?: Numberish
  wrap?: string
}

export interface BInputGroupProps {
  append?: string
  appendHtml?: string
  id?: string
  prepend?: string
  prependHtml?: string
  size?: Size
  tag?: string
}

export interface BInputGroupTextProps {
  tag?: string
  text?: string
}

export interface BListGroupProps {
  flush?: boolean
  horizontal?: boolean | Breakpoint
  numbered?: boolean
  tag?: string
}

export interface BListGroupItemProps extends Omit<BLinkProps, 'routerTag'> {
  action?: boolean
  button?: boolean
  tag?: string
}

export interface BModalOrchestratorProps extends TeleporterProps {}

export interface BNavProps {
  align?: AlignmentJustifyContent
  cardHeader?: boolean
  fill?: boolean
  justified?: boolean
  pills?: boolean
  small?: boolean
  tabs?: boolean
  tag?: string
  underline?: boolean
  vertical?: boolean
}

export interface BNavFormProps extends BFormProps {
  role?: string
}

export interface BNavItemProps extends Omit<BLinkProps, 'routerTag'> {
  linkAttrs?: Readonly<AttrsValue>
  linkClass?: ClassValue
}

export interface BNavTextProps {
  text?: string
}

export interface BNavbarProps {
  autoClose?: boolean
  container?: boolean | 'fluid' | Breakpoint
  fixed?: Extract<Placement, 'top' | 'bottom'>
  print?: boolean
  sticky?: Extract<Placement, 'top' | 'bottom'>
  tag?: string
  toggleable?: boolean | Breakpoint
  variant?: ColorVariant | null
}

export interface BNavbarBrandProps extends Omit<BLinkProps, 'routerTag'> {
  tag?: string
}

export interface BNavbarNavProps {
  align?: AlignmentJustifyContent
  fill?: boolean
  justified?: boolean
  small?: boolean
  tag?: string
}

export interface BNavbarToggleProps {
  disabled?: boolean
  label?: string
  target?: string | readonly string[]
}

export interface BOffcanvasProps extends TeleporterProps {
  backdrop?: boolean
  backdropBlur?: string
  backdropVariant?: ColorVariant | 'white' | 'transparent' | null
  bodyAttrs?: Readonly<AttrsValue>
  bodyClass?: ClassValue
  bodyScrolling?: boolean
  footerClass?: string
  headerClass?: string
  headerCloseClass?: ClassValue
  headerCloseLabel?: string
  headerCloseVariant?: ButtonVariant | null
  id?: string
  lazy?: boolean
  modelValue?: boolean
  noCloseOnBackdrop?: boolean
  noCloseOnEsc?: boolean
  noFocus?: boolean
  noHeader?: boolean
  noHeaderClose?: boolean
  placement?: Placement
  shadow?: Size | boolean
  title?: string
  // responsive?: Breakpoint
  // TODO responsive doesn't work
  width?: string
}

export interface BOverlayProps extends RadiusElementExtendables {
  bgColor?: string
  blur?: string | null
  fixed?: boolean
  noCenter?: boolean
  noFade?: boolean
  noSpinner?: boolean
  noWrap?: boolean
  opacity?: Numberish
  overlayTag?: string
  show?: boolean
  spinnerSmall?: boolean
  spinnerType?: SpinnerType
  spinnerVariant?: ColorVariant | null
  variant?: ColorVariant | 'white' | 'transparent' | null
  wrapTag?: string
  zIndex?: Numberish
}

export interface BPaginationProps {
  align?: AlignmentJustifyContent | 'fill'
  ariaControls?: string
  ariaLabel?: string
  disabled?: boolean
  ellipsisClass?: ClassValue
  ellipsisText?: string
  firstClass?: ClassValue
  firstNumber?: boolean
  firstText?: string
  hideEllipsis?: boolean
  hideGotoEndButtons?: boolean
  labelFirstPage?: string
  labelLastPage?: string
  labelNextPage?: string
  labelPage?: string
  labelPrevPage?: string
  lastClass?: ClassValue
  lastNumber?: boolean
  lastText?: string
  limit?: Numberish
  modelValue?: Numberish
  nextClass?: ClassValue
  nextText?: string
  pageClass?: ClassValue
  perPage?: Numberish
  pills?: boolean
  prevClass?: ClassValue
  prevText?: string
  size?: Size
  totalRows?: Numberish
}

export interface BPlaceholderProps {
  animation?: PlaceholderAnimation
  cols?: Numberish
  size?: PlaceholderSize
  tag?: string
  variant?: ColorVariant | null
  width?: Numberish
  wrapperTag?: string
}

export interface BPlaceholderButtonProps {
  animation?: PlaceholderAnimation
  cols?: Numberish
  tag?: string
  variant?: ColorVariant | null
  width?: Numberish
}

export interface BPlaceholderCardProps {
  animation?: PlaceholderAnimation
  footerAnimation?: PlaceholderAnimation
  footerSize?: PlaceholderSize
  footerVariant?: ColorVariant | null
  footerWidth?: Numberish
  headerAnimation?: PlaceholderAnimation
  headerSize?: PlaceholderSize
  headerVariant?: ColorVariant | null
  headerWidth?: Numberish
  imgBlankColor?: string
  imgPlacement?: Extract<Placement, 'top' | 'bottom'>
  imgHeight?: Numberish
  imgSrc?: string
  noButton?: boolean
  noFooter?: boolean
  noHeader?: boolean
  noImg?: boolean
  size?: PlaceholderSize
  variant?: ColorVariant | null
}

export interface BPlaceholderTableProps {
  animation?: PlaceholderAnimation
  cellWidth?: Numberish
  columns?: Numberish
  footerAnimation?: PlaceholderAnimation
  footerCellWidth?: Numberish
  footerColumns?: Numberish
  footerSize?: PlaceholderSize
  footerVariant?: ColorVariant | null
  headerAnimation?: PlaceholderAnimation
  headerCellWidth?: Numberish
  headerColumns?: Numberish
  headerSize?: PlaceholderSize
  headerVariant?: ColorVariant | null
  hideHeader?: boolean
  rows?: Numberish
  showFooter?: boolean
  size?: PlaceholderSize
  variant?: ColorVariant | null
}

export interface BPlaceholderWrapperProps {
  loading?: boolean
}

export interface BProgressProps extends Omit<BProgressBarProps, 'label' | 'labelHtml'> {
  height?: string
}

export interface BTabProps {
  active?: boolean
  buttonId?: string
  disabled?: boolean
  id?: string
  lazy?: boolean
  lazyOnce?: boolean
  noBody?: boolean
  tag?: string
  title?: string
  titleItemClass?: ClassValue
  titleLinkAttrs?: Readonly<AttrsValue>
  titleLinkClass?: ClassValue
}

export interface BTabsProps {
  activeId?: string
  activeNavItemClass?: ClassValue
  activeTabClass?: ClassValue
  align?: AlignmentJustifyContent
  card?: boolean
  contentClass?: ClassValue
  end?: boolean
  fill?: boolean
  id?: string
  inactiveNavItemClass?: ClassValue
  inactiveTabClass?: ClassValue
  justified?: boolean
  lazy?: boolean
  modelValue?: number
  navClass?: ClassValue
  navItemClass?: ClassValue
  navWrapperClass?: ClassValue
  noFade?: boolean
  // noKeyNav?: boolean,
  noNavStyle?: boolean
  pills?: boolean
  small?: boolean
  tag?: string
  tabClass?: ClassValue
  vertical?: boolean
}

export interface BToastOrchestratorProps extends TeleporterProps {
  appendToast?: boolean
}

export interface BCollapseProps {
  // appear?: boolean
  horizontal?: boolean
  id?: string
  isNav?: boolean
  modelValue?: boolean
  skipAnimation?: boolean
  tag?: string
  toggle?: boolean
  visible?: boolean
}

export interface BContainerProps {
  fluid?: boolean | Breakpoint
  gutterX?: ColsNumbers
  gutterY?: ColsNumbers
  tag?: string
}

export interface BSpinnerProps {
  label?: string
  role?: string
  small?: boolean
  tag?: string
  type?: SpinnerType
  variant?: ColorVariant | null
}

export interface BAccordionItemProps {
  bodyAttrs?: Readonly<AttrsValue>
  bodyClass?: ClassValue
  buttonAttrs?: Readonly<AttrsValue>
  buttonClass?: ClassValue
  collapseClass?: ClassValue
  headerAttrs?: Readonly<AttrsValue>
  headerClass?: ClassValue
  headerTag?: string
  horizontal?: boolean
  id?: string
  isNav?: boolean
  modelValue?: boolean
  tag?: string
  title?: string
  toggle?: boolean
  visible?: boolean
  wrapperAttrs?: Readonly<AttrsValue>
}

export interface BAlertProps {
  closeClass?: ClassValue
  closeContent?: string
  closeLabel?: string
  closeVariant?: ButtonVariant | null
  dismissible?: boolean
  fade?: boolean
  immediate?: boolean
  interval?: Numberish
  modelValue?: boolean | number
  noHoverPause?: boolean
  showOnPause?: boolean
  variant?: ColorVariant | null
}

export interface BAvatarProps
  extends Omit<BLinkProps, 'routerTag' | 'icon'>,
    ColorExtendables,
    RadiusElementExtendables {
  alt?: string
  badge?: boolean | string
  badgeBgVariant?: ColorVariant | null
  badgePlacement?: CombinedPlacement
  badgeTextVariant?: TextColorVariant | null
  badgeVariant?: ColorVariant | null
  badgePill?: boolean
  badgeDotIndicator?: boolean
  button?: boolean
  buttonType?: ButtonType
  size?: LiteralUnion<Size, Numberish>
  square?: boolean
  src?: string
  text?: string
}

export interface BAvatarGroupProps extends ColorExtendables, RadiusElementExtendables {
  overlap?: Numberish
  size?: LiteralUnion<Size, Numberish>
  square?: boolean
  tag?: string
}

export interface BBadgeProps extends Omit<BLinkProps, 'routerTag'>, ColorExtendables {
  dotIndicator?: boolean
  pill?: boolean
  tag?: string
  textIndicator?: boolean
  placement?: CombinedPlacement
}

export interface BBreadcrumbProps {
  items?: readonly BreadcrumbItemRaw[]
}

export interface BBreadcrumbItemProps extends Omit<BLinkProps, 'routerTag'> {
  ariaCurrent?: string
  text?: string
}

export interface BButtonProps extends Omit<BLinkProps, 'variant'> {
  loading?: boolean
  loadingFill?: boolean
  loadingText?: string
  pill?: boolean
  pressed?: boolean
  size?: Size
  squared?: boolean
  tag?: string
  type?: ButtonType
  variant?: ButtonVariant | null
}

export interface BButtonGroupProps {
  ariaLabel?: string
  size?: Size
  tag?: string
  vertical?: boolean
}

export interface BButtonToolbarProps {
  ariaLabel?: string
  // keyNav?: boolean
  justify?: boolean
  role?: string
}

export interface BCloseButtonProps {
  ariaLabel?: string
  disabled?: boolean
  type?: ButtonType
}

export interface BCardProps extends ColorExtendables {
  align?: AlignmentTextHorizontal
  bodyBgVariant?: ColorVariant | null
  bodyClass?: ClassValue
  bodyTag?: string
  bodyText?: string
  bodyTextVariant?: TextColorVariant | null
  borderVariant?: ColorVariant | null
  footer?: string
  footerBgVariant?: ColorVariant | null
  footerBorderVariant?: ColorVariant | null
  footerClass?: ClassValue
  footerHtml?: string
  footerTag?: string
  footerTextVariant?: TextColorVariant | null
  footerVariant?: ColorVariant | null
  header?: string
  headerBgVariant?: ColorVariant | null
  headerBorderVariant?: ColorVariant | null
  headerClass?: ClassValue
  headerHtml?: string
  headerTag?: string
  headerTextVariant?: TextColorVariant | null
  headerVariant?: ColorVariant | null
  imgAlt?: string
  imgPlacement?: Placement | 'overlay'
  imgHeight?: Numberish
  imgSrc?: string
  imgWidth?: Numberish
  noBody?: boolean
  subtitle?: string
  subtitleTag?: string
  subtitleTextVariant?: TextColorVariant | null
  tag?: string
  title?: string
  titleTag?: string
}

export interface BCardBodyProps extends ColorExtendables {
  overlay?: boolean
  subtitle?: string
  subtitleTag?: string
  subtitleTextVariant?: TextColorVariant | null
  tag?: string
  text?: string
  title?: string
  titleTag?: string
}

export interface BCardGroupProps {
  columns?: boolean
  deck?: boolean
  tag?: string
}

export interface BCardImgProps extends Omit<BImgProps, 'placement'> {
  placement?: Placement | 'overlay'
}

export interface BCardSubtitleProps {
  text?: string
  tag?: string
  textVariant?: TextColorVariant | null
}

export interface BCardTextProps {
  tag?: string
  text?: string
}

export interface BCardTitleProps {
  tag?: string
  text?: string
}

export interface BCarouselProps {
  background?: string
  controls?: boolean
  controlsNextText?: string
  controlsPrevText?: string
  fade?: boolean
  id?: string
  imgHeight?: string
  imgWidth?: string
  indicators?: boolean
  indicatorsButtonLabel?: string
  interval?: Numberish
  keyboard?: boolean
  modelValue?: number
  noHoverPause?: boolean
  noTouch?: boolean
  noWrap?: boolean
  ride?: boolean | 'carousel'
  rideReverse?: boolean
  touchThreshold?: Numberish
}

export interface BCarouselSlideProps {
  background?: string
  caption?: string
  captionHtml?: string
  captionTag?: string
  contentTag?: string
  contentVisibleUp?: string
  id?: string
  imgAlt?: string
  imgBlank?: boolean
  imgBlankColor?: string
  imgHeight?: Numberish
  imgSrc?: string
  imgSrcset?: string | readonly string[]
  imgWidth?: Numberish
  interval?: Numberish
  text?: string
  textHtml?: string
  textTag?: string
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
  fluid?: boolean
  fluidGrow?: boolean
  height?: Numberish
  tag?: string
  lazy?: boolean
  sizes?: string | readonly string[]
  src?: string
  srcset?: string | readonly string[]
  thumbnail?: boolean
  width?: Numberish
  placement?: Extract<Placement, 'start' | 'end'> | 'center'
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
  stickyHeader?: boolean | Numberish
  striped?: boolean
  stripedColumns?: boolean
  variant?: ColorVariant | null
  tableAttrs?: Readonly<AttrsValue>
  tableClass?: ClassValue
}

export interface BTableLiteProps<T> extends BTableSimpleProps {
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
  items?: readonly T[]
  labelStacked?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modelValue?: any
  primaryKey?: string
  showEmpty?: boolean
  tbodyClass?: ClassValue
  tbodyTrAttrs?: ClassValue
  // tbodyTransitionHandlers
  // tbodyTransitionProps
  tbodyTrClass?:
    | ((
        item: T | null,
        type: string
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ) => string | readonly any[] | null | undefined)
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

export interface BTableProps<T> extends Omit<BTableLiteProps<T>, 'tableClass'> {
  provider?: BTableProvider<T>
  noProvider?: readonly NoProviderTypes[]
  noProviderPaging?: boolean
  noProviderSorting?: boolean
  noProviderFiltering?: boolean
  sortBy?: BTableSortBy[]
  mustSort?: boolean | string[] // TODO this is a string of fields, possibly generic
  selectable?: boolean
  multisort?: boolean
  stickySelect?: boolean
  selectHead?: boolean | string
  selectMode?: 'multi' | 'single' | 'range'
  selectionVariant?: ColorVariant | null
  busy?: boolean
  busyLoadingText?: string
  perPage?: Numberish
  currentPage?: Numberish
  filter?: string
  filterable?: readonly string[]
  // TODO
  // apiUrl?: string
  // filterFunction?: () => any
  // filterIgnoredFields?: any[]
  // filterIncludedFields?: any[]
  // headRowVariant?: ColorVariant | null
  // headVariant?: ColorVariant | null
  // labelSortAsc?: string
  // labelSortClear?: string
  // labelSortDesc?: string
  // noFooterSorting?: boolean
  noLocalSorting?: boolean
  noSelectOnClick?: boolean
  // selectedVariant?: ColorVariant | null
  // showEmpty?: boolean
  // sortDirection?: 'asc' | 'desc' | 'last'
  // sortIconLeft?: boolean
  // sortNullLast?: boolean
  selectedItems?: readonly T[]
  noSortableIcon?: boolean
}

export interface BTrProps {
  variant?: ColorVariant | null
}

export interface BTheadProps {
  variant?: ColorVariant | null
}

export interface BTfootProps {
  variant?: ColorVariant | null
}

export interface BTdProps {
  colspan?: Numberish
  rowspan?: Numberish
  stackedHeading?: string
  stickyColumn?: boolean
  variant?: ColorVariant | null
}

export interface BTbodyProps {
  variant?: ColorVariant | null
}

export interface BThProps {
  colspan?: Numberish
  rowspan?: Numberish
  stackedHeading?: string
  stickyColumn?: boolean
  variant?: ColorVariant | null
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

export interface BDropdownProps extends TeleporterProps {
  ariaLabel?: string
  autoClose?: boolean | 'inside' | 'outside'
  boundary?: Boundary | RootBoundary
  boundaryPadding?: Padding
  center?: boolean
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
  skipWrapper?: boolean
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
  wrapperClass?: ClassValue
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

export interface BPopoverProps extends TeleporterProps {
  boundary?: Boundary | RootBoundary
  boundaryPadding?: Padding
  click?: boolean
  content?: string
  customClass?: ClassValue
  delay?:
    | number
    | Readonly<{
        show: number
        hide: number
      }>
  floatingMiddleware?: Middleware[]
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

export interface BModalProps extends TeleporterProps {
  autoFocus?: boolean
  autoFocusButton?: 'ok' | 'cancel' | 'close'
  body?: string
  backdropVariant?: ColorVariant | null
  bodyAttrs?: Readonly<AttrsValue>
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
  title?: string
  titleClass?: ClassValue
  titleSrOnly?: boolean
  titleTag?: string
  transProps?: Readonly<BTransitionProps>
}

export interface BRowProps extends RowColsBreakpointProps {
  tag?: string
  gutterX?: ColsNumbers
  gutterY?: ColsNumbers
  noGutters?: boolean
  alignV?: AlignmentVertical
  alignH?: AlignmentJustifyContent
  alignContent?: AlignmentContent
  cols?: ColsNumbers
}

export interface BColProps extends OffsetBreakpointProps, OrderBreakpointProps, ColBreakpointProps {
  alignSelf?: AlignmentVertical | 'auto'
  tag?: string
  order?: ColsNumbers
  offset?: ColsNumbers
  cols?: ColsNumbers | 'auto'
  col?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UnmappedComponentProps<BFormSelectOption = any, BTableLite = any, BTable = any> = {
  BLink: BLinkProps
  BAccordion: BAccordionProps
  BDropdownDivider: BDropdownDividerProps
  BDropdownGroup: BDropdownGroupProps
  BDropdownItem: BDropdownItemProps
  BDropdownItemButton: BDropdownItemButtonProps
  BDropdownText: BDropdownTextProps
  BFormFloatingLabel: BFormFloatingLabelProps
  BFormRow: BFormRowProps
  BFormText: BFormTextProps
  BFormCheckbox: BFormCheckboxProps
  BFormCheckboxGroup: BFormCheckboxGroupProps
  BFormFile: BFormFileProps
  BFormInput: BFormInputProps
  BFormRadio: BFormRadioProps
  BFormRadioGroup: BFormRadioGroupProps
  BFormSelect: BFormSelectProps
  BFormSelectOption: BFormSelectOptionProps<BFormSelectOption>
  BFormSelectOptionGroup: BFormSelectOptionGroupProps
  BFormSpinbutton: BFormSpinbuttonProps
  BFormTag: BFormTagProps
  BFormTags: BFormTagsProps
  BFormTextarea: BFormTextareaProps
  BInputGroup: BInputGroupProps
  BInputGroupText: BInputGroupTextProps
  BListGroup: BListGroupProps
  BListGroupItem: BListGroupItemProps
  BModalOrchestrator: BModalOrchestratorProps
  BNav: BNavProps
  BNavForm: BNavFormProps
  BNavItem: BNavItemProps
  BNavText: BNavTextProps
  BNavbar: BNavbarProps
  BNavbarBrand: BNavbarBrandProps
  BNavbarNav: BNavbarNavProps
  BNavbarToggle: BNavbarToggleProps
  BOffcanvas: BOffcanvasProps
  BOverlay: BOverlayProps
  BPagination: BPaginationProps
  BPlaceholder: BPlaceholderProps
  BPlaceholderButton: BPlaceholderButtonProps
  BPlaceholderCard: BPlaceholderCardProps
  BPlaceholderTable: BPlaceholderTableProps
  BPlaceholderWrapper: BPlaceholderWrapperProps
  BProgress: BProgressProps
  BTab: BTabProps
  BTabs: BTabsProps
  BToastOrchestrator: BToastOrchestratorProps
  BCollapse: BCollapseProps
  BContainer: BContainerProps
  BSpinner: BSpinnerProps
  BAccordionItem: BAccordionItemProps
  BAlert: BAlertProps
  BAvatar: BAvatarProps
  BAvatarGroup: BAvatarGroupProps
  BBadge: BBadgeProps
  BBreadcrumb: BBreadcrumbProps
  BBreadcrumbItem: BBreadcrumbItemProps
  BButton: BButtonProps
  BButtonGroup: BButtonGroupProps
  BButtonToolbar: BButtonToolbarProps
  BCloseButton: BCloseButtonProps
  BCard: BCardProps
  BCardBody: BCardBodyProps
  BCardGroup: BCardGroupProps
  BCardSubtitle: BCardSubtitleProps
  BCardText: BCardTextProps
  BCardTitle: BCardTitleProps
  BCarousel: BCarouselProps
  BCarouselSlide: BCarouselSlideProps
  BTransition: BTransitionProps
  BImg: BImgProps
  BForm: BFormProps
  BTableSimple: BTableSimpleProps
  BTableLite: BTableLiteProps<BTableLite>
  BTable: BTableProps<BTable>
  BTr: BTrProps
  BThead: BTheadProps
  BTfoot: BTfootProps
  BTd: BTdProps
  BTbody: BTbodyProps
  BTh: BThProps
  BProgressBar: BProgressBarProps
  BInputGroupAddon: BInputGroupAddonProps
  BDropdown: BDropdownProps
  BToast: BToastProps
  BPopover: BPopoverProps
  BTooltip: BTooltipProps
  BModal: BModalProps
  BCardFooter: BCardHeadFootProps
  BCardHeader: BCardHeadFootProps
  BCardImg: BCardImgProps
  BCol: BColProps
  BDropdownForm: never
  BDropdownHeader: never
  BFormInvalidFeedback: BFormFeedbackSharedProps
  BFormValidFeedback: BFormFeedbackSharedProps
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  BFormGroup: any
  BNavItemDropdown: BDropdownProps
  BRow: BRowProps
  BInput: BFormInputProps
}

export type BvnComponentProps = {
  [K in keyof typeof Components]: UnmappedComponentProps[K]
}
