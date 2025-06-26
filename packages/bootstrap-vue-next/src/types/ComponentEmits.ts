import {BvTriggerableEvent} from '../utils'
import type {BTableSortBy, TableRowEvent} from './TableTypes'

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

export interface BTableEmits<Items, Fields> extends BTableLiteEmits<Items, Fields> {
  'filtered': [value: Items[]]
  'row-selected': [value: Items]
  'row-unselected': [value: Items]
  'sorted': [value: BTableSortBy<Items>]
  'change': [value: Items[]]
}

export interface BTableLiteEmits<Items, Fields> {
  'head-clicked': [key: string, field: Fields, event: MouseEvent, isFooter: boolean]
  'row-clicked': TableRowEvent<Items>
  'row-dblclicked': TableRowEvent<Items>
  'row-contextmenu': TableRowEvent<Items>
  'row-hovered': TableRowEvent<Items>
  'row-unhovered': TableRowEvent<Items>
  'row-middle-clicked': TableRowEvent<Items>
}
