<template>
  <BTableLite
    ref="liteTable"
    v-bind="props"
    v-model:busy="busyModel"
    :items="computedDisplayItems"
    :table-classes="tableClasses"
    :field-column-classes="getFieldColumnClasses"
    v-on="$attrs"
    @headClicked="onFieldHeadClick"
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
    <template #field-prefix="scope">
      <slot
        name="sort-icon"
        :field="scope.field"
        :sort-by="sortBy"
        :selected="scope.field.key === sortBy"
        :is-desc="sortDescBoolean"
        :direction="sortDescBoolean ? 'desc' : 'asc'"
      >
        <span
          v-if="isSortable && scope.field.sortable"
          class="b-table-sort-icon"
          :class="{
            sorted: scope.field.key === sortBy,
            [`sorted-${sortDescBoolean ? 'desc' : 'asc'}`]: scope.field.key === sortBy,
          }"
        />
      </slot>
    </template>
  </BTableLite>
</template>

<script setup lang="ts">
import {computed, onMounted, ref, useSlots, watch} from 'vue'
import {useBooleanish} from '../../composables'
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
import {useTableItems} from './tableItems'

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
  }
)

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

const liteTable = ref()

const sortDescBoolean = useBooleanish(sortDescModel)
const sortInternalBoolean = useBooleanish(() => props.sortInternal)
const busyBoolean = useBooleanish(busyModel)
const noProviderPagingBoolean = useBooleanish(() => props.noProviderPaging)
const noProviderSortingBoolean = useBooleanish(() => props.noProviderSorting)
const noProviderFilteringBoolean = useBooleanish(() => props.noProviderFiltering)

const isFilterableTable = computed(() => props.filter !== undefined && props.filter !== '')

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
}))

const requireItemsMapping = computed(() => isSortable.value && sortInternalBoolean.value === true)

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
  usesProvider.value
)

filteredHandler.value = async (items) => {
  if (usesProvider.value) {
    await callItemsProvider()
    return
  }
  emit('filtered', items)
}

const onFieldHeadClick = (
  fieldKey: LiteralUnion<string>,
  field: TableField,
  event: MouseEvent,
  isFooter = false
) => {
  handleFieldSorting(field)
  emit('headClicked', fieldKey, field, event, isFooter)
}

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

const selectAllRows = () => {
  liteTable.value.selectAllRows()
}

const clearSelected = () => {
  liteTable.value.clearSelected()
}

const selectRow = (index: number) => {
  liteTable.value.selectRow(index)
}

const unselectRow = (index: number) => {
  liteTable.value.unselectRow(index)
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
./tableItems
