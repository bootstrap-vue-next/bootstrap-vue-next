import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => {
    const BTableSimpleProps = {
      bordered: {
        type: 'boolean',
        default: false,
        description: 'Adds borders to all the cells and headers',
      },
      borderless: {
        type: 'boolean',
        default: false,
        description: 'Removes all borders from cells',
      },
      borderVariant: {
        type: 'ColorVariant | null',
        default: null,
        description: 'Applies one of the Bootstrap theme color variants to the table border',
      },
      captionTop: {
        type: 'boolean',
        default: false,
        description: 'When set, the table caption will appear above the table',
      },
      dark: {
        type: 'boolean',
        default: false,
        description: 'Places the table in dark mode',
      },
      fixed: {
        type: 'boolean',
        default: false,
        description:
          'Makes all columns equal width (fixed layout table). Will speed up rendering for large tables. Column widths can be set via CSS or colgroup',
      },
      hover: {
        type: 'boolean',
        default: false,
        description: 'Enables hover styling on rows',
      },
      noBorderCollapse: {
        type: 'boolean',
        default: false,
        description:
          "Disable's the collapsing of table borders. Useful when table has sticky headers or columns",
      },
      outlined: {
        type: 'boolean',
        default: false,
        description: 'Adds an outline border to the table element',
      },
      responsive: {
        type: 'boolean | Breakpoint',
        default: false,
        description:
          "Makes the table responsive in width, adding a horizontal scrollbar. Set to true for always responsive or set to one of the breakpoints to switch from responsive to normal: 'sm', 'md', 'lg', 'xl'",
      },
      small: {
        type: 'boolean',
        default: false,
        description: 'Renders the table with smaller cell padding',
      },
      stacked: {
        type: 'boolean | Breakpoint',
        default: false,
        description:
          "Place the table in stacked mode. Set to true for always stacked, or set to one of the breakpoints to switch from stacked to normal: 'sm', 'md', 'lg', 'xl'",
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
        description: 'Applies striping to the tbody rows',
      },
      stripedColumns: {
        type: 'boolean',
        default: false,
        description: 'Applies striping to the table columns',
      },
      tableAttrs: {
        type: 'AttrsValue',
        default: undefined,
        description: 'Attributes to apply to the table element',
      },
      tableClass: {
        type: 'ClassValue',
        default: undefined,
        description: 'Classes to apply to the table element',
      },
      ...pick(buildCommonProps(buildCommonProps()), ['id', 'variant']),
    } as const satisfies Record<keyof BvnComponentProps['BTableSimple'], PropertyReference>

    const BTableLiteProps = {
      align: {
        type: 'VerticalAlign',
        default: undefined,
      },
      caption: {
        type: 'string',
        default: undefined,
      },
      detailsTdClass: {
        type: 'ClassValue',
        default: undefined,
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
    } as const satisfies Record<
      Exclude<keyof BvnComponentProps['BTableLite'], keyof BvnComponentProps['BTableSimple']>,
      PropertyReference
    >

    return [
      {
        component: 'BTable',
        sourcePath: '/BTable/BTable.vue',
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
            filterFunction: {
              type: '(item: Readonly<Items>, filter: string | undefined) => boolean',
              default: undefined,
              description:
                'Function called during filtering of items, gets passed the current item being filtered',
            },
            filterable: {
              type: 'string[]',
              default: undefined,
            },
            emptyFilteredText: {
              type: 'string',
              default: 'There are no records matching your request',
              description:
                'Text to display when no items are present in the `items` array after filtering',
            },
            emptyText: {
              type: 'string',
              default: 'There are no records to show',
              description: 'Text to display when no items are present in the `items` array',
            },
            showEmpty: {
              type: 'boolean',
              default: false,
              description: 'Show the empty text when no items are present in the `items` array',
            },
            multisort: {
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
          } satisfies Record<
            Exclude<
              keyof BvnComponentProps['BTable'],
              keyof BvnComponentProps['BTableSimple'] | keyof BvnComponentProps['BTableLite']
            >,
            PropertyReference
          >,
          'BTableLite Props': BTableLiteProps,
          'BTableSimple Props': BTableSimpleProps,
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
          {
            name: 'empty-filtered',
            description:
              'Content to display when no items are present in the `items` array after filtering',
          },
          {
            name: 'empty',
            description: 'Content to display when no items are present in the `items` array',
          },
        ],
      },
      {
        component: 'BTableLite',
        sourcePath: '/BTable/BTableLite.vue',
        props: {
          '': BTableLiteProps,
          'BTableSimple Props': BTableSimpleProps,
        },
        emits: [],
        slots: [],
      },
      {
        component: 'BTableSimple',
        sourcePath: '/BTable/BTableSimple.vue',
        props: {
          '': BTableSimpleProps,
        },
        emits: [],
        slots: [
          {
            name: 'default',
            description: 'Content to place in the table',
          },
        ],
      },
      {
        component: 'BTbody',
        styleSpec: {kind: StyleKind.Tag, value: 'tbody'},
        sourcePath: '/BTable/BTbody.vue',
        props: {
          '': {
            variant: {
              type: 'ColorVariant',
              default: null,
            },
          } satisfies Record<keyof BvnComponentProps['BTbody'], PropertyReference>,
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
        styleSpec: {kind: StyleKind.Tag, value: 'td'},
        sourcePath: '/BTable/BTd.vue',
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
          } satisfies Record<keyof BvnComponentProps['BTd'], PropertyReference>,
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
        styleSpec: {kind: StyleKind.Tag, value: 'tfoot'},
        sourcePath: '/BTable/BTfoot.vue',
        props: {
          '': {
            variant: {
              type: 'ColorVariant | null',
              default: null,
            },
          } satisfies Record<keyof BvnComponentProps['BTfoot'], PropertyReference>,
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
        styleSpec: {kind: StyleKind.Tag, value: 'th'},
        sourcePath: '/BTable/BTh.vue',
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
          } satisfies Record<keyof BvnComponentProps['BTh'], PropertyReference>,
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
        styleSpec: {kind: StyleKind.Tag, value: 'thead'},
        sourcePath: '/BTable/BThead.vue',
        props: {
          '': {
            variant: {
              type: 'ColorVariant',
              default: null,
            },
          } satisfies Record<keyof BvnComponentProps['BThead'], PropertyReference>,
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
        styleSpec: {kind: StyleKind.Tag, value: 'tr'},
        sourcePath: '/BTable/BTr.vue',
        props: {
          '': {
            variant: {
              type: 'ColorVariant',
              default: null,
            },
          } satisfies Record<keyof BvnComponentProps['BTr'], PropertyReference>,
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
