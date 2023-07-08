<template>
  <BTableSimple v-bind="containerAttrs">
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
                :column="field.key"
                :field="field"
                :is-foot="false"
                :select-all-rows="selectAllRows"
                :clear-selected="clearSelected"
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
      <template v-for="(item, itemIndex) in computedDisplayItems" :key="itemIndex">
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
            <template v-else>{{ renderItem(item, field) }}</template>
          </td>
        </tr>

        <tr v-if="item._showDetails === true && $slots['row-details']" :class="getRowClasses(item)">
          <td :colspan="computedFieldsTotal">
            <slot name="row-details" :item="item" :toggle-details="() => toggleRowDetails(item)" />
          </td>
        </tr>
      </template>
      <tr
        v-if="busyBoolean"
        class="b-table-busy-slot"
        :class="{'b-table-static-busy': computedItems.length === 0}"
      >
        <td :colspan="computedFieldsTotal">
          <slot name="table-busy">
            <div class="d-flex align-items-center justify-content-center gap-2">
              <BSpinner class="align-middle" />
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
  </BTableSimple>
</template>

<script setup lang="ts">
// import type {Breakpoint} from '../../types'
import {computed, onMounted, ref, useSlots, watch} from 'vue'
import {useBooleanish} from '../../composables'
import {isObject, startCase, titleCase} from '../../utils'
import BSpinner from '../BSpinner.vue'
import type {TableField, TableFieldObject, TableItem} from '../../types'
import type {BTableProps} from './table'
import BTableSimple from './BTableSimple.vue'
import {filterEvent} from './helpers/filter-event'
import {useVModel} from '@vueuse/core'
import {renderItem, useTableItems} from './table-items'

type NoProviderTypes = 'paging' | 'sorting' | 'filtering'

const props = withDefaults(defineProps<BTableProps>(), {
  perPage: undefined,
  sortBy: undefined,
  variant: undefined,
  borderVariant: undefined,
  caption: undefined,
  align: undefined,
  filter: undefined,
  filterable: undefined,
  provider: undefined,
  sortCompare: undefined,
  noProvider: undefined,
  noProviderPaging: false,
  noProviderSorting: false,
  noProviderFiltering: false,
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

const emit = defineEmits<{
  'headClicked': [
    key: TableFieldObject['key'],
    field: TableField,
    event: MouseEvent,
    isFooter: boolean
  ]
  'rowClicked': [item: TableItem, index: number, event: MouseEvent]
  'rowDblClicked': [item: TableItem, index: number, event: MouseEvent]
  'rowHovered': [item: TableItem, index: number, event: MouseEvent]
  'rowUnhovered': [item: TableItem, index: number, event: MouseEvent]
  'rowSelected': [value: TableItem]
  'rowUnselected': [value: TableItem]
  'selection': [value: TableItem[]]
  'update:busy': [value: boolean]
  'update:sortBy': [value: string]
  'update:sortDesc': [value: boolean]
  'sorted': [sortBy: string, isDesc: boolean]
  'filtered': [value: TableItem[]]
}>()

const sortByModel = useVModel(props, 'sortBy', emit)
const busyModel = useVModel(props, 'busy', emit, {passive: true})
const sortDescModel = useVModel(props, 'sortDesc', emit, {passive: true})

const slots = useSlots()

const footCloneBoolean = useBooleanish(() => props.footClone)
const sortDescBoolean = useBooleanish(sortDescModel)
const sortInternalBoolean = useBooleanish(() => props.sortInternal)
const selectableBoolean = useBooleanish(() => props.selectable)
const stickySelectBoolean = useBooleanish(() => props.stickySelect)
const labelStackedBoolean = useBooleanish(() => props.labelStacked)
const busyBoolean = useBooleanish(busyModel)
const showEmptyBoolean = useBooleanish(() => props.showEmpty)
const noProviderPagingBoolean = useBooleanish(() => props.noProviderPaging)
const noProviderSortingBoolean = useBooleanish(() => props.noProviderSorting)
const noProviderFilteringBoolean = useBooleanish(() => props.noProviderFiltering)

const isFilterableTable = computed(() => props.filter !== undefined && props.filter !== '')

const isSortable = computed(
  () =>
    props.fields.filter((field) => (typeof field === 'string' ? false : field.sortable)).length > 0
)
const usesProvider = computed(() => props.provider !== undefined)

const selectedItems = ref<Set<TableItem>>(new Set([]))
const isSelecting = computed(() => selectedItems.value.size > 0)

const tableClasses = computed(() => ({
  [`align-${props.align}`]: props.align !== undefined,
  'b-table-selectable': selectableBoolean.value,
  [`b-table-select-${props.selectMode}`]: selectableBoolean.value,
  'b-table-selecting user-select-none': selectableBoolean.value && isSelecting.value,
  'b-table-busy': busyBoolean.value,
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

const computedFields = computed(() => normaliseFields(props.fields, props.items))
const computedFieldsTotal = computed(
  () => computedFields.value.length + (selectableBoolean.value ? 1 : 0)
)

const addSelectableCell = computed(
  () => selectableBoolean.value && (!!props.selectHead || slots.selectHead !== undefined)
)

const {
  computedItems,
  computedDisplayItems,
  updateInternalItems,
  filteredHandler,
  notifyFilteredItems,
} = useTableItems(
  props,
  {
    footCloneBoolean,
    sortDescBoolean,
    sortInternalBoolean,
    selectableBoolean,
    stickySelectBoolean,
    labelStackedBoolean,
    busyBoolean,
    showEmptyBoolean,
    noProviderPagingBoolean,
    noProviderSortingBoolean,
    noProviderFilteringBoolean,
    isFilterableTable,
    isSortable,
  },
  usesProvider.value
)

filteredHandler.value = async (items) => {
  if (usesProvider.value) {
    await callItemsProvider()
    return
  }
  emit('filtered', items)
}

const getFieldHeadLabel = (field: TableField) => {
  if (typeof field === 'string') return titleCase(field)
  if (field.label !== undefined) return field.label
  if (typeof field.key === 'string') return titleCase(field.key)
  return field.key
}

const normaliseFields = (origFields: TableField[], items: TableItem[]): TableFieldObject[] => {
  const fields: TableFieldObject[] = []

  if (!origFields?.length && items?.length) {
    Object.keys(items[0]).forEach((k) => fields.push({key: k, label: startCase(k)}))
    return fields
  }

  if (Array.isArray(origFields)) {
    origFields.forEach((f) => {
      if (typeof f === 'string') {
        fields.push({key: f, label: startCase(f)})
      } else if (isObject(f) && f.key && typeof f.key === 'string') {
        fields.push({...f})
      }
      // todo handle Shortcut object (i.e. { 'foo_bar': 'This is Foo Bar' }
    })
    return fields
  }
  return fields
}

const headerClicked = (field: TableField, event: MouseEvent, isFooter = false) => {
  const fieldKey = typeof field === 'string' ? field : field.key
  emit('headClicked', fieldKey, field, event, isFooter)

  handleFieldSorting(field)
}

const onRowClick = (row: TableItem, index: number, e: MouseEvent) => {
  emit('rowClicked', row, index, e)

  handleRowSelection(row, index, e.shiftKey, e.ctrlKey, e.metaKey)
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
      sortByModel.value = fieldKey
    }
    sortDescModel.value = sortDesc
    emit('sorted', fieldKey, sortDesc)
  }
}

const notifySelectionEvent = () => {
  if (!selectableBoolean.value) return
  emit('selection', Array.from(selectedItems.value))
}

const handleRowSelection = (
  row: TableItem,
  index: number,
  shiftClicked = false,
  ctrlClicked = false,
  metaClicked = false
) => {
  if (!selectableBoolean.value) return

  if (shiftClicked && props.selectMode === 'range' && selectedItems.value.size > 0) {
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
  } else if (ctrlClicked || metaClicked) {
    if (selectedItems.value.has(row)) {
      selectedItems.value.delete(row)
      emit('rowUnselected', row)
    } else if (props.selectMode === 'range' || props.selectMode === 'multi') {
      selectedItems.value.add(row)
      emit('rowSelected', row)
    } else {
      selectedItems.value.forEach((item) => emit('rowUnselected', item))
      selectedItems.value.clear()
      selectedItems.value.add(row)
      emit('rowSelected', row)
    }
  } else {
    selectedItems.value.forEach((item) => emit('rowUnselected', item))
    selectedItems.value.clear()
    selectedItems.value.add(row)
    emit('rowSelected', row)
  }

  notifySelectionEvent()
}

const callItemsProvider = async () => {
  if (!usesProvider.value || !props.provider || busyBoolean.value) return
  busyModel.value = true
  const context = new Proxy(
    {
      currentPage: props.currentPage,
      filter: props.filter,
      sortBy: props.sortBy,
      sortDesc: props.sortDesc,
      perPage: props.perPage,
    },
    {
      get: (target: any, prop) => (prop in target ? target[prop] : undefined),
      set: () => {
        // eslint-disable-next-line no-console
        console.error('BTable provider context is a read-only object.')
        return true
      },
    }
  )
  const response = props.provider(context, updateInternalItems)
  if (response === undefined) return
  if (response instanceof Promise) {
    try {
      const items = await response
      if (!Array.isArray(items)) return
      const internalItems = await updateInternalItems(items)
      return internalItems
    } finally {
      if (busyBoolean.value) {
        busyModel.value = false
      }
    }
  }

  try {
    const internalItems = await updateInternalItems(response)
    return internalItems
  } finally {
    if (busyBoolean.value) {
      busyModel.value = false
    }
  }
}

const toggleRowDetails = (tr: TableItem) => {
  tr._showDetails = !tr._showDetails
}

const getFieldColumnClasses = (field: TableFieldObject) => [
  field.class,
  field.thClass,
  {
    [`table-${field.variant}`]: field.variant !== null,
    'b-table-sortable-column': isSortable.value && field.sortable,
    'b-table-sticky-column': field.stickyColumn,
  },
]

const getFieldRowClasses = (field: TableFieldObject, tr: TableItem) => [
  field.class,
  field.tdClass,
  tr?._cellVariants && tr?._cellVariants[field.key]
    ? `table-${tr?._cellVariants[field.key]}`
    : undefined,
  {
    [`table-${field.variant}`]: field.variant !== null,
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

  if (notifyFiltered) notifyFilteredItems()
}

watch(
  () => props.filter,
  (filter, oldFilter) => {
    if (filter === oldFilter || usesProvider.value) return
    if (!filter) {
      emit('filtered', computedItems.value)
    }
  }
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
  refresh: callItemsProvider,
})
</script>
