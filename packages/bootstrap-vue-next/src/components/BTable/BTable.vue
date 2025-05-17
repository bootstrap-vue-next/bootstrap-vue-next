<template>
  <!-- eslint-disable prettier/prettier -->
  <BTableLite
    v-bind="computedLiteProps"
    @head-clicked="onFieldHeadClick"
    @row-clicked="onRowClick"
    @row-dblclicked="
      (row: Items, index: number, e: MouseEvent) => {
        emit('row-dblclicked', row, index, e)
      }
    "
    @row-contextmenu="
      (row: Items, index: number, e: MouseEvent) => {
        emit('row-contextmenu', row, index, e)
      }
    "
    @row-hovered="
      (row: Items, index: number, e: MouseEvent) => {
        emit('row-hovered', row, index, e)
      }
    "
    @row-unhovered="
      (row: Items, index: number, e: MouseEvent) => {
        emit('row-unhovered', row, index, e)
      }
    "
    @row-middle-clicked="
      (row: Items, index: number, e: MouseEvent) => {
        emit('row-middle-clicked', row, index, e)
      }
    "
  >
    <template v-if="slots['table-colgroup']" #table-colgroup="scope">
      <slot name="table-colgroup" v-bind="scope" />
    </template>
    <!-- eslint-enable prettier/prettier -->
    <template v-if="slots['thead-top']" #thead-top="scope">
      <slot
        name="thead-top"
        v-bind="scope"
        :clear-selected="exposedSelectableUtilities.clearSelected"
        :select-all-rows="exposedSelectableUtilities.selectAllRows"
        :fields="computedFields"
      />
    </template>
    <template v-if="slots['thead-sub']" #thead-sub="scope">
      <slot name="thead-sub" v-bind="scope" :fields="computedFields" />
    </template>
    <template v-if="slots['top-row']" #top-row="scope">
      <slot name="top-row" v-bind="scope" :fields="computedFields" />
    </template>
    <template v-if="slots['row-details']" #row-details="scope">
      <slot
        name="row-details"
        v-bind="scope"
        :fields="computedFields"
        :select-row="(index = scope.index) => exposedSelectableUtilities.selectRow(index)"
        :unselect-row="(index = scope.index) => exposedSelectableUtilities.unselectRow(index)"
        :row-selected="exposedSelectableUtilities.isRowSelected(scope.index)"
      />
    </template>
    <template v-if="slots['bottom-row']" #bottom-row="scope">
      <slot name="bottom-row" v-bind="scope" :fields="computedFields" />
    </template>
    <template v-if="slots['custom-foot']" #custom-foot="scope">
      <slot name="custom-foot" v-bind="scope" :fields="computedFields" />
    </template>
    <template v-if="slots['table-caption']" #table-caption>
      <slot name="table-caption" />
    </template>
    <template v-for="name in dynamicCellSlots" #[name]="scope">
      <slot
        :name
        v-bind="scope"
        :select-row="(index = scope.index) => exposedSelectableUtilities.selectRow(index)"
        :unselect-row="(index = scope.index) => exposedSelectableUtilities.unselectRow(index)"
        :row-selected="exposedSelectableUtilities.isRowSelected(scope.index)"
      />
    </template>
    <template v-for="name in dynamicFootSlots" #[name]="scope">
      <slot
        :name
        v-bind="scope"
        :select-all-rows="exposedSelectableUtilities.selectAllRows"
        :clear-selected="exposedSelectableUtilities.clearSelected"
      />
    </template>

    <template
      v-for="field in computedFields"
      :key="field.key"
      #[`head(${String(field.key)})`]="scope"
    >
      <slot
        :name="
          slots[`head(${String(field.key)})`]
            ? (`head(${String(field.key)})` as 'head()')
            : 'head()'
        "
        v-bind="scope"
        :select-all-rows="exposedSelectableUtilities.selectAllRows"
        :clear-selected="exposedSelectableUtilities.clearSelected"
      >
        {{ getTableFieldHeadLabel(field) }}
      </slot>
      <template v-if="isSortable && !!scope.field.sortable && props.noSortableIcon === false">
        <slot
          v-if="sortByModel?.find((el) => el.key === scope.field.key)?.order === 'asc'"
          v-bind="scope"
          :name="
            slots[`sortAsc(${String(scope.field.key)})`]
              ? (`sortAsc(${String(scope.field.key)})` as 'sortAsc()')
              : 'sortAsc()'
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-arrow-up-short"
            viewBox="0 0 16 16"
            aria-hidden
          >
            <path
              fill-rule="evenodd"
              d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
            />
          </svg>
        </slot>
        <slot
          v-else-if="sortByModel?.find((el) => el.key === scope.field.key)?.order === 'desc'"
          v-bind="scope"
          :name="
            slots[`sortDesc(${String(scope.field.key)})`]
              ? (`sortDesc(${String(scope.field.key)})` as 'sortDesc()')
              : 'sortDesc()'
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-arrow-down-short"
            viewBox="0 0 16 16"
            aria-hidden
          >
            <path
              fill-rule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
            />
          </svg>
        </slot>
        <slot
          v-else
          v-bind="scope"
          :name="
            slots[`sortDefault(${String(scope.field.key)})`]
              ? (`sortDefault(${String(scope.field.key)})` as 'sortDefault()')
              : 'sortDefault()'
          "
        >
          <svg
            :style="{opacity: 0.4}"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-arrow-up-short"
            viewBox="0 0 16 16"
            aria-hidden
          >
            <path
              fill-rule="evenodd"
              d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
            />
          </svg>
        </slot>
      </template>
    </template>
    <template #custom-body="scope">
      <BTr
        v-if="busyModel && slots['table-busy']"
        class="b-table-busy-slot"
        :class="getBusyRowClasses"
      >
        <BTd :colspan="scope.fields.length">
          <slot name="table-busy" />
        </BTd>
      </BTr>

      <BTr
        v-else-if="props.showEmpty === true && computedItems.length === 0"
        class="b-table-empty-row"
      >
        <BTd :colspan="computedFields.length">
          <div role="alert" aria-live="polite">
            <div class="text-center my-2">
              <slot v-if="isFilterableTable" name="empty-filtered" v-bind="emptySlotScope">
                {{ props.emptyFilteredText }}
              </slot>
              <slot v-else name="empty" v-bind="emptySlotScope">
                {{ props.emptyText }}
              </slot>
            </div>
          </div>
        </BTd>
      </BTr>
    </template>
  </BTableLite>
</template>

<script setup lang="ts" generic="Items">
import {useToNumber} from '@vueuse/core'
import {computed, onMounted, type Ref, ref, watch} from 'vue'
import {formatItem} from '../../utils/formatItem'
import BTableLite from './BTableLite.vue'
import BTd from './BTd.vue'
import BTr from './BTr.vue'
import {
  type BTableSortBy,
  type BTableSortByOrder,
  isTableField,
  isTableItem,
  type NoProviderTypes,
  type TableField,
  type TableFieldFormatter,
  type TableFieldRaw,
  type TableItem,
  type TableRowEvent,
  type TableRowType,
  type TableStrictClassValue,
} from '../../types/TableTypes'
import {useDefaults} from '../../composables/useDefaults'
import type {BTableProps} from '../../types/ComponentProps'
import {deepEqual, get, pick, set} from '../../utils/object'
import {startCase} from '../../utils/stringUtils'
import type {LiteralUnion} from '../../types/LiteralUnion'
import {
  btableLiteProps,
  btableSimpleProps,
  getDataLabelAttr,
  getTableFieldHeadLabel,
} from '../../utils/tableUtils'
import {useId} from '../../composables/useId'

const _props = withDefaults(
  defineProps<Omit<BTableProps<Items>, 'sortBy' | 'busy' | 'selectedItems'>>(),
  {
    noSortableIcon: false,
    perPage: Number.POSITIVE_INFINITY,
    filter: undefined,
    filterFunction: undefined,
    mustSort: false,
    filterable: undefined,
    provider: undefined,
    noProvider: undefined,
    noProviderPaging: false,
    noProviderSorting: false,
    multisort: false,
    noProviderFiltering: false,
    noLocalSorting: false,
    noSelectOnClick: false,
    selectable: false,
    stickySelect: false,
    selectHead: true,
    selectMode: 'multi',
    selectionVariant: 'primary',
    busyLoadingText: 'Loading...',
    currentPage: 1,
    // BTableLite props
    items: () => [],
    fields: () => [],
    // All others use defaults
    caption: undefined,
    align: undefined,
    footClone: undefined,
    labelStacked: undefined,
    showEmpty: false,
    emptyText: 'There are no records to show',
    emptyFilteredText: 'There are no records matching your request',
    fieldColumnClass: undefined,
    tbodyTrClass: undefined,
    detailsTdClass: undefined,
    headVariant: undefined,
    headRowVariant: undefined,
    footRowVariant: undefined,
    footVariant: undefined,
    modelValue: undefined,
    primaryKey: undefined,
    tbodyClass: undefined,
    tfootClass: undefined,
    tfootTrClass: undefined,
    theadClass: undefined,
    theadTrClass: undefined,
    // End BTableLite props
    // BTableSimple props
    borderVariant: undefined,
    variant: undefined,
    bordered: undefined,
    borderless: undefined,
    captionTop: undefined,
    dark: undefined,
    hover: undefined,
    id: undefined,
    noBorderCollapse: undefined,
    outlined: undefined,
    fixed: undefined,
    responsive: undefined,
    stacked: undefined,
    striped: undefined,
    stripedColumns: undefined,
    small: undefined,
    stickyHeader: undefined,
    // End BTableSimple props
  }
)
const props = useDefaults(_props, 'BTable')

const emit = defineEmits<{
  'filtered': [value: Items[]]
  'head-clicked': [
    key: string,
    field: (typeof computedFields.value)[0],
    event: MouseEvent,
    isFooter: boolean,
  ]
  'row-clicked': TableRowEvent<Items>
  'row-dblclicked': TableRowEvent<Items>
  'row-contextmenu': TableRowEvent<Items>
  'row-hovered': TableRowEvent<Items>
  'row-unhovered': TableRowEvent<Items>
  'row-middle-clicked': TableRowEvent<Items>
  'row-selected': [value: Items]
  'row-unselected': [value: Items]
  'sorted': [value: BTableSortBy<Items>]
  'change': [value: Items[]]
}>()

type SortSlotScope = {
  label: string | undefined
  column: LiteralUnion<keyof Items>
  field: (typeof computedFields.value)[0]
  isFoot: false
}

const slots = defineSlots<{
  // BTableLite
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'table-colgroup'?: (props: {fields: typeof computedFields.value}) => any
  'thead-top'?: (props: {
    columns: number
    fields: typeof computedFields.value
    selectAllRows: () => void
    clearSelected: () => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
  [key: `head(${string})`]: (props: {
    label: string | undefined
    column: LiteralUnion<keyof Items>
    field: (typeof computedFields.value)[0]
    isFoot: false
    selectAllRows: () => void
    clearSelected: () => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
  'thead-sub'?: (
    props: {
      items: readonly Items[]
      fields: typeof computedFields.value
      field: (typeof computedFields.value)[0]
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'top-row'?: (props: {columns: number; fields: typeof computedFields.value}) => any
  [key: `cell(${string})`]: (props: {
    value: unknown
    unformatted: unknown
    index: number
    item: Items
    field: (typeof computedFields.value)[0]
    items: readonly Items[]
    toggleDetails: () => void
    detailsShowing: boolean
    rowSelected: boolean
    selectRow: (index?: number) => void
    unselectRow: (index?: number) => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
  'row-details'?: (props: {
    item: Items
    toggleDetails: () => void
    fields: typeof computedFields.value
    index: number
    rowSelected: boolean
    selectRow: (index?: number) => void
    unselectRow: (index?: number) => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'bottom-row'?: (props: {columns: number; fields: typeof computedFields.value}) => any

  [key: `foot(${string})`]: (props: {
    label: string | undefined
    column: LiteralUnion<keyof Items>
    field: (typeof computedFields.value)[0]
    isFoot: true
    selectAllRows: () => void
    clearSelected: () => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
  'custom-foot'?: (props: {
    fields: typeof computedFields.value
    items: readonly Items[]
    columns: number
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'table-caption'?: (props: Record<string, never>) => any

  // end btable slots

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: `sortAsc(${string})`]: (props: SortSlotScope) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: `sortDesc(${string})`]: (props: SortSlotScope) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: `sortDefault(${string})`]: (props: SortSlotScope) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'table-busy'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'empty-filtered'?: (props: typeof emptySlotScope.value) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'empty'?: (props: typeof emptySlotScope.value) => any
}>()

const dynamicCellSlots = computed(
  () => Object.keys(slots).filter((key) => key.startsWith('cell(')) as 'cell()'[]
)
const dynamicFootSlots = computed(
  () => Object.keys(slots).filter((key) => key.startsWith('foot(')) as 'foot()'[]
)

const sortByModel = defineModel<BTableProps<Items>['sortBy']>('sortBy', {
  default: undefined,
})
const busyModel = defineModel<Exclude<BTableProps<Items>['busy'], undefined>>('busy', {
  default: false,
})
const selectedItemsModel = defineModel<Exclude<BTableProps<Items>['selectedItems'], undefined>>(
  'selectedItems',
  {
    default: () => [],
  }
)

const computedId = useId(() => props.id)

const selectedItemsToSet = computed({
  get: () => new Set(selectedItemsModel.value),
  set: (val) => {
    selectedItemsModel.value = [...val]
  },
})

watch(selectedItemsToSet, (newValue, oldValue) => {
  Array.from(oldValue)
    .filter((item) => !newValue.has(item))
    .forEach((item) => {
      emit('row-unselected', item)
    })
  Array.from(newValue)
    .filter((item) => !oldValue.has(item))
    .forEach((item) => {
      emit('row-selected', item)
    })
})
/**
 * This is to avoid the issue of directly mutating the array structure and to properly trigger the computed setter.
 * The utils also conveniently emit the proper events after
 */
const selectedItemsSetUtilities = {
  add: (item: Items) => {
    const value = new Set(selectedItemsToSet.value)
    value.add(item)
    selectedItemsToSet.value = value
  },
  clear: () => {
    selectedItemsToSet.value.forEach((item) => {
      selectedItemsSetUtilities.delete(item)
    })
  },
  delete: (item: Items) => {
    const value = new Set(selectedItemsToSet.value)
    if (props.primaryKey) {
      const pkey: string = props.primaryKey
      selectedItemsModel.value.forEach((v, i) => {
        const selectedKey = get(v, pkey)
        const itemKey = get(item, pkey)

        if (!!selectedKey && !!itemKey && selectedKey === itemKey) {
          value.delete(selectedItemsModel.value[i])
        }
      })
    } else {
      value.delete(item)
    }
    selectedItemsToSet.value = value
  },
  set: (items: Items[]) => {
    selectedItemsToSet.value = new Set(items)
  },
  has: (item: Items) => {
    if (!props.primaryKey) return selectedItemsToSet.value.has(item)

    // Resolver for when we are using primary keys
    const pkey: string = props.primaryKey
    for (const selected of selectedItemsToSet.value) {
      const selectedKey = get(selected, pkey)
      const itemKey = get(item, pkey)

      if (!!selectedKey && !!itemKey && selectedKey === itemKey) return true
    }
    return false
  },
} as const

/**
 * Only stores data that is fetched when using the provider
 */
const internalItems: Ref<Items[]> = ref([])

const perPageNumber = useToNumber(() => props.perPage, {method: 'parseInt'})
const currentPageNumber = useToNumber(() => props.currentPage, {method: 'parseInt'})

const isFilterableTable = computed(() => !!props.filter)
const usesProvider = computed(() => props.provider !== undefined)
const isSelecting = computed(() => selectedItemsToSet.value.size > 0)

const isSortable = computed(
  () =>
    sortByModel.value !== undefined ||
    props.fields.some(
      (field) => typeof field === 'object' && field !== null && field.sortable === true
    )
)

const computedFields = computed<TableField<Items>[]>(() =>
  props.fields.map((el) => {
    if (!isTableField<Items>(el)) {
      const label = startCase(el as string)
      return {
        key: el as string,
        label,
        tdAttr: getDataLabelAttr(props, label),
      }
    }

    const value = sortByModel.value?.find((sb) => el.key === sb.key)
    const sortValue =
      isSortable.value === false
        ? undefined
        : value === undefined
          ? 'none'
          : value.order === 'desc'
            ? 'descending'
            : value.order === 'asc'
              ? 'ascending'
              : 'none'

    return {
      ...(el as TableField<Items>),
      thAttr: {
        'aria-sort': sortValue,
        ...el.thAttr,
      },
    }
  })
)

const tableClasses = computed(() => ({
  'b-table-busy': busyModel.value,
  'b-table-selectable': props.selectable,
  'user-select-none': props.selectable && isSelecting.value,
  'b-table-fixed': props.fixed,
  'b-table-no-border-collapse': props.noBorderCollapse,
}))

const getBusyRowClasses = computed(() => [
  props.tbodyTrClass
    ? typeof props.tbodyTrClass === 'function'
      ? props.tbodyTrClass(null, 'table-busy')
      : props.tbodyTrClass
    : null,
])
const getFieldColumnClasses = (field: TableField) => [
  {
    'b-table-sortable-column': isSortable.value && field.sortable,
  },
]
// TODO this class has issues if the table has a variant already applied
// Also the row should technically have aria-selected . Both things could probably just use a function with tbodyTrAttrs
// But functional tbodyTrAttrs are not supported yet
// Also the stuff for resolving functions could probably be made a util
const getRowClasses = (item: Items | null, type: TableRowType): TableStrictClassValue => [
  {
    [`selected table-${props.selectionVariant}`]:
      props.selectable && !!item && selectedItemsSetUtilities.has(item),
  },
  props.tbodyTrClass
    ? typeof props.tbodyTrClass === 'function'
      ? props.tbodyTrClass(item, type)
      : props.tbodyTrClass
    : null,
]

const getFormatter = (value: TableField<Items>): TableFieldFormatter<Items> | undefined =>
  typeof value.sortByFormatted === 'function' ? value.sortByFormatted : value.formatter

const getStringValue = (ob: Items, key: string): string => {
  if (!isTableItem(ob)) return String(ob)

  const sortField = computedFields.value.find((el) => {
    if (isTableField<Items>(el)) return el.key === key

    return false
  })
  const val = get(ob, key as keyof TableItem)
  if (isTableField<Items>(sortField) && !!sortField.sortByFormatted) {
    const formatter = getFormatter(sortField)
    if (formatter) {
      return String(formatItem(ob, String(sortField.key), formatter))
    }
  }
  return typeof val === 'object' && val !== null ? JSON.stringify(val) : (val?.toString() ?? '')
}

const computedItems = computed<Items[]>(() => {
  // "undefined" values are set by us, we do this so we dont wipe out the comparer
  const sortByItems = sortByModel.value?.filter((el) => !!el.order)

  const mapItem = (item: Items): Items => {
    if (
      typeof item === 'object' &&
      item !== null &&
      Object.keys(item).some((key) => key.includes('.'))
    ) {
      let newItem: Partial<Items> = {}
      for (const key in item) {
        if (key.includes('.')) {
          newItem = set(newItem, key, item[key])
        } else {
          newItem[key] = item[key]
        }
      }
      return newItem as Items // This should be an items at this point
    }
    return item
  }

  const filterItem = (item: Items): boolean => {
    if (!isTableItem(item)) return true

    return Object.entries(item).some(([key, val]) => {
      if (
        val === null ||
        val === undefined ||
        key[0] === '_' ||
        (!props.filterable?.includes(key) && !!props.filterable?.length)
      )
        return false

      if (props.filterFunction && typeof props.filterFunction === 'function') {
        return props.filterFunction(item, props.filter)
      }

      const realVal = (): string => {
        const filterField = computedFields.value.find((el) => {
          if (isTableField<Items>(el)) return el.key === key
          return false
        })
        if (isTableField<Items>(filterField) && !!filterField.filterByFormatted) {
          const formatter = getFormatter(filterField)
          if (formatter) {
            return String(formatter(val, String(filterField.key), item))
          }
        }
        return typeof val === 'object' ? JSON.stringify(Object.values(val)) : val.toString()
      }
      const itemValue: string = realVal()
      return itemValue.toLowerCase().includes(props.filter?.toLowerCase() ?? '')
    })
  }

  const mappedItems = (usesProvider.value ? internalItems.value : props.items).reduce(
    (acc, val) => {
      const item = mapItem(val)
      const shouldFilter =
        isFilterableTable.value && (!usesProvider.value || props.noProviderFiltering)

      if (!shouldFilter || filterItem(item)) acc.push(item)

      return acc
    },
    [] as Items[]
  )

  if (
    sortByItems?.length &&
    ((isSortable.value === true && !usesProvider.value && !props.noLocalSorting) ||
      (isSortable.value === true && usesProvider.value && props.noProviderSorting))
  ) {
    // Multi-sort
    return mappedItems.sort((a, b) => {
      for (let i = 0; i < sortByItems.length; i++) {
        const {key, comparer, order} = sortByItems[i]
        const comparison = comparer
          ? comparer(a, b, key)
          : getStringValue(a, key).localeCompare(getStringValue(b, key), undefined, {numeric: true})

        if (comparison !== 0) {
          return order === 'asc' ? comparison : -comparison
        }
      }
      return 0 // items are equal
    })
  }

  return mappedItems
})

const emptySlotScope = computed(() => ({
  emptyFilteredText: props.emptyFilteredText,
  emptyText: props.emptyText,
  fields: computedFields.value,
  items: computedItems.value,
}))

const computedDisplayItems = computed<Items[]>(() => {
  if (Number.isNaN(perPageNumber.value) || (usesProvider.value && !props.noProviderPaging)) {
    return computedItems.value
  }

  return computedItems.value.slice(
    (currentPageNumber.value - 1) * (perPageNumber.value || Number.POSITIVE_INFINITY),
    currentPageNumber.value * (perPageNumber.value || Number.POSITIVE_INFINITY)
  )
})

watch(computedDisplayItems, (v) => {
  emit('change', v)
})

const handleRowSelection = (
  row: Items,
  index: number,
  shiftClicked = false,
  ctrlClicked = false,
  metaClicked = false
) => {
  if (!props.selectable) return

  if (props.selectMode === 'single' || props.selectMode === 'multi') {
    // Do nothing when these items are held
    if (shiftClicked || ctrlClicked) return
    // Delete if item is in
    if (selectedItemsSetUtilities.has(row)) {
      selectedItemsSetUtilities.delete(row)
    } else {
      if (props.selectMode === 'single') {
        selectedItemsSetUtilities.set([row])
      } else {
        selectedItemsSetUtilities.add(row)
      }
    }
  } else {
    if (ctrlClicked || metaClicked) {
      // Delete if in the object
      if (selectedItemsSetUtilities.has(row)) {
        selectedItemsSetUtilities.delete(row)
        // Otherwise add. Functions similarly to 'multi' at this point
      } else {
        selectedItemsSetUtilities.add(row)
      }
      // This is where range is different, due to the difference in shift
    } else if (shiftClicked) {
      const lastSelectedItem = [...selectedItemsToSet.value].pop()
      const lastSelectedIndex = computedItems.value.findIndex((i) => i === lastSelectedItem)
      const selectStartIndex = Math.min(lastSelectedIndex, index)
      const selectEndIndex = Math.max(lastSelectedIndex, index)
      const items = computedItems.value.slice(selectStartIndex, selectEndIndex + 1)
      selectedItemsSetUtilities.set(items)
      // If nothing is being held, then we just behave like it's single mode
    } else {
      selectedItemsSetUtilities.set([row])
    }
  }
}

const onRowClick = (row: Items, index: number, e: MouseEvent) => {
  if (props.noSelectOnClick === false) {
    handleRowSelection(row, index, e.shiftKey, e.ctrlKey, e.metaKey)
  }
  emit('row-clicked', row, index, e)
}

const handleFieldSorting = (field: TableField<Items>) => {
  if (!isSortable.value) return

  const fieldKey = typeof field === 'object' && field !== null ? field.key : field
  const fieldSortable = typeof field === 'object' && field !== null ? field.sortable : false

  if (!(isSortable.value === true && fieldSortable === true)) return

  const resolveOrder = (val: BTableSortByOrder): BTableSortByOrder | undefined => {
    if (val === 'asc') return 'desc'
    if (val === undefined) return 'asc'
    if (
      props.mustSort === true ||
      (Array.isArray(props.mustSort) && props.mustSort.includes(fieldKey as string))
    )
      return 'asc'
    return undefined
  }

  const index = sortByModel.value?.findIndex((el) => el.key === fieldKey) ?? -1
  const originalValue = sortByModel.value?.[index]
  const updatedValue: BTableSortBy<Items> =
    // If value is new, we default to ascending
    // Otherwise we make a temp copy of the value
    index === -1 || !originalValue ? {key: fieldKey as string, order: 'asc'} : {...originalValue}

  /**
   * @returns the updated value to emit for sorted
   */
  const handleMultiSort = (): BTableSortBy<Items> => {
    const tmp = [...(sortByModel.value ?? [])]
    const val = updatedValue
    if (index === -1) {
      tmp.push(val)
    } else {
      val.order = resolveOrder(val.order)
      tmp.splice(index, 1, val)
    }
    sortByModel.value = tmp
    return val
  }

  /**
   * @returns the updated value to emit for sorted
   */
  const handleSingleSort = (): BTableSortBy<Items> => {
    const val = {
      ...updatedValue,
      order: index === -1 ? updatedValue.order : resolveOrder(updatedValue.order),
    }
    const tmp = (sortByModel.value || []).map<BTableSortBy<Items>>((e) => ({
      ...e,
      order: undefined,
    }))
    if (index === -1) {
      tmp.push(val)
    } else {
      tmp[index] = val
    }
    sortByModel.value = tmp
    return val
  }

  // Then emit the returned updated value
  emit('sorted', props.multisort === true ? handleMultiSort() : handleSingleSort())
}

const onFieldHeadClick = (
  fieldKey: string,
  field: TableField<Items>,
  event: Readonly<MouseEvent>,
  isFooter = false
) => {
  emit('head-clicked', fieldKey, field, event, isFooter)
  handleFieldSorting(field)
}

const callItemsProvider = async () => {
  if (!usesProvider.value || props.provider === undefined || busyModel.value) return
  busyModel.value = true
  const response = props.provider({
    currentPage: currentPageNumber.value,
    filter: props.filter,
    sortBy: sortByModel.value,
    perPage: perPageNumber.value,
  })
  try {
    const items = response instanceof Promise ? await response : response

    if (items === undefined) return
    internalItems.value = items
  } finally {
    // Potential race condition could occur if the user explicitly sets the busy value to a different value while the response promise is executing
    // which would have been the users choice.
    // eslint-disable-next-line require-atomic-updates
    busyModel.value = false
  }
}

const providerPropsWatch = async (prop: string, val: unknown, oldVal: unknown) => {
  if (deepEqual(val, oldVal)) return

  //stop provide when paging
  const inNoProvider = (key: NoProviderTypes) => props.noProvider?.includes(key) === true
  const noProvideWhenPaging =
    (prop === 'currentPage' || prop === 'perPage') &&
    (inNoProvider('paging') || props.noProviderPaging === true)
  const noProvideWhenFiltering =
    prop === 'filter' && (inNoProvider('filtering') || props.noProviderFiltering === true)
  const noProvideWhenSorting =
    (prop === 'sortBy' || prop === 'sortDesc') &&
    (inNoProvider('sorting') || props.noProviderSorting === true)

  if (noProvideWhenPaging || noProvideWhenFiltering || noProvideWhenSorting) return

  if (usesProvider.value === true) {
    await callItemsProvider()
  }

  if (!(prop === 'currentPage' || prop === 'perPage')) {
    emit('filtered', [...computedItems.value])
  }
}

watch(
  () => props.filter,
  (filter, oldFilter) => {
    providerPropsWatch('filter', filter, oldFilter)

    if (filter === oldFilter || usesProvider.value) return
    if (!filter) {
      emit('filtered', [...computedItems.value])
    }
  }
)
watch(currentPageNumber, (val, oldVal) => {
  providerPropsWatch('currentPage', val, oldVal)
})
watch(perPageNumber, (val, oldVal) => {
  providerPropsWatch('perPage', val, oldVal)
})
watch(
  sortByModel,
  (val, oldVal) => {
    providerPropsWatch('sortBy', val, oldVal)
  },
  {deep: true}
)

watch(
  () => props.provider,
  (newValue) => {
    // Reset the internal values if the provider stops getting used
    if (newValue === undefined) {
      internalItems.value = []
      return
    }
    // Otherwise we should refresh the table on such a change
    callItemsProvider()
  }
)

onMounted(callItemsProvider)

const exposedSelectableUtilities = {
  clearSelected: () => {
    if (!props.selectable) return
    selectedItemsSetUtilities.clear()
  },
  selectAllRows: () => {
    if (!props.selectable || props.selectMode === 'single') return
    selectedItemsToSet.value = new Set(computedItems.value)
  },
  selectRow: (index: number) => {
    if (!props.selectable) return
    const item = computedItems.value[index]
    if (!item || selectedItemsSetUtilities.has(item)) return
    if (props.selectMode === 'single') {
      selectedItemsSetUtilities.set([item])
    } else {
      selectedItemsSetUtilities.add(item)
    }
  },
  unselectRow: (index: number) => {
    if (!props.selectable) return
    const item = computedItems.value[index]
    if (!item || !selectedItemsSetUtilities.has(item)) return
    selectedItemsSetUtilities.delete(item)
  },
  isRowSelected: (index: number) => {
    if (!props.selectable) return false
    const item = computedItems.value[index]
    return selectedItemsSetUtilities.has(item)
  },
} as const

const computedLiteProps = computed(() => ({
  ...pick(props, [...btableLiteProps, ...btableSimpleProps]),
  tableAttrs: {
    ariaBusy: busyModel.value,
  },
  items: computedDisplayItems.value,
  fields: computedFields.value as TableFieldRaw<Items>[],
  tableClass: tableClasses.value,
  tbodyTrClass: getRowClasses,
  fieldColumnClass: getFieldColumnClasses,
  id: computedId.value,
}))

defineExpose({
  // The row selection methods are really for compat. Users should probably use the v-model though
  ...exposedSelectableUtilities,
  items: computedItems,
  displayItems: computedDisplayItems,
  getStringValue,
  refresh: callItemsProvider,
})
</script>
