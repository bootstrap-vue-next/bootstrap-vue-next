import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BTable',
      props: [
        {
          prop: 'align',
          type: 'VerticalAlign',
        },
        {
          prop: 'caption',
          type: 'string',
        },
        {
          prop: 'captionTop',
          type: 'Booleanish',
        },
        {
          prop: 'borderless',
          type: 'Booleanish',
        },
        {
          prop: 'bordered',
          type: 'Booleanish',
        },
        {
          prop: 'borderVariant',
          type: 'ColorVariant',
        },
        {
          prop: 'dark',
          type: 'Booleanish',
        },
        {
          prop: 'fields',
          type: 'TableField[]',
        },
        {
          prop: 'footClone',
          type: 'Booleanish',
        },
        {
          prop: 'hover',
          type: 'Booleanish',
        },
        {
          prop: 'items',
          type: 'TableItem[]',
        },
        {
          prop: 'responsive',
          type: 'boolean | Breakpoint',
        },
        {
          prop: 'small',
          type: 'Booleanish',
        },
        {
          prop: 'striped',
          type: 'Booleanish',
        },
        {
          prop: 'variant',
          type: 'ColorVariant',
        },
        {
          prop: 'sortBy',
          type: 'string',
        },
        {
          prop: 'sortDesc',
          type: 'Booleanish',
        },
        {
          prop: 'sortInternal',
          type: 'Booleanish',
        },
        {
          prop: 'selectable',
          type: 'Booleanish',
        },
        {
          prop: 'stickySelect',
          type: 'Booleanish',
        },
        {
          prop: 'selectHead',
          type: 'boolean | string',
        },
        {
          prop: 'selectMode',
          type: "'multi' | 'single' | 'range'",
        },
        {
          prop: 'selectionVariant',
          type: 'ColorVariant',
        },
        {
          prop: 'stickyHeader',
          type: 'Booleanish',
        },
        {
          prop: 'busy',
          type: 'Booleanish',
        },
      ],
      emits: [
        {
          args: [
            {
              arg: 'key',
              description: '',
              type: 'TableFieldObject<Record<string, unknown>>.key: LiteralUnion<string, string>',
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
      component: 'BTableSimple',
      props: [
        {
          prop: 'bordered',
          type: 'Booleanish',
        },
        {
          prop: 'borderless',
          type: 'Booleanish',
        },
        {
          prop: 'borderVariant',
          type: 'ColorVariant',
        },
        {
          prop: 'captionTop',
          type: 'Booleanish',
        },
        {
          prop: 'dark',
          type: 'Booleanish',
        },
        {
          prop: 'hover',
          type: 'Booleanish',
        },
        {
          prop: 'responsive',
          type: 'boolean | Breakpoint',
        },
        {
          prop: 'stacked',
          type: 'boolean | Breakpoint',
        },
        {
          prop: 'striped',
          type: 'Booleanish',
        },
        {
          prop: 'small',
          type: 'Booleanish',
        },
        {
          prop: 'tableClass',
          type: 'ClassValue',
        },
        {
          prop: 'tableVariant',
          type: 'string',
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
        },
        {
          prop: 'rowspan',
          type: 'string | number',
        },
        {
          prop: 'stackedHeading',
          type: 'string',
        },
        {
          prop: 'stickyColumn',
          type: 'Booleanish',
        },
        {
          prop: 'variant',
          type: 'ColorVariant',
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
          type: 'ColorVariant',
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
        },
        {
          prop: 'rowspan',
          type: 'string | number',
        },
        {
          prop: 'stackedHeading',
          type: 'string',
        },
        {
          prop: 'stickyColumn',
          type: 'Booleanish',
        },
        {
          prop: 'variant',
          type: 'ColorVariant',
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
