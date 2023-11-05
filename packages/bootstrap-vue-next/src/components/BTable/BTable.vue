<template>
  <BTableLite
    v-bind="props"
    :aria-busy="busyBoolean"
    :items="computedDisplayItems"
    :table-class="tableClasses"
    :tbody-tr-class="getRowClasses"
    :field-column-class="getFieldColumnClasses"
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
              selectedItemsSetUtilities.has(scope.item)
                ? `text-${props.selectionVariant} selected`
                : ''
            "
          >
            🗹
          </span>
        </slot>
      </BTd>
    </template>
    <template #custom-body="scope">
      <BTr v-if="busyBoolean" class="b-table-busy-slot" :class="getBusyRowClasses">
        <BTd :colspan="scope.fields.length">
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
import {isEmptySlot} from '../../utils'
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
      selectedItems?: TableItem[]
    } & Omit<BTableSimpleProps, 'tableClass'> &
      BTableLiteProps
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
    selectMode: 'multi',
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
    selectedItems: () => [],
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

const selectedItemsToSet = computed({
  get: () => new Set([...selectedItemsModel.value]),
  set: (val) => {
    selectedItemsModel.value = [...val]
  },
})

/**
 * This is to avoid the issue of directly mutating the array structure and to properly trigger the computed setter.
 * The utils also conveniently emit the proper events after
 */
const selectedItemsSetUtilities = {
  add: (item: TableItem) => {
    const value = new Set(selectedItemsToSet.value)
    value.add(item)
    selectedItemsToSet.value = value
    emit('row-selected', item)
  },
  clear: () => {
    selectedItemsToSet.value.forEach((item) => {
      emit('row-unselected', item)
    })
    selectedItemsToSet.value = new Set()
  },
  delete: (item: TableItem) => {
    const value = new Set(selectedItemsToSet.value)
    value.delete(item)
    selectedItemsToSet.value = value
    emit('row-unselected', item)
  },
  /* TODO
  This has method and the delete method suffer from an error when using a non-reactive source as the items prop
  ```ts
  const items = [{first_name: 'Geneva', last_name: 'Wilson', age: 89},{first_name: 'Jami', last_name: 'Carney', age: 38}]
  ```
  For some reason, the reference of the object gets lost. However, when you use an actual ref(), it works just fine
  Getting the reference properly will fix all outstanding issues
  */
  has: (item: TableItem) => selectedItemsToSet.value.has(item),
} as const

const slots = useSlots()

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

const isFilterableTable = toRef(() => !!props.filter)

const isSelecting = toRef(() => selectedItemsToSet.value.size > 0)

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
  () => selectableBoolean.value && (!!props.selectHead || !isEmptySlot(slots.selectHead))
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

const updateInternalItems = (items: TableItem<Record<string, any>>[]) => {
  internalItems.value = items
}

const computedDisplayItems = computed<TableItem[]>(() => {
  if (Number.isNaN(perPageNumber.value) || (usesProvider.value && !noProviderPagingBoolean.value)) {
    return computedItems.value
  }

  return computedItems.value.slice(displayStartEndIdx.value[0], displayStartEndIdx.value[1])
})

const handleRowSelection = (
  row: TableItem,
  index: number,
  shiftClicked = false,
  ctrlClicked = false,
  metaClicked = false
) => {
  if (!selectableBoolean.value) return

  if (props.selectMode === 'single' || props.selectMode === 'multi') {
    // Do nothing when these items are held
    if (shiftClicked || ctrlClicked) return
    // Delete if item is in
    if (selectedItemsSetUtilities.has(row)) {
      selectedItemsSetUtilities.delete(row)
    } else {
      // If it is single, we clear out everything first
      if (props.selectMode === 'single') {
        selectedItemsSetUtilities.clear()
      }
      // Then set the item
      selectedItemsSetUtilities.add(row)
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
      const lastSelectedIndex = props.items.findIndex((i) => i === lastSelectedItem)
      const selectStartIndex = Math.min(lastSelectedIndex, index)
      const selectEndIndex = Math.max(lastSelectedIndex, index)
      props.items.slice(selectStartIndex, selectEndIndex + 1).forEach((item) => {
        if (!selectedItemsSetUtilities.has(item)) {
          selectedItemsSetUtilities.add(item)
        }
      })
      // If nothing is being held, then we just behave like it's single mode
    } else {
      selectedItemsSetUtilities.clear()
      selectedItemsSetUtilities.add(row)
    }
  }
  // Notify
  notifySelectionEvent()
}

const onRowClick = (row: TableItem, index: number, e: MouseEvent) => {
  handleRowSelection(row, index, e.shiftKey, e.ctrlKey, e.metaKey)
  emit('row-clicked', row, index, e)
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

const onFieldHeadClick = (
  fieldKey: LiteralUnion<string>,
  field: TableField,
  event: MouseEvent,
  isFooter = false
) => {
  emit('head-clicked', fieldKey, field, event, isFooter)
  handleFieldSorting(field)
}

const callItemsProvider = async () => {
  if (!usesProvider.value || !props.provider || busyBoolean.value) return
  busyModel.value = true
  const response = props.provider({
    currentPage: currentPageNumber.value,
    filter: props.filter,
    sortBy: props.sortBy,
    sortDesc: props.sortDesc,
    perPage: perPageNumber.value,
  })
  try {
    const items = response instanceof Promise ? await response : response

    if (items === undefined) return

    updateInternalItems(items)
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
      selectableBoolean.value && item && selectedItemsSetUtilities.has(item),
  },
  props.tbodyTrClass
    ? typeof props.tbodyTrClass === 'function'
      ? props.tbodyTrClass(item, type)
      : props.tbodyTrClass
    : null,
]

const getBusyRowClasses = computed(() => [
  props.tbodyTrClass
    ? typeof props.tbodyTrClass === 'function'
      ? props.tbodyTrClass(null, 'table-busy')
      : props.tbodyTrClass
    : null,
])

const notifySelectionEvent = () => {
  if (!selectableBoolean.value) return
  emit('selection', [...selectedItemsToSet.value])
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
  () => props.items,
  (newValue) => updateInternalItems(newValue)
)

filteredHandler.value = async (items) => {
  if (usesProvider.value) {
    await callItemsProvider()
    return
  }
  emit('filtered', items)
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
  // The row selection methods are really for compat. Users should probably use the v-model though
  selectAllRows: () => {
    if (!selectableBoolean.value) return
    const unselectableItems = selectedItemsToSet.value.size > 0 ? [...selectedItemsToSet.value] : []
    selectedItemsToSet.value = new Set([...computedItems.value])
    selectedItemsToSet.value.forEach((item) => {
      if (unselectableItems.includes(item)) return
      emit('row-selected', item)
    })
    notifySelectionEvent()
  },
  clearSelected: () => {
    if (!selectableBoolean.value) return
    selectedItemsSetUtilities.clear()
    notifySelectionEvent()
  },
  selectRow: (index: number) => {
    if (!selectableBoolean.value) return
    const item = props.items[index]
    if (!item || selectedItemsSetUtilities.has(item)) return
    selectedItemsSetUtilities.add(item)
    notifySelectionEvent()
  },
  unselectRow: (index: number) => {
    if (!selectableBoolean.value) return
    const item = props.items[index]
    if (!item || !selectedItemsSetUtilities.has(item)) return
    selectedItemsSetUtilities.delete(item)
    notifySelectionEvent()
  },
  refresh: callItemsProvider,
})
</script>
