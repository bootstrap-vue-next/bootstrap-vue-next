import type {Boundary, Middleware, Padding, RootBoundary, Strategy} from '@floating-ui/vue'
import type {ComponentPublicInstance, TransitionProps} from 'vue'
import type {RouteLocationRaw} from 'vue-router'
import type {
  AlignmentJustifyContent,
  AlignmentTextHorizontal,
  AriaInvalid,
  AttrsValue,
  BreadcrumbItemRaw,
  Breakpoint,
  BTableProvider,
  BTableSortCompare,
  ButtonType,
  ButtonVariant,
  CheckboxOptionRaw,
  CheckboxValue,
  ClassValue,
  ColorExtendables,
  ColorVariant,
  CommonInputProps,
  InputType,
  LinkTarget,
  LiteralUnion,
  NoProviderTypes,
  Numberish,
  PlaceholderAnimation,
  PlaceholderSize,
  PopoverPlacement,
  RadioOptionRaw,
  RadioValue,
  RadiusElementExtendables,
  Size,
  SpinnerType,
  TableField,
  TableFieldRaw,
  TableItem,
  TeleporterProps,
  TextColorVariant,
  TransitionMode,
  VerticalAlign,
} from '.'

export type BLinkProps = {
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

export type BAccordionProps = {
  flush?: boolean
  free?: boolean
  id?: string
  modelValue?: string
}

export type BDropdownDividerProps = {
  tag?: string
}

export type BDropdownGroupProps = {
  ariaDescribedby?: string
  header?: string
  headerClass?: ClassValue
  headerTag?: string
  headerVariant?: ColorVariant | null
  id?: string
}

export type BDropdownItemProps = {
  linkClass?: ClassValue
  wrapperAttrs?: Readonly<AttrsValue>
} & Omit<BLinkProps, 'routerTag'>

export type BDropdownItemButtonProps = {
  active?: boolean
  activeClass?: ClassValue
  buttonClass?: ClassValue
  disabled?: boolean
  variant?: ColorVariant | null
}

export type BDropdownTextProps = {
  text?: string
}

export type BFormFloatingLabelProps = {
  label?: string
  labelFor?: string
  text?: string
}

export type BFormRowProps = {
  tag?: string
}

export type BFormTextProps = {
  id?: string
  inline?: boolean
  tag?: string
  text?: string
  textVariant?: TextColorVariant | null
}

export type BFormCheckboxProps = {
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
  size?: Size
  state?: boolean | null
  switch?: boolean
  uncheckedValue?: CheckboxValue
  value?: CheckboxValue
}

export type BFormCheckboxGroupProps = {
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
  size?: Size
  stacked?: boolean
  state?: boolean | null
  switches?: boolean
  textField?: string
  validated?: boolean
  valueField?: string
}

export type BFormFileProps = {
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
  noDrop?: boolean
  noTraverse?: boolean
  required?: boolean
  size?: Size
  state?: boolean | null
}

export type BFormInputProps = {
  max?: Numberish
  min?: Numberish
  // noWheel: {type: Boolean, default: false}, TODO: not implemented yet
  step?: Numberish
  type?: InputType
} & CommonInputProps

export type BFormRadioProps = {
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
  size?: Size
  state?: boolean | null
  value?: RadioValue
}

export type BFormRadioGroupProps = {
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
  size?: Size
  stacked?: boolean
  state?: boolean | null
  textField?: string
  validated?: boolean
  valueField?: string
}

export type BFormSelectProps = {
  ariaInvalid?: AriaInvalid
  autofocus?: boolean
  disabled?: boolean
  disabledField?: string
  form?: string
  htmlField?: string
  id?: string
  labelField?: string
  modelValue?:
    | boolean
    | string
    | readonly unknown[]
    | Readonly<Record<string, unknown>>
    | number
    | null
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

export type BFormSelectOptionProps<T> = {
  disabled?: boolean
  value?: T
}

export type BFormSelectOptionGroupProps = {
  disabledField?: string
  htmlField?: string
  label?: string
  options?: readonly (unknown | Record<string, unknown>)[]
  textField?: string
  valueField?: string
}

export type BFormSpinbuttonProps = {
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

export type BFormTagProps = {
  disabled?: boolean
  id?: string
  noRemove?: boolean
  pill?: boolean
  removeLabel?: string
  tag?: string
  title?: string
  variant?: ColorVariant | null
}

export type BFormTagsProps = {
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

export type BFormTextareaProps = {
  noResize?: boolean
  rows?: Numberish
  wrap?: string
} & CommonInputProps

export type BInputGroupProps = {
  append?: string
  appendHtml?: string
  id?: string
  prepend?: string
  prependHtml?: string
  size?: Size
  tag?: string
}

export type BInputGroupTextProps = {
  tag?: string
  text?: string
}

export type BListGroupProps = {
  flush?: boolean
  horizontal?: boolean | Breakpoint
  numbered?: boolean
  tag?: string
}

export type BListGroupItemProps = {
  action?: boolean
  button?: boolean
  tag?: string
} & Omit<BLinkProps, 'routerTag'>

export type BModalOrchestratorProps = TeleporterProps

export type BNavProps = {
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

export type BNavFormProps = {
  role?: string
} & BFormProps

export type BNavItemProps = {
  linkAttrs?: Readonly<AttrsValue>
  linkClass?: ClassValue
} & Omit<BLinkProps, 'routerTag'>

export type BNavTextProps = {
  text?: string
}

export type BNavbarProps = {
  autoClose?: boolean
  container?: boolean | 'fluid' | Breakpoint
  fixed?: 'top' | 'bottom'
  print?: boolean
  sticky?: 'top' | 'bottom'
  tag?: string
  toggleable?: boolean | Breakpoint
  variant?: ColorVariant | null
}

export type BNavbarBrandProps = {
  tag?: string
} & Omit<BLinkProps, 'routerTag'>

export type BNavbarNavProps = {
  align?: AlignmentJustifyContent
  fill?: boolean
  justified?: boolean
  small?: boolean
  tag?: string
}

export type BNavbarToggleProps = {
  disabled?: boolean
  label?: string
  target?: string | readonly string[]
}

export type BOffcanvasProps = {
  backdrop?: boolean
  backdropVariant?: ColorVariant | null
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
  // TODO standardize this. Create a dedicated type
  // Then in components that use individual props (BImg)
  // Make them just use prop placement
  placement?: 'top' | 'bottom' | 'start' | 'end'
  title?: string
  // responsive?: Breakpoint
  // TODO responsive doesn't work
} & TeleporterProps

export type BOverlayProps = {
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
} & RadiusElementExtendables
export type BPaginationProps = {
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

export type BPlaceholderProps = {
  animation?: PlaceholderAnimation
  cols?: Numberish
  size?: PlaceholderSize
  tag?: string
  variant?: ColorVariant | null
  width?: Numberish
  wrapperTag?: string
}

export type BPlaceholderButtonProps = {
  animation?: PlaceholderAnimation
  cols?: Numberish
  tag?: string
  variant?: ColorVariant | null
  width?: Numberish
}

export type BPlaceholderCardProps = {
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
  imgBottom?: boolean
  imgHeight?: Numberish
  imgSrc?: string
  noButton?: boolean
  noFooter?: boolean
  noHeader?: boolean
  noImg?: boolean
  size?: PlaceholderSize
  variant?: ColorVariant | null
}

export type BPlaceholderTableProps = {
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

export type BPlaceholderWrapperProps = {
  loading?: boolean
}

export type BProgressProps = {
  height?: string
} & Omit<BProgressBarProps, 'label' | 'labelHtml'>
export type BTabProps = {
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

export type BTabsProps = {
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

export type BToastOrchestratorProps = {
  appendToast?: boolean
} & TeleporterProps

export type BCollapseProps = {
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

export type BContainerProps = {
  fluid?: boolean | Breakpoint
  gutterX?: Numberish
  gutterY?: Numberish
  tag?: string
}

export type BSpinnerProps = {
  label?: string
  role?: string
  small?: boolean
  tag?: string
  type?: SpinnerType
  variant?: ColorVariant | null
}

export type BAccordionItemProps = {
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

export type BAlertProps = {
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

export type BAvatarProps = {
  alt?: string
  badge?: boolean | string
  badgeBgVariant?: ColorVariant | null
  badgeOffset?: string
  badgeStart?: boolean
  badgeTextVariant?: TextColorVariant | null
  badgeTop?: boolean
  badgeVariant?: ColorVariant | null
  button?: boolean
  buttonType?: ButtonType
  icon?: string
  size?: LiteralUnion<Size, Numberish>
  square?: boolean
  src?: string
  text?: string
} & Omit<BLinkProps, 'routerTag'> &
  ColorExtendables &
  RadiusElementExtendables

export type BAvatarGroupProps = {
  overlap?: Numberish
  size?: LiteralUnion<Size, Numberish>
  square?: boolean
  tag?: string
} & ColorExtendables &
  RadiusElementExtendables

export type BBadgeProps = {
  dotIndicator?: boolean
  pill?: boolean
  tag?: string
  textIndicator?: boolean
} & Omit<BLinkProps, 'routerTag'> &
  ColorExtendables

export type BBreadcrumbProps = {
  items?: readonly BreadcrumbItemRaw[]
}

export type BBreadcrumbItemProps = {
  ariaCurrent?: string
  text?: string
} & Omit<BLinkProps, 'routerTag'>

export type BButtonProps = {
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
} & Omit<BLinkProps, 'variant'>

export type BButtonGroupProps = {
  ariaLabel?: string
  size?: Size
  tag?: string
  vertical?: boolean
}

export type BButtonToolbarProps = {
  ariaLabel?: string
  // keyNav?: boolean
  justify?: boolean
  role?: string
}

export type BCloseButtonProps = {
  ariaLabel?: string
  disabled?: boolean
  type?: ButtonType
}

export type BCardProps = {
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
  imgBottom?: boolean
  imgEnd?: boolean
  imgHeight?: Numberish
  imgSrc?: string
  imgStart?: boolean
  imgTop?: boolean
  imgWidth?: Numberish
  noBody?: boolean
  overlay?: boolean
  subtitle?: string
  subtitleTag?: string
  subtitleTextVariant?: TextColorVariant | null
  tag?: string
  title?: string
  titleTag?: string
} & ColorExtendables

export type BCardBodyProps = {
  overlay?: boolean
  subtitle?: string
  subtitleTag?: string
  subtitleTextVariant?: TextColorVariant | null
  tag?: string
  text?: string
  title?: string
  titleTag?: string
} & ColorExtendables

export type BCardGroupProps = {
  columns?: boolean
  deck?: boolean
  tag?: string
}

export type BCardImageProps = {
  bottom?: boolean
  top?: boolean
} & BImgProps

export type BCardSubtitleProps = {
  text?: string
  tag?: string
  textVariant?: TextColorVariant | null
}

export type BCardTextProps = {
  tag?: string
  text?: string
}

export type BCardTitleProps = {
  tag?: string
  text?: string
}

export type BCarouselProps = {
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

export type BCarouselSlideProps = {
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

export type BTransitionProps = {
  appear?: boolean
  mode?: TransitionMode
  noFade?: boolean
  transProps?: Readonly<TransitionProps>
}

export type BImgProps = {
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
} & RadiusElementExtendables

export type BFormProps = {
  floating?: boolean
  id?: string
  novalidate?: boolean
  validated?: boolean
}

export type BTableSimpleProps = {
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
  tableClass?: ClassValue
  variant?: ColorVariant | null
}

export type BTableLiteProps<T extends Record<string, unknown>> = {
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
} & BTableSimpleProps

export type BTrProps = {
  variant?: ColorVariant | null
}

export type BTheadProps = {
  variant?: ColorVariant | null
}

export type BTfootProps = {
  variant?: ColorVariant | null
}

export type BTdProps = {
  colspan?: Numberish
  rowspan?: Numberish
  stackedHeading?: string
  stickyColumn?: boolean
  variant?: ColorVariant | null
}

export type BTbodyProps = {
  variant?: ColorVariant | null
}

export type BTableProps<T extends Record<string, unknown>> = {
  provider?: BTableProvider<T>
  sortCompare?: BTableSortCompare<T>
  noProvider?: readonly NoProviderTypes[]
  noProviderPaging?: boolean
  noProviderSorting?: boolean
  noProviderFiltering?: boolean
  sortBy?: string
  sortDesc?: boolean
  selectable?: boolean
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
  // noSortReset?: boolean
  // selectedVariant?: ColorVariant | null
  // showEmpty?: boolean
  sortCompareLocale?: string | string[]
  sortCompareOptions?: Intl.CollatorOptions
  // sortDirection?: 'asc' | 'desc' | 'last'
  // sortIconLeft?: boolean
  // sortNullLast?: boolean
  selectedItems?: readonly TableItem<T>[]
  noSortableIcon?: boolean
} & Omit<BTableLiteProps<T>, 'tableClass'>

export type BThProps = {
  colspan?: Numberish
  rowspan?: Numberish
  stackedHeading?: string
  stickyColumn?: boolean
  variant?: ColorVariant | null
}

export type BProgressBarProps = {
  animated?: boolean
  label?: string
  labelHtml?: string
  max?: Numberish
  precision?: Numberish
  showProgress?: boolean
  showValue?: boolean
  striped?: boolean
  value?: Numberish
} & ColorExtendables

export type BInputGroupAddonProps = {
  isText?: boolean
}

export type BFormFeedbackSharedProps = {
  ariaLive?: string
  forceShow?: boolean
  id?: string
  role?: string
  state?: boolean | null
  tag?: string
  text?: string
  tooltip?: boolean
}

export type BDropdownProps = {
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
} & TeleporterProps

export type BToastProps = {
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
} & ColorExtendables &
  Omit<BLinkProps, 'routerTag'>

export type BPopoverProps = {
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
} & TeleporterProps

export type BTooltipProps = {
  interactive?: boolean
} & Omit<BPopoverProps, 'tooltip'>

export type BCardHeadFootProps = {
  borderVariant?: ColorVariant | null
  html?: string
  tag?: string
  text?: string
} & ColorExtendables

export type BModalProps = {
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
} & TeleporterProps
