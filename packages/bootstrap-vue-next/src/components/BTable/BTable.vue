<template>
  <BTableLite
    ref="liteTable"
    v-bind="props"
    v-model:busy="busyModel"
    :items="computedDisplayItems"
    :table-class="tableClasses"
    :tbody-tr-class="getRowClasses"
    :field-column-class="getFieldColumnClasses"
    :virtual-fields="selectableBoolean ? 1 : 0"
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
      <BTh
        v-if="addSelectableCell"
        class="b-table-selection-column"
        :class="{
          'b-table-sticky-column': stickySelectBoolean,
        }"
      >
        <slot name="select-head">
          {{ typeof selectHead === 'boolean' ? 'Selected' : selectHead }}
        </slot>
      </BTh>
    </template>
    <template #tbody-tr-prefix="scope">
      <BTd
        v-if="addSelectableCell"
        class="b-table-selection-column"
        :class="{
          'b-table-sticky-column': stickySelectBoolean,
        }"
      >
        <slot name="select-cell">
          <span
            class="b-table-selection-icon"
            :class="
              selectedItemsModel.has(scope.item) ? `text-${props.selectionVariant} selected` : ''
            "
          >
            🗹
          </span>
        </slot>
      </BTd>
    </template>
    <template #tbody-prefix="scope">
      <BTr v-if="busyBoolean" class="b-table-busy-slot" :class="getBusyRowClasses">
        <BTd :colspan="scope.fieldsTotal">
          <slot name="table-busy">
            <div class="d-flex align-items-center justify-content-center gap-2">
              <BSpinner class="align-middle" />
              <strong>{{ busyLoadingText }}</strong>
            </div>
          </slot>
        </BTd>
      </BTr>
    </template>
  </BTableLite>
</template>

<script setup lang="ts">
import {useToNumber, useVModel} from '@vueuse/core'
import {computed, onMounted, ref, toRef, useSlots, watch} from 'vue'
import {useBooleanish} from '../../composables'
import type {
  Booleanish,
  BTableLiteProps,
  BTableProvider,
  BTableSimpleProps,
  BTableSortCompare,
  ColorVariant,
  LiteralUnion,
  TableField,
  TableFieldObject,
  TableItem,
} from '../../types'
import BSpinner from '../BSpinner.vue'
import BTableLite from './BTableLite.vue'
import BTd from './BTd.vue'
import BTh from './BTh.vue'
import BTr from './BTr.vue'

type NoProviderTypes = 'paging' | 'sorting' | 'filtering'

const props = withDefaults(
  defineProps<
    {
      provider?: BTableProvider
      sortCompare?: BTableSortCompare
      noProvider?: NoProviderTypes[]
      noProviderPaging?: Booleanish
      noProviderSorting?: Booleanish
      noProviderFiltering?: Booleanish
      sortBy?: string
      sortDesc?: Booleanish
      sortInternal?: Booleanish
      selectable?: Booleanish
      stickySelect?: Booleanish
      selectHead?: boolean | string
      selectMode?: 'multi' | 'single' | 'range'
      selectionVariant?: ColorVariant | null
      busy?: Booleanish
      busyLoadingText?: string
      perPage?: number | string
      currentPage?: number | string
      filter?: string
      filterable?: string[]
      // TODO
      // apiUrl?: string
      // emptyFilteredHtml?: string
      // emptyFilteredText?: string
      // emptyHtml?: string
      // emptyText?: string
      filterDebounce?: string | number
      filterDebounceMaxWait?: string | number
      // filterFunction?: () => any
      // filterIgnoredFields?: any[]
      // filterIncludedFields?: any[]
      // headRowVariant?: ColorVariant | null
      // headVariant?: ColorVariant | null
      // labelSortAsc?: string
      // labelSortClear?: string
      // labelSortDesc?: string
      // noFooterSorting?: Booleanish
      // noLocalSorting?: Booleanish
      // noSelectOnClick?: Booleanish
      // noSortReset?: Booleanish
      // selectedVariant?: ColorVariant | null
      // showEmpty?: Booleanish
      // sortCompareLocale?: () => any
      // sortCompareOptions?: Record<string, any>
      // sortDirection?: 'asc' | 'desc' | 'last'
      // sortIconLeft?: Booleanish
      // sortNullLast?: Booleanish
      selectedItems?: Set<TableItem> // TODO make this not a Set
    } & Omit<BTableSimpleProps, 'tableClass'> &
      Omit<BTableLiteProps, 'virtualFields'>
  >(),
  {
    filterDebounce: 0,
    filterDebounceMaxWait: NaN,
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
    stripedColumns: false,
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
    busyLoadingText: 'Loading...',
    showEmpty: false,
    currentPage: 1,
    emptyText: 'There are no records to show',
    emptyFilteredText: 'There are no records matching your request',
    fieldColumnClass: undefined,
    tbodyTrClass: undefined,
    selectedItems: () => new Set<TableItem>([]),
  }
)

const emit = defineEmits<{
  'head-clicked': [
    key: TableFieldObject['key'],
    field: TableField,
    event: MouseEvent,
    isFooter: boolean,
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
  'update:selectedItems': [value: Set<TableItem>]
  'sorted': [sortBy: string, isDesc: boolean]
  'filtered': [value: TableItem[]]
}>()

const sortByModel = useVModel(props, 'sortBy', emit, {passive: true})
const busyModel = useVModel(props, 'busy', emit, {passive: true})
const sortDescModel = useVModel(props, 'sortDesc', emit, {passive: true})
const selectedItemsModel = useVModel(props, 'selectedItems', emit, {passive: true})

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
// TODO debounce implementation
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const filterDebounceNumber = useToNumber(() => props.filterDebounce)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const filterDebounceMaxWaitNumber = useToNumber(() => props.filterDebounceMaxWait)
const perPageNumber = useToNumber(() => props.perPage ?? NaN)
const currentPageNumber = useToNumber(() => props.currentPage)

const isFilterableTable = toRef(() => props.filter !== undefined && props.filter !== '')

const isSelecting = toRef(() => selectedItemsModel.value.size > 0)

const isSortable = computed(() => {
  const hasSortableFields =
    props.fields.filter((field) => (typeof field === 'string' ? false : field.sortable)).length > 0
  return hasSortableFields || props.sortBy !== undefined
})
const usesProvider = toRef(() => props.provider !== undefined)

const tableClasses = computed(() => ({
  'b-table-sortable': isSortable.value,
  'b-table-sort-desc': isSortable.value && sortDescBoolean.value === true,
  'b-table-sort-asc': isSortable.value && sortDescBoolean.value === false,
  'b-table-busy': busyBoolean.value,
  'b-table-selectable': selectableBoolean.value,
  [`b-table-select-${props.selectMode}`]: selectableBoolean.value,
  'b-table-selecting user-select-none': selectableBoolean.value && isSelecting.value,
}))

const requireItemsMapping = toRef(
  () =>
    (isSortable.value && sortInternalBoolean.value === true) ||
    (isSortable.value && usesProvider.value) ||
    isFilterableTable.value
)

const addSelectableCell = toRef(
  () => selectableBoolean.value && (!!props.selectHead || slots.selectHead !== undefined)
)

const filteredHandler = ref<(items: TableItem[]) => void>()

const notifyFilteredItems = () => {
  if (filteredHandler.value) {
    filteredHandler.value(computedItems.value)
  }
}

const internalItems = ref(props.items)

const displayStartEndIdx = ref([0, internalItems.value.length])

const computedItems = computed<TableItem[]>(() => {
  const mapItems = (): TableItem[] => {
    const sortItems = () => {
      if (
        props.fields === undefined ||
        mappedItems === undefined ||
        sortByModel.value === undefined ||
        sortDescBoolean.value === undefined
      ) {
        return mappedItems ?? []
      }

      const sortKey = sortByModel.value
      return mappedItems.sort((a, b) => {
        if (props.sortCompare !== undefined)
          return props.sortCompare(a, b, sortKey, sortDescBoolean.value)

        const realVal = (ob: any) => (typeof ob === 'object' ? JSON.stringify(ob) : ob)

        const aHigher = realVal(a[sortKey]) > realVal(b[sortKey])
        if (aHigher) return sortDescBoolean.value ? -1 : 1

        const bHigher = realVal(b[sortKey]) > realVal(a[sortKey])
        if (bHigher) return sortDescBoolean.value ? 1 : -1

        return 0
      })
    }

    const filterItems = () =>
      internalItems.value.filter(
        (item) =>
          Object.entries(item).filter((item) => {
            const [key, val] = item
            if (
              !val ||
              key[0] === '_' ||
              (props.filterable && props.filterable.length > 0 && !props.filterable.includes(key))
            )
              return false
            const itemValue: string =
              typeof val === 'object' ? JSON.stringify(Object.values(val)) : val.toString()
            return itemValue.toLowerCase().includes(props.filter?.toLowerCase() ?? '')
          }).length > 0
      )

    let mappedItems: TableItem[] = internalItems.value

    const canFilterTable = isFilterableTable.value === true && props.filter

    if (
      (canFilterTable && !usesProvider.value) ||
      (canFilterTable && usesProvider.value && noProviderFilteringBoolean.value)
    ) {
      mappedItems = filterItems()
    }

    if (
      (isSortable.value === true && !usesProvider.value) ||
      (isSortable.value === true && usesProvider.value && noProviderSortingBoolean.value)
    ) {
      mappedItems = sortItems()
    }

    return mappedItems
  }

  const items = requireItemsMapping.value
    ? mapItems()
    : usesProvider.value
    ? internalItems.value
    : props.items ?? []

  if (!Number.isNaN(perPageNumber.value)) {
    const startIndex =
      ((Number.isNaN(perPageNumber.value) ? 0 : perPageNumber.value) - 1) * perPageNumber.value
    const endIndex =
      startIndex + perPageNumber.value > items.length
        ? items.length
        : startIndex + perPageNumber.value

    // TODO fix this
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    displayStartEndIdx.value = [startIndex, endIndex]
  }

  return items
})

const updateInternalItems = async (
  items: TableItem<Record<string, any>>[]
): Promise<TableItem[] | undefined> => {
  try {
    internalItems.value = items
    return internalItems.value
  } catch (err) {
    return undefined
  }
}

const computedDisplayItems = computed<TableItem[]>(() => {
  if (Number.isNaN(perPageNumber.value) || (usesProvider.value && !noProviderPagingBoolean.value)) {
    return computedItems.value
  }

  return computedItems.value.slice(displayStartEndIdx.value[0], displayStartEndIdx.value[1])
})

watch(
  () => props.items,
  (v) => updateInternalItems(v)
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
  const response = props.provider(
    {
      currentPage: currentPageNumber.value,
      filter: props.filter,
      sortBy: props.sortBy,
      sortDesc: props.sortDesc,
      perPage: perPageNumber.value,
    },
    updateInternalItems
  )
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

const getRowClasses = (item: TableItem | null, type: string) => [
  {
    [`selected table-${props.selectionVariant}`]:
      selectableBoolean.value && item && selectedItemsModel.value.has(item),
  },
  props.tbodyTrClass
    ? typeof props.tbodyTrClass === 'function'
      ? props.tbodyTrClass(item, type)
      : props.tbodyTrClass
    : null,
]

const getBusyRowClasses = computed(() => [
  {
    'b-table-static-busy': computedItems.value.length === 0,
  },
  props.tbodyTrClass
    ? typeof props.tbodyTrClass === 'function'
      ? props.tbodyTrClass(null, 'table-busy')
      : props.tbodyTrClass
    : null,
])

const notifySelectionEvent = () => {
  if (!selectableBoolean.value) return
  emit('selection', Array.from(selectedItemsModel.value))
}

const handleRowSelection = (
  row: TableItem,
  index: number,
  shiftClicked = false,
  ctrlClicked = false,
  metaClicked = false
) => {
  if (!selectableBoolean.value) return

  if (shiftClicked && props.selectMode === 'range' && selectedItemsModel.value.size > 0) {
    const lastSelectedItem = Array.from(selectedItemsModel.value).pop()
    const lastSelectedIndex = props.items.findIndex((i) => i === lastSelectedItem)
    const selectStartIndex = Math.min(lastSelectedIndex, index)
    const selectEndIndex = Math.max(lastSelectedIndex, index)
    props.items.slice(selectStartIndex, selectEndIndex + 1).forEach((item) => {
      if (!selectedItemsModel.value.has(item)) {
        selectedItemsModel.value.add(item)
        emit('row-selected', item)
      }
    })
  } else if (ctrlClicked || metaClicked) {
    if (selectedItemsModel.value.has(row)) {
      selectedItemsModel.value.delete(row)
      emit('row-unselected', row)
    } else if (props.selectMode === 'range' || props.selectMode === 'multi') {
      selectedItemsModel.value.add(row)
      emit('row-selected', row)
    } else {
      selectedItemsModel.value.forEach((item) => {
        emit('row-unselected', item)
      })
      selectedItemsModel.value.clear()
      selectedItemsModel.value.add(row)
      emit('row-selected', row)
    }
  } else {
    selectedItemsModel.value.forEach((item) => {
      emit('row-unselected', item)
    })
    selectedItemsModel.value.clear()
    selectedItemsModel.value.add(row)
    emit('row-selected', row)
  }

  notifySelectionEvent()
}

const selectAllRows = () => {
  if (!selectableBoolean.value) return
  const unselectableItems =
    selectedItemsModel.value.size > 0 ? Array.from(selectedItemsModel.value) : []
  selectedItemsModel.value = new Set([...props.items])
  selectedItemsModel.value.forEach((item) => {
    if (unselectableItems.includes(item)) return
    emit('row-selected', item)
  })
  notifySelectionEvent()
}

const clearSelected = () => {
  if (!selectableBoolean.value) return
  selectedItemsModel.value.forEach((item) => {
    emit('row-unselected', item)
  })
  selectedItemsModel.value = new Set([])
  notifySelectionEvent()
}

const selectRow = (index: number) => {
  if (!selectableBoolean.value) return
  const item = props.items[index]
  if (!item || selectedItemsModel.value.has(item)) return
  selectedItemsModel.value.add(item)
  emit('row-selected', item)
  notifySelectionEvent()
}

const unselectRow = (index: number) => {
  if (!selectableBoolean.value) return
  const item = props.items[index]
  if (!item || !selectedItemsModel.value.has(item)) return
  selectedItemsModel.value.delete(item)
  emit('row-unselected', item)
  notifySelectionEvent()
}

const providerPropsWatch = async (prop: string, val: unknown, oldVal: unknown) => {
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

  if (noProvideWhenPaging || noProvideWhenFiltering || noProvideWhenSorting) return

  await callItemsProvider()

  if (notifyFiltered) notifyFilteredItems()
}

watch(
  () => props.filter,
  (filter, oldFilter) => {
    providerPropsWatch('filter', filter, oldFilter)

    if (filter === oldFilter || usesProvider.value) return
    if (!filter) {
      emit('filtered', computedItems.value)
    }
  }
)

watch(currentPageNumber, (val, oldVal) => providerPropsWatch('currentPage', val, oldVal))
watch(perPageNumber, (val, oldVal) => providerPropsWatch('perPage', val, oldVal))
watch(sortByModel, (val, oldVal) => providerPropsWatch('sortBy', val, oldVal))
watch(sortDescBoolean, (val, oldVal) => providerPropsWatch('sortDesc', val, oldVal))

onMounted(callItemsProvider)

defineExpose({
  selectAllRows,
  clearSelected,
  selectRow,
  unselectRow,
  refresh: callItemsProvider,
})
</script>
