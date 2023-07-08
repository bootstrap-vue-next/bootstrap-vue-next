<template>
  <BTableSimple v-bind="containerAttrs">
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
            <slot name="field-prefix" :field="field" />
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
      <template v-for="(item, itemIndex) in items" :key="itemIndex">
        <tr
          :class="getRowClasses(item, 'row')"
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
              <span
                class="b-table-selection-icon"
                :class="selectedItems.has(item) ? 'text-primary selected' : ''"
                >🗹</span
              >
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

        <tr
          v-if="item._showDetails === true && $slots['row-details']"
          :class="getRowClasses(item, 'row-details')"
        >
          <td :colspan="computedFieldsTotal">
            <slot name="row-details" :item="item" :toggle-details="() => toggleRowDetails(item)" />
          </td>
        </tr>
      </template>
      <tr v-if="busyBoolean" class="b-table-busy-slot" :class="getBusyRowClasses()">
        <td :colspan="computedFieldsTotal">
          <slot name="table-busy">
            <div class="d-flex align-items-center justify-content-center gap-2">
              <BSpinner class="align-middle" />
              <strong>Loading...</strong>
            </div>
          </slot>
        </td>
      </tr>
      <tr v-if="showEmptyBoolean && items.length === 0" class="b-table-empty-slot">
        <td :colspan="computedFieldsTotal">
          <slot name="empty" :items="items">
            {{ emptyText }}
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
  </BTableSimple>
</template>

<script setup lang="ts">
import {computed, ref, useSlots} from 'vue'
import {useBooleanish} from '../../composables'
import {isObject, startCase, titleCase} from '../../utils'
import BSpinner from '../BSpinner.vue'
import type {
  Booleanish,
  Breakpoint,
  ColorVariant,
  TableField,
  TableFieldObject,
  TableItem,
  VerticalAlign,
} from '../../types'
import BTableSimple from './BTableSimple.vue'
import {filterEvent} from './helpers/filter-event'
import {useVModel} from '@vueuse/core'
import {renderItem} from './tableItems'

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
    responsive?: boolean | Breakpoint
    small?: Booleanish
    striped?: Booleanish
    stacked?: boolean | Breakpoint
    labelStacked?: boolean
    variant?: ColorVariant | null
    selectable?: Booleanish
    stickySelect?: Booleanish
    selectHead?: boolean | string
    selectMode?: 'multi' | 'single' | 'range'
    selectionVariant?: ColorVariant | null
    stickyHeader?: Booleanish
    showEmpty?: Booleanish
    perPage?: number
    currentPage?: number
    emptyText?: string
    busy?: Booleanish
    emptyFilteredText?: string
    tableClasses?: Record<string, any>
    fieldColumnClasses?: (field: TableFieldObject) => Record<string, any>[]
    tbodyTrClass?: (item: TableItem | null, type: string) => string | Array<any> | null | undefined
  }>(),
  {
    perPage: undefined,
    variant: undefined,
    borderVariant: undefined,
    caption: undefined,
    align: undefined,
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
}>()

const busyModel = useVModel(props, 'busy', emit, {passive: true})

const slots = useSlots()

const footCloneBoolean = useBooleanish(() => props.footClone)
const selectableBoolean = useBooleanish(() => props.selectable)
const stickySelectBoolean = useBooleanish(() => props.stickySelect)
const labelStackedBoolean = useBooleanish(() => props.labelStacked)
const busyBoolean = useBooleanish(busyModel)
const showEmptyBoolean = useBooleanish(() => props.showEmpty)

const selectedItems = ref<Set<TableItem>>(new Set([]))
const isSelecting = computed(() => selectedItems.value.size > 0)

const tableClasses = computed(() => ({
  [`align-${props.align}`]: props.align !== undefined,
  'b-table-selectable': selectableBoolean.value,
  [`b-table-select-${props.selectMode}`]: selectableBoolean.value,
  'b-table-selecting user-select-none': selectableBoolean.value && isSelecting.value,
  'b-table-busy': busyBoolean.value,
  ...props.tableClasses,
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

const toggleRowDetails = (tr: TableItem) => {
  tr._showDetails = !tr._showDetails
}

const getFieldColumnClasses = (field: TableFieldObject) => [
  field.class,
  field.thClass,
  {
    [`table-${field.variant}`]: field.variant !== null,
    'b-table-sticky-column': field.stickyColumn,
  },
  ...(props.fieldColumnClasses ? props.fieldColumnClasses(field) : []),
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

const getRowClasses = (item: TableItem, type = 'row') => {
  const classesArray = [
    item._rowVariant ? `table-${item._rowVariant}` : null,
    item._rowVariant ? `table-${item._rowVariant}` : null,
    selectableBoolean.value && selectedItems.value.has(item)
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

const selectAllRows = () => {
  if (!selectableBoolean.value) return
  const unselectableItems = selectedItems.value.size > 0 ? Array.from(selectedItems.value) : []
  selectedItems.value = new Set([...props.items])
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
  const item = props.items[index]
  if (!item || selectedItems.value.has(item)) return
  selectedItems.value.add(item)
  emit('rowSelected', item)
  notifySelectionEvent()
}

const unselectRow = (index: number) => {
  if (!selectableBoolean.value) return
  const item = props.items[index]
  if (!item || !selectedItems.value.has(item)) return
  selectedItems.value.delete(item)
  emit('rowUnselected', item)
  notifySelectionEvent()
}

defineExpose({
  selectAllRows,
  clearSelected,
  selectRow,
  unselectRow,
})
</script>
