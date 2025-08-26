/* eslint-disable @typescript-eslint/no-explicit-any */
import type {Placement} from './Alignment'
import type {ClassValue} from './AnyValuedAttributes'
import type {ButtonVariant, ColorVariant} from './ColorTypes'
import type {ValidationState} from './CommonTypes'
import type {LiteralUnion} from './LiteralUnion'
import type {SelectOption} from './SelectTypes'
import type {SpinnerType} from './SpinnerType'
import type {InputType} from './InputType'
import type {TableField} from './TableTypes'

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
  'button-content'?: (props: Record<string, never>) => any

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
export type BFormDatalistSlots<T> = {
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

  option: (props: {
    text: string | undefined

    value: any
    disabled: boolean | undefined
    [key: string]: unknown
  }) => any
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

  option: (props: {
    text: string | undefined

    value: any
    disabled?: boolean | undefined
    [key: string]: unknown
  }) => any
}

export type BFormRatingSlots = {
  'icon-clear'?: (props: Record<string, never>) => any
  'default'?: (props: {starIndex: number; isFilled: boolean; isHalf: boolean}) => any
}

export type BFormSelectSlots<T> = {
  default?: (props: Record<string, never>) => any

  first?: (props: Record<string, never>) => any

  option: (props: SelectOption<T>) => any
}

export type BFormSelectOptionSlots = {
  default?: (props: Record<string, never>) => any
}
export type BFormSelectOptionGroupSlots<T> = {
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

  'default'?: (props: {
    addButtonText: string
    addButtonVariant: ButtonVariant | null
    addTag: (tag?: string) => void
    disableAddButton: boolean
    disabled: boolean
    duplicateTagText: string
    duplicateTags: string[]
    form: string | undefined
    inputAttrs: Record<string, unknown>
    inputClass: ClassValue
    inputHandlers: {
      input: (e: Event | string) => void
      keydown: (e: KeyboardEvent) => void
      change: (e: Event) => void
    }
    inputId: string
    inputType: InputType
    invalidTagText: string
    invalidTags: string[]
    isDuplicate: boolean
    isInvalid: boolean
    isLimitReached: boolean
    limitTagsText: string
    limit: number
    noTagRemove: boolean
    placeholder: string
    removeTag: (tag?: string) => void
    required: boolean
    separator: string | readonly string[] | undefined
    size: string
    state: ValidationState
    tagClass: ClassValue
    tagPills: boolean
    tagRemoveLabel: string | undefined
    tagVariant: ColorVariant | null
    tags: string[]
  }) => any
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

  overlay?: (props: {
    type: SpinnerType
    variant: ColorVariant | null | undefined
    small: boolean
  }) => any
}

type EmptySlotScope<Items> = {
  emptyFilteredText: string
  emptyText: string
  fields: TableField<Items>[]
  items: readonly Items[]
}
type SortSlotScope<Items> = {
  label: string | undefined
  column: LiteralUnion<keyof Items>
  field: TableField<Items>
  isFoot: false
}
export interface BTableSlots<Items>
  extends Omit<
    BTableLiteSlots<Items>,
    'thead-top' | 'row-details' | `head(${string})` | `foot(${string})` | `cell(${string})`
  > {
  // BTableLite
  'thead-top'?: (props: {
    columns: number
    fields: TableField<Items>[]
    selectAllRows: () => void
    clearSelected: () => void
  }) => any

  [key: `head(${string})`]: (props: {
    label: string | undefined
    column: LiteralUnion<keyof Items>
    field: TableField<Items>
    isFoot: false
    selectAllRows: () => void
    clearSelected: () => void
  }) => any

  [key: `cell(${string})`]: (props: {
    value: unknown
    unformatted: unknown
    index: number
    item: Items
    field: TableField<Items>
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
    fields: TableField<Items>[]
    index: number
    rowSelected: boolean
    selectRow: (index?: number) => void
    unselectRow: (index?: number) => void
  }) => any

  [key: `foot(${string})`]: (props: {
    label: string | undefined
    column: LiteralUnion<keyof Items>
    field: TableField<Items>
    isFoot: true
    selectAllRows: () => void
    clearSelected: () => void
  }) => any

  // end btable slots

  [key: `sortAsc(${string})`]: (props: SortSlotScope<Items>) => any

  [key: `sortDesc(${string})`]: (props: SortSlotScope<Items>) => any

  [key: `sortDefault(${string})`]: (props: SortSlotScope<Items>) => any

  'table-busy'?: (props: Record<string, never>) => any

  'empty-filtered'?: (props: EmptySlotScope<Items>) => any

  'empty'?: (props: EmptySlotScope<Items>) => any
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

export type BTableLiteSlots<Items> = {
  'table-colgroup'?: (props: {fields: TableField<Items>[]}) => any

  'thead-top'?: (props: {columns: number; fields: TableField<Items>[]}) => any
  [key: `head(${string})`]: (props: {
    label: string | undefined
    column: LiteralUnion<keyof Items>
    field: TableField<Items>
    isFoot: false
  }) => any
  'thead-sub'?: (props: {
    items: readonly Items[]
    fields: TableField<Items>[]
    field: TableField<Items>
  }) => any
  'custom-body'?: (props: {
    fields: TableField<Items>[]
    items: readonly Items[]
    columns: number
  }) => any

  'top-row'?: (props: {columns: number; fields: TableField<Items>[]}) => any
  [key: `cell(${string})`]: (props: {
    value: unknown
    unformatted: unknown
    index: number
    item: Items
    field: TableField<Items>
    items: readonly Items[]
    toggleDetails: () => void
    detailsShowing: boolean
  }) => any
  'row-details'?: (props: {
    item: Items
    toggleDetails: () => void
    fields: TableField<Items>[]
    index: number
  }) => any

  'bottom-row'?: (props: {columns: number; fields: TableField<Items>[]}) => any

  [key: `foot(${string})`]: (props: {
    label: string | undefined
    column: LiteralUnion<keyof Items>
    field: TableField<Items>
    isFoot: true
  }) => any

  'custom-foot'?: (props: {
    fields: TableField<Items>[]
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
  content: string | number
}
export type BPaginationSlots = {
  'page'?: (props: BPaginatonSharedScope) => any
  'first-text'?: (props: BPaginatonSharedScope) => any
  'prev-text'?: (props: BPaginatonSharedScope) => any
  'next-text'?: (props: BPaginatonSharedScope) => any
  'last-text'?: (props: BPaginatonSharedScope) => any
  'ellipsis-text'?: (props: Record<string, never>) => any
}
