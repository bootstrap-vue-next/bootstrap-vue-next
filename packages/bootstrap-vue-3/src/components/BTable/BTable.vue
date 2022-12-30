<template>
  <b-table-simple v-bind="containerAttrs">
    <!-- <table :class="classes"> -->
    <thead>
      <slot v-if="$slots['thead-top']" name="thead-top" />
      <tr>
        <th
          v-if="addSelectableCell"
          class="b-table-selection-column"
          :class="{
            'b-table-sticky-column': stickySelectBoolean,
          }"
        >
          <slot name="select-head">
            {{ typeof selectHead === 'boolean' ? 'Selected' : selectHead }}
          </slot>
        </th>
        <th
          v-for="field in computedFields"
          :key="field.key"
          scope="col"
          :class="getFieldColumnClasses(field)"
          :title="field.headerTitle"
          :abbr="field.headerAbbr"
          :style="field.thStyle"
          v-bind="field.thAttr"
          @click="headerClicked(field, $event)"
        >
          <div class="d-inline-flex flex-nowrap align-items-center gap-1">
            <slot
              name="sort-icon"
              :field="field"
              :sort-by="sortBy"
              :selected="field.key === sortBy"
              :is-desc="sortDescBoolean"
              :direction="sortDescBoolean ? 'desc' : 'asc'"
            >
              <span
                v-if="isSortable && field.sortable"
                class="b-table-sort-icon"
                :class="{
                  sorted: field.key === sortBy,
                  [`sorted-${sortDescBoolean ? 'desc' : 'asc'}`]: field.key === sortBy,
                }"
              />
            </slot>
            <div>
              <slot
                v-if="$slots['head(' + field.key + ')'] || $slots['head()']"
                :name="$slots['head(' + field.key + ')'] ? 'head(' + field.key + ')' : 'head()'"
                :label="field.label"
              />
              <template v-else>{{ getFieldHeadLabel(field) }}</template>
            </div>
          </div>
        </th>
      </tr>
      <tr v-if="$slots['thead-sub']">
        <td
          v-for="field in computedFields"
          :key="field.key"
          scope="col"
          :class="[field.class, field.thClass, field.variant ? `table-${field.variant}` : '']"
        >
          <slot
            v-if="$slots['thead-sub']"
            name="thead-sub"
            :items="computedFields"
            v-bind="field"
          />
          <template v-else>{{ field.label }}</template>
        </td>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item, itemIndex) in computedItems" :key="itemIndex">
        <tr
          :class="getRowClasses(item)"
          @click="!filterEvent($event) && onRowClick(item, itemIndex, $event)"
          @dblclick="!filterEvent($event) && onRowDblClick(item, itemIndex, $event)"
          @mouseenter="!filterEvent($event) && onRowMouseEnter(item, itemIndex, $event)"
          @mouseleave="!filterEvent($event) && onRowMouseLeave(item, itemIndex, $event)"
        >
          <td
            v-if="addSelectableCell"
            class="b-table-selection-column"
            :class="{
              'b-table-sticky-column': stickySelectBoolean,
            }"
          >
            <slot name="select-cell">
              <span :class="selectedItems.has(item) ? 'text-primary' : ''">🗹</span>
            </slot>
          </td>
          <td
            v-for="field in computedFields"
            :key="field.key"
            v-bind="field.tdAttr"
            :class="getFieldRowClasses(field, item)"
          >
            <label v-if="stacked && labelStackedBoolean" class="b-table-stacked-label">{{
              getFieldHeadLabel(field)
            }}</label>
            <slot
              v-if="$slots['cell(' + field.key + ')'] || $slots['cell()']"
              :name="$slots['cell(' + field.key + ')'] ? 'cell(' + field.key + ')' : 'cell()'"
              :value="item[field.key]"
              :index="itemIndex"
              :item="item"
              :field="field"
              :items="items"
              :toggle-details="() => toggleRowDetails(item)"
              :details-showing="item._showDetails"
            />
            <template v-else>{{ itemHelper.formatItem(item, field) }}</template>
          </td>
        </tr>

        <tr v-if="item._showDetails === true && $slots['row-details']" :class="getRowClasses(item)">
          <td :colspan="computedFieldsTotal">
            <slot name="row-details" :item="item" :toggle-details="() => toggleRowDetails(item)" />
          </td>
        </tr>
      </template>
      <tr
        v-if="internalBusyFlag"
        class="b-table-busy-slot"
        :class="{'b-table-static-busy': computedItems.length == 0}"
      >
        <td :colspan="computedFieldsTotal">
          <slot name="table-busy">
            <div class="d-flex align-items-center justify-content-center gap-2">
              <b-spinner class="align-middle" />
              <strong>Loading...</strong>
            </div>
          </slot>
        </td>
      </tr>
      <tr v-if="showEmptyBoolean && computedItems.length === 0" class="b-table-empty-slot">
        <td :colspan="computedFieldsTotal">
          <slot name="empty" :items="computedItems" :filtered="isFilterableTable">
            {{ isFilterableTable ? emptyFilteredText : emptyText }}
          </slot>
        </td>
      </tr>
    </tbody>
    <tfoot v-if="footCloneBoolean">
      <tr>
        <th
          v-for="field in computedFields"
          :key="field.key"
          v-bind="field.thAttr"
          scope="col"
          :class="[field.class, field.thClass, field.variant ? `table-${field.variant}` : '']"
          :title="field.headerTitle"
          :abbr="field.headerAbbr"
          :style="field.thStyle"
          @click="headerClicked(field, $event, true)"
        >
          {{ field.label }}
        </th>
      </tr>
    </tfoot>
    <tfoot v-else-if="$slots['custom-foot']">
      <slot
        name="custom-foot"
        :fields="computedFields"
        :items="items"
        :columns="computedFields?.length"
      />
    </tfoot>
    <caption v-if="$slots['table-caption']">
      <slot name="table-caption" />
    </caption>
    <caption v-else-if="caption">
      {{
        caption
      }}
    </caption>
    <!-- </table> -->
  </b-table-simple>
</template>

<script setup lang="ts">
// import type {Breakpoint} from '../../types'
import {computed, onMounted, ref, toRef, useSlots, watch} from 'vue'
import {useBooleanish} from '../../composables'
import {cloneDeepAsync} from '../../utils/object'
import {titleCase} from '../../utils/stringUtils'
import BSpinner from '../BSpinner.vue'

import type {
  Booleanish,
  ColorVariant,
  TableField,
  TableFieldObject,
  TableItem,
  VerticalAlign,
} from '../../types'
import type {BTableProvider, BTableSortCompare} from '../../types/components'
import BTableSimple from './BTableSimple.vue'
import {filterEvent} from './helpers/filter-event'
import useItemHelper from './itemHelper'

type NoProviderTypes = 'paging' | 'sorting' | 'filtering'

interface BTableProps {
  align?: VerticalAlign
  caption?: string
  captionTop?: Booleanish
  borderless?: Booleanish
  bordered?: Booleanish
  borderVariant?: ColorVariant
  dark?: Booleanish
  fields?: Array<TableField>
  footClone?: Booleanish
  hover?: Booleanish
  items?: Array<TableItem>
  provider?: BTableProvider
  sortCompare?: BTableSortCompare
  noProvider?: Array<NoProviderTypes>
  noProviderPaging?: Booleanish
  noProviderSorting?: Booleanish
  noProviderFiltering?: Booleanish
  responsive?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  small?: Booleanish
  striped?: Booleanish
  stacked?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' // boolean | Breakpoint
  labelStacked?: boolean
  variant?: ColorVariant
  sortBy?: string
  sortDesc?: Booleanish
  sortInternal?: Booleanish
  selectable?: Booleanish
  stickySelect?: Booleanish
  selectHead?: boolean | string
  selectMode?: 'multi' | 'single' | 'range'
  selectionVariant?: ColorVariant
  stickyHeader?: Booleanish
  busy?: Booleanish
  showEmpty?: Booleanish
  perPage?: number
  currentPage?: number
  filter?: string
  filterable?: string[]
  emptyText?: string
  emptyFilteredText?: string
}

const props = withDefaults(defineProps<BTableProps>(), {
  captionTop: false,
  borderless: false,
  bordered: false,
  dark: false,
  fields: () => [],
  footClone: false,
  hover: false,
  items: () => [],
  responsive: false,
  small: false,
  striped: false,
  labelStacked: false,
  stacked: false,
  sortDesc: false,
  sortInternal: true,
  selectable: false,
  stickySelect: false,
  selectHead: true,
  selectMode: 'single',
  selectionVariant: 'primary',
  stickyHeader: false,
  busy: false,
  showEmpty: false,
  currentPage: 1,
  emptyText: 'There are no records to show',
  emptyFilteredText: 'There are no records matching your request',
})

interface BTableEmits {
  (
    e: 'headClicked',
    ...value: Parameters<
      (key: TableFieldObject['key'], field: TableField, event: MouseEvent, isFooter: boolean) => any
    >
  ): void
  (
    e: 'rowClicked',
    ...value: Parameters<(item: TableItem, index: number, event: MouseEvent) => any>
  ): void
  (
    e: 'rowDblClicked',
    ...value: Parameters<(item: TableItem, index: number, event: MouseEvent) => any>
  ): void
  (
    e: 'rowHovered',
    ...value: Parameters<(item: TableItem, index: number, event: MouseEvent) => any>
  ): void
  (
    e: 'rowUnhovered',
    ...value: Parameters<(item: TableItem, index: number, event: MouseEvent) => any>
  ): void
  (e: 'rowSelected', value: TableItem): void
  (e: 'rowUnselected', value: TableItem): void
  (e: 'selection', value: TableItem[]): void
  (e: 'update:busy', value: boolean): void
  (e: 'update:sortBy', value: string): void
  (e: 'update:sortDesc', value: boolean): void
  (e: 'sorted', ...value: Parameters<(sortBy: string, isDesc: boolean) => any>): void
  (e: 'filtered', value: TableItem[]): void
}

const emit = defineEmits<BTableEmits>()
const slots = useSlots()

const itemHelper = useItemHelper()

const footCloneBoolean = useBooleanish(toRef(props, 'footClone'))
const sortDescBoolean = useBooleanish(toRef(props, 'sortDesc'))
const sortInternalBoolean = useBooleanish(toRef(props, 'sortInternal'))
const selectableBoolean = useBooleanish(toRef(props, 'selectable'))
const stickySelectBoolean = useBooleanish(toRef(props, 'stickySelect'))
const labelStackedBoolean = useBooleanish(toRef(props, 'labelStacked'))
const busyBoolean = useBooleanish(toRef(props, 'busy'))
const showEmptyBoolean = useBooleanish(toRef(props, 'showEmpty'))
const noProviderPagingBoolean = useBooleanish(toRef(props, 'noProviderPaging'))
const noProviderSortingBoolean = useBooleanish(toRef(props, 'noProviderSorting'))
const noProviderFilteringBoolean = useBooleanish(toRef(props, 'noProviderFiltering'))

const internalBusyFlag = ref(busyBoolean.value)
itemHelper.filterEvent.value = async (items) => {
  if (usesProvider.value) {
    await callItemsProvider()
    return
  }
  const clone = await cloneDeepAsync(items)
  emit('filtered', clone)
}

const selectedItems = ref<Set<TableItem>>(new Set([]))
const isSelecting = computed(() => selectedItems.value.size > 0)

const tableClasses = computed(() => ({
  [`align-${props.align}`]: props.align !== undefined,
  'b-table-selectable': selectableBoolean.value,
  [`b-table-select-${props.selectMode}`]: selectableBoolean.value,
  'b-table-selecting user-select-none': selectableBoolean.value && isSelecting.value,
  'b-table-busy': internalBusyFlag.value,
  'b-table-sortable': isSortable.value,
  'b-table-sort-desc': isSortable.value && sortDescBoolean.value === true,
  'b-table-sort-asc': isSortable.value && sortDescBoolean.value === false,
}))

const containerAttrs = computed(() => ({
  bordered: props.bordered,
  borderless: props.borderless,
  borderVariant: props.borderVariant,
  captionTop: props.captionTop,
  dark: props.dark,
  hover: props.hover,
  responsive: props.responsive,
  striped: props.striped,
  stacked: props.stacked,
  small: props.small,
  tableClass: tableClasses.value,
  tableVariant: props.variant,
  stickyHeader: props.stickyHeader,
}))

const computedFields = computed(() => itemHelper.normaliseFields(props.fields, props.items))
const computedFieldsTotal = computed(
  () => computedFields.value.length + (selectableBoolean.value ? 1 : 0)
)

const isFilterableTable = computed(() => props.filter !== undefined && props.filter !== '')
const usesProvider = computed(() => props.provider !== undefined)

const addSelectableCell = computed(
  () => selectableBoolean.value && (!!props.selectHead || slots.selectHead !== undefined)
)

const isSortable = computed(
  () =>
    props.fields.filter((field) => (typeof field === 'string' ? false : field.sortable)).length > 0
)

const requireItemsMapping = computed(() => isSortable.value && sortInternalBoolean.value === true)
const computedItems = computed(() => {
  const items = usesProvider.value
    ? itemHelper.internalItems.value
    : requireItemsMapping.value
    ? itemHelper.mapItems(props.fields, props.items, props, {
        isSortable,
        isFilterableTable,
        sortDescBoolean,
      })
    : props.items

  if (props.perPage !== undefined) {
    const startIndex = (props.currentPage - 1) * props.perPage
    return items.splice(startIndex, props.perPage)
  }
  return items
})

const getFieldHeadLabel = (field: TableField) => {
  if (typeof field === 'string') return titleCase(field)
  if (field.label !== undefined) return field.label
  if (typeof field.key === 'string') return titleCase(field.key)
  return field.key
}

const headerClicked = (field: TableField, event: MouseEvent, isFooter = false) => {
  const fieldKey = typeof field === 'string' ? field : field.key
  emit('headClicked', fieldKey, field, event, isFooter)

  handleFieldSorting(field)
}

const onRowClick = (row: TableItem, index: number, e: MouseEvent) => {
  emit('rowClicked', row, index, e)

  handleRowSelection(row, index, e.shiftKey)
}
const onRowDblClick = (row: TableItem, index: number, e: MouseEvent) =>
  emit('rowDblClicked', row, index, e)

const onRowMouseEnter = (row: TableItem, index: number, e: MouseEvent) =>
  emit('rowHovered', row, index, e)

const onRowMouseLeave = (row: TableItem, index: number, e: MouseEvent) =>
  emit('rowUnhovered', row, index, e)

const handleFieldSorting = (field: TableField) => {
  if (!isSortable.value) return

  const fieldKey = typeof field === 'string' ? field : field.key
  const fieldSortable = typeof field === 'string' ? false : field.sortable
  if (isSortable.value === true && fieldSortable === true) {
    const sortDesc = !sortDescBoolean.value
    if (fieldKey !== props.sortBy) {
      emit('update:sortBy', fieldKey)
    }
    emit('update:sortDesc', sortDesc)
    emit('sorted', fieldKey, sortDesc)
  }
}

const notifySelectionEvent = () => {
  if (!selectableBoolean.value) return
  emit('selection', Array.from(selectedItems.value))
}

const handleRowSelection = (row: TableItem, index: number, shiftClicked = false) => {
  if (!selectableBoolean.value) return

  if (selectedItems.value.has(row)) {
    selectedItems.value.delete(row)
    emit('rowUnselected', row)
  } else {
    if (props.selectMode === 'single' && selectedItems.value.size > 0) {
      selectedItems.value.forEach((item) => emit('rowUnselected', item))
      selectedItems.value.clear()
    }

    if (props.selectMode === 'range' && selectedItems.value.size > 0 && shiftClicked) {
      const lastSelectedItem = Array.from(selectedItems.value).pop()
      const lastSelectedIndex = computedItems.value.findIndex((i) => i === lastSelectedItem)
      const selectStartIndex = Math.min(lastSelectedIndex, index)
      const selectEndIndex = Math.max(lastSelectedIndex, index)
      computedItems.value.slice(selectStartIndex, selectEndIndex + 1).forEach((item) => {
        if (!selectedItems.value.has(item)) {
          selectedItems.value.add(item)
          emit('rowSelected', item)
        }
      })
    } else {
      selectedItems.value.add(row)
      emit('rowSelected', row)
    }
  }

  notifySelectionEvent()
}

const callItemsProvider = async () => {
  if (!usesProvider.value || !props.provider || internalBusyFlag.value) return
  internalBusyFlag.value = true
  const context = new Proxy(
    {
      currentPage: props.currentPage,
      filter: props.filter,
      sortBy: props.sortBy,
      sortDesc: props.sortDesc,
      perPage: props.perPage,
    },
    {
      get(target: any, prop) {
        return prop in target ? target[prop] : undefined
      },
      set() {
        console.error('BTable provider context is a read-only object.')
        return true
      },
    }
  )
  const response = props.provider(context, itemHelper.updateInternalItems)
  if (response === undefined) return
  if (response instanceof Promise) {
    try {
      const items = await response
      if (!Array.isArray(items)) return
      const internalItems = await itemHelper.updateInternalItems(items)
      return internalItems
    } finally {
      if (internalBusyFlag.value) {
        internalBusyFlag.value = false
      }
    }
  }

  try {
    const internalItems = await itemHelper.updateInternalItems(response)
    return internalItems
  } finally {
    if (internalBusyFlag.value) {
      internalBusyFlag.value = false
    }
  }
}

const toggleRowDetails = (tr: TableItem) => {
  tr._showDetails = !tr._showDetails
}

const getFieldColumnClasses = (field: TableFieldObject) => [
  field.class,
  field.thClass,
  field.variant ? `table-${field.variant}` : undefined,
  {
    'b-table-sortable-column': isSortable.value && field.sortable,
    'b-table-sticky-column': field.stickyColumn,
  },
]

const getFieldRowClasses = (field: TableFieldObject, tr: TableItem) => [
  field.class,
  field.tdClass,
  field.variant ? `table-${field.variant}` : undefined,
  tr?._cellVariants && tr?._cellVariants[field.key]
    ? `table-${tr?._cellVariants[field.key]}`
    : undefined,
  {
    'b-table-sticky-column': field.stickyColumn,
  },
]

const getRowClasses = (item: TableItem) => [
  item._rowVariant ? `table-${item._rowVariant}` : null,
  item._rowVariant ? `table-${item._rowVariant}` : null,
  selectableBoolean.value && selectedItems.value.has(item)
    ? `selected table-${props.selectionVariant}`
    : null,
]

const selectAllRows = () => {
  if (!selectableBoolean.value) return
  const unselectableItems = selectedItems.value.size > 0 ? Array.from(selectedItems.value) : []
  selectedItems.value = new Set([...computedItems.value])
  selectedItems.value.forEach((item) => {
    if (unselectableItems.includes(item)) return
    emit('rowSelected', item)
  })
  notifySelectionEvent()
}

const clearSelected = () => {
  if (!selectableBoolean.value) return
  selectedItems.value.forEach((item) => {
    emit('rowUnselected', item)
  })
  selectedItems.value = new Set([])
  notifySelectionEvent()
}

const selectRow = (index: number) => {
  if (!selectableBoolean.value) return
  const item = computedItems.value[index]
  if (!item || selectedItems.value.has(item)) return
  selectedItems.value.add(item)
  emit('rowSelected', item)
  notifySelectionEvent()
}

const unselectRow = (index: number) => {
  if (!selectableBoolean.value) return
  const item = computedItems.value[index]
  if (!item || !selectedItems.value.has(item)) return
  selectedItems.value.delete(item)
  emit('rowUnselected', item)
  notifySelectionEvent()
}

const providerPropsWatch = async (prop: string, val: any, oldVal: any) => {
  if (val === oldVal) return

  //stop provide when paging
  const inNoProvider = (key: NoProviderTypes) => props.noProvider && props.noProvider.includes(key)
  const notifyFiltered = !['currentPage', 'perPage'].includes(prop)
  const noProvideWhenPaging =
    ['currentPage', 'perPage'].includes(prop) &&
    (inNoProvider('paging') || noProviderPagingBoolean.value === true)
  const noProvideWhenFiltering =
    ['filter'].includes(prop) &&
    (inNoProvider('filtering') || noProviderFilteringBoolean.value === true)
  const noProvideWhenSorting =
    ['sortBy', 'sortDesc'].includes(prop) &&
    (inNoProvider('sorting') || noProviderSortingBoolean.value === true)

  if (noProvideWhenPaging || noProvideWhenFiltering || noProvideWhenSorting) {
    return
  }

  await callItemsProvider()

  if (notifyFiltered) itemHelper.notifyFilteredItems()
}

watch(
  () => props.filter,
  (filter, oldFilter) => {
    if (filter === oldFilter || usesProvider.value) return
    if (!filter) {
      cloneDeepAsync(props.items).then((item) => emit('filtered', item))
    }
  }
)

watch(
  () => internalBusyFlag.value,
  () => internalBusyFlag.value !== busyBoolean.value && emit('update:busy', internalBusyFlag.value)
)
watch(
  () => busyBoolean.value,
  () => internalBusyFlag.value !== busyBoolean.value && (internalBusyFlag.value = busyBoolean.value)
)
watch(
  () => props.filter,
  (val, oldVal) => providerPropsWatch('filter', val, oldVal)
)
watch(
  () => props.currentPage,
  (val, oldVal) => providerPropsWatch('currentPage', val, oldVal)
)
watch(
  () => props.perPage,
  (val, oldVal) => providerPropsWatch('perPage', val, oldVal)
)
watch(
  () => props.sortBy,
  (val, oldVal) => providerPropsWatch('sortBy', val, oldVal)
)
watch(
  () => props.sortDesc,
  (val, oldVal) => providerPropsWatch('sortDesc', val, oldVal)
)

onMounted(() => {
  if (usesProvider.value) {
    callItemsProvider()
  }
})

defineExpose({
  selectAllRows,
  clearSelected,
  selectRow,
  unselectRow,
})
</script>
