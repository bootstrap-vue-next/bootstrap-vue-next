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
      hover: {
        type: 'boolean',
        default: false,
      },
      responsive: {
        type: 'boolean | Breakpoint',
        default: false,
      },
      stacked: {
        type: 'boolean | Breakpoint',
        default: false,
      },
      striped: {
        type: 'boolean',
        default: false,
      },
      small: {
        type: 'boolean',
        default: false,
      },
      tableClass: {
        type: 'ClassValue',
        default: undefined,
      },
      variant: {
        type: 'ColorVariant | null',
        default: null,
      },
      stickyHeader: {
        type: 'boolean | Numberish',
        default: false,
        description:
          'Makes the table header sticky. Set to true for a maximum height 300px tall table, or set to any valid CSS height (including units). Inputting a number type is converted to px height',
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
      fields: {
        type: 'TableField[]',
        default: '() => []',
      },
      footClone: {
        type: 'boolean',
        default: false,
      },
      items: {
        type: 'TableItem[]',
        default: '() => []',
      },
      labelStacked: {
        type: 'boolean',
        default: false,
      },
      variant: {
        type: 'ColorVariant | null',
        default: undefined,
      },
      showEmpty: {
        type: 'boolean',
        default: false,
      },
      emptyText: {
        type: 'string',
        default: 'There are no records to show',
      },
      emptyFilteredText: {
        type: 'string',
        default: 'There are no records matching your request',
      },
      fieldColumnClass: {
        type: '(field: TableField) => Record<string, any>[]',
        default: undefined,
      },
      tbodyTrClass: {
        type: '(item: TableItem | null, type: string) => string | Array<any> | null | undefined',
        default: undefined,
      },
      virtualFields: {
        type: 'number | string',
        default: 0,
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
            provider: {
              type: 'BTableProvider',
              default: undefined,
            },
            sortCompare: {
              type: 'BTableSortCompare',
              default: undefined,
            },
            noProvider: {
              type: 'NoProviderTypes[]',
              default: undefined,
            },
            noProviderPaging: {
              type: 'boolean',
              default: false,
            },
            noProviderSorting: {
              type: 'boolean',
              default: false,
            },
            noProviderFiltering: {
              type: 'boolean',
              default: false,
            },
            noSelectOnClick: {
              type: 'boolean',
              default: false,
              description: 'Do not select row when clicked',
            },
            sortBy: {
              type: 'BTableSortBy[]',
              default: undefined,
              description: 'Model representing the current sort state',
            },
            sortDesc: {
              type: 'boolean',
              default: false,
            },
            sortInternal: {
              type: 'boolean',
              default: true,
            },
            selectable: {
              type: 'boolean',
              default: false,
            },
            stickySelect: {
              type: 'boolean',
              default: false,
            },
            selectHead: {
              type: 'boolean | string',
              default: true,
            },
            selectMode: {
              type: "'multi' | 'single' | 'range'",
              default: 'single',
            },
            selectionVariant: {
              type: 'ColorVariant | null',
              default: 'primary',
            },
            busy: {
              type: 'boolean',
              default: false,
            },
            busyLoadingText: {
              type: 'string',
              default: 'Loading...',
            },
            perPage: {
              type: 'number',
              default: undefined,
            },
            currentPage: {
              type: 'number',
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
