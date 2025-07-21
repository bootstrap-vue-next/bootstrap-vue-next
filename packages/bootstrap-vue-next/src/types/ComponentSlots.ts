/* eslint-disable @typescript-eslint/no-explicit-any */
import type {Placement} from './Alignment'
import type {ClassValue} from './AnyValuedAttributes'
import type {ColorVariant} from './ColorTypes'
import type {SelectOption} from './SelectTypes'

export interface ShowHideSlotsData {
  id: string
  show: () => void
  hide: (trigger?: string, noTriggerEmit?: boolean) => void
  toggle: () => void
  active: boolean
  visible: boolean
}

export interface BCollapseSlots {
  default?: (props: ShowHideSlotsData) => any
  footer?: (props: ShowHideSlotsData) => any
  header?: (props: ShowHideSlotsData) => any
}

export interface BDropdownSlotsData extends ShowHideSlotsData {
  click: (evt: MouseEvent) => void
}
export type BDropdownFormSlots = {
  default?: (props: Record<string, never>) => any
}
export type BDropdownGroupSlots = {
  default?: (props: Record<string, never>) => any

  header?: (props: Record<string, never>) => any
}
export type BDropdownHeaderSlots = {
  default?: (props: Record<string, never>) => any
}
export type BDropdownTextSlots = {
  default?: (props: Record<string, never>) => any
}

export interface BModalSlotsData extends ShowHideSlotsData {
  cancel: () => void
  close: () => void
  ok: () => void
}

export interface BModalSlots {
  'backdrop'?: (props: BModalSlotsData) => any
  'cancel'?: (props: BModalSlotsData) => any
  'default'?: (props: BModalSlotsData) => any
  'footer'?: (props: BModalSlotsData) => any
  'header'?: (props: BModalSlotsData) => any
  'header-close'?: (props: BModalSlotsData) => any
  'ok'?: (props: BModalSlotsData) => any
  'title'?: (props: BModalSlotsData) => any
}

export interface BOffcanvasSlotsData extends ShowHideSlotsData {
  placement: Placement
}

export interface BOffcanvasSlots {
  'backdrop'?: (props: BOffcanvasSlotsData) => any
  'default'?: (props: BOffcanvasSlotsData) => any
  'footer'?: (props: BOffcanvasSlotsData) => any
  'header'?: (props: BOffcanvasSlotsData) => any
  'header-close'?: (props: BOffcanvasSlotsData) => any
  'title'?: (props: BOffcanvasSlotsData) => any
}

export interface BPopoverSlots {
  default?: (props: ShowHideSlotsData) => any
  target?: (props: ShowHideSlotsData) => any
  title?: (props: ShowHideSlotsData) => any
}

export interface BToastSlots {
  default?: (props: ShowHideSlotsData) => any
  title?: (props: ShowHideSlotsData) => any
  close?: (props: ShowHideSlotsData) => any
}

export type BAlertSlots = BToastSlots

export type BAccordionItemSlots = {
  default?: (props: Record<string, never>) => any

  title?: (props: Record<string, never>) => any
}

export type BAccordionSlots = {
  default?: (props: Record<string, never>) => any
}

export type BAvatarSlots = {
  badge?: (props: Record<string, never>) => any

  default?: (props: Record<string, never>) => any
}
export type BAvatarGroupSlots = {
  default?: (props: Record<string, never>) => any
}

export type BBreadcrumbItemSlots = {
  default?: (props: Record<string, never>) => any
}

export type BBreadcrumbSlots = {
  append?: (props: Record<string, never>) => any

  default?: (props: Record<string, never>) => any

  prepend?: (props: Record<string, never>) => any
}

export type BBadgeSlots = {
  default?: (props: Record<string, never>) => any
}

export type BButtonSlots = {
  'default'?: (props: Record<string, never>) => any

  'loading'?: (props: Record<string, never>) => any

  'loading-spinner'?: (props: Record<string, never>) => any
}

export type BButtonGroupSlots = {
  default?: (props: Record<string, never>) => any
}

export type BButtonToolbarSlots = {
  default?: (props: Record<string, never>) => any
}

export type BCardSlots = {
  default?: (props: Record<string, never>) => any

  footer?: (props: Record<string, never>) => any

  header?: (props: Record<string, never>) => any

  img?: (props: Record<string, never>) => any
}

export type BCardBodySlots = {
  default?: (props: Record<string, never>) => any

  subtitle?: (props: Record<string, never>) => any

  title?: (props: Record<string, never>) => any
}

export type BCardGroupSlots = {
  default?: (props: Record<string, never>) => any
}

export type BCardSubtitleSlots = {
  default?: (props: Record<string, never>) => any
}

export type BCardTextSlots = {
  default?: (props: Record<string, never>) => any
}
export type BCardTitleSlots = {
  default?: (props: Record<string, never>) => any
}

export type BCarouselSlots = {
  default?: (props: Record<string, never>) => any
}
export type BCarouselSlideSlots = {
  caption?: (props: Record<string, never>) => any

  default?: (props: Record<string, never>) => any

  img?: (props: Record<string, never>) => any

  text?: (props: Record<string, never>) => any
}

export type BDropdownSlots = {
  'button-content'?: (pSrops: Record<string, never>) => any

  'default'?: (props: BDropdownSlotsData) => any

  'toggle-text'?: (props: Record<string, never>) => any
}

export type BDropdownItemSlots = {
  default?: (props: Record<string, never>) => any
}

export type BDropdownItemButtonSlots = {
  default?: (props: Record<string, never>) => any
}

export type BFormSlots = {
  default?: (props: Record<string, never>) => any
}
export type BFormDatalistSlots = {
  default?: (props: Record<string, never>) => any

  first?: (props: Record<string, never>) => any

  option: (props: SelectOption<T>) => any
}
export type BFormFloatingLabelSlots = {
  default: (props: Record<string, never>) => any

  label?: (props: Record<string, never>) => any
}
export type BFormInvalidFeedbackSlots = {
  default?: (props: Record<string, never>) => any
}
export type BFormRowSlots = {
  default: (props: Record<string, never>) => any
}
export type BFormTextSlots = {
  default?: (props: Record<string, never>) => any
}
export type BFormValidFeedbackSlots = {
  default?: (props: Record<string, never>) => any
}
export type BFormCheckboxSlots = {
  default?: (props: Record<string, never>) => any
}
export type BFormCheckboxGroupSlots = {
  default?: (props: Record<string, never>) => any

  first?: (props: Record<string, never>) => any

  option: (props: (typeof normalizeOptions.value)[number]) => any
}

export type BFormFileSlots = {
  label?: (props: Record<string, never>) => any
}

export type BFormGroupSlots = {
  'invalid-feedback'?: (props: Record<string, never>) => any

  'valid-feedback'?: (props: Record<string, never>) => any

  'description'?: (props: Record<string, never>) => any

  'label'?: (props: Record<string, never>) => any
  'default'?: (props: {
    id: string
    ariaDescribedby: string | null
    descriptionId: string | undefined
    labelId: string | null
  }) => any
}

export type BFormRadioSlots = {
  default?: (props: Record<string, never>) => any
}
export type BFormRadioGroupSlots = {
  default?: (props: Record<string, never>) => any

  first?: (props: Record<string, never>) => any

  option: (props: (typeof normalizeOptions.value)[number]) => any
}

export type BFormRatingSlots = {
  default?: (props: {starIndex: number; isFilled: boolean; isHalf: boolean}) => any
}

export type BFormSelectSlots = {
  default?: (props: Record<string, never>) => any

  first?: (props: Record<string, never>) => any

  option: (props: SelectOption<T>) => any
}

export type BFormSelectOptionSlots = {
  default?: (props: Record<string, never>) => any
}
export type BFormSelectOptionGroupSlots = {
  default?: (props: Record<string, never>) => any

  first?: (props: Record<string, never>) => any

  option: (props: SelectOption<T>) => any
}

export type BInputGroupSlots = {
  append?: (props: Record<string, never>) => any

  default?: (props: Record<string, never>) => any

  prepend?: (props: Record<string, never>) => any
}

export type BInputGroupTextSlots = {
  default?: (props: Record<string, never>) => any
}

export type BListGroupSlots = {
  default?: (props: Record<string, never>) => any
}

export type BListGroupItemSlots = {
  default?: (props: Record<string, never>) => any
}

export type BNavSlots = {
  default?: (props: Record<string, never>) => any
}

export type BNavTextSlots = {
  default?: (props: Record<string, never>) => any
}

export type BNavbarSlots = {
  default?: (props: Record<string, never>) => any
}

export type BNavbarBrandSlots = {
  default?: (props: Record<string, never>) => any
}

export type BNavbarNavSlots = {
  default?: (props: Record<string, never>) => any
}

export type BPlaceholderCardSlots = {
  default?: (props: Record<string, never>) => any

  footer?: (props: Record<string, never>) => any

  header?: (props: Record<string, never>) => any

  img?: (props: Record<string, never>) => any
}
export type BPlaceholderTableSlots = {
  default?: (props: Record<string, never>) => any

  tfoot?: (props: Record<string, never>) => any

  thead?: (props: Record<string, never>) => any
}
export type BPlaceholderWrapperSlots = {
  default?: (props: Record<string, never>) => any

  loading?: (props: Record<string, never>) => any
}

export type BProgressSlots = {
  default?: (props: Record<string, never>) => any
}

export type BProgressBarSlots = {
  default?: (props: Record<string, never>) => any
}
export type BSpinnerSlots = {
  label?: (props: Record<string, never>) => any
}

export type BTableSimpleSlots = {
  default?: (props: Record<string, never>) => any
}

export type BTbodySlots = {
  default?: (props: Record<string, never>) => any
}

export type BTdSlots = {
  default?: (props: Record<string, never>) => any
}

export type BTfootSlots = {
  default?: (props: Record<string, never>) => any
}

export type BThSlots = {
  default?: (props: Record<string, never>) => any
}

export type BTheadSlots = {
  default?: (props: Record<string, never>) => any
}

export type BTrSlots = {
  default?: (props: Record<string, never>) => any
}

export type BTabSlots = {
  default?: (props: Record<string, never>) => any

  title?: (props: Record<string, never>) => any
}

export type BFormSpinbuttonSlots = {
  decrement?: (props: {hasFocus: boolean}) => any

  increment?: (props: {hasFocus: boolean}) => any
}

export type BFormTagSlots = {
  default?: (props: Record<string, never>) => any
}

export type BFormTagsSlots = {
  'add-button-text'?: (props: Record<string, never>) => any

  'default'?: (props: typeof slotAttrs.value) => any
  'tag'?: (props: {
    tag: string
    tagClass: ClassValue
    tagVariant: ColorVariant | null
    tagPills: boolean
    removeTag: (tag?: string) => void
  }) => any
}

export type BLinkSlots = {
  default?: (props: Record<string, never>) => any
}

export type BNavFormSlots = {
  default?: (props: Record<string, never>) => any
}

export type BNavItemSlots = {
  default?: (props: Record<string, never>) => any

  after?: (props: Record<string, never>) => any
}

export type BNavItemDropdownSlots = {
  'button-content'?: (props: Record<string, never>) => any

  'default'?: (props: {hide: () => void; show: () => void}) => any

  'toggle-text'?: (props: Record<string, never>) => any
}

export type BNavbarToggleSlots = {
  default?: (props: {expanded: boolean}) => any
}

export type BOverlaySlots = {
  default?: (props: Record<string, never>) => any

  overlay?: (props: typeof spinnerAttrs.value) => any
}

export type BTableSlots = {
  // BTableLite

  'table-colgroup'?: (props: {fields: typeof computedFields.value}) => any
  'thead-top'?: (props: {
    columns: number
    fields: typeof computedFields.value
    selectAllRows: () => void
    clearSelected: () => void
  }) => any
  [key: `head(${string})`]: (props: {
    label: string | undefined
    column: LiteralUnion<keyof Items>
    field: (typeof computedFields.value)[0]
    isFoot: false
    selectAllRows: () => void
    clearSelected: () => void
  }) => any
  'thead-sub'?: (props: {
    items: readonly Items[]
    fields: typeof computedFields.value
    field: (typeof computedFields.value)[0]
  }) => any

  'top-row'?: (props: {columns: number; fields: typeof computedFields.value}) => any
  [key: `cell(${string})`]: (props: {
    value: unknown
    unformatted: unknown
    index: number
    item: Items
    field: (typeof computedFields.value)[0]
    items: readonly Items[]
    toggleDetails: () => void
    detailsShowing: boolean
    rowSelected: boolean
    selectRow: (index?: number) => void
    unselectRow: (index?: number) => void
  }) => any
  'row-details'?: (props: {
    item: Items
    toggleDetails: () => void
    fields: typeof computedFields.value
    index: number
    rowSelected: boolean
    selectRow: (index?: number) => void
    unselectRow: (index?: number) => void
  }) => any

  'bottom-row'?: (props: {columns: number; fields: typeof computedFields.value}) => any

  [key: `foot(${string})`]: (props: {
    label: string | undefined
    column: LiteralUnion<keyof Items>
    field: (typeof computedFields.value)[0]
    isFoot: true
    selectAllRows: () => void
    clearSelected: () => void
  }) => any
  'custom-foot'?: (props: {
    fields: typeof computedFields.value
    items: readonly Items[]
    columns: number
  }) => any

  'table-caption'?: (props: Record<string, never>) => any

  // end btable slots

  [key: `sortAsc(${string})`]: (props: SortSlotScope) => any

  [key: `sortDesc(${string})`]: (props: SortSlotScope) => any

  [key: `sortDefault(${string})`]: (props: SortSlotScope) => any

  'table-busy'?: (props: Record<string, never>) => any

  'empty-filtered'?: (props: typeof emptySlotScope.value) => any

  'empty'?: (props: typeof emptySlotScope.value) => any
}
export type BColSlots = {
  default?: (props: Record<string, never>) => any
}
export type BRowSlots = {
  default?: (props: Record<string, never>) => any
}
export type BContainerSlots = {
  default?: (props: Record<string, never>) => any
}

export type BTableLiteSlots = {
  'table-colgroup'?: (props: {fields: typeof computedFields.value}) => any

  'thead-top'?: (props: {columns: number; fields: typeof computedFields.value}) => any
  [key: `head(${string})`]: (props: {
    label: string | undefined
    column: LiteralUnion<keyof Items>
    field: (typeof computedFields.value)[0]
    isFoot: false
  }) => any
  'thead-sub'?: (props: {
    items: readonly Items[]
    fields: typeof computedFields.value
    field: (typeof computedFields.value)[0]
  }) => any
  'custom-body'?: (props: {
    fields: typeof computedFields.value
    items: readonly Items[]
    columns: number
  }) => any

  'top-row'?: (props: {columns: number; fields: typeof computedFields.value}) => any
  [key: `cell(${string})`]: (props: {
    value: unknown
    unformatted: unknown
    index: number
    item: Items
    field: (typeof computedFields.value)[0]
    items: readonly Items[]
    toggleDetails: () => void
    detailsShowing: boolean
  }) => any
  'row-details'?: (props: {
    item: Items
    toggleDetails: () => void
    fields: typeof computedFields.value
    index: number
  }) => any

  'bottom-row'?: (props: {columns: number; fields: typeof computedFields.value}) => any
  [key: `foot(${string})`]: (props: {
    label: string | undefined
    column: LiteralUnion<keyof Items>
    field: (typeof computedFields.value)[0]
    isFoot: true
  }) => any
  'custom-foot'?: (props: {
    fields: typeof computedFields.value
    items: readonly Items[]
    columns: number
  }) => any

  'table-caption'?: (props: Record<string, never>) => any
}

export type BTooltipSlots = BPopoverSlots

export type BCardHeadFootSlots = {
  default?: (props: Record<string, never>) => any
}

export type BCardFooterSlots = BCardHeadFootSlots
export type BCardHeaderSlots = BCardHeadFootSlots

export type BTabsSlots = {
  'default'?: (props: Record<string, never>) => any

  'empty'?: (props: Record<string, never>) => any

  'tabs-end'?: (props: Record<string, never>) => any

  'tabs-start'?: (props: Record<string, never>) => any
}

type BPaginatonSharedScope = {
  disabled: boolean
  page: number
  index: number
  active: boolean
  content: string | undefined
}
export type BPaginationSlots = {
  'page'?: (props: BPaginatonSharedScope) => any
  'first-text'?: (props: BPaginatonSharedScope) => any
  'prev-text'?: (props: BPaginatonSharedScope) => any
  'next-text'?: (props: BPaginatonSharedScope) => any
  'last-text'?: (props: BPaginatonSharedScope) => any
  'ellipsis-text'?: (props: Record<string, never>) => any
}
