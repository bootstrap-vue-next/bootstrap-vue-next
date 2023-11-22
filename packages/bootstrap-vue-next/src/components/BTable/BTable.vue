<template>
  <BTableLite
    v-bind="props"
    :aria-busy="busyBoolean"
    :items="computedDisplayItems"
    :fields="computedFields"
    :table-class="tableClasses"
    :tbody-tr-class="getRowClasses"
    :field-column-class="getFieldColumnClasses"
    @head-clicked="onFieldHeadClick"
    @row-clicked="onRowClick"
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
    <template #head()="scope">
      {{ getTableFieldHeadLabel(scope.field) }}
      <template v-if="isSortable && scope.field.sortable && noSortableIconBoolean === false">
        <slot v-if="!sortDescBoolean" v-bind="{...scope}" name="sortAsc">
          <svg
            :style="getIconStyle(scope.field)"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
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
        <slot v-else v-bind="{...scope}" name="sortDesc">
          <svg
            :style="getIconStyle(scope.field)"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
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
      </template>
    </template>
    <template #custom-body="scope">
      <BTr v-if="busyBoolean" class="b-table-busy-slot" :class="getBusyRowClasses">
        <BTd :colspan="scope.fields.length">
          <slot name="table-busy">
            <BOverlay show>
              <template #overlay>
                <div class="d-flex align-items-center gap-2 mt-5">
                  <BSpinner />
                  <strong>{{ busyLoadingText }}</strong>
                </div>
              </template>
            </BOverlay>
          </slot>
        </BTd>
      </BTr>
    </template>
  </BTableLite>
</template>

<script setup lang="ts">
import {useToNumber, useVModel} from '@vueuse/core'
import {computed, onMounted, ref, type StyleValue, toRef, watch} from 'vue'
import {useBooleanish} from '../../composables'
import type {
  Booleanish,
  BTableLiteProps,
  BTableProvider,
  BTableSortCompare,
  ColorVariant,
  LiteralUnion,
  TableField,
  TableFieldObject,
  TableItem,
} from '../../types'
import BSpinner from '../BSpinner.vue'
import BOverlay from '../BOverlay/BOverlay.vue'
import BTableLite from './BTableLite.vue'
import BTd from './BTd.vue'
import BTr from './BTr.vue'
import {getTableFieldHeadLabel} from '../../utils'

type NoProviderTypes = 'paging' | 'sorting' | 'filtering'

// TODO sort props list alphabetically when everything is done
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
      // sortCompareOptions?: Record<string, any> // TODO make this explicit
      // sortDirection?: 'asc' | 'desc' | 'last'
      // sortIconLeft?: Booleanish
      // sortNullLast?: Booleanish
      selectedItems?: TableItem[]
      noSortableIcon?: Booleanish
    } & Omit<BTableLiteProps, 'tableClass'>
  >(),
  {
    noSortableIcon: false,
    perPage: Infinity,
    sortBy: undefined,
    filter: undefined,
    filterable: undefined,
    provider: undefined,
    sortCompare: undefined,
    noProvider: undefined,
    noProviderPaging: false,
    noProviderSorting: false,
    noProviderFiltering: false,
    sortDesc: false,
    selectable: false,
    stickySelect: false,
    selectHead: true,
    selectMode: 'multi',
    selectionVariant: 'primary',
    busy: false,
    busyLoadingText: 'Loading...',
    currentPage: 1,
    selectedItems: () => [],
    // BTableLite props
    items: () => [],
    fields: () => [],
    // All others use defaults
    caption: undefined,
    align: undefined,
    footClone: undefined,
    labelStacked: undefined,
    showEmpty: undefined,
    emptyText: undefined,
    emptyFilteredText: undefined,
    fieldColumnClass: undefined,
    tbodyTrClass: undefined,
    captionHtml: undefined,
    detailsTdClass: undefined,
    headVariant: undefined,
    headRowVariant: undefined,
    footRowVariant: undefined,
    footVariant: undefined,
    modelValue: undefined,
    primaryKey: undefined,
    tbodyClass: undefined,
    tbodyTrAttr: undefined,
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

const emit = defineEmits<{
  'filtered': [value: TableItem[]]
  'head-clicked': [
    key: TableFieldObject['key'],
    field: TableField,
    event: MouseEvent,
    isFooter: boolean,
  ]
  'row-clicked': [item: TableItem, index: number, event: MouseEvent]
  'row-dbl-clicked': [item: TableItem, index: number, event: MouseEvent]
  'row-hovered': [item: TableItem, index: number, event: MouseEvent]
  'row-selected': [value: TableItem]
  'row-unhovered': [item: TableItem, index: number, event: MouseEvent]
  'row-unselected': [value: TableItem]
  'selection': [value: TableItem[]]
  'sorted': [sortBy: string, isDesc: boolean]
  'update:busy': [value: boolean]
  'update:selectedItems': [value: TableItem[]]
  'update:sortDesc': [value: boolean]
  'update:sortBy': [value: string]
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

/**
 * Only stores data that is fetched when using the provider
 */
const internalItems = ref<TableItem[]>([])

const sortDescBoolean = useBooleanish(sortDescModel)
const busyBoolean = useBooleanish(busyModel)
const noProviderPagingBoolean = useBooleanish(() => props.noProviderPaging)
const noProviderSortingBoolean = useBooleanish(() => props.noProviderSorting)
const noProviderFilteringBoolean = useBooleanish(() => props.noProviderFiltering)
const selectableBoolean = useBooleanish(() => props.selectable)
const noSortableIconBoolean = useBooleanish(() => props.noSortableIcon)

const perPageNumber = useToNumber(() => props.perPage, {method: 'parseInt'})
const currentPageNumber = useToNumber(() => props.currentPage, {method: 'parseInt'})

const isFilterableTable = toRef(() => !!props.filter)
const usesProvider = toRef(() => props.provider !== undefined)
const isSelecting = toRef(() => selectedItemsToSet.value.size > 0)

const isSortable = computed(
  () =>
    sortByModel.value !== undefined ||
    props.fields.some((field) => (typeof field === 'string' ? false : field.sortable))
)

const computedFields = computed<TableField[]>(() =>
  props.fields.map((el) =>
    typeof el === 'string'
      ? el
      : {
          ...el,
          thAttr: {
            'aria-sort':
              isSortable.value === false
                ? undefined
                : sortByModel.value !== el.key
                ? 'none'
                : sortDescBoolean.value === true
                ? 'descending'
                : 'ascending',
            ...el.thAttr,
          },
        }
  )
)

const tableClasses = computed(() => ({
  'b-table-busy': busyBoolean.value,
  'b-table-selectable': selectableBoolean.value,
  'user-select-none': selectableBoolean.value && isSelecting.value,
}))
// All three of these are similar, even though the two following are not computeds
const getBusyRowClasses = computed(() => [
  props.tbodyTrClass
    ? typeof props.tbodyTrClass === 'function'
      ? props.tbodyTrClass(null, 'table-busy')
      : props.tbodyTrClass
    : null,
])
const getFieldColumnClasses = (field: TableFieldObject) => [
  {
    'b-table-sortable-column': isSortable.value && field.sortable,
  },
]
// TODO this class has issues if the table has a variant already applied
// Also the row should technically have aria-selected . Both things could probably just use a function with tbodyTrAttrs
// But functional tbodyTrAttrs are not supported yet
// Also the stuff for resolving functions could probably be made a util
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
const getIconStyle = (field: TableFieldObject): StyleValue =>
  sortByModel.value !== field.key ? {opacity: 0.5} : {}

const computedItems = computed<TableItem[]>(() => {
  const sortItems = (items: TableItem[]) => {
    const sortKey = sortByModel.value

    if (sortKey === undefined) {
      return items
    }

    const sortField = computedFields.value.find((el) => {
      if (typeof el === 'string') return false
      return el.key === sortKey
    })

    // Explicit field? === false check because undefined means it's sortable. Only strict === means its not sortable (no falsy)
    if (typeof sortField !== 'string' && sortField?.sortable === false) {
      return items
    }

    return [...items].sort((a, b) => {
      if (props.sortCompare !== undefined)
        return props.sortCompare(a, b, sortKey, sortDescBoolean.value)

      const realVal = (ob: unknown): string =>
        typeof ob === 'object' && ob !== null ? JSON.stringify(ob) : ob?.toString() ?? ''

      if (realVal(a[sortKey]) > realVal(b[sortKey])) {
        return sortDescBoolean.value ? -1 : 1
      }

      if (realVal(b[sortKey]) > realVal(a[sortKey])) {
        return sortDescBoolean.value ? 1 : -1
      }

      return 0
    })
  }

  const filterItems = (items: TableItem[]) =>
    items.filter((item) =>
      Object.entries(item).some(([key, val]) => {
        if (!val || key[0] === '_' || !props.filterable?.includes(key)) return false
        const itemValue: string =
          typeof val === 'object' ? JSON.stringify(Object.values(val)) : val.toString()
        return itemValue.toLowerCase().includes(props.filter?.toLowerCase() ?? '')
      })
    )

  let mappedItems = usesProvider.value ? internalItems.value : props.items

  if (
    (isFilterableTable.value === true && !usesProvider.value) ||
    (isFilterableTable.value === true && usesProvider.value && noProviderFilteringBoolean.value)
  ) {
    mappedItems = filterItems(mappedItems)
  }

  if (
    (isSortable.value === true && !usesProvider.value) ||
    (isSortable.value === true && usesProvider.value && noProviderSortingBoolean.value)
  ) {
    mappedItems = sortItems(mappedItems)
  }

  return mappedItems
})

// The benefit of this is that it doesn't allow you a page out of bounds even if the user does it manually
// This does not work due to https://github.com/vueuse/vueuse/issues/3542
// const {currentPage: resolvedCurrentPage, currentPageSize: resolvedCurrentPageSize} =
//   useOffsetPagination({
//     total: () => computedItems.value.length,
//     page: currentPageNumber,
//     // If its zero, it does all
//     pageSize: () => perPageNumber.value || Infinity,
//   })

const computedDisplayItems = computed<TableItem[]>(() => {
  if (Number.isNaN(perPageNumber.value) || (usesProvider.value && !noProviderPagingBoolean.value)) {
    return computedItems.value
  }

  return computedItems.value.slice(
    (currentPageNumber.value - 1) * (perPageNumber.value || Infinity),
    currentPageNumber.value * (perPageNumber.value || Infinity)
  )
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

  if (!(isSortable.value === true && fieldSortable === true)) return

  if (sortByModel.value !== fieldKey) {
    sortByModel.value = fieldKey
    sortDescModel.value = false
  } else {
    if (sortDescBoolean.value === false) {
      sortDescModel.value = true
    } else {
      sortByModel.value = undefined
      sortDescModel.value = false
    }
  }
  emit('sorted', fieldKey, sortByModel.value === undefined ? false : !sortDescBoolean.value)
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
  if (!usesProvider.value || props.provider === undefined || busyBoolean.value) return
  busyModel.value = true
  const response = props.provider({
    currentPage: currentPageNumber.value,
    filter: props.filter,
    sortBy: sortByModel.value,
    sortDesc: props.sortDesc,
    perPage: perPageNumber.value,
  })
  try {
    const items = response instanceof Promise ? await response : response

    if (items === undefined) return
    internalItems.value = items
  } finally {
    busyModel.value = false
  }
}

const notifySelectionEvent = () => {
  if (!selectableBoolean.value) return
  emit('selection', [...selectedItemsToSet.value])
}
const notifyFilteredItems = async () => {
  if (usesProvider.value) {
    await callItemsProvider()
    return
  }
  emit('filtered', computedItems.value)
}

const providerPropsWatch = async (prop: string, val: unknown, oldVal: unknown) => {
  if (val === oldVal) return

  //stop provide when paging
  const inNoProvider = (key: NoProviderTypes) => props.noProvider?.includes(key) === true
  const noProvideWhenPaging =
    (prop === 'currentPage' || prop === 'perPage') &&
    (inNoProvider('paging') || noProviderPagingBoolean.value === true)
  const noProvideWhenFiltering =
    prop === 'filter' && (inNoProvider('filtering') || noProviderFilteringBoolean.value === true)
  const noProvideWhenSorting =
    (prop === 'sortBy' || prop === 'sortDesc') &&
    (inNoProvider('sorting') || noProviderSortingBoolean.value === true)

  if (noProvideWhenPaging || noProvideWhenFiltering || noProvideWhenSorting) return

  await callItemsProvider()

  if (!(prop === 'currentPage' || prop === 'perPage')) notifyFilteredItems()
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
watch(currentPageNumber, (val, oldVal) => {
  providerPropsWatch('currentPage', val, oldVal)
})
watch(perPageNumber, (val, oldVal) => {
  providerPropsWatch('perPage', val, oldVal)
})
watch(sortByModel, (val, oldVal) => {
  providerPropsWatch('sortBy', val, oldVal)
})
watch(sortDescBoolean, (val, oldVal) => {
  providerPropsWatch('sortDesc', val, oldVal)
})

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

defineExpose({
  // The row selection methods are really for compat. Users should probably use the v-model though
  clearSelected: () => {
    if (!selectableBoolean.value) return
    selectedItemsSetUtilities.clear()
    notifySelectionEvent()
  },
  refresh: callItemsProvider,
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
  selectRow: (index: number) => {
    if (!selectableBoolean.value) return
    const item = computedItems.value[index]
    if (!item || selectedItemsSetUtilities.has(item)) return
    selectedItemsSetUtilities.add(item)
    notifySelectionEvent()
  },
  unselectRow: (index: number) => {
    if (!selectableBoolean.value) return
    const item = computedItems.value[index]
    if (!item || !selectedItemsSetUtilities.has(item)) return
    selectedItemsSetUtilities.delete(item)
    notifySelectionEvent()
  },
})
</script>
