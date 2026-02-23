import {
  type BTableEmits,
  type BTableLiteEmits,
  type BTableLiteProps,
  type BTableLiteSlots,
  type BTableProps,
  type BTableSimpleProps,
  type BTableSimpleSlots,
  type BTableSlots,
  type BTbodyProps,
  type BTbodySlots,
  type BTdProps,
  type BTdSlots,
  type BTfootProps,
  type BTfootSlots,
  type BTheadProps,
  type BTheadSlots,
  type BThProps,
  type BThSlots,
  type BTrProps,
  type BTrSlots,
} from 'bootstrap-vue-next'
import {
  type ComponentReference,
  defaultPropSectionSymbol,
  type EmitArgReference,
  type EmitRecord,
  type ExposedRecord,
  type PropRecord,
  type SlotRecord,
  type SlotScopeReference,
  StyleKind,
} from '../../types'
import {pick} from '../../utils/objectUtils'
import {buildCommonProps} from '../../utils/commonProps'

export default {
  load: (): ComponentReference => {
    const tableRowEventArgs = <const T extends string>(action: T) =>
      ({
        value: {
          type: 'TableRowEventObject<Item>',
          description: `Object payload with the row item, index, and event for the row ${action}`,
        },
      }) satisfies EmitArgReference

    const rowSelectionScope: SlotScopeReference = {
      rowSelected: {
        type: 'boolean',
        description:
          'Will be true if the row has been selected. Only applicable when table is in selectable mode',
      },
      selectRow: {
        type: '(index?: number) => void',
        description:
          'Can be called to select the current row. Only applicable when table is in selectable mode',
      },
    } as const

    const endRowScope: SlotScopeReference = {
      columns: {
        type: 'number',
        description: 'The number of columns in the table',
      },
      fields: {
        type: 'TableField<Item>[]',
        description: 'The normalized fields definition array (in the array of objects format)',
      },
    } as const

    const BTableSimple = {
      slots: {
        default: {
          description: 'Content to place in the table',
        },
      } satisfies SlotRecord<keyof BTableSimpleSlots>,
      props: {
        ...pick(buildCommonProps(buildCommonProps()), ['id', 'variant']),
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
      } satisfies PropRecord<keyof BTableSimpleProps>,
    } as const

    const BTableLite = {
      props: {
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
          type: 'readonly Item[]',
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
        expandedItems: {
          type: 'readonly unknown[]',
          default: '() => []',
          description:
            'Array of items that are currently expanded (have their row-expansion slot visible). Use v-model:expanded-items to bind this. When a primary-key is provided, expansion state persists across item array updates',
        },
        primaryKey: {
          type: 'string | ((item: Item) => string)',
          default: undefined,
          description:
            'Name of a table field that contains a guaranteed unique value per row. For row expansion and selection to persist across item updates. Also speeds up table rendering and enables proper item tracking.',
        },
        tbodyClass: {
          type: 'ClassValue',
          default: undefined,
        },
        tbodyTrAttrs: {
          type: '((item: Item | null, type: TableRowType) => AttrsValue) | AttrsValue',
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
      } satisfies PropRecord,
      slots: {
        'bottom-row': {
          description: 'Fixed bottom row slot for user supplied B-TD cells. Optionally Scoped',
          scope: endRowScope,
        },
        'cell({key})': {
          description:
            'Default scoped slot for custom data rendering of field data. See docs for scoped data',
          scope: {
            ...rowSelectionScope,
            expansionShowing: {
              type: 'boolean',
              description: "Will be true if the row's row-expansion scoped slot is visible",
            },
            field: {
              type: 'TableField<Item>',
              description: "The field's normalized definition object (from the fields prop)",
            },
            index: {
              type: 'number',
              description: "The row's index (zero-based) with respect to the displayed rows",
            },
            item: {
              type: 'Item',
              description: "The row's item data object",
            },
            toggleExpansion: {
              type: '() => void',
              description:
                'Can be called to toggle the visibility of the rows row-expansion scoped slot',
            },
            unformatted: {
              type: 'unknown',
              description:
                "The raw value for this key in the item record (null or undefined if a virtual column), before being passed to the field's formatter function",
            },
            value: {
              type: 'unknown',
              description:
                "The value for this key in the record (null or undefined if a virtual column), or the output of the field's formatter function",
            },
          },
        },
        'custom-foot': {
          description:
            'Custom footer content slot for user supplied B-TR, B-TH, B-TD. Optionally Scoped',
          scope: {
            fields: {
              type: 'TableField<Item>[]',
              description:
                'The normalized fields definition array (in the array of objects format)',
            },
            items: {
              type: 'readonly Item[]',
              description: 'Array of items that are currently being displayed',
            },
            columns: {
              type: 'number',
              description: 'The number of columns in the table',
            },
          },
        },
        'foot({key})': {
          description:
            "Scoped slot for custom rendering of field footer. '{key}' is the field's key name. See docs for scoped footer",
          scope: {
            clearSelected: {
              type: '() => void',
              description: 'Unselect all rows (applicable if the table is in selectable mode)',
            },
            column: {
              type: 'LiteralUnion<keyof Item>',
              description: "The field's key value",
            },
            field: {
              type: 'TableField<Item>',
              description: "The field's normalized definition object (from the fields prop)",
            },
            isFoot: {
              type: 'true',
              description: 'Used to distinguish foot when falling back to head()',
            },
            label: {
              type: 'string | undefined',
              description: "The field's label value",
            },
            selectAllRows: {
              type: '() => void',
              description: 'Select all rows (applicable if the table is in selectable mode)',
            },
          },
        },
        'head({key})': {
          description:
            "Scoped slot for custom rendering of field header. '{key}' is the field's key name",
          scope: {
            clearSelected: {
              type: '() => void',
              description: 'Unselect all rows (applicable if the table is in selectable mode)',
            },
            column: {
              type: 'LiteralUnion<keyof Item>',
              description: "The field's key value",
            },
            field: {
              type: 'TableField<Item>',
              description: "The field's normalized definition object (from the fields prop)",
            },
            isFoot: {
              type: 'boolean',
              description: 'Will be true if the slot is being rendered in the table footer',
            },
            label: {
              type: 'string | undefined',
              description: "The field's label value",
            },
            selectAllRows: {
              type: '() => void',
              description: 'Select all rows (applicable if the table is in selectable mode)',
            },
          },
        },
        'row-expansion': {
          description:
            'Scoped slot for optional rendering additional record expansion. See docs for Row expansion support',
          scope: {
            ...rowSelectionScope,
            fields: {
              type: 'TableField<Item>[]',
              description:
                'The normalized fields definition array (in the array of objects format)',
            },
            index: {
              type: 'Number',
              description: "The item's row index number (with respect to the displayed item rows)",
            },
            item: {
              type: 'Item',
              description: "The entire row's record data object",
            },
            toggleExpansion: {
              type: '() => void',
              description: "Function to toggle visibility of the row's row-expansion slot",
            },
          },
        },
        'table-caption': {
          description: "Content to display in the table's caption element",
        },
        'thead-top': {
          description:
            'Slot above the column headers in the `thead` element for user-supplied B-TR with B-TH/B-TD. Optionally scoped',
          scope: {
            clearSelected: {
              type: '() => void',
              description: 'Unselect all rows (applicable if the table is in selectable mode)',
            },
            columns: {
              type: 'number',
              description: 'The number of columns in the table',
            },
            label: {
              type: 'string | undefined',
              description: "The field's label value",
            },
            fields: {
              type: 'TableField<Item>[]',
              description:
                'The normalized fields definition array (in the array of objects format)',
            },
            selectAllRows: {
              type: '() => void',
              description: 'Select all rows (applicable if the table is in selectable mode)',
            },
          },
        },
        'table-colgroup': {
          description: 'Slot for user supplied `<colgroup>` element',
          scope: {
            fields: {
              type: 'TableField<Item>[]',
              description:
                'The normalized fields definition array (in the array of objects format)',
            },
          },
        },
        'top-row': {
          description: 'Fixed top row slot for user supplied B-TD cells. Optionally scoped',
          scope: endRowScope,
        },
        'thead-sub': {
          scope: undefined,
          description: undefined,
        },
        'custom-body': {
          scope: undefined,
          description: undefined,
        },
      } satisfies SlotRecord<keyof BTableLiteSlots<unknown>>,
      emits: {
        'head-clicked': {
          description:
            "Emitted when a header or footer cell is clicked. Not applicable for 'custom-foot' slot",
          args: {
            value: {
              type: 'TableHeadClickedEventObject<Item>',
              description:
                'Object payload containing the key, field definition, native event, and whether the click originated from the footer.',
            },
          },
        },
        'row-clicked': {
          description: 'Emitted when a row is clicked',
          args: tableRowEventArgs('being clicked'),
        },
        'row-contextmenu': {
          description: 'Emitted when a context menu is displayed for a row',
          args: tableRowEventArgs('showing the context menu'),
        },
        'row-dblclicked': {
          description: 'Emitted when a row is double clicked',
          args: tableRowEventArgs('being double clicked'),
        },
        'row-hovered': {
          description: 'Emitted when a row is hovered',
          args: tableRowEventArgs('being hovered'),
        },
        'row-unhovered': {
          description: 'Emitted when a row is unhovered',
          args: tableRowEventArgs('being unhovered'),
        },
        'row-middle-clicked': {
          description: 'Emitted when a row is middle clicked',
          args: tableRowEventArgs('being middle clicked'),
        },
      } satisfies EmitRecord<keyof BTableLiteEmits<unknown>>,
    } as const

    const BTable = {
      emits: {
        ...BTableLite.emits,
        'filtered': {
          description: 'Emitted when local filtering causes a change in the number of items',
          args: {
            value: {
              type: 'Item[]',
              description: 'Array of items after filtering (before local pagination occurs)',
            },
          },
        },
        'row-selected': {
          description: 'Emitted when a row is selected',
          args: {
            value: {
              type: 'Item',
              description: 'Item that is selected',
            },
          },
        },
        'row-unselected': {
          description: 'Emitted when a row is unselected',
          args: {
            value: {
              type: 'Item',
              description: 'Item that is unselected',
            },
          },
        },
        'update:sort-by': {
          description:
            'Emitted when the `sortBy` model is changed and represents the current sort state',
          args: {
            value: {
              type: 'BTableSortBy[] | undefined',
              description: 'New sortBy model value',
            },
          },
        },
        'sorted': {
          description:
            'Updated when the user clicks a sortable column heading and represents the column click and the sort state (`asc`, `desc`, or undefined)',
          args: {
            value: {
              description: '',
              type: 'BTableSortBy',
            },
          },
        },
        'change': {
          args: undefined,
          description: undefined,
        },
        'update:busy': {
          args: undefined,
          description: undefined,
        },
        'update:selected-items': {
          args: undefined,
          description: undefined,
        },
      } satisfies EmitRecord<
        keyof BTableEmits<unknown> | 'update:sort-by' | 'update:busy' | 'update:selected-items'
      >,
      props: {
        busy: {
          type: 'boolean',
          default: false,
          description:
            'When set, forces the table into the busy state. Automatically set when an items provider function is being called',
        },
        busyLoadingText: {
          type: 'string',
          default: undefined,
          description:
            'Text to display when table is busy and no table-busy slot is provided. When set, items are replaced with a loading indicator. When not set, items remain visible with muted styling',
        },
        currentPage: {
          type: 'Numberish',
          default: 1,
          description:
            'The current page number to display when the table is paginated. Starting from 1 and up',
        },
        debounce: {
          type: 'Numberish',
          default: 0,
          description:
            'Delay in milliseconds before calling the provider after prop changes. Set to 0 for immediate execution (default). Useful for debouncing rapid filter changes.',
        },
        debounceMaxWait: {
          type: 'Numberish',
          default: Number.NaN,
          description:
            'Maximum time in milliseconds to wait before forcing a provider call, even if changes are still occurring. Use with debounce to ensure provider is eventually called.',
        },
        filter: {
          type: 'string',
          default: undefined,
          description:
            'Criteria for filtering. Only string values are supported. Use filterFunction prop for complex filtering including RegExp.',
        },
        filterFunction: {
          type: '(item: Readonly<Item>, filter: string | undefined) => boolean',
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
        initialSortDirection: {
          type: 'BTableInitialSortDirection',
          default: 'asc',
          description:
            "Default initial sort direction for all sortable columns that don't specify their own initialSortDirection. Can be 'asc' for ascending, 'desc' for descending, or 'last' to maintain the direction of the previously sorted column.",
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
        sortIconLeft: {
          type: 'boolean',
          default: false,
          description:
            'Position the sort icon on the left side of the table header cell instead of the right',
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
          type: 'readonly unknown[]',
          default: '() => []',
          description:
            'Array of currently selected items. Use v-model:selected-items to bind this. When a primary-key is provided, selection state persists across item array updates',
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
        sortCompare: {
          type: 'BTableSortByComparerFunction',
          default: undefined,
          description:
            'A global comparison function for sorting table fields. Field-level sortCompare takes precedence over this table-level setting. The function signature is (a: T, b: T, key: string) => number.',
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
      } satisfies PropRecord<
        Exclude<
          keyof BTableProps<unknown>,
          keyof BTableSimpleProps | keyof BTableLiteProps<unknown>
        >
      >,
      slots: {
        ...BTableLite.slots,
        // Overwriting the following from BTableLite slots. They have different scopes
        'thead-top': {},
        'row-expansion': {},
        'head({key})': {},
        'foot({key})': {},
        'cell({key})': {},
        //
        'empty': {
          description:
            'Content to display when no items are present in the `items` array. Optionally scoped',
          scope: {
            emptyFilteredText: {
              type: 'string',
              description: 'The value of the empty-filtered-text prop',
            },
            emptyText: {
              type: 'string',
              description: 'The value of the empty-text prop',
            },
            fields: {
              type: 'TableField<Item>[]',
              description:
                'The normalized fields definition array (in the array of objects format)',
            },
            items: {
              type: 'Item[] | null',
              description: 'The items array.',
            },
          },
        },
        'empty-filtered': {
          description:
            'Content to display when no items are present in the filtered `items` array. Optionally scoped',
          scope: {
            emptyFilteredText: {
              type: 'string',
              description: 'The value of the empty-filtered-text prop',
            },
            emptyText: {
              type: 'string',
              description: 'The value of the empty-text prop',
            },
            fields: {
              type: 'TableField<Item>[]',
              description:
                'The normalized fields definition array (in the array of objects format)',
            },
            items: {
              type: 'Item[]',
              description: 'The items array.',
            },
          },
        },
        'table-busy': {
          description: 'Optional slot to place loading message when table is in the busy state',
        },
      } satisfies SlotRecord<keyof BTableSlots<unknown>>,
    } as const

    return {
      BTable: {
        props: {
          [defaultPropSectionSymbol]: BTable.props,
          'BTableLite Props': BTableLite.props,
          'BTableSimple Props': BTableSimple.props,
        },
        emits: BTable.emits,
        slots: BTable.slots,
        exposed: {
          expansion: {
            type: 'object',
            description: 'Object containing expansion state methods and expandedItems ref',
            properties: {
              add: {
                type: '(item: Item) => void',
                description: 'Adds an item to the expanded items',
              },
              remove: {
                type: '(item: Item) => void',
                description: 'Removes an item from the expanded items',
              },
              set: {
                type: '(items: readonly Item[]) => void',
                description: 'Sets the expanded items to the provided items',
              },
              setAll: {
                type: '() => void',
                description: 'Sets the expanded items to all items',
              },
              clear: {
                type: '() => void',
                description: 'Clears all expanded items',
              },
              has: {
                type: '(item: Item) => boolean',
                description: 'Checks if an item is in the expanded items',
              },
              get: {
                type: '(item: Item) => unknown',
                description: 'Gets the item from the items prop, using the primary key if provided',
              },
              getFromPrimaryKey: {
                type: '(primaryKey: unknown) => unknown',
                description: 'Gets the item from the internal "computed items" representation when using the primary key. This is used to get the object reference of the item from the items when using the primary key, since the items are stored as the primary key value rather than the item itself. If no primaryKey is used, it will return undefined',
              },
              resolvedItems: {
                type: 'ComputedRef<readonly unknown[]>',
                description: 'A computed array of items resolved from their primary key values against the table\'s internal computed dataset. When a primaryKey is configured, expansion mechanisms may store only the primary key values. This property provides the corresponding full item objects by resolving those keys against the current internal items representation. If no primaryKey is used, this will mirror the expandedItems array. Note: Only items currently present in the internal computed dataset can be resolved. Keys that do not match an available item will be ignored',
              },
              toggle: {
                type: '(item: Item) => void',
                description: 'Toggles the expansion state for the given item',
              },
              isActivated: {
                type: 'ComputedRef<boolean>',
                description: 'Whether the expansion tracker is activated (has any expanded items)',
              },
              expandedItems: {
                type: 'Readonly<Ref<readonly unknown[]>>',
                description: 'Readonly ref of the currently expanded items',
              },
            },
          },
          selection: {
            type: 'object',
            description: 'Object containing selection state methods and selectedItems ref',
            properties: {
              add: {
                type: '(item: Item) => void',
                description: 'Adds an item to the selected items',
              },
              remove: {
                type: '(item: Item) => void',
                description: 'Removes an item from the selected items',
              },
              set: {
                type: '(items: readonly Item[]) => void',
                description: 'Sets the selected items to the provided items',
              },
              setAll: {
                type: '() => void',
                description: 'Sets the selected items to all items',
              },
              clear: {
                type: '() => void',
                description: 'Clears all selected items',
              },
              has: {
                type: '(item: Item) => boolean',
                description: 'Checks if an item is in the selected items',
              },
              get: {
                type: '(item: Item) => unknown',
                description: 'Gets the item from the items prop, using the primary key if provided',
              },
              getFromPrimaryKey: {
                type: '(primaryKey: unknown) => unknown',
                description: 'Gets the item from the internal "computed items" representation when using the primary key. This is used to get the object reference of the item from the items when using the primary key, since the items are stored as the primary key value rather than the item itself. If no primaryKey is used, it will return undefined',
              },
              resolvedItems: {
                type: 'ComputedRef<readonly unknown[]>',
                description: 'A computed array of items resolved from their primary key values against the table\'s internal computed dataset. When a primaryKey is configured, selection mechanisms may store only the primary key values. This property provides the corresponding full item objects by resolving those keys against the current internal items representation. If no primaryKey is used, this will mirror the selectedItems array. Note: Only items currently present in the internal computed dataset can be resolved. Keys that do not match an available item will be ignored',
              },
              handleRowSelection: {
                type: '(obj: {item: Item; index: number; shiftClicked?: boolean; ctrlClicked?: boolean; metaClicked?: boolean}) => void',
                description: 'Handles row selection based on selection mode and modifier keys',
              },
              isActivated: {
                type: 'ComputedRef<boolean>',
                description: 'Whether the selection tracker is activated (has any selected items)',
              },
              selectedItems: {
                type: 'Readonly<Ref<readonly unknown[]>>',
                description: 'Readonly ref of the currently selected items',
              },
            },
          },
          items: {
            type: 'ComputedRef<unknown[]>',
            description: 'Computed ref of the table items',
          },
          displayItems: {
            type: 'ComputedRef<unknown[]>',
            description:
              'Computed ref of the currently displayed table items after filtering and pagination',
          },
          getStringValue: {
            type: '(key: string, item: unknown) => string',
            description: 'Function to get the string value of an item field',
          },
          refresh: {
            type: '() => Promise<void>',
            description: 'Function to refresh the table data (calls the items provider if present)',
          },
        } satisfies ExposedRecord,
      },
      BTableLite: {
        props: {
          [defaultPropSectionSymbol]: BTableLite.props,
          'BTableSimple Props': BTableSimple.props,
        },
        emits: BTableLite.emits,
        slots: BTableLite.slots,
        exposed: {
          expansion: {
            type: 'object',
            description: 'Object containing expansion state methods and expandedItems ref',
            properties: {
              add: {
                type: '(item: Item) => void',
                description: 'Adds an item to the expanded items',
              },
              remove: {
                type: '(item: Item) => void',
                description: 'Removes an item from the expanded items',
              },
              set: {
                type: '(items: readonly Item[]) => void',
                description: 'Sets the expanded items to the provided items',
              },
              setAll: {
                type: '() => void',
                description: 'Sets the expanded items to all items',
              },
              clear: {
                type: '() => void',
                description: 'Clears all expanded items',
              },
              has: {
                type: '(item: Item) => boolean',
                description: 'Checks if an item is in the expanded items',
              },
              get: {
                type: '(item: Item) => unknown',
                description: 'Gets the item from the items prop, using the primary key if provided',
              },
              getFromPrimaryKey: {
                type: '(primaryKey: unknown) => unknown',
                description: 'Gets the item from the internal "computed items" representation when using the primary key. This is used to get the object reference of the item from the items when using the primary key, since the items are stored as the primary key value rather than the item itself. If no primaryKey is used, it will return undefined',
              },
              resolvedItems: {
                type: 'ComputedRef<readonly unknown[]>',
                description: 'A computed array of items resolved from their primary key values against the table\'s internal computed dataset. When a primaryKey is configured, expansion mechanisms may store only the primary key values. This property provides the corresponding full item objects by resolving those keys against the current internal items representation. If no primaryKey is used, this will mirror the expandedItems array. Note: Only items currently present in the internal computed dataset can be resolved. Keys that do not match an available item will be ignored',
              },
              toggle: {
                type: '(item: Item) => void',
                description: 'Toggles the expansion state for the given item',
              },
              isActivated: {
                type: 'ComputedRef<boolean>',
                description: 'Whether the expansion tracker is activated (has any expanded items)',
              },
              expandedItems: {
                type: 'Readonly<Ref<readonly unknown[]>>',
                description: 'Readonly ref of the currently expanded items',
              },
            },
          },
        } satisfies ExposedRecord,
      },
      BTableSimple: {
        props: BTableSimple.props,
        slots: BTableSimple.slots,
      },
      BTbody: {
        styleSpec: {kind: StyleKind.Tag, value: 'tbody'},
        props: pick(buildCommonProps(), ['variant']) satisfies PropRecord<keyof BTbodyProps>,
        slots: {
          default: {
            description: 'Content to place in the tbody',
          },
        } satisfies SlotRecord<keyof BTbodySlots>,
      },
      BTd: {
        styleSpec: {kind: StyleKind.Tag, value: 'td'},
        props: {
          ...pick(buildCommonProps(), ['variant']),
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
        } satisfies PropRecord<keyof BTdProps>,
        slots: {
          default: {
            description: 'Content to place in the td',
          },
        } satisfies SlotRecord<keyof BTdSlots>,
      },
      BTfoot: {
        styleSpec: {kind: StyleKind.Tag, value: 'tfoot'},
        props: pick(buildCommonProps(), ['variant']) satisfies PropRecord<keyof BTfootProps>,
        slots: {
          default: {
            description: 'Content to place in the tfoot',
          },
        } satisfies SlotRecord<keyof BTfootSlots>,
      },
      BTh: {
        styleSpec: {kind: StyleKind.Tag, value: 'th'},
        props: {
          ...pick(buildCommonProps(), ['variant']),
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
        } satisfies PropRecord<keyof BThProps>,
        slots: {
          default: {
            description: 'Content to place in the th',
          },
        } satisfies SlotRecord<keyof BThSlots>,
      },
      BThead: {
        styleSpec: {kind: StyleKind.Tag, value: 'thead'},
        props: {
          variant: {
            type: 'ColorVariant',
            default: null,
          },
        } satisfies PropRecord<keyof BTheadProps>,
        emits: {},
        slots: {
          default: {
            description: '',
            scope: {},
          },
        } satisfies SlotRecord<keyof BTheadSlots>,
      },
      BTr: {
        styleSpec: {kind: StyleKind.Tag, value: 'tr'},
        props: {
          variant: {
            type: 'ColorVariant',
            default: null,
          },
        } satisfies PropRecord<keyof BTrProps>,
        emits: {},
        slots: {
          default: {
            description: '',
            scope: {},
          },
        } satisfies SlotRecord<keyof BTrSlots>,
      },
    }
  },
}
