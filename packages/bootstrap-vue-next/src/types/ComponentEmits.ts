import {BvCarouselEvent, BvEvent, BvTriggerableEvent} from '../utils'
import type {BTableSortBy, TableHeadClickedEventObject, TableRowEvent} from './TableTypes'

export interface showHideEmits {
  'hide': [value: BvTriggerableEvent]
  'hide-prevented': [value: BvTriggerableEvent]
  'hidden': [value: BvTriggerableEvent]
  'show': [value: BvTriggerableEvent]
  'show-prevented': [value: BvTriggerableEvent]
  'shown': [value: BvTriggerableEvent]
  'toggle': [value: BvTriggerableEvent]
  'toggle-prevented': [value: BvTriggerableEvent]
  'cancel': [value: BvTriggerableEvent]
  'ok': [value: BvTriggerableEvent]
}

export type BCollapseEmits = showHideEmits

export interface BDropdownEmits extends showHideEmits {
  'split-click': [value: MouseEvent]
}
export interface BModalEmits extends showHideEmits {
  backdrop: [value: BvTriggerableEvent]
  close: [value: BvTriggerableEvent]
  esc: [value: BvTriggerableEvent]
}

export interface BOffcanvasEmits extends showHideEmits {
  close: [value: BvTriggerableEvent]
  esc: [value: BvTriggerableEvent]
  backdrop: [value: BvTriggerableEvent]
  breakpoint: [value: BvTriggerableEvent, opened: boolean]
}

export interface BPopoverEmits extends showHideEmits {
  'pointerleave': [value: BvTriggerableEvent]
  'blur': [value: BvTriggerableEvent]
  'click-outside': [value: BvTriggerableEvent]
  'close-on-hide': [value: BvTriggerableEvent]
}

export interface BToastEmits extends showHideEmits {
  'close': [value: BvTriggerableEvent]
  'close-countdown': [value: number]
}

export interface BTableEmits<Item> extends BTableLiteEmits<Item> {
  'filtered': [value: readonly Item[]]
  'row-selected': [value: unknown]
  'row-unselected': [value: unknown]
  'sorted': [value: BTableSortBy]
  'change': [value: readonly Item[]]
}

export interface BTableLiteEmits<Item> {
  'head-clicked': [
    object: TableHeadClickedEventObject<Item, Readonly<MouseEvent> | Readonly<KeyboardEvent>>,
  ]
  'row-clicked': TableRowEvent<Item, Readonly<MouseEvent> | Readonly<KeyboardEvent>>
  'row-dblclicked': TableRowEvent<Item>
  'row-contextmenu': TableRowEvent<Item>
  'row-hovered': TableRowEvent<Item>
  'row-unhovered': TableRowEvent<Item>
  'row-middle-clicked': TableRowEvent<Item>
}

export type BAlertEmits = BToastEmits

export type BAccordionItemEmits = BCollapseEmits

export type BAvatarEmits = {
  'click': [value: MouseEvent]
  'img-error': [value: Event]
}

export type BBreadcrumbItemEmits = {
  click: [value: MouseEvent]
}

export type BButtonEmits = {
  click: [value: MouseEvent]
}

export type BCloseButtonEmits = {
  click: [value: MouseEvent]
}

export type BCarouselEmits = {
  'slide': [value: BvCarouselEvent]
  'slid': [value: BvCarouselEvent]
  'prev-click': [value: MouseEvent]
  'next-click': [value: MouseEvent]
}

export type BDropdownItemEmits = {
  click: [value: MouseEvent]
}

export type BDropdownItemButtonEmits = {
  click: [value: MouseEvent]
}

export type BFormSpinbuttonEmits = {
  change: [value: number | null]
}

export type BFormTagEmits = {
  remove: [value: string]
}

export type BFormTagsEmits = {
  'blur': [value: FocusEvent]
  'focus': [value: FocusEvent]
  'focusin': [value: FocusEvent]
  'focusout': [value: FocusEvent]
  'tag-state': [...args: readonly string[][]]
}

export type BLinkEmits = {
  click: [value: MouseEvent]
}

export type BNavFormEmits = {
  submit: [value: Event]
}

export type BNavItemEmits = {
  click: [value: MouseEvent]
}

export type BNavbarToggleEmits = {
  click: [value: MouseEvent]
}

export type BOverlayEmits = {
  click: [value: MouseEvent]
  hidden: []
  shown: []
}

export type BPaginationEmits = {
  'page-click': [event: BvEvent, pageNumber: number]
}

export type BTabsEmits = {
  'activate-tab': [
    obj: {
      newTabId: string
      prevTabId: string
      newTabIndex: number
      prevTabIndex: number
      event: BvEvent
    },
  ]
}

export type BTooltipEmits = BPopoverEmits
