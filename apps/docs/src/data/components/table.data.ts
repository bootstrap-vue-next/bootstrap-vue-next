import type {ComponentReference, PropertyReference} from '../../types'
import {omit} from '../../utils'

export default {
  load: (): ComponentReference[] => {
    const BTableSimpleProps = {
      bordered: {
        type: 'boolean',
        default: false,
      },
      borderless: {
        type: 'boolean',
        default: false,
      },
      borderVariant: {
        type: 'ColorVariant | null',
        default: null,
      },
      captionTop: {
        type: 'boolean',
        default: false,
      },
      dark: {
        type: 'boolean',
        default: false,
      },
      fixed: {
        type: 'boolean',
        default: false,
      },
      hover: {
        type: 'boolean',
        default: false,
      },
      id: {
        type: 'string',
        default: undefined,
      },
      noBorderCollapse: {
        type: 'boolean',
        default: false,
      },
      outlined: {
        type: 'boolean',
        default: false,
      },
      responsive: {
        type: 'boolean | Breakpoint',
        default: false,
      },
      small: {
        type: 'boolean',
        default: false,
      },
      stacked: {
        type: 'boolean | Breakpoint',
        default: false,
      },
      stickyHeader: {
        type: 'boolean | Numberish',
        default: false,
        description:
          'Makes the table header sticky. Set to true for a maximum height 300px tall table, or set to any valid CSS height (including units). Inputting a number type is converted to px height',
      },
      striped: {
        type: 'boolean',
        default: false,
      },
      stripedColumns: {
        type: 'boolean',
        default: false,
      },
      tableAttrs: {
        type: 'AttrsValue',
        default: undefined,
      },
      tableClass: {
        type: 'ClassValue',
        default: undefined,
      },
      variant: {
        type: 'ColorVariant | null',
        default: null,
      },
    } as const

    const BTableLiteProps = {
      align: {
        type: 'VerticalAlign',
        default: undefined,
      },
      caption: {
        type: 'string',
        default: undefined,
      },
      captionHtml: {
        type: 'string',
        default: undefined,
      },
      detailsTdClass: {
        type: 'ClassValue',
        default: undefined,
      },
      emptyFilteredText: {
        type: 'string',
        default: 'There are no records matching your request',
      },
      emptyText: {
        type: 'string',
        default: 'There are no records to show',
      },
      fieldColumnClass: {
        type: '(field: TableField) => Record<string, any>[] | string | Record<PropertyKey, any> | any[]',
        default: undefined,
      },
      fields: {
        type: 'TableFieldRaw[]',
        default: '() => []',
      },
      footClone: {
        type: 'boolean',
        default: false,
      },
      footRowVariant: {
        type: 'ColorVariant | null',
        default: undefined,
      },
      footVariant: {
        type: 'ColorVariant | null',
        default: undefined,
      },
      headRowVariant: {
        type: 'ColorVariant | null',
        default: undefined,
      },
      headVariant: {
        type: 'ColorVariant | null',
        default: undefined,
      },
      items: {
        type: 'TableItem[]',
        default: '() => []',
      },
      labelStacked: {
        type: 'boolean',
        default: false,
      },
      modelValue: {
        type: 'any',
        default: undefined,
      },
      primaryKey: {
        type: 'string',
        default: undefined,
      },
      showEmpty: {
        type: 'boolean',
        default: false,
      },
      tbodyClass: {
        type: 'ClassValue',
        default: undefined,
      },
      tbodyTrAttrs: {
        type: 'ClassValue',
        default: undefined,
      },
      tbodyTrClass: {
        type: '((item: TableItem | null, type: string) => string | any[] | null | undefined) | string | Record<PropertyKey, any> | any[]',
        default: undefined,
      },
      tfootClass: {
        type: 'ClassValue',
        default: undefined,
      },
      tfootTrClass: {
        type: 'ClassValue',
        default: undefined,
      },
      theadClass: {
        type: 'ClassValue',
        default: undefined,
      },
      theadTrClass: {
        type: 'ClassValue',
        default: undefined,
      },
    } as const

    const BTableLitePropsDefinition = (
      obj: {header: string; val: Record<string, PropertyReference>} = {
        header: '',
        val: BTableLiteProps,
      }
    ): Record<string, Record<string, PropertyReference>> =>
      ({
        [obj.header]: obj.val,
        'BTableSimple Props': BTableSimpleProps,
      }) as const

    return [
      {
        component: 'BTable',
        props: {
          '': {
            busy: {
              type: 'boolean',
              default: false,
            },
            busyLoadingText: {
              type: 'string',
              default: 'Loading...',
            },
            currentPage: {
              type: 'Numberish',
              default: 1,
            },
            filter: {
              type: 'string',
              default: undefined,
            },
            filterable: {
              type: 'string[]',
              default: undefined,
            },
            multiSort: {
              type: 'boolean',
              default: false,
            },
            mustSort: {
              type: 'boolean | string[]',
              default: false,
            },
            noLocalSorting: {
              type: 'boolean',
              default: false,
            },
            noProvider: {
              type: 'NoProviderTypes[]',
              default: undefined,
            },
            noProviderFiltering: {
              type: 'boolean',
              default: false,
            },
            noProviderPaging: {
              type: 'boolean',
              default: false,
            },
            noProviderSorting: {
              type: 'boolean',
              default: false,
            },
            noSelectOnClick: {
              type: 'boolean',
              default: false,
              description: 'Do not select row when clicked',
            },
            noSortableIcon: {
              type: 'boolean',
              default: false,
            },
            perPage: {
              type: 'Numberish',
              default: Number.POSITIVE_INFINITY,
            },
            provider: {
              type: 'BTableProvider',
              default: undefined,
            },
            selectable: {
              type: 'boolean',
              default: false,
            },
            selectedItems: {
              type: 'TableItem[]',
            },
            selectHead: {
              type: 'boolean | string',
              default: true,
            },
            selectionVariant: {
              type: 'ColorVariant | null',
              default: 'primary',
            },
            selectMode: {
              type: "'multi' | 'single' | 'range'",
              default: 'multi',
            },
            sortBy: {
              type: 'BTableSortBy[]',
              default: undefined,
              description: 'Model representing the current sort state',
            },
            stickySelect: {
              type: 'boolean',
              default: false,
            },
          },
          ...BTableLitePropsDefinition({
            header: 'BTableLite Props',
            val: omit(BTableLiteProps, ['tableClass']),
          }),
        },
        emits: [
          {
            args: [
              {
                arg: 'key',
                description: '',
                type: 'TableField<Record<string, unknown>>.key: LiteralUnion<string, string>',
              },
              {
                arg: 'field',
                description: '',
                type: 'TableField',
              },
              {
                arg: 'event',
                description: '',
                type: 'MouseEvent',
              },
              {
                arg: 'isFooter',
                description: '',
                type: 'boolean',
              },
            ],
            event: 'headClicked',
            description: '',
          },
          {
            args: [
              {
                arg: 'item',
                description: '',
                type: 'TableItem',
              },
              {
                arg: 'index',
                description: '',
                type: 'number',
              },
              {
                arg: 'event',
                description: '',
                type: 'MouseEvent',
              },
            ],
            event: 'rowClicked',
            description: '',
          },
          {
            args: [
              {
                arg: 'item',
                description: '',
                type: 'TableItem',
              },
              {
                arg: 'index',
                description: '',
                type: 'number',
              },
              {
                arg: 'event',
                description: '',
                type: 'MouseEvent',
              },
            ],
            event: 'rowDblClicked',
            description: '',
          },
          {
            args: [
              {
                arg: 'item',
                description: '',
                type: 'TableItem',
              },
              {
                arg: 'index',
                description: '',
                type: 'number',
              },
              {
                arg: 'event',
                description: '',
                type: 'MouseEvent',
              },
            ],
            event: 'rowHovered',
            description: '',
          },
          {
            args: [
              {
                arg: 'item',
                description: '',
                type: 'TableItem',
              },
              {
                arg: 'index',
                description: '',
                type: 'number',
              },
              {
                arg: 'event',
                description: '',
                type: 'MouseEvent',
              },
            ],
            event: 'rowUnhovered',
            description: '',
          },
          {
            args: [
              {
                arg: 'rowSelected',
                description: '',
                type: 'TableItem',
              },
            ],
            event: 'rowSelected',
            description: '',
          },
          {
            args: [
              {
                arg: 'rowUnselected',
                description: '',
                type: 'TableItem',
              },
            ],
            event: 'rowUnselected',
            description: '',
          },
          {
            args: [
              {
                arg: 'selection',
                description: '',
                type: 'TableItem[]',
              },
            ],
            event: 'selection',
            description: '',
          },
          {
            args: [
              {
                arg: 'value',
                description: 'BTableSortBy[] | undefined',
                type: 'string',
              },
            ],
            event: 'update:sortBy',
            description:
              'Emitted when the `sortBy` model is changed and represents the current sort state',
          },
          {
            args: [
              {
                arg: 'value',
                description: '',
                type: 'BTableSortBy',
              },
            ],
            event: 'sorted',
            description:
              'Updated when the user clicks a sortable column heading and represents the column click and the sort state (`asc`, `desc`, or undefined)',
          },
        ],
        slots: [
          {
            description: '',
            name: 'thead-top',
            scope: [],
          },
          {
            description: '',
            name: 'select-head',
            scope: [],
          },
          {
            description: '',
            name: 'thead-sub',
            scope: [],
          },
          {
            description: '',
            name: 'selectCell',
            scope: [],
          },
          {
            description: '',
            name: 'row-details',
            scope: [],
          },
          {
            description: '',
            name: 'table-busy',
            scope: [],
          },
          {
            description: '',
            name: 'table-caption',
            scope: [],
          },
          {
            description: '',
            name: 'custom-foot',
            scope: [],
          },
          {
            description: '',
            name: 'table-caption',
            scope: [],
          },
          {
            description: '',
            name: 'default',
            scope: [],
          },
        ],
      },
      {
        component: 'BTableLite',
        props: BTableLitePropsDefinition(),
        emits: [],
        slots: [],
      },
      {
        component: 'BTableSimple',
        props: {
          '': BTableSimpleProps,
        },
        emits: [],
        slots: [
          {
            description: '',
            name: 'default',
            scope: [],
          },
        ],
      },
      {
        component: 'BTbody',
        props: {
          '': {
            variant: {
              type: 'ColorVariant',
              default: null,
            },
          },
        },
        emits: [],
        slots: [
          {
            description: '',
            name: 'default',
            scope: [],
          },
        ],
      },
      {
        component: 'BTd',
        props: {
          '': {
            colspan: {
              type: 'string | number',
              default: undefined,
            },
            rowspan: {
              type: 'string | number',
              default: undefined,
            },
            stackedHeading: {
              type: 'string',
              default: undefined,
            },
            stickyColumn: {
              type: 'boolean',
              default: false,
            },
            variant: {
              type: 'ColorVariant | null',
              default: null,
            },
          },
        },
        emits: [],
        slots: [
          {
            description: '',
            name: 'default',
            scope: [],
          },
        ],
      },
      {
        component: 'BTfoot',
        props: {
          '': {
            variant: {
              type: 'ColorVariant | null',
              default: null,
            },
          },
        },
        emits: [],
        slots: [
          {
            description: '',
            name: 'default',
            scope: [],
          },
        ],
      },
      {
        component: 'BTh',
        props: {
          '': {
            colspan: {
              type: 'string | number',
              default: undefined,
            },
            rowspan: {
              type: 'string | number',
              default: undefined,
            },
            stackedHeading: {
              type: 'string',
              default: undefined,
            },
            stickyColumn: {
              type: 'boolean',
              default: false,
            },
            variant: {
              type: 'ColorVariant | null',
              default: null,
            },
          },
        },
        emits: [],
        slots: [
          {
            description: '',
            name: 'default',
            scope: [],
          },
        ],
      },
      {
        component: 'BThead',
        props: {
          '': {
            variant: {
              type: 'ColorVariant',
              default: null,
            },
          },
        },
        emits: [],
        slots: [
          {
            description: '',
            name: 'default',
            scope: [],
          },
        ],
      },
      {
        component: 'BTr',
        props: {
          '': {
            variant: {
              type: 'ColorVariant',
              default: null,
            },
          },
        },
        emits: [],
        slots: [
          {
            description: '',
            name: 'default',
            scope: [],
          },
        ],
      },
    ]
  },
}
