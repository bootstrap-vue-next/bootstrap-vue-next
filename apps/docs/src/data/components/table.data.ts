import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => {
    const tableRowEventArgs = (action: string) => [
      {
        arg: 'item',
        type: 'TableItem',
        description: `Item data of the row ${action}`,
      },
      {
        arg: 'index',
        type: 'number',
        description: `Index of the row ${action}`,
      },
      {
        arg: 'event',
        description: '',
        type: 'MouseEvent|KeyboardEvent',
      },
    ]

    const rowSelectionScope = [
      {
        prop: 'rowSelected',
        type: 'boolean',
        description:
          'Will be true if the row has been selected. Only applicable when table is in selectable mode',
      },
      {
        prop: 'selectRow',
        type: '(index?: number) => void',
        description:
          'Can be called to select the current row. Only applicable when table is in selectable mode',
      },
    ]

    const endRowScope = [
      {
        prop: 'columns',
        type: 'number',
        description: 'The number of columns in the table',
      },
      {
        prop: 'fields',
        type: 'TableField<Items>[]',
        description: 'The normalized fields definition array (in the array of objects format)',
      },
    ]

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
        description: 'Text string to place in the caption element',
      },
      detailsTdClass: {
        type: 'ClassValue',
        default: undefined,
        description: 'CSS class (or classes) to apply to the td element in the details row',
      },
      fieldColumnClass: {
        type: '(field: TableField) => Record<string, any>[] | string | Record<PropertyKey, any> | any[]',
        default: undefined,
      },
      fields: {
        type: 'TableFieldRaw[]',
        default: '() => []',
        description: 'Array of field names or array of field definition objects',
      },
      footClone: {
        type: 'boolean',
        default: false,
        description: 'Enable the footer of the table, and clone the header content by default',
      },
      footRowVariant: {
        type: 'ColorVariant | null',
        default: undefined,
        description:
          'Apply a Bootstrap theme color variant to the tr element in the tfoot. Falls back to head-row-variant',
      },
      footVariant: {
        type: 'ColorVariant | null',
        default: undefined,
        description:
          'Apply a Bootstrap theme color variant to the foot, falls back to head-variant if that prop is specified. May take precedence over foot-row-variant',
      },
      headRowVariant: {
        type: 'ColorVariant | null',
        default: undefined,
        description: 'Apply a Bootstrap theme color variant to the tr element in the thead',
      },
      headVariant: {
        type: 'ColorVariant | null',
        default: undefined,
        description:
          'Apply a Bootstrap theme color variant to the head. May take precedence over head-row-variant',
      },
      items: {
        type: 'readonly Items[]',
        default: '() => []',
      },
      labelStacked: {
        type: 'boolean',
        default: false,
        description:
          'When set, the labels will appear as actual label elements, rather than with the data-label attribute',
      },
      modelValue: {
        type: 'any',
        default: undefined,
      },
      primaryKey: {
        type: 'string',
        default: undefined,
        description:
          'Name of a table field that contains a guaranteed unique value per row. Needed for tbody transition support, and also speeds up table rendering',
      },
      tbodyClass: {
        type: 'ClassValue',
        default: undefined,
      },
      tbodyTrAttrs: {
        type: '((item: Items | null, type: TableRowType) => AttrsValue) | AttrsValue',
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

    const tableLiteEmits = [
      {
        event: 'head-clicked',
        description:
          "Emitted when a header or footer cell is clicked. Not applicable for 'custom-foot' slot",
        args: [
          {
            arg: 'key',
            type: 'TableField<Record<string, unknown>>.key: LiteralUnion<string, string>',
            description: 'Column key clicked (field name)',
          },
          {
            arg: 'field',
            type: 'TableField',
            description: 'Field definition object',
          },
          {
            arg: 'event',
            description: 'Native event object',
            type: 'MouseEvent|KeyboardEvent',
          },
          {
            arg: 'isFooter',
            description: '`true` if this event originated from clicking on the footer cell',
            type: 'boolean',
          },
        ],
      },
      {
        event: 'row-clicked',
        description: 'Emitted when a row is clicked',
        args: tableRowEventArgs('being clicked'),
      },
      {
        event: 'row-contextmenu',
        description: 'Emitted when a context menu is displayed for a row',
        args: tableRowEventArgs('showing the context menu'),
      },
      {
        event: 'row-dblclicked',
        description: 'Emitted when a row is double clicked',
        args: tableRowEventArgs('being double clicked'),
      },
      {
        event: 'row-hovered',
        description: 'Emitted when a row is hovered',
        args: tableRowEventArgs('being hovered'),
      },
      {
        event: 'row-unhovered',
        description: 'Emitted when a row is unhovered',
        args: tableRowEventArgs('being unhovered'),
      },
    ]

    const tableLiteSlots: ComponentReference['slots'] = [
      {
        name: 'bottom-row',
        description: 'Fixed bottom row slot for user supplied B-TD cells. Optionally Scoped',
        scope: endRowScope,
      },
      {
        name: 'cell({key})',
        description:
          'Default scoped slot for custom data rendering of field data. See docs for scoped data',
        scope: [
          {
            prop: 'detailsShowing',
            type: 'boolean',
            description: "Will be true if the row's row-details scoped slot is visible",
          },
          {
            prop: 'field',
            type: 'TableField<Items>',
            description: "The field's normalized definition object (from the fields prop)",
          },
          {
            prop: 'index',
            type: 'number',
            description: "The row's index (zero-based) with respect to the displayed rows",
          },
          {
            prop: 'item',
            type: 'readonly Items[]',
            description: "The row's item data object",
          },
          {
            prop: 'toggleDetails',
            type: '() => void',
            description:
              'Can be called to toggle the visibility of the rows row-details scoped slot',
          },
          {
            prop: 'unformatted',
            type: 'unknown',
            description:
              "The raw value for this key in the item record (null or undefined if a virtual column), before being passed to the field's formatter function",
          },
          {
            prop: 'value',
            type: 'unknown',
            description:
              "The value for this key in the record (null or undefined if a virtual column), or the output of the field's formatter function",
          },
          ...rowSelectionScope,
        ],
      },
      {
        name: 'custom-foot',
        description:
          'Custom footer content slot for user supplied B-TR, B-TH, B-TD. Optionally Scoped',
        scope: [
          {
            prop: 'fields',
            type: 'TableField<Items>[]',
            description: 'The normalized fields definition array (in the array of objects format)',
          },
          {
            prop: 'items',
            type: 'readonly Items[]',
            description: 'Array of items that are currently being displayed',
          },
          {
            prop: 'columns',
            type: 'number',
            description: 'The number of columns in the table',
          },
        ],
      },
      {
        name: 'foot({key})',
        description:
          "Scoped slot for custom rendering of field footer. '{key}' is the field's key name. See docs for scoped footer",
        scope: [
          {
            prop: 'clearSelected',
            type: '() => void',
            description: 'Unselect all rows (applicable if the table is in selectable mode)',
          },
          {
            prop: 'column',
            type: 'LiteralUnion<keyof Items>',
            description: "The field's key value",
          },
          {
            prop: 'field',
            type: 'TableField<Items>',
            description: "The field's normalized definition object (from the fields prop)",
          },
          {
            prop: 'isFoot',
            type: 'true',
            description: 'Used to distinguish foot when falling back to head()',
          },
          {
            prop: 'label',
            type: 'string | undefined',
            description: "The field's label value",
          },
          {
            prop: 'selectAllRows',
            type: '() => void',
            description: 'Select all rows (applicable if the table is in selectable mode)',
          },
        ],
      },
      {
        name: 'head({key})',
        description:
          "Scoped slot for custom rendering of field header. '{key}' is the field's key name",
        scope: [
          {
            prop: 'clearSelected',
            type: '() => void',
            description: 'Unselect all rows (applicable if the table is in selectable mode)',
          },
          {
            prop: 'column',
            type: 'LiteralUnion<keyof Items>',
            description: "The field's key value",
          },
          {
            prop: 'field',
            type: 'TableField<Items>',
            description: "The field's normalized definition object (from the fields prop)",
          },
          {
            prop: 'isFoot',
            type: 'boolean',
            description: 'Will be true if the slot is being rendered in the table footer',
          },
          {
            prop: 'label',
            type: 'string | undefined',
            description: "The field's label value",
          },
          {
            prop: 'selectAllRows',
            type: '() => void',
            description: 'Select all rows (applicable if the table is in selectable mode)',
          },
        ],
      },
      {
        name: 'row-details',
        description:
          'Scoped slot for optional rendering additional record details. See docs for Row details support',
        scope: [
          {
            prop: 'fields',
            type: 'TableField<Items>[]',
            description: 'The normalized fields definition array (in the array of objects format)',
          },
          {
            prop: 'index',
            type: 'Number',
            description: "The item's row index number (with respect to the displayed item rows)",
          },
          {
            prop: 'item',
            type: 'Items',
            description: "The entire row's record data object",
          },
          {
            prop: 'toggleDetails',
            type: '() => void',
            description: "Function to toggle visibility of the row's details slot",
          },
          ...rowSelectionScope,
        ],
      },
      {
        name: 'table-caption',
        description: "Content to display in the table's caption element",
      },
      {
        name: 'thead-top',
        description:
          'Slot above the column headers in the `thead` element for user-supplied B-TR with B-TH/B-TD. Optionally scoped',
        scope: [
          {
            prop: 'clearSelected',
            type: '() => void',
            description: 'Unselect all rows (applicable if the table is in selectable mode)',
          },
          {
            prop: 'columns',
            type: 'number',
            description: 'The number of columns in the table',
          },
          {
            prop: 'label',
            type: 'string | undefined',
            description: "The field's label value",
          },
          {
            prop: 'fields',
            type: 'TableField<Items>[]',
            description: 'The normalized fields definition array (in the array of objects format)',
          },
          {
            prop: 'selectAllRows',
            type: '() => void',
            description: 'Select all rows (applicable if the table is in selectable mode)',
          },
        ],
      },
      {
        name: 'table-colgroup',
        description: 'Slot for user supplied `<colgroup>` element',
        scope: [
          {
            prop: 'fields',
            type: 'TableField<Items>[]',
            description: 'The normalized fields definition array (in the array of objects format)',
          },
        ],
      },
      {
        name: 'top-row',
        description: 'Fixed top row slot for user supplied B-TD cells. Optionally scoped',
        scope: endRowScope,
      },
    ]

    return [
      {
        component: 'BTable',
        sourcePath: '/BTable/BTable.vue',
        props: {
          '': {
            busy: {
              type: 'boolean',
              default: false,
              description:
                'When set, forces the table into the busy state. Automatically set when an items provider function is being called',
            },
            busyLoadingText: {
              type: 'string',
              default: 'Loading...',
              notYetImplemented: true,
            },
            currentPage: {
              type: 'Numberish',
              default: 1,
              description:
                'The current page number to display when the table is paginated. Starting from 1 and up',
            },
            filter: {
              type: 'string',
              default: undefined,
              description:
                'Criteria for filtering. Internal filtering supports only string or RegExpr criteria (RegExp is not yet implemented)',
            },
            filterFunction: {
              type: '(item: Readonly<Items>, filter: string | undefined) => boolean',
              default: undefined,
              description:
                'Function called during filtering of items, gets passed the current item being filtered. See docs for details.',
            },
            filterable: {
              type: 'string[]',
              default: undefined,
              description: 'Array of fields to include when filtering.',
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
              description:
                'Alternate way to set provider functionality, equivalent to using no-provider-filtering, no-provider-paging, and no-provider-sorting',
            },
            noProviderFiltering: {
              type: 'boolean',
              default: false,
              description:
                'When set, uses internal filtering to filter the data. Otherwise the provider is expected to perform the filtering',
            },
            noProviderPaging: {
              type: 'boolean',
              default: false,
              description:
                'When set, uses internal paging to paginate the data. Otherwise the items provider is expected to perform the paging',
            },
            noProviderSorting: {
              type: 'boolean',
              default: false,
              description:
                'When set, uses internal sorting to sort the data. Otherwise the items provider is expected to perform the sorting',
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
              description: 'When set, places the table body rows in selectable mode',
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
              description:
                "Bootstrap color theme variant to set selected rows to. Use any of the standard Bootstrap theme color variants, or the special table row variant 'active' (default). Set to an empty string to not use a variant",
            },
            selectMode: {
              type: "'multi' | 'single' | 'range'",
              default: 'multi',
              description:
                "The selectable mode for the table when 'selectable' is set. Possible values: 'single', 'multi' or 'range'",
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
            event: 'changed',
            description: 'Emitted when the displayed items change',
            args: [
              {
                arg: 'value',
                type: 'Items[]',
                description: 'Array of items displayed in the table',
              },
            ],
          },
          {
            event: 'filtered',
            description: 'Emitted when local filtering causes a change in the number of items',
            args: [
              {
                arg: 'value',
                type: 'Items[]',
                description: 'Array of items after filtering (before local pagination occurs)',
              },
            ],
          },
          {
            event: 'row-selected',
            description: 'Emitted when a row or rows have been selected',
            args: [
              {
                arg: 'value',
                type: 'Items[]',
                description: 'Array of the row items that are selected',
              },
            ],
          },
          {
            event: 'row-unselected',
            description: 'Emitted when a row or rows have been unselected',
            args: [
              {
                arg: 'value',
                type: 'Items[]',
                description: 'Array of the row items that are unselected',
              },
            ],
          },
          {
            event: 'update:sortBy',
            description:
              'Emitted when the `sortBy` model is changed and represents the current sort state',
            args: [
              {
                arg: 'value',
                type: 'BTableSortBy[] | undefined',
                description: 'New sortBy model value',
              },
            ],
          },
          {
            event: 'sorted',
            description:
              'Updated when the user clicks a sortable column heading and represents the column click and the sort state (`asc`, `desc`, or undefined)',
            args: [
              {
                arg: 'value',
                description: '',
                type: 'BTableSortBy',
              },
            ],
          },
          ...tableLiteEmits,
        ],
        slots: [
          ...tableLiteSlots,
          {
            name: 'empty',
            description:
              'Content to display when no items are present in the `items` array. Optionally scoped',
            scope: [
              {
                prop: 'emptyFilteredText',
                type: 'string',
                description: 'The value of the empty-filtered-text prop',
              },
              {
                prop: 'emptyText',
                type: 'string',
                description: 'The value of the empty-text prop',
              },
              {
                prop: 'fields',
                type: 'TableField<Items>[]',
                description:
                  'The normalized fields definition array (in the array of objects format)',
              },
              {
                prop: 'items',
                type: 'Items[] | null',
                description: 'The items array.',
              },
            ],
          },
          {
            name: 'empty-filtered',
            description:
              'Content to display when no items are present in the filtered `items` array. Optionally scoped',
            scope: [
              {
                prop: 'emptyFilteredText',
                type: 'string',
                description: 'The value of the empty-filtered-text prop',
              },
              {
                prop: 'emptyText',
                type: 'string',
                description: 'The value of the empty-text prop',
              },
              {
                prop: 'fields',
                type: 'TableField<Items>[]',
                description:
                  'The normalized fields definition array (in the array of objects format)',
              },
              {
                prop: 'items',
                type: 'Items[]',
                description: 'The items array.',
              },
            ],
          },
          {
            name: 'table-busy',
            description: 'Optional slot to place loading message when table is in the busy state',
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
        emits: tableLiteEmits,
        slots: tableLiteSlots,
      },
      {
        component: 'BTableSimple',
        sourcePath: '/BTable/BTableSimple.vue',
        props: {
          '': BTableSimpleProps,
        },
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
            ...pick(buildCommonProps(), ['variant']),
          } satisfies Record<keyof BvnComponentProps['BTbody'], PropertyReference>,
        },
        slots: [
          {
            name: 'default',
            description: 'Content to place in the tbody',
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
              type: 'Numberish',
              default: undefined,
              description: 'Number of columns this cell spans',
            },
            rowspan: {
              type: 'Numberish',
              default: undefined,
              description: 'Number of rows this cell spans',
            },
            stackedHeading: {
              type: 'string',
              default: undefined,
              description:
                "Heading for the cell when in stacked mode. Only applicable to cells in the 'tbody' element",
            },
            stickyColumn: {
              type: 'boolean',
              default: false,
              description:
                'If this will be a sticky column. Must be set on all cells in this column. Table must be in sticky-header or responsive mode to work',
            },
            ...pick(buildCommonProps(), ['variant']),
          } satisfies Record<keyof BvnComponentProps['BTd'], PropertyReference>,
        },
        slots: [
          {
            name: 'default',
            description: 'Content to place in the td',
          },
        ],
      },
      {
        component: 'BTfoot',
        styleSpec: {kind: StyleKind.Tag, value: 'tfoot'},
        sourcePath: '/BTable/BTfoot.vue',
        props: {
          '': {
            ...pick(buildCommonProps(), ['variant']),
          } satisfies Record<keyof BvnComponentProps['BTfoot'], PropertyReference>,
        },
        slots: [
          {
            name: 'default',
            description: 'Content to place in the tfoot',
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
              type: 'Numberish',
              default: undefined,
            },
            rowspan: {
              type: 'Numberish',
              default: undefined,
            },
            stackedHeading: {
              type: 'string',
              default: undefined,
              description:
                "Heading for the cell when in stacked mode. Only applicable to cells in the 'tbody' element",
            },
            stickyColumn: {
              type: 'boolean',
              default: false,
              description:
                'If this will be a sticky colum. Must be set on all cells in this column. table must be in sticky-header or responsive mode to work',
            },
            scope: {
              type: 'TableThScope',
              default: undefined,
              description: 'Scope of the header cell. Can be one of: col, row, colgroup, rowgroup',
            },
            ...pick(buildCommonProps(), ['variant']),
          } satisfies Record<keyof BvnComponentProps['BTh'], PropertyReference>,
        },
        slots: [
          {
            name: 'default',
            description: 'Content to place in the th',
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
