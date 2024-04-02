<template>
  <BTableLite
    v-bind="props"
    :aria-busy="busyModel"
    :items="computedDisplayItems"
    :fields="computedFields"
    :table-class="tableClasses"
    :tbody-tr-class="getRowClasses"
    :field-column-class="getFieldColumnClasses"
    @head-clicked="onFieldHeadClick"
    @row-dbl-clicked="
      (row, index, e) => {
        emit('row-dbl-clicked', row, index, e)
      }
    "
    @row-clicked="onRowClick"
    @row-hovered="
      (row, index, e) => {
        emit('row-hovered', row, index, e)
      }
    "
    @row-unhovered="
      (row, index, e) => {
        emit('row-unhovered', row, index, e)
      }
    "
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
    <!-- TODO this is likely wrong -->
    <!-- TODO add: -->
    <!-- TODO `name=sortAsc(${String(field.key)})`) -->
    <!-- TODO name="sortDefault" -->
    <!-- TODO remove LIteralUnion temporarily then patch up the issues it causes -->
    <template #head()="scope">
      {{ getTableFieldHeadLabel(scope.field) }}
      <template v-if="isSortable && !!scope.field.sortable && props.noSortableIcon === false">
        <slot
          v-if="sortByModel?.find((el) => el.key === scope.field.key)?.order === 'asc'"
          v-bind="{...scope}"
          name="sortAsc"
        >
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
        <slot
          v-else-if="sortByModel?.find((el) => el.key === scope.field.key)?.order === 'desc'"
          v-bind="{...scope}"
          name="sortDesc"
        >
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
      <BTr v-if="busyModel" class="b-table-busy-slot" :class="getBusyRowClasses">
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

<script setup lang="ts" generic="Provider">
import {useToNumber} from '@vueuse/core'
import {computed, onMounted, ref, type StyleValue, toRef, watch} from 'vue'
import type {
  BTableProps,
  BTableSortBy,
  BTableSortByOrder,
  NoProviderTypes,
  TableField,
  TableFieldRaw,
  TableItem,
} from '../../types'
import {formatItem, get, getTableFieldHeadLabel} from '../../utils'
import BOverlay from '../BOverlay/BOverlay.vue'
import BSpinner from '../BSpinner.vue'
import BTableLite from './BTableLite.vue'
import BTd from './BTd.vue'
import BTr from './BTr.vue'

const props = withDefaults(defineProps<BTableProps<Provider>>(), {
  noSortableIcon: false,
  perPage: Number.POSITIVE_INFINITY,
  filter: undefined,
  noSortReset: false,
  filterable: undefined,
  mustSort: false,
  provider: undefined,
  noProvider: undefined,
  noProviderPaging: false,
  noProviderSorting: false,
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
})

const emit = defineEmits<{
  'filtered': [value: any[]]
  'head-clicked': [
    key: TableField['key'],
    field: TableFieldRaw,
    event: MouseEvent,
    isFooter: boolean,
  ]
  'row-clicked': [item: any, index: number, event: MouseEvent]
  'row-dbl-clicked': [item: any, index: number, event: MouseEvent]
  'row-hovered': [item: any, index: number, event: MouseEvent]
  'row-selected': [value: any]
  'row-unhovered': [item: any, index: number, event: MouseEvent]
  'row-unselected': [value: any]
  'selection': [value: any[]]
  'sorted': [value: BTableSortBy | null]
}>()

const sortByModel = defineModel<BTableSortBy[] | undefined>('sortBy', {
  default: undefined,
})
const busyModel = defineModel<boolean>('busy', {
  default: false,
})
const selectedItemsModel = defineModel<any[]>('selectedItems', {
  default: () => [],
})

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
  add: (item: any) => {
    const value = new Set(selectedItemsToSet.value)
    value.add(item)
    selectedItemsToSet.value = value
    emit('row-selected', item)
  },
  clear: () => {
    selectedItemsToSet.value.forEach((item) => {
      selectedItemsSetUtilities.delete(item)
    })
  },
  delete: (item: any) => {
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
  has: (item: any) => {
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
const internalItems = ref<any[]>([])

const perPageNumber = useToNumber(() => props.perPage, {method: 'parseInt'})
const currentPageNumber = useToNumber(() => props.currentPage, {method: 'parseInt'})

const isFilterableTable = toRef(() => !!props.filter)
const usesProvider = toRef(() => props.provider !== undefined)
const isSelecting = toRef(() => selectedItemsToSet.value.size > 0)

const isSortable = computed(
  () =>
    sortByModel.value !== undefined ||
    props.fields.some(
      (field) => typeof field === 'object' && field !== null && field.sortable === true
    )
)

const computedFields = computed<TableFieldRaw[]>(() =>
  props.fields.map((el) => {
    if (!(typeof el === 'object' && el !== null)) return el

    const value = sortByModel.value?.find((el) => el.key === el.key)
    return {
      ...el,
      thAttr: {
        'aria-sort':
          isSortable.value === false
            ? undefined
            : value === undefined
              ? 'none'
              : value.order === 'desc'
                ? 'descending'
                : 'ascending',
        ...el.thAttr,
      },
    }
  })
)

const tableClasses = computed(() => ({
  'b-table-busy': busyModel.value,
  'b-table-selectable': props.selectable,
  'user-select-none': props.selectable && isSelecting.value,
}))
// All three of these are similar, even though the two following are not computeds
const getBusyRowClasses = computed(() => [
  props.tbodyTrClass
    ? typeof props.tbodyTrClass === 'function'
      ? props.tbodyTrClass(null, 'table-busy')
      : props.tbodyTrClass
    : null,
])
const getFieldColumnClasses = (field: Readonly<TableField>) => [
  {
    'b-table-sortable-column': isSortable.value && field.sortable,
  },
]
// TODO this class has issues if the table has a variant already applied
// Also the row should technically have aria-selected . Both things could probably just use a function with tbodyTrAttrs
// But functional tbodyTrAttrs are not supported yet
// Also the stuff for resolving functions could probably be made a util
const getRowClasses = (item: any | null, type: string) => [
  {
    [`selected table-${props.selectionVariant}`]:
      props.selectable && item && selectedItemsSetUtilities.has(item),
  },
  props.tbodyTrClass
    ? typeof props.tbodyTrClass === 'function'
      ? props.tbodyTrClass(item, type)
      : props.tbodyTrClass
    : null,
]
const getIconStyle = (field: Readonly<TableField>): StyleValue =>
  sortByModel.value?.some((el) => el.key === field.key) ? {} : {opacity: 0.5}

const computedItems = computed<readonly any[]>(() => {
  const sortItems = (items: readonly any[]) => {
    if (!sortByModel.value || sortByModel.value.length === 0) return items

    // Multi-sort
    return [...items].sort((a, b) => {
      for (let i = 0; i < (sortByModel.value?.length ?? 0); i++) {
        const sortOption = sortByModel.value?.[i]
        const realVal = (ob: any): string => {
          if (!(typeof ob === 'object' && ob !== null)) return ob

          const sortField = computedFields.value.find((el) => {
            if (typeof el === 'string') return false
            return el.key === sortOption.key
          })
          const val = ob[sortOption.key]
          if (sortField && typeof sortField !== 'string' && sortField.sortByFormatted) {
            const formatter =
              typeof sortField.sortByFormatted === 'function'
                ? sortField.sortByFormatted
                : sortField.formatter
            if (formatter) {
              return formatItem(ob, String(sortField.key), formatter) as string
            }
          }
          return typeof val === 'object' && val !== null
            ? JSON.stringify(val)
            : val?.toString() ?? ''
        }

        const aValue = realVal(a)
        const bValue = realVal(b)
        const comparison = sortOption.comparer
          ? sortOption.comparer(aValue, bValue)
          : aValue.localeCompare(bValue, undefined, {numeric: true})

        if (comparison !== 0) {
          return sortOption.order === 'asc' ? comparison : -comparison
        }
      }
      return 0 // items are equal
    })
  }

  const filterItems = (items: readonly TableItem[]) =>
    items.filter((item) =>
      Object.entries(item).some(([key, val]) => {
        if (
          val === null ||
          val === undefined ||
          key[0] === '_' ||
          (!props.filterable?.includes(key) && !!props.filterable?.length)
        )
          return false
        const itemValue: string =
          typeof val === 'object' ? JSON.stringify(Object.values(val)) : val.toString()
        return itemValue.toLowerCase().includes(props.filter?.toLowerCase() ?? '')
      })
    )

  let mappedItems = usesProvider.value ? internalItems.value : props.items

  if (
    (isFilterableTable.value === true && !usesProvider.value) ||
    (isFilterableTable.value === true && usesProvider.value && props.noProviderFiltering)
  ) {
    mappedItems = filterItems(mappedItems)
  }

  if (
    (isSortable.value === true && !usesProvider.value && !props.noLocalSorting) ||
    (isSortable.value === true && usesProvider.value && props.noProviderSorting)
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
//     pageSize: () => perPageNumber.value || Number.POSITIVE_INFINITY,
//   })

const computedDisplayItems = computed<readonly any[]>(() => {
  if (Number.isNaN(perPageNumber.value) || (usesProvider.value && !props.noProviderPaging)) {
    return computedItems.value
  }

  return computedItems.value.slice(
    (currentPageNumber.value - 1) * (perPageNumber.value || Number.POSITIVE_INFINITY),
    currentPageNumber.value * (perPageNumber.value || Number.POSITIVE_INFINITY)
  )
})

const handleRowSelection = (
  row: any,
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

const onRowClick = (row: any, index: number, e: MouseEvent) => {
  if (props.noSelectOnClick === false) {
    handleRowSelection(row, index, e.shiftKey, e.ctrlKey, e.metaKey)
  }
  emit('row-clicked', row, index, e)
}

const handleFieldSorting = (field: Readonly<TableFieldRaw>) => {
  if (!isSortable.value) return

  const fieldKey = typeof field === 'object' && field !== null ? field.key : field
  const fieldSortable = typeof field === 'object' && field !== null ? field.sortable : false

  // TODO implement rules for noSortReset
  // TODO implement rules for mustsort
  // TODO since the default changed to () => [],

  if (!(isSortable.value === true && fieldSortable === true)) return

  const index = sortByModel.value?.findIndex((el) => el.key === fieldKey) ?? -1
  const originalValue: BTableSortBy =
    // If value is new, we default to ascending
    // Otherwise we make a temp copy of the value
    index === -1 ? {key: fieldKey, order: 'asc'} : {...sortByModel.value?.[index]}

  // The type safety on this is a bit weird. Make sure you're not pushing "null" into the array
  const updatedValue = {
    ...originalValue,
    order:
      originalValue.order === 'asc'
        ? 'desc'
        : originalValue.order === 'desc' && props.mustSort === true
          ? 'asc'
          : // Use null as a "flag" to remove the value
            null,
  } as Omit<BTableSortBy, 'order'> & {order: BTableSortByOrder | null} as any

  if (props.noSortReset === true) {
    // Null flag to remove
    if (updatedValue.order === null) {
      sortByModel.value = sortByModel.value.filter((el) => el.key !== fieldKey)
      // field doesn't exist, add it
    } else if (index === -1) {
      sortByModel.value.push(updatedValue)
    } else {
      // Update the value
      sortByModel.value.splice(index, 1, updatedValue)
    }
  } else {
    sortByModel.value = updatedValue.order === null ? [] : [updatedValue]
  }

  emit('sorted', updatedValue.order === null ? null : updatedValue)
}

const onFieldHeadClick = (
  fieldKey: string,
  field: Readonly<TableFieldRaw>,
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

const notifySelectionEvent = () => {
  if (!props.selectable) return
  emit('selection', [...selectedItemsToSet.value])
}

const providerPropsWatch = async (prop: string, val: unknown, oldVal: unknown) => {
  if (val === oldVal) return

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

defineExpose({
  // The row selection methods are really for compat. Users should probably use the v-model though
  clearSelected: () => {
    if (!props.selectable) return
    selectedItemsSetUtilities.clear()
    notifySelectionEvent()
  },
  refresh: callItemsProvider,
  selectAllRows: () => {
    if (!props.selectable) return
    const unselectableItems = selectedItemsToSet.value.size > 0 ? [...selectedItemsToSet.value] : []
    selectedItemsToSet.value = new Set([...computedItems.value])
    selectedItemsToSet.value.forEach((item) => {
      if (unselectableItems.includes(item)) return
      emit('row-selected', item)
    })
    notifySelectionEvent()
  },
  selectRow: (index: number) => {
    if (!props.selectable) return
    const item = computedItems.value[index]
    if (!item || selectedItemsSetUtilities.has(item)) return
    selectedItemsSetUtilities.add(item)
    notifySelectionEvent()
  },
  unselectRow: (index: number) => {
    if (!props.selectable) return
    const item = computedItems.value[index]
    if (!item || !selectedItemsSetUtilities.has(item)) return
    selectedItemsSetUtilities.delete(item)
    notifySelectionEvent()
  },
})
</script>
