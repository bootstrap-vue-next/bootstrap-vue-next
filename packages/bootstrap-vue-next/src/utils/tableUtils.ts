import {titleCase} from './stringUtils'
import type {TableFieldRaw} from '../types/TableTypes'
import type {Breakpoint, BTableLiteProps, BTableSimpleProps} from '../types'

export const getTableFieldHeadLabel = (field: Readonly<TableFieldRaw<unknown>>) =>
  typeof field === 'string'
    ? titleCase(field)
    : field.label !== undefined
      ? field.label
      : typeof field.key === 'string'
        ? titleCase(field.key)
        : field.key

export const btableSimpleProps = Object.freeze(
  Object.keys({
    bordered: 0,
    borderless: 0,
    borderVariant: 0,
    captionTop: 0,
    dark: 0,
    fixed: 0,
    hover: 0,
    id: 0,
    noBorderCollapse: 0,
    outlined: 0,
    responsive: 0,
    small: 0,
    stacked: 0,
    stickyHeader: 0,
    striped: 0,
    stripedColumns: 0,
    variant: 0,
    tableAttrs: 0,
    tableClass: 0,
  } satisfies Record<keyof BTableSimpleProps, 0>)
) as readonly (keyof BTableSimpleProps)[]

export const btableLiteProps = Object.freeze(
  Object.keys({
    align: 0,
    caption: 0,
    detailsTdClass: 0,
    fieldColumnClass: 0,
    fields: 0,
    footClone: 0,
    footRowVariant: 0,
    footVariant: 0,
    headRowVariant: 0,
    headVariant: 0,
    items: 0,
    labelStacked: 0,
    modelValue: 0,
    primaryKey: 0,
    tbodyClass: 0,
    tbodyTrAttrs: 0,
    tbodyTransitionHandlers: 0,
    tbodyTransitionProps: 0,
    tbodyTrClass: 0,
    tfootClass: 0,
    tfootTrClass: 0,
    theadClass: 0,
    theadTrClass: 0,
  } satisfies Record<keyof Omit<BTableLiteProps<unknown>, keyof BTableSimpleProps>, 0>)
) as readonly (keyof Omit<BTableLiteProps<unknown>, keyof BTableSimpleProps>)[]

export const getDataLabelAttr = (
  props: {stacked: boolean | Breakpoint | undefined; labelStacked: boolean | undefined},
  label: string
) => (props.stacked && props.labelStacked !== true ? {'data-label': label} : undefined)
