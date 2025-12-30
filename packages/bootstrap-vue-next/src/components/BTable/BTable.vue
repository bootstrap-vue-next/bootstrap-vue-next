<template>
  <!-- eslint-disable prettier/prettier -->
  <BTableLite v-bind="computedLiteProps">
    <template v-if="slots['table-colgroup']" #table-colgroup="scope">
      <slot name="table-colgroup" v-bind="scope" />
    </template>
    <!-- eslint-enable prettier/prettier -->
    <template v-if="slots['thead-top']" #thead-top="scope">
      <slot
        name="thead-top"
        v-bind="scope"
        :clear-selected="selectedItemsUtilities.exposed.clearSelected"
        :select-all-rows="selectedItemsUtilities.exposed.selectAllRows"
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
        :select-row="() => selectedItemsUtilities.exposed.selectRow(scope.index)"
        :unselect-row="() => selectedItemsUtilities.exposed.unselectRow(scope.index)"
        :row-selected="selectedItemsUtilities.exposed.isRowSelected(scope.index)"
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
        :select-row="() => selectedItemsUtilities.exposed.selectRow(scope.index)"
        :unselect-row="() => selectedItemsUtilities.exposed.unselectRow(scope.index)"
        :row-selected="selectedItemsUtilities.exposed.isRowSelected(scope.index)"
      />
    </template>
    <template v-for="name in dynamicFootSlots" #[name]="scope">
      <slot
        :name
        v-bind="scope"
        :select-all-rows="selectedItemsUtilities.exposed.selectAllRows"
        :clear-selected="selectedItemsUtilities.exposed.clearSelected"
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
        :select-all-rows="selectedItemsUtilities.exposed.selectAllRows"
        :clear-selected="selectedItemsUtilities.exposed.clearSelected"
      >
        {{ getTableFieldHeadLabel(field) }}
      </slot>
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
import {computed, type Ref, toRef} from 'vue'
import BTableLite from './BTableLite.vue'
import BTd from './BTd.vue'
import BTr from './BTr.vue'
import {
  type TableField,
  type TableFieldRaw,
  type TableRowType,
  type TableStrictClassValue,
} from '../../types/TableTypes'
import {useDefaults} from '../../composables/useDefaults'
import type {BTableProps} from '../../types/ComponentProps'
import type {BTableEmits, BTableLiteEmits} from '../../types/ComponentEmits'
import {pick} from '../../utils/object'
import {btableLiteProps, btableSimpleProps, getTableFieldHeadLabel} from '../../utils/tableUtils'
import {useId} from '../../composables/useId'
import type {BTableSlots, CamelCase} from '../../types'
import {
  useTableKeyboardNavigationInjector,
  useTableMapper,
  useTableProvider,
  useTableSelectedItems,
  useTableSort,
} from '../../composables/useTableHelpers'

const _props = withDefaults(
  defineProps<Omit<BTableProps<Items>, 'sortBy' | 'busy' | 'selectedItems'>>(),
  {
    noSortableIcon: false,
    sortIconLeft: false,
    perPage: Number.POSITIVE_INFINITY,
    filter: undefined,
    filterFunction: undefined,
    mustSort: false,
    initialSortDirection: 'asc',
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
    sortCompare: undefined,
    debounce: 0,
    debounceMaxWait: Number.NaN,
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
const emit = defineEmits<BTableEmits<Items>>()
const slots = defineSlots<BTableSlots<Items>>()

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
const perPageNumber = useToNumber(() => props.perPage, {method: 'parseInt'})
const currentPageNumber = useToNumber(() => props.currentPage, {method: 'parseInt'})
const debounceNumber = useToNumber(() => props.debounce ?? 0, {nanToZero: true})
const debounceMaxWaitNumber = useToNumber(() => props.debounceMaxWait ?? Number.NaN)

const {isSortable, handleFieldSorting} = useTableSort({
  fields: () => props.fields,
  sortBy: sortByModel,
  events: {
    onSorted: (v) => {
      emit('sorted', v)
    },
  },
  initialSortDirection: () => props.initialSortDirection,
  mustSort: () => props.mustSort,
  multisort: () => props.multisort,
})
const {
  items: providerItems,
  usesProvider,
  callItemsProvider,
} = useTableProvider({
  events: {
    onFiltered: () => {
      emit('filtered', computedItems.value)
    },
  },
  busy: busyModel,
  provider: () => props.provider,
  debounce: {
    maxWait: debounceMaxWaitNumber,
    wait: debounceNumber,
  },
  currentPage: currentPageNumber,
  perPage: perPageNumber,
  filter: () => props.filter,
  noProvider: () => props.noProvider,
  noProviderFiltering: () => props.noProviderFiltering,
  noProviderPaging: () => props.noProviderPaging,
  noProviderSorting: () => props.noProviderSorting,
  sortBy: sortByModel,
})
const {
  items: computedItems,
  displayItems: computedDisplayItems,
  getStringValue,
  fields: computedFields,
  isFilterableTable,
} = useTableMapper({
  fields: () => props.fields,
  provider: {
    items: providerItems as Ref<Items[]>,
    noProviderFiltering: () => props.noProviderFiltering,
    noProviderPaging: () => props.noProviderPaging,
    noProviderSorting: () => props.noProviderSorting,
    usesProvider,
  },
  events: {
    onChange: (v) => {
      emit('change', v)
    },
  },
  items: () => props.items,
  pagination: {
    perPage: perPageNumber,
    currentPage: currentPageNumber,
    filter: {
      filter: () => props.filter,
      filterFunction: toRef(() => props.filterFunction),
      filterable: () => props.filterable,
    },
    sort: {
      iconLeft: () => props.sortIconLeft,
      isSortable,
      noLocalSorting: () => props.noLocalSorting,
      by: sortByModel,
      sortCompare: toRef(() => props.sortCompare),
    },
  },
  stackedProps: {
    stacked: () => props.stacked,
    labelStacked: () => props.labelStacked,
  },
})
const {
  isSelecting,
  handleRowSelection,
  utilities: selectedItemsUtilities,
} = useTableSelectedItems({
  selectable: () => props.selectable,
  primaryKey: () => props.primaryKey,
  selectedItems: selectedItemsModel,
  allItems: computedItems,
  selectMode: () => props.selectMode,
  events: {
    onRowSelected: (item) => {
      emit('row-selected', item)
    },
    onRowUnselected: (item) => {
      emit('row-unselected', item)
    },
  },
})
useTableKeyboardNavigationInjector({
  isSortable,
  selectable: () => props.selectable,
  noSelectOnClick: () => props.noSelectOnClick,
})

const tableClasses = computed(() => ({
  'b-table-busy': busyModel.value,
  'b-table-selectable': props.selectable,
  'user-select-none': props.selectable && !props.noSelectOnClick && isSelecting.value,
  'b-table-fixed': props.fixed,
  'b-table-no-border-collapse': props.noBorderCollapse,
  'b-table-no-sort-icon': props.noSortableIcon,
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
// Also the row should technically have aria-selected. Both things could probably just use a function with tbodyTrAttrs
// But functional tbodyTrAttrs are not supported yet
// Also the stuff for resolving functions could probably be made a util
const getRowClasses = (item: Items | null, type: TableRowType): TableStrictClassValue => [
  {
    [`selected table-${props.selectionVariant}`]:
      props.selectable && !!item && selectedItemsUtilities.has(item),
  },
  props.tbodyTrClass
    ? typeof props.tbodyTrClass === 'function'
      ? props.tbodyTrClass(item, type)
      : props.tbodyTrClass
    : null,
]

const boundBTableLiteEmits = {
  onHeadClicked: (fieldKey, field, event, isFooter = false) => {
    emit('head-clicked', fieldKey, field, event, isFooter)
    handleFieldSorting(field)
  },
  onRowClicked: (row, index, e) => {
    if (props.noSelectOnClick === false) {
      handleRowSelection(row, index, e.shiftKey, e.ctrlKey, e.metaKey)
    }
    emit('row-clicked', row, index, e)
  },
  onRowDblclicked: (...args) => emit('row-dblclicked', ...args),
  onRowContextmenu: (...args) => emit('row-contextmenu', ...args),
  onRowHovered: (...args) => emit('row-hovered', ...args),
  onRowUnhovered: (...args) => emit('row-unhovered', ...args),
  onRowMiddleClicked: (...args) => emit('row-middle-clicked', ...args),
} as const satisfies {
  [K in keyof BTableLiteEmits<Items> as CamelCase<`on-${K & string}`>]: (
    ...args: BTableLiteEmits<Items>[K]
  ) => void
}
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
  ...boundBTableLiteEmits,
}))

const emptySlotScope = computed(() => ({
  emptyFilteredText: props.emptyFilteredText,
  emptyText: props.emptyText,
  fields: computedFields.value,
  items: computedItems.value,
}))

defineExpose({
  // The row selection methods are really for compat. Users should probably use the v-model though
  ...selectedItemsUtilities.exposed,
  items: computedItems,
  displayItems: computedDisplayItems,
  getStringValue,
  refresh: callItemsProvider,
})
</script>
