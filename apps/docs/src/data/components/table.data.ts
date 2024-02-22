import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BTable',
      props: [
        {
          prop: 'provider',
          type: 'BTableProvider',
          default: undefined,
        },
        {
          prop: 'sortCompare',
          type: 'BTableSortCompare',
          default: undefined,
        },
        {
          prop: 'noProvider',
          type: 'NoProviderTypes[]',
          default: undefined,
        },
        {
          prop: 'noProviderPaging',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'noProviderSorting',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'noProviderFiltering',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'noSelectOnClick',
          type: 'boolean',
          default: false,
          description: 'Do not select row when clicked',
        },
        {
          prop: 'sortBy',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'sortDesc',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'sortInternal',
          type: 'boolean',
          default: true,
        },
        {
          prop: 'selectable',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'stickySelect',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'selectHead',
          type: 'boolean | string',
          default: true,
        },
        {
          prop: 'selectMode',
          type: "'multi' | 'single' | 'range'",
          default: 'single',
        },
        {
          prop: 'selectionVariant',
          type: 'ColorVariant | null',
          default: 'primary',
        },
        {
          prop: 'busy',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'busyLoadingText',
          type: 'string',
          default: 'Loading...',
        },
        {
          prop: 'perPage',
          type: 'number',
          default: undefined,
        },
        {
          prop: 'currentPage',
          type: 'number',
          default: 1,
        },
        {
          prop: 'filter',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'filterable',
          type: 'string[]',
          default: undefined,
        },
      ],
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
              arg: 'update:sortBy',
              description: '',
              type: 'string',
            },
          ],
          event: 'update:sortBy',
          description: '',
        },
        {
          args: [
            {
              arg: 'update:sortDesc',
              description: 'boolean',
              type: 'boolean',
            },
          ],
          event: 'update:sortDesc',
          description: '',
        },
        {
          args: [
            {
              arg: 'sortBy',
              description: '',
              type: 'string',
            },
            {
              arg: 'isDesc',
              description: '',
              type: 'boolean',
            },
          ],
          event: 'sorted',
          description: '',
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
      props: [
        {
          prop: 'align',
          type: 'VerticalAlign',
          default: undefined,
        },
        {
          prop: 'caption',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'fields',
          type: 'TableField[]',
          default: '() => []',
        },
        {
          prop: 'footClone',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'items',
          type: 'TableItem[]',
          default: '() => []',
        },
        {
          prop: 'labelStacked',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'variant',
          type: 'ColorVariant | null',
          default: undefined,
        },
        {
          prop: 'showEmpty',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'emptyText',
          type: 'string',
          default: 'There are no records to show',
        },
        {
          prop: 'emptyFilteredText',
          type: 'string',
          default: 'There are no records matching your request',
        },
        {
          prop: 'fieldColumnClass',
          type: '(field: TableField) => Record<string, any>[]',
          default: undefined,
        },
        {
          prop: 'tbodyTrClass',
          type: '(item: TableItem | null, type: string) => string | Array<any> | null | undefined',
          default: undefined,
        },
        {
          prop: 'virtualFields',
          type: 'number | string',
          default: 0,
        },
      ],
      emits: [],
      slots: [],
    },
    {
      component: 'BTableSimple',
      props: [
        {
          prop: 'bordered',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'borderless',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'borderVariant',
          type: 'ColorVariant | null',
          default: null,
        },
        {
          prop: 'captionTop',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'dark',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'hover',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'responsive',
          type: 'boolean | Breakpoint',
          default: false,
        },
        {
          prop: 'stacked',
          type: 'boolean | Breakpoint',
          default: false,
        },
        {
          prop: 'striped',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'small',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'tableClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'variant',
          type: 'ColorVariant | null',
          default: null,
        },
        {
          prop: 'stickyHeader',
          type: 'boolean',
          default: false,
        },
      ],
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
      props: [
        {
          prop: 'variant',
          type: 'ColorVariant',
          default: null,
        },
      ],
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
      props: [
        {
          prop: 'colspan',
          type: 'string | number',
          default: undefined,
        },
        {
          prop: 'rowspan',
          type: 'string | number',
          default: undefined,
        },
        {
          prop: 'stackedHeading',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'stickyColumn',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'variant',
          type: 'ColorVariant | null',
          default: null,
        },
      ],
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
      props: [
        {
          prop: 'variant',
          type: 'ColorVariant | null',
          default: null,
        },
      ],
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
      props: [
        {
          prop: 'colspan',
          type: 'string | number',
          default: undefined,
        },
        {
          prop: 'rowspan',
          type: 'string | number',
          default: undefined,
        },
        {
          prop: 'stackedHeading',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'stickyColumn',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'variant',
          type: 'ColorVariant | null',
          default: null,
        },
      ],
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
      props: [
        {
          prop: 'variant',
          type: 'ColorVariant',
          default: null,
        },
      ],
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
      props: [
        {
          prop: 'variant',
          type: 'ColorVariant',
          default: null,
        },
      ],
      emits: [],
      slots: [
        {
          description: '',
          name: 'default',
          scope: [],
        },
      ],
    },
  ],
}
