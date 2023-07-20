<template>
  <BTableLite
    ref="liteTable"
    v-bind="props"
    v-model:busy="busyModel"
    :items="computedDisplayItems"
    :table-classes="tableClasses"
    :tbody-tr-class="getRowClasses"
    :field-column-classes="getFieldColumnClasses"
    :virtual-fields="selectableBoolean ? 1 : 0"
    v-on="$attrs"
    @head-clicked="onFieldHeadClick"
    @row-clicked="onRowClick"
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
    <template #field-prefix="scope">
      <slot
        name="sort-icon"
        :field="scope.field"
        :sort-by="sortByModel"
        :selected="scope.field.key === sortByModel"
        :is-desc="sortDescBoolean"
        :direction="sortDescBoolean ? 'desc' : 'asc'"
      >
        <span
          v-if="isSortable && scope.field.sortable"
          class="b-table-sort-icon"
          :class="{
            sorted: scope.field.key === sortByModel,
            [`sorted-${sortDescBoolean ? 'desc' : 'asc'}`]: scope.field.key === sortByModel,
          }"
        />
      </slot>
    </template>
    <template #thead-tr-prefix>
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
    </template>
    <template #tbody-tr-prefix="scope">
      <td
        v-if="addSelectableCell"
        class="b-table-selection-column"
        :class="{
          'b-table-sticky-column': stickySelectBoolean,
        }"
      >
        <slot name="select-cell">
          <span
            class="b-table-selection-icon"
            :class="selectedItems.has(scope.item) ? `text-${props.selectionVariant} selected` : ''"
            >🗹</span
          >
        </slot>
      </td>
    </template>
    <template #tbody-prefix="scope">
      <tr v-if="busyBoolean" class="b-table-busy-slot" :class="getBusyRowClasses()">
        <td :colspan="scope.fieldsTotal">
          <slot name="table-busy">
            <div class="d-flex align-items-center justify-content-center gap-2">
              <BSpinner class="align-middle" />
              <strong>Loading...</strong>
            </div>
          </slot>
        </td>
      </tr>
    </template>
  </BTableLite>
</template>

<script setup lang="ts">
import {computed, onMounted, ref, useSlots, watch} from 'vue'
import {useBooleanish, useTableItems} from '../../composables'
import type {
  Booleanish,
  Breakpoint,
  BTableProvider,
  BTableSortCompare,
  ColorVariant,
  LiteralUnion,
  TableField,
  TableFieldObject,
  TableItem,
  VerticalAlign,
} from '../../types'
import BTableLite from './BTableLite.vue'
import {useVModel} from '@vueuse/core'
import BSpinner from '../BSpinner.vue'

type NoProviderTypes = 'paging' | 'sorting' | 'filtering'

const props = withDefaults(
  defineProps<{
    align?: VerticalAlign
    caption?: string
    captionTop?: Booleanish
    borderless?: Booleanish
    bordered?: Booleanish
    borderVariant?: ColorVariant | null
    dark?: Booleanish
    fields?: TableField[]
    footClone?: Booleanish
    hover?: Booleanish
    items?: TableItem[]
    provider?: BTableProvider
    sortCompare?: BTableSortCompare
    noProvider?: NoProviderTypes[]
    noProviderPaging?: Booleanish
    noProviderSorting?: Booleanish
    noProviderFiltering?: Booleanish
    responsive?: boolean | Breakpoint
    small?: Booleanish
    striped?: Booleanish
    stacked?: boolean | Breakpoint
    labelStacked?: boolean
    variant?: ColorVariant | null
    sortBy?: string
    sortDesc?: Booleanish
    sortInternal?: Booleanish
    selectable?: Booleanish
    stickySelect?: Booleanish
    selectHead?: boolean | string
    selectMode?: 'multi' | 'single' | 'range'
    selectionVariant?: ColorVariant | null
    stickyHeader?: Booleanish
    busy?: Booleanish
    showEmpty?: Booleanish
    perPage?: number
    currentPage?: number
    filter?: string
    filterable?: string[]
    emptyText?: string
    emptyFilteredText?: string
    fieldColumnClasses?: (field: TableFieldObject) => Record<string, any>[]
    tbodyTrClass?: (item: TableItem | null, type: string) => string | any[] | null | undefined
  }>(),
  {
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
    fieldColumnClasses: undefined,
    tbodyTrClass: undefined,
  }
)

const emit = defineEmits<{
  'head-clicked': [
    key: TableFieldObject['key'],
    field: TableField,
    event: MouseEvent,
    isFooter: boolean
  ]
  'row-clicked': [item: TableItem, index: number, event: MouseEvent]
  'row-dbl-clicked': [item: TableItem, index: number, event: MouseEvent]
  'row-hovered': [item: TableItem, index: number, event: MouseEvent]
  'row-unhovered': [item: TableItem, index: number, event: MouseEvent]
  'row-selected': [value: TableItem]
  'row-unselected': [value: TableItem]
  'selection': [value: TableItem[]]
  'update:busy': [value: boolean]
  'update:sortBy': [value: string]
  'update:sortDesc': [value: boolean]
  'sorted': [sortBy: string, isDesc: boolean]
  'filtered': [value: TableItem[]]
}>()

const sortByModel = useVModel(props, 'sortBy', emit, {passive: true})
const busyModel = useVModel(props, 'busy', emit, {passive: true})
const sortDescModel = useVModel(props, 'sortDesc', emit, {passive: true})

const slots = useSlots()

const liteTable = ref<null | InstanceType<typeof BTableLite>>(null)

const sortDescBoolean = useBooleanish(sortDescModel)
const sortInternalBoolean = useBooleanish(() => props.sortInternal)
const busyBoolean = useBooleanish(busyModel)
const noProviderPagingBoolean = useBooleanish(() => props.noProviderPaging)
const noProviderSortingBoolean = useBooleanish(() => props.noProviderSorting)
const noProviderFilteringBoolean = useBooleanish(() => props.noProviderFiltering)
const selectableBoolean = useBooleanish(() => props.selectable)
const stickySelectBoolean = useBooleanish(() => props.stickySelect)

const isFilterableTable = computed(() => props.filter !== undefined && props.filter !== '')

const selectedItems = ref<Set<TableItem>>(new Set([]))
const isSelecting = computed(() => selectedItems.value.size > 0)

const isSortable = computed(() => {
  const hasSortableFields =
    props.fields.filter((field) => (typeof field === 'string' ? false : field.sortable)).length > 0
  return hasSortableFields || props.sortBy !== undefined
})
const usesProvider = computed(() => props.provider !== undefined)

const tableClasses = computed(() => ({
  'b-table-sortable': isSortable.value,
  'b-table-sort-desc': isSortable.value && sortDescBoolean.value === true,
  'b-table-sort-asc': isSortable.value && sortDescBoolean.value === false,
  'b-table-busy': busyBoolean.value,
  'b-table-selectable': selectableBoolean.value,
  [`b-table-select-${props.selectMode}`]: selectableBoolean.value,
  'b-table-selecting user-select-none': selectableBoolean.value && isSelecting.value,
}))

const requireItemsMapping = computed(() => isSortable.value && sortInternalBoolean.value === true)
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
    sortInternalBoolean,
    isFilterableTable,
    noProviderPagingBoolean,
    isSortable,
    requireItemsMapping,
    sortDescBoolean,
  },
  usesProvider,
  sortByModel
)

filteredHandler.value = async (items) => {
  if (usesProvider.value) {
    await callItemsProvider()
    return
  }
  emit('filtered', items)
}

const onRowClick = (row: TableItem, index: number, e: MouseEvent) => {
  handleRowSelection(row, index, e.shiftKey, e.ctrlKey, e.metaKey)
  emit('row-clicked', row, index, e)
}

const onFieldHeadClick = (
  fieldKey: LiteralUnion<string>,
  field: TableField,
  event: MouseEvent,
  isFooter = false
) => {
  emit('head-clicked', fieldKey, field, event, isFooter)
  handleFieldSorting(field)
}

const handleFieldSorting = (field: TableField) => {
  if (!isSortable.value) return

  const fieldKey = typeof field === 'string' ? field : field.key
  const fieldSortable = typeof field === 'string' ? false : field.sortable
  if (isSortable.value === true && fieldSortable === true) {
    const sortDesc = !sortDescBoolean.value
    sortByModel.value = fieldKey
    sortDescModel.value = sortDesc
    emit('sorted', fieldKey, sortDesc)
  }
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

const getFieldColumnClasses = (field: TableFieldObject) => [
  {
    'b-table-sortable-column': isSortable.value && field.sortable,
  },
]

const getRowClasses = (item: TableItem | null, type: string): string | any[] | null | undefined => {
  const classesArray = [
    selectableBoolean.value && item && selectedItems.value.has(item)
      ? `selected table-${props.selectionVariant}`
      : null,
  ]

  if (props.tbodyTrClass) {
    const extraClasses = props.tbodyTrClass(item, type)
    if (extraClasses) {
      classesArray.push(...(typeof extraClasses === 'string' ? [extraClasses] : extraClasses))
    }
  }
  return classesArray
}

const getBusyRowClasses = () => {
  const classesArray = [{'b-table-static-busy': props.items.length === 0}]

  if (props.tbodyTrClass) {
    const extraClasses = props.tbodyTrClass(null, 'table-busy')
    if (extraClasses) {
      classesArray.push(...(typeof extraClasses === 'string' ? [extraClasses] : extraClasses))
    }
  }
  return classesArray
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
    const lastSelectedIndex = props.items.findIndex((i) => i === lastSelectedItem)
    const selectStartIndex = Math.min(lastSelectedIndex, index)
    const selectEndIndex = Math.max(lastSelectedIndex, index)
    props.items.slice(selectStartIndex, selectEndIndex + 1).forEach((item) => {
      if (!selectedItems.value.has(item)) {
        selectedItems.value.add(item)
        emit('row-selected', item)
      }
    })
  } else if (ctrlClicked || metaClicked) {
    if (selectedItems.value.has(row)) {
      selectedItems.value.delete(row)
      emit('row-unselected', row)
    } else if (props.selectMode === 'range' || props.selectMode === 'multi') {
      selectedItems.value.add(row)
      emit('row-selected', row)
    } else {
      selectedItems.value.forEach((item) => emit('row-unselected', item))
      selectedItems.value.clear()
      selectedItems.value.add(row)
      emit('row-selected', row)
    }
  } else {
    selectedItems.value.forEach((item) => emit('row-unselected', item))
    selectedItems.value.clear()
    selectedItems.value.add(row)
    emit('row-selected', row)
  }

  notifySelectionEvent()
}

const selectAllRows = () => {
  if (!selectableBoolean.value) return
  const unselectableItems = selectedItems.value.size > 0 ? Array.from(selectedItems.value) : []
  selectedItems.value = new Set([...props.items])
  selectedItems.value.forEach((item) => {
    if (unselectableItems.includes(item)) return
    emit('row-selected', item)
  })
  notifySelectionEvent()
}

const clearSelected = () => {
  if (!selectableBoolean.value) return
  selectedItems.value.forEach((item) => {
    emit('row-unselected', item)
  })
  selectedItems.value = new Set([])
  notifySelectionEvent()
}

const selectRow = (index: number) => {
  if (!selectableBoolean.value) return
  const item = props.items[index]
  if (!item || selectedItems.value.has(item)) return
  selectedItems.value.add(item)
  emit('row-selected', item)
  notifySelectionEvent()
}

const unselectRow = (index: number) => {
  if (!selectableBoolean.value) return
  const item = props.items[index]
  if (!item || !selectedItems.value.has(item)) return
  selectedItems.value.delete(item)
  emit('row-unselected', item)
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

onMounted(callItemsProvider)

defineExpose({
  selectAllRows,
  clearSelected,
  selectRow,
  unselectRow,
  refresh: callItemsProvider,
})
</script>
